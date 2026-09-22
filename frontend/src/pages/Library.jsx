import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { api } from "../lib/api";

export default function Library() {
  const [topics, setTopics] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getTopics()
      .then(setTopics)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? topics.filter(
          (t) =>
            t.title.toLowerCase().includes(q) ||
            t.summary.toLowerCase().includes(q) ||
            t.category.toLowerCase().includes(q)
        )
      : topics;

    const groups = {};
    filtered.forEach((t) => {
      groups[t.category] = groups[t.category] || [];
      groups[t.category].push(t);
    });
    return groups;
  }, [topics, query]);

  return (
    <div className="px-6 md:px-14 py-14 max-w-4xl mx-auto">
      <p className="text-signal text-sm font-medium">The Library</p>
      <h1 className="font-display text-4xl md:text-5xl text-text-onink mt-2">
        A reference to how the nervous system works
      </h1>
      <p className="mt-4 text-[16px] text-text-onink-muted max-w-lg leading-relaxed">
        Twelve entries covering brain anatomy, cell-level signaling, and the
        support systems that keep the whole thing running.
      </p>

      <div className="mt-8 relative max-w-sm">
        <Search
          size={17}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-onink-muted"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics"
          className="w-full pl-10 pr-4 py-2.5 rounded-md bg-ink-2 border border-line text-text-onink placeholder:text-text-onink-muted text-sm focus:border-signal outline-none"
        />
      </div>

      {loading && (
        <p className="mt-10 text-text-onink-muted text-sm">Loading topics…</p>
      )}
      {error && (
        <p className="mt-10 text-coral text-sm">
          Couldn't load the library: {error}
        </p>
      )}

      <div className="mt-10 space-y-10">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-text-onink-muted text-sm font-medium mb-1">
              {category}
            </h2>
            <div className="border-t border-line">
              {items.map((t) => (
                <Link
                  key={t.slug}
                  to={`/library/${t.slug}`}
                  className="group flex items-center justify-between gap-6 py-5 border-b border-line"
                >
                  <div>
                    <h3 className="font-display text-xl text-text-onink group-hover:text-signal transition-colors">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] text-text-onink-muted leading-relaxed max-w-xl">
                      {t.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs text-text-onink-muted hidden sm:block">
                      {t.readTime}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-text-onink-muted group-hover:text-signal group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        {!loading && !error && Object.keys(grouped).length === 0 && (
          <p className="text-text-onink-muted text-sm">
            No topics match "{query}".
          </p>
        )}
      </div>
    </div>
  );
}

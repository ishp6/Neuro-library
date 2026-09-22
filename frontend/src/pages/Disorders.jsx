import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { api } from "../lib/api";

export default function Disorders() {
  const [disorders, setDisorders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([api.getDisorders(), api.getDisorderCategories()])
      .then(([d, c]) => {
        setDisorders(d);
        setCategories(c);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return disorders.filter((d) => {
      const matchesCategory =
        activeCategory === "All" || d.category === activeCategory;
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.overview.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [disorders, activeCategory, query]);

  return (
    <div className="px-6 md:px-14 py-14 max-w-4xl mx-auto">
      <p className="text-coral text-sm font-medium">Disorders</p>
      <h1 className="font-display text-4xl md:text-5xl text-text-onink mt-2">
        What happens when things go wrong
      </h1>
      <p className="mt-4 text-[16px] text-text-onink-muted max-w-lg leading-relaxed">
        Twelve common neurological conditions, explained in terms of what's
        actually happening in the brain or nerves — plus the symptoms to
        watch for.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
        <div className="relative max-w-sm w-full">
          <Search
            size={17}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-onink-muted"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search disorders or symptoms"
            className="w-full pl-10 pr-4 py-2.5 rounded-md bg-ink-2 border border-line text-text-onink placeholder:text-text-onink-muted text-sm focus:border-coral outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                activeCategory === c
                  ? "bg-coral border-coral text-ink"
                  : "border-line text-text-onink-muted hover:text-text-onink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <p className="mt-10 text-text-onink-muted text-sm">
          Loading disorders…
        </p>
      )}
      {error && (
        <p className="mt-10 text-coral text-sm">Couldn't load: {error}</p>
      )}

      <div className="mt-10 border-t border-line">
        {filtered.map((d) => (
          <Link
            key={d.slug}
            to={`/disorders/${d.slug}`}
            className="group flex items-center justify-between gap-6 py-5 border-b border-line"
          >
            <div>
              <span className="text-xs text-text-onink-muted">
                {d.category}
              </span>
              <h3 className="font-display text-xl text-text-onink group-hover:text-coral transition-colors">
                {d.name}
              </h3>
              <p className="mt-1.5 text-[14.5px] text-text-onink-muted leading-relaxed max-w-xl">
                {d.overview}
              </p>
            </div>
            <ArrowRight
              size={18}
              className="text-text-onink-muted group-hover:text-coral group-hover:translate-x-1 transition-all shrink-0"
            />
          </Link>
        ))}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-text-onink-muted text-sm py-6">
            No disorders match your search.
          </p>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Info } from "lucide-react";
import { api } from "../lib/api";

export default function SymptomChecker() {
  const [allSymptoms, setAllSymptoms] = useState([]);
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.getAllSymptoms().then(setAllSymptoms).catch(() => {});
  }, []);

  const toggle = (symptom) => {
    setResults(null);
    setSelected((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const runCheck = async () => {
    setChecking(true);
    setError(null);
    try {
      const data = await api.checkSymptoms(selected);
      setResults(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setChecking(false);
    }
  };

  const visibleSymptoms = allSymptoms.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 md:px-14 py-14 max-w-4xl mx-auto">
      <p className="text-violet text-sm font-medium">Symptom Checker</p>
      <h1 className="font-display text-4xl md:text-5xl text-text-onink mt-2">
        See what your symptoms might point to
      </h1>
      <p className="mt-4 text-[16px] text-text-onink-muted max-w-lg leading-relaxed">
        Select what you're experiencing. This gives you an educational
        starting point, not a diagnosis — only a neurologist can tell you
        what's actually going on.
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
          placeholder="Search symptoms"
          className="w-full pl-10 pr-4 py-2.5 rounded-md bg-ink-2 border border-line text-text-onink placeholder:text-text-onink-muted text-sm focus:border-violet outline-none"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2 max-h-72 overflow-y-auto thin-scroll pr-1">
        {visibleSymptoms.map((s) => {
          const active = selected.includes(s);
          return (
            <button
              key={s}
              onClick={() => toggle(s)}
              className={`px-3.5 py-2 rounded-full text-sm border transition-colors text-left ${
                active
                  ? "bg-violet border-violet text-white"
                  : "border-line text-text-onink-muted hover:text-text-onink hover:border-text-onink-muted"
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          onClick={runCheck}
          disabled={selected.length === 0 || checking}
          className="px-5 py-3 rounded-md bg-violet text-white font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
        >
          {checking ? "Checking…" : `Check ${selected.length || ""} symptom${selected.length === 1 ? "" : "s"}`}
        </button>
        {selected.length > 0 && (
          <button
            onClick={() => {
              setSelected([]);
              setResults(null);
            }}
            className="text-sm text-text-onink-muted hover:text-text-onink transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {error && <p className="mt-6 text-coral text-sm">{error}</p>}

      {results && (
        <div className="mt-12">
          <div className="flex gap-2.5 p-4 rounded-md bg-ink-2 border border-line mb-8">
            <Info size={17} className="text-violet shrink-0 mt-0.5" />
            <p className="text-sm text-text-onink-muted leading-relaxed">
              {results.disclaimer}
            </p>
          </div>

          {results.results.length === 0 ? (
            <p className="text-text-onink-muted text-sm">
              No close matches found in our library for this combination of
              symptoms. That doesn't rule anything out — consider speaking
              with a doctor if symptoms persist.
            </p>
          ) : (
            <div className="space-y-4">
              {results.results.map((r) => (
                <Link
                  key={r.slug}
                  to={`/disorders/${r.slug}`}
                  className="block p-5 rounded-lg border border-line hover:border-violet transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-text-onink-muted">
                        {r.category}
                      </span>
                      <h3 className="font-display text-xl text-text-onink">
                        {r.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-violet/15 text-violet">
                      {r.matchCount} symptom{r.matchCount === 1 ? "" : "s"}{" "}
                      matched
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-text-onink-muted leading-relaxed">
                    {r.overview}
                  </p>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-10 p-6 rounded-lg bg-ink-2 border border-line flex items-center justify-between gap-4 flex-wrap">
            <p className="text-sm text-text-onink-muted max-w-md">
              If any of this feels relevant to what you're experiencing, the
              next step is a real evaluation, not more searching.
            </p>
            <Link
              to="/find-neurologist"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-signal text-ink text-sm font-medium hover:bg-signal-dim transition-colors shrink-0"
            >
              <MapPin size={16} /> Find a neurologist near you
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

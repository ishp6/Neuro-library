import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, AlertCircle, MapPin } from "lucide-react";
import { api } from "../lib/api";

export default function DisorderDetail() {
  const { slug } = useParams();
  const [disorder, setDisorder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDisorder(null);
    setError(null);
    api
      .getDisorder(slug)
      .then(setDisorder)
      .catch((e) => setError(e.message));
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center px-6">
        <p className="text-text-onpaper-muted">Disorder not found.</p>
      </div>
    );
  }

  if (!disorder) {
    return <div className="min-h-screen bg-paper" />;
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="px-6 md:px-14 py-14 max-w-3xl mx-auto">
        <Link
          to="/disorders"
          className="inline-flex items-center gap-1.5 text-sm text-text-onpaper-muted hover:text-text-onpaper transition-colors"
        >
          <ArrowLeft size={15} /> Back to disorders
        </Link>

        <p className="mt-8 text-coral-dim text-sm font-medium">
          {disorder.category}
        </p>
        <h1 className="font-display text-4xl md:text-[3.2rem] md:leading-[1.08] text-text-onpaper mt-2">
          {disorder.name}
        </h1>
        <p className="mt-5 text-lg text-text-onpaper-muted leading-relaxed max-w-xl">
          {disorder.overview}
        </p>

        <div className="mt-12">
          <h2 className="font-display text-2xl text-text-onpaper mb-3">
            What's happening in the body
          </h2>
          <p className="text-[16.5px] leading-[1.75] text-text-onpaper max-w-2xl">
            {disorder.whatHappens}
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl text-text-onpaper mb-4">
              Common symptoms
            </h2>
            <ul className="space-y-2.5">
              {disorder.symptoms.map((s, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[15px] text-text-onpaper leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-coral-dim shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-text-onpaper mb-4">
              Causes &amp; risk factors
            </h2>
            <p className="text-xs font-medium text-text-onpaper-muted mb-2">
              Causes
            </p>
            <ul className="space-y-2 mb-6">
              {disorder.causes.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[15px] text-text-onpaper leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-signal-dim shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="text-xs font-medium text-text-onpaper-muted mb-2">
              Risk factors
            </p>
            <ul className="space-y-2">
              {disorder.riskFactors.map((r, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[15px] text-text-onpaper leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-lg bg-ink text-text-onink">
          <div className="flex gap-3">
            <AlertCircle size={20} className="text-coral shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-lg mb-1.5">
                When to see a doctor
              </h3>
              <p className="text-[15px] leading-relaxed text-text-onink-muted">
                {disorder.whenToSeek}
              </p>
              <Link
                to="/find-neurologist"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-signal hover:text-signal-dim transition-colors"
              >
                <MapPin size={15} /> Find a neurologist near you
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

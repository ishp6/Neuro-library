import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { api } from "../lib/api";

export default function TopicDetail() {
  const { slug } = useParams();
  const [topic, setTopic] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTopic(null);
    setError(null);
    api
      .getTopic(slug)
      .then(setTopic)
      .catch((e) => setError(e.message));
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center px-6">
        <p className="text-text-onpaper-muted">Topic not found.</p>
      </div>
    );
  }

  if (!topic) {
    return <div className="min-h-screen bg-paper" />;
  }

  return (
    <div className="min-h-screen bg-paper">
      <div className="px-6 md:px-14 py-14 max-w-3xl mx-auto">
        <Link
          to="/library"
          className="inline-flex items-center gap-1.5 text-sm text-text-onpaper-muted hover:text-text-onpaper transition-colors"
        >
          <ArrowLeft size={15} /> Back to the library
        </Link>

        <p className="mt-8 text-signal-dim text-sm font-medium">
          {topic.category}
        </p>
        <h1 className="font-display text-4xl md:text-[3.2rem] md:leading-[1.08] text-text-onpaper mt-2">
          {topic.title}
        </h1>
        <p className="mt-5 text-lg text-text-onpaper-muted leading-relaxed max-w-xl">
          {topic.summary}
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {topic.keyFacts.map((fact, i) => (
            <div
              key={i}
              className="border-l-2 border-signal-dim pl-4 py-1 text-sm text-text-onpaper leading-relaxed"
            >
              {fact}
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {topic.sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-2xl text-text-onpaper mb-3">
                {s.heading}
              </h2>
              <p className="text-[16.5px] leading-[1.75] text-text-onpaper max-w-2xl">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

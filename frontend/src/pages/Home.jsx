import { Link } from "react-router-dom";
import { BookOpen, Activity, MapPin, ArrowUpRight } from "lucide-react";
import SynapseArt from "../components/SynapseArt";

const quickLinks = [
  {
    to: "/library",
    icon: BookOpen,
    title: "The Library",
    body: "Twelve reference entries on the neuron, the major brain structures, and the systems that keep them running — written for the curious, not just the specialist.",
    accent: "var(--color-signal)",
  },
  {
    to: "/disorders",
    icon: Activity,
    title: "Disorders",
    body: "What actually happens in the brain and nerves in conditions like Parkinson's, epilepsy, migraine, and stroke — plus the symptoms that mark each one.",
    accent: "var(--color-coral)",
  },
  {
    to: "/find-neurologist",
    icon: MapPin,
    title: "Find a neurologist",
    body: "If your symptoms warrant it, locate hospitals and neurology clinics near your current location.",
    accent: "var(--color-violet)",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 md:px-14 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <h1 className="font-display text-[2.6rem] leading-[1.08] md:text-6xl md:leading-[1.05] text-text-onink">
            Understanding the brain, one signal at a time.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-text-onink-muted max-w-md">
            Neuro-Library is a plain-language reference for how the nervous
            system works, what goes wrong in common neurological disorders,
            and where to find care if you need it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/library"
              className="px-5 py-3 rounded-md bg-signal text-ink font-medium text-sm hover:bg-signal-dim transition-colors"
            >
              Explore the library
            </Link>
            <Link
              to="/symptom-checker"
              className="px-5 py-3 rounded-md border border-line text-text-onink font-medium text-sm hover:border-text-onink-muted transition-colors"
            >
              Check your symptoms
            </Link>
          </div>
        </div>
        <SynapseArt />
      </section>

      {/* Quick nav */}
      <section className="px-6 md:px-14 pb-20 max-w-6xl mx-auto">
        <div className="border-t border-line">
          {quickLinks.map(({ to, icon: Icon, title, body, accent }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-7 border-b border-line"
            >
              <div className="flex items-center gap-3 md:w-56 shrink-0">
                <Icon size={19} strokeWidth={1.75} style={{ color: accent }} />
                <span className="font-display text-xl text-text-onink">
                  {title}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-text-onink-muted flex-1">
                {body}
              </p>
              <ArrowUpRight
                size={20}
                className="text-text-onink-muted shrink-0 group-hover:text-text-onink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

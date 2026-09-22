import { NavLink } from "react-router-dom";
import { BookOpen, Home, Activity, Stethoscope, MapPin, X } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/library", label: "The Library", icon: BookOpen },
  { to: "/disorders", label: "Disorders", icon: Activity },
  { to: "/symptom-checker", label: "Symptom Checker", icon: Stethoscope },
  { to: "/find-neurologist", label: "Find a Neurologist", icon: MapPin },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
        />
      )}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-ink border-r border-line
        flex flex-col transition-transform duration-200 md:translate-x-0 md:static md:z-auto
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <circle cx="13" cy="6" r="2.4" fill="var(--color-signal)" />
              <circle cx="5" cy="18" r="2.4" fill="var(--color-violet)" />
              <circle cx="21" cy="18" r="2.4" fill="var(--color-coral)" />
              <path
                d="M13 8.4 L5 15.6 M13 8.4 L21 15.6 M5 18 L21 18"
                stroke="var(--color-line-light)"
                strokeOpacity="0.4"
                strokeWidth="1.2"
              />
            </svg>
            <span className="font-display text-lg text-text-onink tracking-tight">
              Neuro-Library
            </span>
          </a>
          <button
            className="md:hidden text-text-onink-muted"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 thin-scroll overflow-y-auto">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-md text-[15px] mb-0.5 transition-colors ${
                  isActive
                    ? "bg-ink-3 text-text-onink"
                    : "text-text-onink-muted hover:text-text-onink hover:bg-ink-2"
                }`
              }
            >
              <Icon size={17} strokeWidth={1.75} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-line">
          <p className="text-xs leading-relaxed text-text-onink-muted">
            Educational content only. Not a substitute for professional
            medical diagnosis or advice.
          </p>
        </div>
      </aside>
    </>
  );
}

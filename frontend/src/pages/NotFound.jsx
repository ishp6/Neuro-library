import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="px-6 py-24 max-w-xl mx-auto text-center">
      <h1 className="font-display text-4xl text-text-onink">Page not found</h1>
      <p className="mt-3 text-text-onink-muted">
        That page doesn't exist. Head back to the library to keep exploring.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-5 py-3 rounded-md bg-signal text-ink font-medium text-sm hover:bg-signal-dim transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}

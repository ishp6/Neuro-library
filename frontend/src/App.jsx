import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import TopicDetail from "./pages/TopicDetail";
import Disorders from "./pages/Disorders";
import DisorderDetail from "./pages/DisorderDetail";
import SymptomChecker from "./pages/SymptomChecker";
import FindNeurologist from "./pages/FindNeurologist";
import NotFound from "./pages/NotFound";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-ink">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="md:hidden flex items-center justify-between px-5 py-4 border-b border-line bg-ink sticky top-0 z-20">
          <span className="font-display text-lg text-text-onink">Neuro-Library</span>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-text-onink"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </header>

        <main className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/:slug" element={<TopicDetail />} />
            <Route path="/disorders" element={<Disorders />} />
            <Route path="/disorders/:slug" element={<DisorderDetail />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/find-neurologist" element={<FindNeurologist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

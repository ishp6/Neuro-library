# Neuro-Library

A full-stack web app for exploring how the nervous system works, learning about common neurological disorders, running a symptom-based screening check, and finding nearby neurologists — built as a complete implementation of the Neuro-Library concept.

## Tech stack

- **Frontend:** React 19 + Vite + Tailwind CSS v4, React Router, Leaflet (maps), lucide-react (icons)
- **Backend:** Node.js + Express — serves the data API and the built frontend from one server
- **Data:** Curated JSON-style content (10 neuroscience topics, 12 neurological disorders) — no database needed
- **Maps / nearby care:** OpenStreetMap's free Overpass API (no API key required) + Leaflet for the interactive map, using the browser's Geolocation API

## Project structure

```
neuro-library/
├── backend/
│   ├── server.js          # Express API + static file server
│   ├── data/
│   │   ├── topics.js      # Neuroscience library content
│   │   └── disorders.js   # Neurological disorders content
│   └── package.json
└── frontend/
    ├── src/
    │   ├── pages/          # Home, Library, Disorders, Symptom Checker, Find a Neurologist
    │   ├── components/     # Sidebar nav, hero art
    │   └── lib/api.js      # API client
    └── package.json
```

## Features

1. **The Library** — searchable reference on brain anatomy, neurons, neurotransmitters, and the nervous system's support systems.
2. **Disorders** — 12 conditions (Alzheimer's, Parkinson's, epilepsy, MS, migraine, stroke, ALS, Huntington's, neuropathy, Bell's palsy, trigeminal neuralgia, myasthenia gravis) with what happens in the body, symptoms, causes, risk factors, and when to seek care.
3. **Symptom Checker** — select symptoms and get an educational (non-diagnostic) match against the disorders in the library.
4. **Find a Neurologist** — uses your device location to show nearby hospitals and neurology clinics on an interactive map, pulled live from OpenStreetMap.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

### 1. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Run in development (recommended while making changes)

Terminal 1 — backend API:
```bash
cd backend
npm run dev
```
This runs on `http://localhost:4000`.

Terminal 2 — frontend with hot reload:
```bash
cd frontend
npm run dev
```
This runs on `http://localhost:5173` and automatically proxies `/api` requests to the backend.

Open **http://localhost:5173** in your browser.

### 3. Or run as one production server

Build the frontend once, then let the backend serve everything from a single port:

```bash
cd frontend
npm run build

cd ../backend
npm install
npm start
```

Open **http://localhost:4000** — this single server serves both the API and the built app.

## Notes

- The "Find a Neurologist" feature asks for browser location permission and queries OpenStreetMap directly through the backend — no accounts, keys, or tracking involved.
- The symptom checker is explicitly labeled as an educational tool, not a diagnosis, both in the UI and the API response.
- All content in the library and disorders sections is educational/general reference material — always encourage consulting a qualified neurologist for personal medical concerns.

## Deploying to Vercel

The project is already structured for Vercel:

- `frontend/` builds to a static site (`frontend/dist`), served by Vercel's CDN.
- `backend/app.js` holds the Express app (routes only, no listening or static-file serving).
- `api/index.js` re-exports that same Express app as a Vercel serverless function.
- `vercel.json` at the project root builds the frontend and rewrites every `/api/*` request to the function.
- The root `package.json` supplies `express`/`cors` for the function and a `build` script that builds the frontend.

To deploy:

1. Push the whole repo (including `vercel.json`, `api/`, and root `package.json`) to GitHub.
2. Go to [vercel.com](https://vercel.com), click **Add New → Project**, and import the GitHub repo.
3. Leave the framework preset as "Other" — the settings in `vercel.json` handle the build and output directory automatically. Don't set a custom root directory; keep it at the repo root.
4. Click **Deploy**.

That's it — no environment variables or database are required. The Overpass (nearby-neurologist) API is public and keyless, so it works the same in production as it does locally.

If you'd rather use the CLI instead of the dashboard:
```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

## Extending it

- Add more topics/disorders by adding entries to `backend/data/topics.js` or `backend/data/disorders.js` — no schema migration needed.
- Swap the in-memory data for a real database (e.g., SQLite or Postgres) by replacing the `require("./data/...")` calls in `server.js` with database queries — the route logic stays the same.
- Deploy by hosting `backend/` (with `frontend/dist` built alongside it) on any Node host (Render, Railway, Fly.io, a VPS, etc).

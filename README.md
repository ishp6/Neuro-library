Neuro-Library

A full-stack web app for exploring the nervous system, learning about neurological disorders, running an educational symptom checker, and finding nearby neurologists.

Tech Stack
Frontend: React 19, Vite, Tailwind CSS v4, React Router, Leaflet, lucide-react
Backend: Node.js + Express
Data: Curated JSON-style content — 10 neuroscience topics and 12 neurological disorders
Maps: OpenStreetMap Overpass API + Leaflet + browser Geolocation API
Database: None required
Features
Library — Searchable reference covering brain anatomy, neurons, neurotransmitters, and the nervous system.
Disorders — Information on 12 neurological conditions, including symptoms, causes, risk factors, and when to seek care.
Symptom Checker — Educational, non-diagnostic symptom matching against the disorder library.
Find a Neurologist — Shows nearby hospitals and neurology clinics using live OpenStreetMap data.
Project Structure
neuro-library/
├── api/
│   └── index.js
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── data/
│   │   ├── topics.js
│   │   └── disorders.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── lib/api.js
│   └── package.json
├── package.json
└── vercel.json
Run Locally

Requires Node.js 18+.

Install
cd backend && npm install
cd ../frontend && npm install
Development

Terminal 1 — Backend

cd backend
npm run dev

Runs on http://localhost:4000.

Terminal 2 — Frontend

cd frontend
npm run dev

Runs on http://localhost:5173 with /api proxying to the backend.

Production
cd frontend
npm run build

cd ../backend
npm install
npm start

Runs the complete app on http://localhost:4000.

Deploying to Vercel

The project is configured for Vercel:

frontend/ builds to frontend/dist
api/index.js exposes the Express app as a serverless function
vercel.json handles the frontend build and /api/* rewrites
Root package.json provides the required build and backend dependencies
No environment variables or database are required
Dashboard
Push the complete repository to GitHub.
Import the repository in Vercel → Add New → Project.
Keep Framework Preset: Other.
Keep Root Directory: ./.
Click Deploy.
CLI
npm install -g vercel
vercel
vercel --prod
Notes
The symptom checker is educational and not a diagnostic tool.
Medical content is general educational information and should not replace professional medical advice.
The neurologist finder uses browser location permission and the public OpenStreetMap Overpass API.
No accounts, API keys, tracking, or database are required.
Extending
Add topics/disorders in backend/data/topics.js or backend/data/disorders.js.
A database such as SQLite or PostgreSQL can replace the current in-memory data.
The application can also be deployed on Node.js hosts such as Render, Railway, Fly.io, or a VPS.

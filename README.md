[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://neuro-library-nu.vercel.app/)
# Neuro-Library

A full-stack web app for exploring the nervous system, learning about neurological disorders, running an educational symptom checker, and finding nearby neurologists.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, React Router, Leaflet, lucide-react
- **Backend:** Node.js + Express
- **Data:** Curated JSON-style content covering 10 neuroscience topics and 12 neurological disorders
- **Maps:** OpenStreetMap Overpass API + Leaflet + Browser Geolocation API
- **Database:** None required

## Features

- **Library** — Searchable reference covering brain anatomy, neurons, neurotransmitters, and the nervous system.
- **Disorders** — Information on 12 neurological conditions, including symptoms, causes, risk factors, and when to seek care.
- **Symptom Checker** — Educational, non-diagnostic symptom matching against the disorder library.
- **Find a Neurologist** — Shows nearby hospitals and neurology clinics using live OpenStreetMap data.

## Project Structure

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

## Running Locally

Requires **Node.js 18+**.

### 1. Install Dependencies

    cd backend
    npm install

    cd ../frontend
    npm install

### 2. Run in Development

**Terminal 1 — Backend**

    cd backend
    npm run dev

Runs on `http://localhost:4000`.

**Terminal 2 — Frontend**

    cd frontend
    npm run dev

Runs on `http://localhost:5173` with `/api` requests proxied to the backend.

Open `http://localhost:5173` in your browser.

### 3. Run as a Production Server

Build the frontend and run the backend:

    cd frontend
    npm run build

    cd ../backend
    npm install
    npm start

Open `http://localhost:4000`.

## Deploying to Vercel

The project is already configured for Vercel:

- `frontend/` builds to `frontend/dist`
- `api/index.js` exposes the Express app as a serverless function
- `vercel.json` handles the frontend build and `/api/*` rewrites
- The root `package.json` provides the required build and backend dependencies
- No environment variables or database are required

### Vercel Dashboard

1. Push the complete repository to GitHub.
2. Go to **Vercel → Add New → Project**.
3. Import the GitHub repository.
4. Set **Framework Preset** to `Other`.
5. Keep **Root Directory** as `./`.
6. Click **Deploy**.

### Vercel CLI

    npm install -g vercel
    vercel
    vercel --prod

## Notes

- The symptom checker is an **educational tool, not a diagnostic tool**.
- Medical content is provided for general educational purposes and should not replace professional medical advice.
- The neurologist finder uses browser location permission and the public OpenStreetMap Overpass API.
- No accounts, API keys, tracking, or database are required.

## Extending the Project

- Add new topics or disorders in `backend/data/topics.js` or `backend/data/disorders.js`.
- Replace the in-memory data with SQLite, PostgreSQL, or another database if needed.
- The application can also be deployed on Node.js hosting platforms such as Render, Railway, Fly.io, or a VPS.

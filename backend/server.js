// Local / traditional-hosting entry point.
// Serves the API routes (from app.js) plus the built frontend from one process.
// For Vercel, the serverless entry point is /api/index.js instead — see vercel.json.
const path = require("path");
const express = require("express");
const app = require("./app");

const PORT = process.env.PORT || 4000;

const frontendDist = path.join(__dirname, "..", "frontend", "dist");
app.use(express.static(frontendDist));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(frontendDist, "index.html"), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`Neuro-Library API running on http://localhost:${PORT}`);
});

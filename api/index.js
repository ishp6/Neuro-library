// Vercel turns this file into a serverless function.
// vercel.json rewrites all /api/* requests here; Express handles routing internally
// using the paths already defined in backend/app.js (e.g. /api/topics).
module.exports = require("../backend/app");

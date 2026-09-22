const express = require("express");
const cors = require("cors");

const topics = require("./data/topics");
const disorders = require("./data/disorders");

const app = express();

app.use(cors());
app.use(express.json());

// ---------- Topics ----------
app.get("/api/topics", (req, res) => {
  const { q } = req.query;
  let result = topics;
  if (q) {
    const query = q.toLowerCase();
    result = topics.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.summary.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query)
    );
  }
  res.json(
    result.map(({ slug, title, category, summary, readTime }) => ({
      slug,
      title,
      category,
      summary,
      readTime,
    }))
  );
});

app.get("/api/topics/:slug", (req, res) => {
  const topic = topics.find((t) => t.slug === req.params.slug);
  if (!topic) return res.status(404).json({ error: "Topic not found" });
  res.json(topic);
});

// ---------- Disorders ----------
app.get("/api/disorders", (req, res) => {
  const { q, category } = req.query;
  let result = disorders;
  if (q) {
    const query = q.toLowerCase();
    result = result.filter(
      (d) =>
        d.name.toLowerCase().includes(query) ||
        d.overview.toLowerCase().includes(query) ||
        d.symptoms.some((s) => s.toLowerCase().includes(query))
    );
  }
  if (category) {
    result = result.filter(
      (d) => d.category.toLowerCase() === category.toLowerCase()
    );
  }
  res.json(
    result.map(({ slug, name, category, overview }) => ({
      slug,
      name,
      category,
      overview,
    }))
  );
});

app.get("/api/disorders/categories", (req, res) => {
  const categories = [...new Set(disorders.map((d) => d.category))];
  res.json(categories);
});

app.get("/api/disorders/:slug", (req, res) => {
  const disorder = disorders.find((d) => d.slug === req.params.slug);
  if (!disorder) return res.status(404).json({ error: "Disorder not found" });
  res.json(disorder);
});

// ---------- Symptom Checker ----------
// Simple, transparent overlap-scoring — not a diagnostic tool.
app.get("/api/symptoms/all", (req, res) => {
  const symptomSet = new Set();
  disorders.forEach((d) => d.symptoms.forEach((s) => symptomSet.add(s)));
  res.json([...symptomSet].sort());
});

app.post("/api/symptom-check", (req, res) => {
  const { symptoms } = req.body;
  if (!Array.isArray(symptoms) || symptoms.length === 0) {
    return res.status(400).json({ error: "Provide an array of symptoms." });
  }
  const selected = symptoms.map((s) => s.toLowerCase());

  const scored = disorders.map((d) => {
    const matched = d.symptoms.filter((s) =>
      selected.includes(s.toLowerCase())
    );
    return {
      slug: d.slug,
      name: d.name,
      category: d.category,
      overview: d.overview,
      matchedSymptoms: matched,
      matchCount: matched.length,
      matchRatio: matched.length / d.symptoms.length,
    };
  });

  const results = scored
    .filter((d) => d.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount || b.matchRatio - a.matchRatio)
    .slice(0, 6);

  res.json({
    disclaimer:
      "This is an educational screening tool, not a medical diagnosis. Please consult a qualified neurologist for an accurate assessment.",
    results,
  });
});

// ---------- Nearby Neurologists (OpenStreetMap Overpass proxy) ----------
app.get("/api/neurologists/nearby", async (req, res) => {
  const { lat, lon, radius = 15000 } = req.query;
  if (!lat || !lon) {
    return res.status(400).json({ error: "lat and lon are required." });
  }

  const overpassQuery = `
    [out:json][timeout:25];
    (
      node["healthcare"="doctor"]["healthcare:speciality"~"neurology",i](around:${radius},${lat},${lon});
      node["amenity"="doctors"]["healthcare:speciality"~"neuro",i](around:${radius},${lat},${lon});
      node["amenity"="hospital"](around:${radius},${lat},${lon});
      way["amenity"="hospital"](around:${radius},${lat},${lon});
      node["amenity"="clinic"]["healthcare:speciality"~"neuro",i](around:${radius},${lat},${lon});
    );
    out center 40;
  `;

  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: overpassQuery,
    });

    if (!response.ok) {
      throw new Error(`Overpass API returned ${response.status}`);
    }

    const data = await response.json();

    const places = (data.elements || [])
      .map((el) => {
        const tags = el.tags || {};
        const latitude = el.lat ?? el.center?.lat;
        const longitude = el.lon ?? el.center?.lon;
        if (!latitude || !longitude) return null;
        return {
          id: el.id,
          name: tags.name || "Unnamed facility",
          type:
            tags.amenity === "hospital"
              ? "Hospital"
              : tags["healthcare:speciality"]
              ? "Neurology Specialist"
              : "Clinic",
          address: [
            tags["addr:housenumber"],
            tags["addr:street"],
            tags["addr:city"],
          ]
            .filter(Boolean)
            .join(" "),
          phone: tags.phone || tags["contact:phone"] || null,
          lat: latitude,
          lon: longitude,
        };
      })
      .filter(Boolean);

    res.json({ count: places.length, places });
  } catch (err) {
    console.error("Overpass lookup failed:", err.message);
    res.status(502).json({
      error:
        "Could not reach the OpenStreetMap directory right now. Please try again shortly.",
    });
  }
});


module.exports = app;

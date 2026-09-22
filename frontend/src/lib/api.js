const BASE = "/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.json();
}

export const api = {
  getTopics: (q) => request(`/topics${q ? `?q=${encodeURIComponent(q)}` : ""}`),
  getTopic: (slug) => request(`/topics/${slug}`),
  getDisorders: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/disorders${qs ? `?${qs}` : ""}`);
  },
  getDisorderCategories: () => request(`/disorders/categories`),
  getDisorder: (slug) => request(`/disorders/${slug}`),
  getAllSymptoms: () => request(`/symptoms/all`),
  checkSymptoms: (symptoms) =>
    request(`/symptom-check`, {
      method: "POST",
      body: JSON.stringify({ symptoms }),
    }),
  getNearbyNeurologists: (lat, lon) =>
    request(`/neurologists/nearby?lat=${lat}&lon=${lon}`),
};

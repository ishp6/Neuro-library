import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LocateFixed, Phone, MapPin, Building2, Loader2 } from "lucide-react";
import { api } from "../lib/api";

// Fix default marker icons under Vite bundling
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const userIcon = new L.DivIcon({
  className: "",
  html: `<div style="width:16px;height:16px;border-radius:50%;background:#2bc9ab;border:3px solid #0b0f1a;box-shadow:0 0 0 2px #2bc9ab;"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

function Recenter({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

export default function FindNeurologist() {
  const [status, setStatus] = useState("idle"); // idle | locating | loading | done | error
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(null);
  const [places, setPlaces] = useState([]);

  const locate = () => {
    setStatus("locating");
    setError(null);

    if (!navigator.geolocation) {
      setStatus("error");
      setError("Your browser doesn't support location services.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lon: longitude });
        setStatus("loading");
        try {
          const data = await api.getNearbyNeurologists(latitude, longitude);
          setPlaces(data.places);
          setStatus("done");
        } catch (e) {
          setError(e.message);
          setStatus("error");
        }
      },
      () => {
        setStatus("error");
        setError(
          "Location permission was denied. Enable location access in your browser to find nearby care."
        );
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <div className="px-6 md:px-14 py-14 max-w-6xl mx-auto">
      <p className="text-signal text-sm font-medium">Find Care</p>
      <h1 className="font-display text-4xl md:text-5xl text-text-onink mt-2">
        Find a neurologist near you
      </h1>
      <p className="mt-4 text-[16px] text-text-onink-muted max-w-lg leading-relaxed">
        Uses your device's location and OpenStreetMap's open directory to
        find nearby hospitals and neurology clinics. Nothing is stored — the
        lookup happens once, when you ask for it.
      </p>

      {status === "idle" && (
        <button
          onClick={locate}
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-signal text-ink font-medium text-sm hover:bg-signal-dim transition-colors"
        >
          <LocateFixed size={17} /> Use my current location
        </button>
      )}

      {(status === "locating" || status === "loading") && (
        <div className="mt-8 flex items-center gap-2.5 text-text-onink-muted text-sm">
          <Loader2 size={16} className="animate-spin" />
          {status === "locating"
            ? "Requesting your location…"
            : "Searching nearby facilities…"}
        </div>
      )}

      {status === "error" && (
        <div className="mt-8">
          <p className="text-coral text-sm max-w-md">{error}</p>
          <button
            onClick={locate}
            className="mt-4 text-sm font-medium text-signal hover:text-signal-dim"
          >
            Try again
          </button>
        </div>
      )}

      {status === "done" && coords && (
        <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-lg overflow-hidden border border-line h-[420px] lg:h-[560px]">
            <MapContainer
              center={[coords.lat, coords.lon]}
              zoom={12}
              scrollWheelZoom
              style={{ height: "100%", width: "100%" }}
            >
              <Recenter center={[coords.lat, coords.lon]} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[coords.lat, coords.lon]} icon={userIcon}>
                <Popup>You are here</Popup>
              </Marker>
              {places.map((p) => (
                <Marker key={p.id} position={[p.lat, p.lon]}>
                  <Popup>
                    <strong>{p.name}</strong>
                    <br />
                    {p.type}
                    {p.address && (
                      <>
                        <br />
                        {p.address}
                      </>
                    )}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div className="max-h-[560px] overflow-y-auto thin-scroll pr-1">
            <p className="text-sm text-text-onink-muted mb-4">
              {places.length} facilit{places.length === 1 ? "y" : "ies"} found
              nearby
            </p>
            <div className="space-y-3">
              {places.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-lg border border-line hover:border-signal transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg text-text-onink">
                        {p.name}
                      </h3>
                      <span className="text-xs text-signal">{p.type}</span>
                    </div>
                    <Building2
                      size={18}
                      className="text-text-onink-muted shrink-0"
                    />
                  </div>
                  {p.address && (
                    <p className="mt-2 flex items-start gap-1.5 text-sm text-text-onink-muted">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      {p.address}
                    </p>
                  )}
                  {p.phone && (
                    <a
                      href={`tel:${p.phone}`}
                      className="mt-1.5 flex items-center gap-1.5 text-sm text-signal hover:text-signal-dim w-fit"
                    >
                      <Phone size={14} /> {p.phone}
                    </a>
                  )}
                </div>
              ))}
              {places.length === 0 && (
                <p className="text-sm text-text-onink-muted">
                  No listed facilities within range. Try a general web search
                  or contact your primary care provider for a referral.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Veterinary {
  id: number;
  lat: number;
  lng: number;
  name: string;
  address: string;
  phone?: string;
}

type LocationState =
  | { status: "loading" }
  | { status: "granted"; lat: number; lng: number }
  | { status: "denied" }
  | { status: "error"; message: string };

const USER_ICON = L.divIcon({
  html: `<div style="
    width:20px;height:20px;border-radius:50%;
    background:#10b981;border:3px solid white;
    box-shadow:0 2px 8px rgba(0,0,0,0.4);
  "></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  className: "",
});

const VET_ICON = L.divIcon({
  html: `<div style="
    width:32px;height:32px;border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);background:#f97316;
    border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.35);
    display:flex;align-items:center;justify-content:center;
  ">
    <span style="transform:rotate(45deg);font-size:14px">🏥</span>
  </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -34],
  className: "",
});

async function fetchVeterinaries(lat: number, lng: number): Promise<Veterinary[]> {
  const radius = 3000;
  const query = `
    [out:json][timeout:15];
    (
      node["amenity"="veterinary"](around:${radius},${lat},${lng});
      way["amenity"="veterinary"](around:${radius},${lat},${lng});
    );
    out center;
  `;
  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query,
  });
  if (!res.ok) throw new Error("Overpass API error");
  const data = await res.json();

  return data.elements
    .map((el: Record<string, unknown>, idx: number) => {
      const tags = (el.tags as Record<string, string>) ?? {};
      const center = el.center as { lat: number; lon: number } | undefined;
      const elLat = typeof el.lat === "number" ? el.lat : center?.lat;
      const elLon = typeof el.lon === "number" ? el.lon : center?.lon;
      if (!elLat || !elLon) return null;

      const street = tags["addr:street"] ?? "";
      const house = tags["addr:housenumber"] ?? "";
      const address = street ? `${street}${house ? " #" + house : ""}` : "Dirección no disponible";

      return {
        id: idx,
        lat: elLat,
        lng: elLon,
        name: tags.name ?? "Veterinaria",
        address,
        phone: tags.phone ?? tags["contact:phone"],
      } as Veterinary;
    })
    .filter(Boolean) as Veterinary[];
}

export default function VetMap() {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<LocationState>({ status: "loading" });
  const [vets, setVets] = useState<Veterinary[]>([]);
  const [vetsLoading, setVetsLoading] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ status: "error", message: "Tu navegador no soporta geolocalización." });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({ status: "granted", lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setLocation({ status: "denied" }),
      { timeout: 10000 }
    );
  }, []);

  useEffect(() => {
    if (location.status !== "granted" || !containerRef.current) return;

    const { lat, lng } = location;

    if (!mapRef.current) {
      const map = L.map(containerRef.current, { zoomControl: true }).setView([lat, lng], 15);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);
      mapRef.current = map;
    } else {
      mapRef.current.setView([lat, lng], 15);
    }

    const map = mapRef.current;

    L.marker([lat, lng], { icon: USER_ICON })
      .addTo(map)
      .bindPopup("<b>Tu ubicación</b>")
      .openPopup();

    L.circle([lat, lng], { radius: 3000, color: "#10b981", fillColor: "#10b981", fillOpacity: 0.07, weight: 1.5 }).addTo(map);

    setVetsLoading(true);
    fetchVeterinaries(lat, lng)
      .then((results) => {
        setVets(results);
        results.forEach((vet) => {
          L.marker([vet.lat, vet.lng], { icon: VET_ICON })
            .addTo(map)
            .bindPopup(
              `<div style="min-width:160px">
                <p style="font-weight:700;margin:0 0 4px">${vet.name}</p>
                <p style="margin:0;font-size:12px;color:#555">${vet.address}</p>
                ${vet.phone ? `<p style="margin:4px 0 0;font-size:12px">📞 ${vet.phone}</p>` : ""}
              </div>`
            );
        });
      })
      .catch(() => {})
      .finally(() => setVetsLoading(false));

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [location]);

  if (location.status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-3 text-slate-500">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        <p>Obteniendo tu ubicación...</p>
      </div>
    );
  }

  if (location.status === "denied") {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4 text-center px-6">
        <span className="text-5xl">📍</span>
        <p className="text-slate-700 font-semibold text-lg">Permiso de ubicación denegado</p>
        <p className="text-slate-500 max-w-md">
          Para ver las veterinarias cercanas, habilita el acceso a tu ubicación en la configuración del navegador y recarga la página.
        </p>
      </div>
    );
  }

  if (location.status === "error") {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-3 text-center px-6">
        <span className="text-5xl">⚠️</span>
        <p className="text-slate-700 font-semibold">{location.message}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div ref={containerRef} className="w-full rounded-xl overflow-hidden shadow-md" style={{ height: "480px" }} />
      {vetsLoading && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow text-sm text-slate-600 flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
          Buscando veterinarias...
        </div>
      )}
      {!vetsLoading && vets.length > 0 && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow text-sm text-slate-600">
          {vets.length} veterinaria{vets.length !== 1 ? "s" : ""} encontrada{vets.length !== 1 ? "s" : ""} en 3 km
        </div>
      )}
      {!vetsLoading && vets.length === 0 && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow text-sm text-slate-500">
          No se encontraron veterinarias registradas en el mapa dentro de 3 km
        </div>
      )}
    </div>
  );
}

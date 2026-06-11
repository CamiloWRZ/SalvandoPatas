"use client";

import dynamic from "next/dynamic";

const VetMap = dynamic(() => import("./VetMap"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-96 gap-3 text-slate-500">
      <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      <p>Cargando mapa...</p>
    </div>
  ),
});

export default function VetMapSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
            Veterinarias <span className="text-primary-500">cerca de ti</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            El mapa muestra tu ubicación actual y las clínicas veterinarias registradas en un radio de 3 km.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-600 justify-center mb-6">
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-primary-500 border-2 border-white shadow" />
            Tu ubicación
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-accent-500 border-2 border-white shadow" />
            Veterinaria
          </span>
        </div>

        <VetMap />

        <p className="text-center text-xs text-slate-400 mt-4">
          Datos del mapa: © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">OpenStreetMap</a> contributors
        </p>
      </div>
    </section>
  );
}

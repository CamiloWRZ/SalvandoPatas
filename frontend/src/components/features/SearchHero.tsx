export default function SearchHero() {
  return (
    <section className="bg-primary-50 py-16 md:py-24" data-testid="search-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
          Encuentra tu próximo <span className="text-primary-500">mejor amigo</span> o servicio ideal
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
          La red más completa de adopciones, veterinarias y servicios para mascotas en la localidad de Kennedy.
        </p>

        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-2 md:p-4 flex flex-col md:flex-row gap-4 items-center">
          
          <div className="w-full md:w-1/3">
            <label htmlFor="species" className="sr-only">Especie</label>
            <select 
              id="species" 
              name="species" 
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              data-testid="search-species-select"
            >
              <option value="">¿Qué buscas?</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="otro">Otra mascota</option>
            </select>
          </div>

          <div className="w-full md:w-1/3">
            <label htmlFor="service" className="sr-only">Servicio Requerido</label>
            <select 
              id="service" 
              name="service" 
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              data-testid="search-service-select"
            >
              <option value="">¿Qué necesitas?</option>
              <option value="adopcion">Adopción</option>
              <option value="veterinaria">Veterinaria</option>
              <option value="guarderia">Guardería</option>
              <option value="tienda">Tienda de mascotas</option>
            </select>
          </div>

          <div className="w-full md:w-1/3">
            <label htmlFor="location" className="sr-only">Ubicación</label>
            <select 
              id="location" 
              name="location" 
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              data-testid="search-location-select"
            >
              <option value="">¿En qué barrio?</option>
              <option value="castilla">Castilla</option>
              <option value="tintal">Tintal</option>
              <option value="patio-bonito">Patio Bonito</option>
              <option value="kennedy-central">Kennedy Central</option>
              <option value="timiza">Timiza</option>
            </select>
          </div>

          <button 
            type="button" 
            className="w-full md:w-auto bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex-shrink-0"
            data-testid="search-submit-button"
          >
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}

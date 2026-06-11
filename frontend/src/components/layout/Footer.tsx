export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto" data-testid="footer">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-heading text-xl font-bold text-primary-600">Salvando Patas</span>
          <p className="text-slate-500 text-sm mt-1">
            Conectando corazones con patitas en Kennedy, Bogotá.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-400 hover:text-primary-500">
            Sobre Nosotros
          </a>
          <a href="#" className="text-slate-400 hover:text-primary-500">
            Términos
          </a>
          <a href="#" className="text-slate-400 hover:text-primary-500">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}

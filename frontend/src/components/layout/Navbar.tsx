import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading text-2xl font-bold text-primary-600">
              Salvando Patas
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/adopciones" className="text-slate-600 hover:text-primary-600 font-medium">
              Adopciones
            </Link>
            <Link href="/servicios" className="text-slate-600 hover:text-primary-600 font-medium">
              Servicios
            </Link>
            <Link href="/comunidad" className="text-slate-600 hover:text-primary-600 font-medium">
              Comunidad
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-primary-600 font-medium hover:text-primary-500"
              data-testid="nav-login-btn"
            >
              Iniciar Sesión
            </Link>
            <Link 
              href="/registro" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
              data-testid="nav-register-btn"
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu - visible on screens < 768px */}
      <nav className="md:hidden w-full flex justify-between items-center p-4 bg-white shadow-sm">
        <section className="flex-1">
          <div className="flex items-center text-lg font-medium tracking-wider">
            <svg className="p-2 w-18 h-18">
              <use href="/sprites.svg#icon-vianda"></use>
            </svg>
            <span className="font-[Georgia] font-light text-grey-200">cocina mica</span>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <a className="flex items-center" href="carrito">
            <svg width="26" height="28">
              <use href="/sprites.svg#carrito" />
            </svg>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </section>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-t">
          <div className="flex flex-col p-4 space-y-3">
            <a href="nosotros" className="text-gray-700 hover:text-primary transition-colors py-2">Nosotros</a>
            <a href="contacto" className="text-gray-700 hover:text-primary transition-colors py-2">Contacto</a>
            <a href="login" className="text-gray-700 hover:text-primary transition-colors py-2">Entrar</a>
          </div>
        </div>
      )}

      {/* Desktop menu - visible on screens >= 768px */}
      <nav className="hidden md:flex w-full h-16 justify-between items-center px-8 bg-white shadow-sm">
        <div className="flex items-center text-lg font-medium tracking-wider cursor-pointer">
          <svg className="p-2 w-18 h-18">
            <use href="/sprites.svg#icon-vianda"></use>
          </svg>
          <span className="font-[Georgia] font-light text-grey-200">cocina mica</span>
        </div>
        <ul className="flex justify-center space-x-8">
          <li><a href="nosotros" className="text-gray-700 hover:text-primary transition-colors">Nosotros</a></li>
          <li><a href="contacto" className="text-gray-700 hover:text-primary transition-colors">Contacto</a></li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li><a href="login" className="text-gray-700 hover:text-primary transition-colors">Entrar</a></li>
          <li>
            <a href="carrito" className="hover:scale-110 transition-transform">
              <svg width="26" height="28">
                <use href="/sprites.svg#carrito" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

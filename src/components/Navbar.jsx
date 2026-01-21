import { useState } from "react"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu - visible on screens < 768px */}
      <nav className="h-12 md:hidden w-full flex justify-between items-center bg-white shadow-sm px-6">
        <section className="flex ">
          <div className="flex items-center">
            <svg className="w-12 h-12">
              <use href="/sprites.svg#logo"></use>
            </svg>
            <p className="text-xs font-[Georgia] font-light text-primary">cocina mica</p>
          </div>
        </section>
        <section className="flex items-center justify-between gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden absolute top-15 left-0 right-0 bg-white shadow-lg z-50 border-t">
          <div className="flex flex-col p-4 space-y-2">
            <a href="nosotros" className="text-gray-700 hover:text-primary transition-colors py-2">Nosotros</a>
            <a href="contacto" className="text-gray-700 hover:text-primary transition-colors py-2">Contacto</a>
          </div>
        </div>
      )}

      {/* Desktop menu - visible on screens >= 768px */}
      <nav className="text-xs hidden md:flex w-full h-18 justify-around items-center bg-white shadow-sm">
        <div className="h-full flex items-center gap-2 cursor-pointer">
          <svg className="w-20 h-20">
            <use href="/sprites.svg#logo"></use>
          </svg>
          <p className="text-lg text-dark font-primary font-bold text-grey-200">cocina mica</p>
        </div>
        <ul className="flex justify-center space-x-8">
          <li><a href="nosotros" className="text-gray-700 text-lg hover:text-primary transition-colors">Nosotros</a></li>
          <li><a href="contacto" className="text-gray-700 text-lg hover:text-primary transition-colors">Contacto</a></li>
        </ul>
      </nav>
    </>
  )
}

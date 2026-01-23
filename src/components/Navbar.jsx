import { useState, useEffect } from 'react';
import { ViandaDiaria } from './ViandaDiaria';

const NavLink = ({ href, children, className = "", isButton = false }) => {
  const baseClasses = "transition-all duration-200";
  const buttonClasses = isButton
    ? "bg-secondary border-2 border-secondary rounded-lg px-4 py-2 hover:bg-white hover:text-secondary"
    : "hover:underline underline-offset-4 decoration-secondary";

  return (
    <a
      href={href}
      className={`${baseClasses} ${buttonClasses} ${className}`}
    >
      {children}
    </a>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#nosotros', text: 'Nosotros' },
    { href: '#contacto', text: 'Contacto' },
    { href: '#milanesas', text: 'Milanesas' },
    { href: '#pedido', text: '¡Hacé tu pedido!', isButton: true },
  ];

  return (
    <header className="relative">
      {/* Hero Section with Background */}
      <section className={`bg-[url('/cooking-top-vacio.webp')] bg-fixed bg-cover transition-all duration-300 ${isScrolled ? 'min-h-[200px]' : 'min-h-[400px]'
        }`}>
        {/* Mobile Navigation */}
        <nav className="md:hidden w-full flex justify-between items-center bg-white/95 backdrop-blur-sm shadow-lg px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-1">
              <svg className="w-8 h-8" fill="currentColor">
                <use href="/sprites.svg#logo" />
              </svg>
            </div>
            <span className="text-sm font-serif text-gray-800 font-medium">Cocina Mica</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-t">
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary py-2"
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex w-full h-24 justify-center items-center">
          <div className="container mx-auto px-8 flex justify-between items-center w-full">
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="bg-white rounded-full p-2 group-hover:scale-110 transition-transform">
                <svg className="w-16 h-16" fill="currentColor">
                  <use href="/sprites.svg#logo" />
                </svg>
              </div>
              <h1 className="text-2xl text-white font-bold">Cocina Mica</h1>
            </div>

            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className={`text-white text-xl ${link.isButton ? '' : 'hover:text-white'}`}
                    isButton={link.isButton}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <ViandaDiaria />
      </section>
    </header>
  );
};

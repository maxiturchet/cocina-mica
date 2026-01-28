import { useState, useEffect } from 'react';
import { ViandaDiaria } from './ViandaDiaria';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

const NavLink = ({ href, children, className = "", isbutton = false, ...props}) => {
  const baseClasses = "transition-all duration-200";
  const buttonClasses = isbutton
    ? "bg-secondary border-2 border-secondary rounded-lg px-4 py-2 hover:bg-white hover:text-secondary md:text-sm lg:text-xl"
    : "hover:underline underline-offset-4 decoration-secondary";

  if (href.startsWith('#') || href.startsWith('http')){
    return <a href={href} className={`${baseClasses} ${buttonClasses} ${className}`} {...props}>{children}</a>
  }
  return <Link build to={href} className={`${baseClasses} ${buttonClasses} ${className}`}>{children}</Link>

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
    { href: '/milanesas', text: 'Milanesas' },
    { href: 'https://wa.link/44395n', text: '¡Hacé tu pedido!', isbutton: true, target: '_blank', rel:'noopener noreferrer' },
  ];

  return (
    <nav>
      <header className="relative">
        {/* Hero Section with Background */}
        <section className={`bg-[url('/cooking-top-vacio.webp')] bg-cover transition-all duration-300 ${isScrolled ? 'min-h-[200px]' : 'min-h-[400px]'
          }`} style={{ backgroundImage: `url('/cooking-top-vacio.webp')` }}>
          {/* Mobile Navigation */}
          <nav className="md:hidden w-full flex justify-between items-center shadow-lg px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                <svg className="w-8 h-8" fill="currentColor">
                  <use href="/sprites.svg#logo" />
                </svg>
              </div>
              <span className="text-md font-bold text-white">Cocina Mica</span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24">
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
            <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-100 shadow-lg z-50 border-t">
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
          <nav className="hidden md:flex w-full h-25 justify-center items-center">
            <div className="container mx-auto flex justify-around items-center w-full">
              <div className="flex items-center gap-4 cursor-pointer group">
                <div className="bg-white rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="lg:w-14 lg:h-14 w-10 h-10" fill="currentColor">
                    <use href="/sprites.svg#logo" />
                  </svg>
                </div>
                <h1 className="text-2xl text-white font-bold md:text-xl">Cocina Mica</h1>
              </div>

              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      key={link.href}
                      href={link.href}
                      className={`text-white md:text-lg lg:text-xl ${link.isbutton ? '' : 'hover:text-white'}`}
                      isbutton={link.isbutton}
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
    </nav>
  );
};

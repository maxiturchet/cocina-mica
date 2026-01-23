import PropTypes from 'prop-types';

const FooterSection = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const FooterLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    className={`text-gray-600 hover:text-primary transition-colors ${className}`}
  >
    {children}
  </a>
);

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full">
                <svg className="w-12 h-12" fill="currentColor">
                  <use href="/sprites.svg#logo" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Cocina Mica</h2>
            </div>
            <p className="text-gray-600 text-center md:text-left">
              Deliciosas viandas caseras para tu día a día.
            </p>
          </div>

          {/* Social Media */}
          <div className="justify-self-center">
            <FooterSection title="Seguinos en:">
              <FooterLink className="flex items-center gap-2 hover:text-white" href="https://instagram.com/cocinamica.cm" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8 bg-linear-to-tr from-pink-600 to-purple-400" fill="currentColor">
                  <use href="/sprites.svg#ig" />
                </svg>
                <p>Instagram</p>
              </FooterLink>
              <FooterLink className="flex items-center gap-2 hover:text-white" href="https://w.app/ndkegx" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8" style={{ display: 'block' }}>
                  <use href="/sprites.svg#whatsapp" />
                </svg>
                <p>Whatsapp</p>
              </FooterLink>
            </FooterSection>
          </div>
          <div className="justify-self-center">
            {/* Menu Links */}
            <FooterSection title="Menú">
              <FooterLink href="#nosotros">Nosotros</FooterLink>
              <FooterLink href="#contacto">Contacto</FooterLink>
              <FooterLink href="#milanesas">Milanesas Sin Tacc</FooterLink>
              <FooterLink href="#pedido" className="font-semibold text-primary">
                ¡Hacé tu pedido!
              </FooterLink>
            </FooterSection>
          </div>
          <div className="justify-self-center">
            {/* Contact Info */}
            <FooterSection title="Contacto">
              <FooterLink href="tel:+5492345423066">+54 9 2345 423066</FooterLink>
              <FooterLink href="mailto:info@cocinamica.com">info@cocinamica.com</FooterLink>
              <p className="text-gray-600 text-sm">Lunes a Viernes: hasta las 13hs</p>
            </FooterSection>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Cocina Mica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

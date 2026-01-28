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
    <footer className="bg-[url('/table-vertical-center-vacio.webp')] bg-cover border-t">
      <div className="w-full py-10 bg-black/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex justify-center items-center gap-3">
              <div className="bg-white rounded-full">
                <svg className="w-12 h-12" fill="currentColor">
                  <use href="/sprites.svg#logo" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Cocina Mica</h2>
            </div>
            <p className="text-white mx-10 text-center">
              Deliciosas viandas caseras para tu día a día.
            </p>
          </div>

          {/* Social Media */}
          <div className="m-auto text-white">
            <FooterSection title={<span className="text-white">Contactanos:</span>}>
              <FooterLink className="flex items-center gap-2 hover:text-gray-800" href="https://instagram.com/cocinamica.cm" target="_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8 bg-linear-to-tr from-pink-600 to-purple-400" fill="currentColor">
                  <use href="/sprites.svg#ig" />
                </svg>
                <p className="text-white">Instagram</p>
              </FooterLink>
              <FooterLink className="flex items-center gap-2 hover:text-white" href="https://wa.link/44395n" isButton="true" target= "_blank" rel="noopener noreferrer">
                <svg className="w-8 h-8" style={{ display: 'block' }}>
                  <use href="/sprites.svg#whatsapp" />
                </svg>
                <p className="text-white">Whatsapp</p>
              </FooterLink>
            </FooterSection>
          </div>
          <div className="m-auto text-cente">
            {/* Menu Links */}
            <FooterSection title={<span className="text-white">Menú</span>}>
              <FooterLink href="#milanesas" className="text-white">Milanesas Sin Tacc</FooterLink>
              <FooterLink href="#pedido" className="font-semibold text-primary">
                ¡Hacé tu pedido!
              </FooterLink>
            </FooterSection>
          </div>
          <div className="m-auto text-center">
            {/* Contact Info */}
            <FooterSection title={<span className="text-white">Horarios</span>}>
              <p className=" text-sm text-white">Lunes a Viernes: hasta las 13hs</p>
            </FooterSection>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-300 text-center">
          <p className="text-sm text-white">
            © {currentYear} Cocina Mica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

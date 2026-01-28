import { useViandas } from '../hooks/useViandas';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';
import LazySection from './LazySection';

const PriceDisplay = ({ price, originalPrice, isPromo }) => {
  const formattedPrice = Number(price).toLocaleString('es-AR', {
    maximumFractionDigits: 0,
  });
  const formattedOriginalPrice = Number(originalPrice).toLocaleString('es-AR', {
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex items-center gap-3">
      <p className="text-3xl lg:text-4xl font-bold text-white">
        ${formattedPrice}
      </p>
      {isPromo && (
        <p className="text-xl md:text-2xl line-through text-red-300">
          ${formattedOriginalPrice}
        </p>
      )}
    </div>
  );
};

PriceDisplay.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  originalPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isPromo: PropTypes.bool,
};

export const ViandaDiaria = () => {
  const { viandas, loading, error } = useViandas();

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-red-400 text-lg">Error al cargar vianda del día.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-300 text-lg">Cargando menú del día...</p>
      </div>
    );
  }

  const fecha = new Date();
  const nombreDia = fecha.toLocaleString('es-ES', { weekday: 'long' });
  const dia = fecha.getDay();
  const viandaDelDia = viandas[dia - 1];

  if (!viandaDelDia) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-300 text-lg">No hay vianda disponible para hoy.</p>
      </div>
    );
  }

  const isPromo = viandaDelDia.id === 6;

  return (
    <LazySection className="py-25">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="border-2 border-secondary bg-gray-900/70 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="flex flex-col sm:flex-row  justify-center gap-4 lg:p-15 p-8">
            {/* Content Section */}
            <div className="flex-1 content-center text-center">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Vianda del día
                </h2>
              </div>

              <div className="mb-7 px-5 ">
                <p className="text-2xl text-left md:text-xl mb-5 text-primary capitalize">
                  {nombreDia}
                </p>
                <h3 className="text-3xl text-left md:text-3xl text-white">
                  {viandaDelDia.nombre}
                </h3>
                <p className="text-lg text-left md:text-lg text-gray-200 mb-5 ">
                  {viandaDelDia.descripcion}
                </p>
                <PriceDisplay
                  price={viandaDelDia.precio}
                  originalPrice="60000"
                  isPromo={isPromo}
                />
              </div>

              <a href="https://wa.link/44395n" isbutton="true" target= "_blank" rel='noopener noreferrer'>
                <button className="mb-4 bg-secondary text-white text-md lg:text-xl px-8 py-3 rounded-lg hover:bg-orange-400 transition-colors duration-200 font-semibold cursor-pointer">
                  ¡Hacé tu pedido!
                </button>
              </a>
            </div>

            {/* Image Section */}
            <div className="flex-1 max-w-md lg:max-w-lg self-center">
              <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ width: '100%', height: '384px' }}>
                <OptimizedImage
                  src={viandaDelDia.foto}
                  className="hover:scale-105 transition-transform duration-300"
                  alt={viandaDelDia.nombre}
                  width={512}
                  height={384}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LazySection>
  );
};

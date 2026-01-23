import { useViandas } from '../hooks/useViandas';
import PropTypes from 'prop-types';

const PriceDisplay = ({ price, originalPrice, isPromo }) => {
  const formattedPrice = Number(price).toLocaleString('es-AR', {
    maximumFractionDigits: 0,
  });
  const formattedOriginalPrice = Number(originalPrice).toLocaleString('es-AR', {
    maximumFractionDigits: 0,
  });

  return (
    <div className="flex items-center gap-3">
      <p className="text-4xl md:text-5xl font-bold text-white">
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
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="border-2 border-secondary bg-gray-900/70 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 md:p-8">
            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6">
                  Vianda del día
                </h2>
                <p className="text-lg md:text-xl text-primary capitalize">
                  {nombreDia}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl text-white mb-3">
                  {viandaDelDia.nombre}
                </h3>
                <p className="text-lg md:text-xl text-gray-200 mb-7">
                  {viandaDelDia.descripcion}
                </p>
                <PriceDisplay
                  price={viandaDelDia.precio}
                  originalPrice="60000"
                  isPromo={isPromo}
                />
              </div>

              <button className="bg-secondary text-white text-lg md:text-xl px-6 md:px-8 py-3 rounded-lg hover:bg-orange-400 transition-colors duration-200 font-semibold">
                ¡Hacé tu pedido!
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 max-w-md lg:max-w-lg">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={viandaDelDia.foto}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  alt={viandaDelDia.nombre}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

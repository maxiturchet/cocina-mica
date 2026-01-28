import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';

export const Vianda = ({ vianda }) => {
  const isPromo = vianda.id === "6";
  const formattedPrice = Number(vianda.precio).toLocaleString('es-AR', {
    maximumFractionDigits: 0,
  });

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full overflow-hidden" style={{ height: '256px' }}>
        <OptimizedImage
          src={vianda.foto}
          className="hover:scale-105 transition-transform duration-300"
          alt={vianda.nombre}
          width={400}
          height={256}
        />
        <div className="absolute top-2 left-2">
          {isPromo ? (
            <div className="px-3 py-1 text-white text-sm font-semibold bg-secondary rounded-md border-2 border-gray-300">
              Promo
            </div>
          ) : (
            <div className="px-3 py-1 text-white text-sm font-semibold bg-emerald-700 rounded-md">
              {vianda.dia}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="text-lg sm:text-xl text-secondary font-semibold">{vianda.nombre}</h3>
          <p className="mt-1 text-gray-600 text-sm sm:text-base line-clamp-2">
            {vianda.descripcion}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg text-emerald-900 font-semibold">
              $<span className="font-bold">{formattedPrice}</span>
            </p>
            {isPromo && (
              <p className="text-lg line-through text-red-400">$60.000</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Vianda.propTypes = {
  vianda: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    foto: PropTypes.string.isRequired,
    dia: PropTypes.string,
  }).isRequired,
};
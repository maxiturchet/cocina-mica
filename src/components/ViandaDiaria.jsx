import { useViandas } from '../hooks/useViandas';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';
import LazySection from './LazySection';
import { useEffect, useState } from 'react';

const PriceDisplay = ({ price, originalPrice, isPromo }) => {
  const formattedPrice = Number(price).toLocaleString('es-AR', {
    maximumFractionDigits: 0,
  });
  const formattedOriginalPrice = Number(originalPrice).toLocaleString('es-AR', {
    maximumFractionDigits: 0,
  });

  return (
    <div className="gap-3">
      <p className="md:text-4xl text-xl font-bold text-white text-left mb-4 border-2 sm:border-0 border-white p-2 rounded-lg sm:p-0 ">
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
  const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 50){
          setIsScrolled(true)
        }else{
          setIsScrolled(false)
        };
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

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
  const today = new Date().getDay();

  return (
      <LazySection className={`bg-[url('/table-vertical-center-vacio.webp')] bg-fixed bg-right md:bg-right transition-all duration-300 ${isScrolled ? 'min-h-[200px]' : 'min-h-[400px]'
          }`} style={{ backgroundImage: `url('/table-vertical-center-vacio.webp')` }}>
        <div className="pt-30 pb-10 xl:pt-60 xl:pb-30 w-full mx-auto lg:px-15 px-4 max-w-5xl ">
          <div className="border-2 border-secondary bg-gray-800/70 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row lg:justify-between justify-evenly gap-4 sm:py-10 sm:px-20 md:px-20 py-10">
              {/* Content Section */}
              <div className="flex flex-col mx-auto sm:justify-center justify-evenly gap-2 sm:w-1/2 w-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-white sm:text-left text-center mb-3">
                    Vianda del día
                  </h2>

                  <p className="text-xl sm:text-left text-center text-primary capitalize">
                    {nombreDia}
                  </p>
                  <div className="sm:mb-2 mb-4">
                    <h3 className="lg:text-3xl text-2xl font-bold sm:text-left text-center text-white">
                      {viandaDelDia.nombre}
                    </h3>
                    <p className="lg:text-lg sm:text-left text-center text-gray-200">
                      {viandaDelDia.descripcion}
                    </p>
                  </div>
                  <div className="flex sm:flex-col sm:items-start justify-around items-center sm:gap-0 px-4 sm:px-0 gap-4">
                    <PriceDisplay
                      price={viandaDelDia.precio}
                      originalPrice="60000"
                      isPromo={isPromo}
                    />

                    <a href="https://wa.link/44395n" isbutton="true" target= "_blank" rel='noopener noreferrer'>
                      <button className="mb-4 bg-secondary/80 text-white text-md p-2 py-3 lg:text-lg lg:px-8 lg:py-3 rounded-lg hover:bg-secondary transition-colors duration-200 font-semibold cursor-pointer">
                        ¡Hacé tu pedido!
                      </button>
                    </a>
                  </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 max-w-sm lg:max-w-full self-center sm:px-0 px-4">
                <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ width: '100%', height: '100%' }}>
                  <OptimizedImage
                    src={viandaDelDia.foto}
                    className="hover:scale-105 transition-transform duration-300"
                    alt={viandaDelDia.nombre}
                    width={512}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>
  );
};

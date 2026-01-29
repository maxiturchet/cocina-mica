import { useViandas } from '../hooks/useViandas';
import { Vianda } from './Vianda';

export const ViandasContainer = () => {
  const { viandas, loading, error } = useViandas();

  if (error) {
    return (
      <section className="py-15">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-red-600 text-lg">Error al cargar menú de la semana</p>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="py-15">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-gray-600 text-lg">Cargando menú de la semana...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[url('/fondo-mosaico.webp')] bg-fixed bg-cover">
      <div className="bg-gray-50/90">
        <div className="py-15 px-2 container mx-auto max-w-9xl ">
          <h2 className="font-bold text-3xl md:text-4xl font-sans text-gray-800 mb-10 text-center">
            Viandas<span className="text-secondary"> de la semana</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4">
            {viandas.map((vianda) => (
              <Vianda key={vianda.id} vianda={vianda} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


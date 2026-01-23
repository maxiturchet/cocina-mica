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
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-bold text-3xl md:text-4xl font-sans text-gray-900 mb-10 text-center">
          Viandas<span className="underline underline-offset-10 decoration-secondary"> de la </span>semana
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {viandas.map((vianda) => (
            <Vianda key={vianda.id} vianda={vianda} />
          ))}
        </div>
      </div>
    </section>
  );
};


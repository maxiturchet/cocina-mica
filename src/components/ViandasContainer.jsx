import { useViandas } from '../hooks/useViandas';
import {Vianda} from './Vianda';

export const ViandasContainer = () => {
  const {viandas, loading, error} = useViandas();

  if (error) return <p>Error al cargar menú de la semana</p>;
  if (loading) return <p>Cargando menú de la semana...</p>;

  return (
    <section className="py-15">
      <div className="container mx-auto px-4">
      <h2 className="text-5xl font-sans text-secondary">Viandas de la semana</h2>
      <p className="text-lg pb-10 ml-2 my-2">De lunes a viernes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
          {viandas.map((v) => <Vianda v={v} key={v.id}/>)}
        </div>
      </div>
    </section>
  );
}


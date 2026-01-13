import { useViandas } from '../hooks/useViandas';

export const Viandas = () => {
  const {viandas, loading, error} = useViandas();

  if (error) return <p>Error al cargar menú de la semana</p>;
  if (loading) return <p>Cargando menú de la semana...</p>;

  console.log(viandas);

  const viandasFiltradas = viandas.filter(v => v.disponible === 'Sí');
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
        {viandas.map((v) => (
          <div key={v.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="aspect-video overflow-hidden">
              <img
                src={v.foto}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                alt={v.nombre}
              />
              
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2">
              <div className="flex justify-between align-center">
                <h3 className="font-bold text-xl sm:text-xl text-gray-800">{v.nombre}</h3>
                <div className="text-md text-primary">{v.dia}</div>
              </div>
              <p className="text-gray-600 text-lg sm:text-base mt-3 line-clamp-1 ">{v.descripcion}</p>
              <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="text-2xl sm:text-xl font-bold text-gray-900">${Number(v.precio).toLocaleString('es-AR', {maximumFractionDigits: 0 })}</span>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-400 transition-colors cursor-pointer text-sm sm:text-base">
                    Pedir
                  </button>
                  <button className="text-secondary font-semibold px-4 py-2 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer text-sm sm:text-base">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


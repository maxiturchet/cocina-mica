import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS74HtuK8nUoh7agNCh_qGvkY5SoeIOXqZW8xfpZY_9cC_MyNqmXS_VbcJjufuBJIWKmqkCN9VsmT3Y/pub?gid=0&single=true&output=csv";

export default function MenuSheets() {
  const [viandas, setViandas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SHEET_URL)
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true, // Convierte la primera fila en los nombres de las propiedades
          complete: (results) => {
            setViandas(results.data);
            setLoading(false);
          }
        });
      });
  }, []);

  if (loading) return <p>Cargando menú de la semana...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
            <div className="p-4 sm:p-5">
              <h3 className="font-bold text-lg sm:text-xl text-gray-800 line-clamp-2">{v.nombre}</h3>
              <p className="text-gray-600 text-sm sm:text-base mt-3 line-clamp-3">{v.descripcion}</p>
              <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="text-xl sm:text-2xl font-bold text-gray-900">${v.precio}</span>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-400 transition-colors text-sm sm:text-base">
                    Pedir
                  </button>
                  <button className="text-secondary font-semibold px-4 py-2 rounded-lg hover:bg-orange-100 transition-colors text-sm sm:text-base">
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


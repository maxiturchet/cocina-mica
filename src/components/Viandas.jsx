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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {viandas.map((v) => (
    <div key={v.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={v.foto} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="font-bold text-xl text-gray-600">{v.nombre}</h3>
        <p className="text-gray-600 text-sm mt-4">{v.descripcion}</p>
        <div className="mt-5 flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">${v.precio}</span>
          <div className="w-3/5 flex gap-3">
            <button className="bg-primary text-white px-3 rounded-lg font-medium hover:bg-orange-400">
              Pedir
            </button>
            <button className="text-secondary font-semibold px-3 rounded-lg hover:bg-orange-400">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
  );
}


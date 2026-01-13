import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS74HtuK8nUoh7agNCh_qGvkY5SoeIOXqZW8xfpZY_9cC_MyNqmXS_VbcJjufuBJIWKmqkCN9VsmT3Y/pub?gid=0&single=true&output=csv";

export const useViandas = () => {
  const [viandas, setViandas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true, // Recomendado para evitar filas vacías al final
          complete: (results) => {
            setViandas(results.data);
            setLoading(false);
          }
        });
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { viandas, loading, error };
};
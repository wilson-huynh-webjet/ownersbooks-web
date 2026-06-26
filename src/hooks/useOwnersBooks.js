import { useState, useEffect, useCallback } from "react";
import requestApi from "../services/apiService.js";

const apiUrl = `${import.meta.env.VITE_API_BASE_URL ?? ""}/books`;
const useOwnersBooks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await requestApi(apiUrl);
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return { data, loading, error };
};

export default useOwnersBooks;

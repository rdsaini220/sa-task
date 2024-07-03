import { useState, useCallback, useMemo } from 'react';

const useFavorite = () => {
  const [data, setData] = useState([]);

  const getFavorite = useCallback(() => {
    if (typeof window !== "undefined") {
      const favData = localStorage.getItem("favorites");
      const parsedData = favData ? JSON.parse(favData) : [];
      setData(parsedData);
      return parsedData;
    }
    return [];
  }, []);

  const addFavorite = useCallback((person) => {
    const favData = getFavorite();
    const updatedData = [...favData, person];
    setData(updatedData);
    localStorage.setItem("favorites", JSON.stringify(updatedData));
  }, []);

  const removeFavorite = useCallback((person) => {
    const favData = getFavorite();
    const updatedData = favData.filter(fav => fav.name !== person.name);
    localStorage.setItem("favorites", JSON.stringify(updatedData));
    setData(updatedData);
  }, []);

  return useMemo(() => ({
    data,
    getFavorite,
    addFavorite,
    removeFavorite
  }), [data, getFavorite, addFavorite, removeFavorite]);
};

export default useFavorite;
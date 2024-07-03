import { useState, useEffect, useCallback, useMemo } from 'react';

const default_Url = process.env.NEXT_PUBLIC_API_URL

const useFetchData = (endPoint) => {
  const [resData, setResData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const isfetchData =  useCallback(async (newEndPoint) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${default_Url}${newEndPoint}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      setResData(json);
      setIsLoading(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading])
  
  useEffect(() => {
    if(endPoint){
      isfetchData(endPoint);
    }
  }, [endPoint]);

  return { resData, error, isLoading, isfetchData };
};

export default useFetchData;
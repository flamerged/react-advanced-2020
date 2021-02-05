import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
      setLoading(false);
    };

    getData();
  }, [url]);

  return { loading, data };
};

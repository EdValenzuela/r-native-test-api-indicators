import { useState, useEffect } from 'react';
import api from '../Api'

const useFetch = (url:string = '') => {
  
  const [data, setData] = useState([] as any);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await api.get(url);
        setData(resp?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);

  return {data, loading};
};

export default useFetch;
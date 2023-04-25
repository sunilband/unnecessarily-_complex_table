import { useState,useEffect } from "react";
import axios from "axios";
const useFetch = (url:string) => {
  const [render, setRender] = useState(false);
  const [data, setData] = useState(null);
  

  useEffect(() => {
    setRender(true);
    const fetchData = async () => {
      
        const resp = await axios.get(url);
        const data = await resp.data;

        setData(data.data);
        setRender(false);
      
    };

    fetchData();
  }, [url]);

  return { render, data };
};

  export default useFetch
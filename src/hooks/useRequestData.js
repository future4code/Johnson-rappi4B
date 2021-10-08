import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url) => {
  const [data, setdata] = useState();

  

  useEffect(() => {
    
        axios
          .get(url)
          .then((res) => {
            console.log(res.data.data.results);
            setdata(res.data.data.results);
          })
          .catch((error) => {
            console.log(error.message);
          });
      
  }, []);
  return [data];
};
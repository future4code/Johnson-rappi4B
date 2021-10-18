import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url) => {
  const [data, setdata] = useState();

  

  useEffect(() => {
    
        axios
          .get(url)
          .then((res) => {
           
            setdata(res.data.data.results);
          })
          .catch((error) => {
            alert(error.message);
          });
      
  }, []);
  return [data];
};
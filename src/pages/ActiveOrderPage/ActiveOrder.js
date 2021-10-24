import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const ActiveOrder = () => {
  const [dataOrder, setDataOrder] = useState();

  const xixi = dataOrder.map((item)=>{
       return <li>{item.restaurantName}</li>
   })

  useEffect(() => {
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log("ACTIVE ORDEM", res.data.order);
        setDataOrder(res.data.order);
      });
  }, []);

  return (
    <div>
      <h1>Seu(s) Pedido(s)</h1>
        {xixi}
    </div>
  );
};

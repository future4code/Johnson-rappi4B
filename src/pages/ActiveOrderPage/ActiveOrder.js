import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { ConatinerOrder } from "./styled";

export const ActiveOrder = () => {
  const [dataOrder, setDataOrder] = useState();

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

  const dateCreate = new Date(dataOrder && dataOrder.createdAt);
  const dateExpire = new Date(dataOrder && dataOrder.expiresAt);

  return (
    <ConatinerOrder>
      <h1>Seu(s) Pedido(s)</h1>
      Valor Total: {dataOrder && dataOrder.totalPrice}
      Restaurante: {dataOrder && dataOrder.restaurantName}
      Data do Pedido:{" "}
      {`${dateCreate.getDate()}/${
        dateCreate.getMonth() + 1
      }/${dateCreate.getFullYear()} ás ${dateCreate.getHours()}:${dateCreate.getMinutes()} `}
      Data da Entrega:{" "}
      {`${dateExpire.getDate()}/${
        dateExpire.getMonth() + 1
      }/${dateExpire.getFullYear()} ás ${dateExpire.getHours()}:${dateExpire.getMinutes()} `}
    </ConatinerOrder>
  );
};

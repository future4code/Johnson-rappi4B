import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Buttons, ConatinerOrder, ContainerOrder2 } from "./styled";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToHistoryOrder } from "../../routes/coordinator";

export const ActiveOrder = () => {
  const [dataOrder, setDataOrder] = useState();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((res) => {
        setDataOrder(res.data.order);
      });
  }, []);

  const dateCreate = new Date(dataOrder && dataOrder.createdAt);
  const dateExpire = new Date(dataOrder && dataOrder.expiresAt);

  return (
    <>
      <ConatinerOrder>
        <h1>Seu(s) Pedido(s)</h1>
        <Buttons>
          <Button
            variant={"contained"}
            color={"secondary"}
            size={"small"}
            onClick={() => history.goBack()}
          >
            Voltar
          </Button>
          <Button
            variant={"contained"}
            color={"secondary"}
            size={"small"}
            onClick={() => goToHistoryOrder(history)}
          >
            Historico
          </Button>
        </Buttons>
        <ContainerOrder2>
          <b>Restaurante:</b> {dataOrder && dataOrder.restaurantName}
          <b>Valor Total:</b> R$ {dataOrder && dataOrder.totalPrice.toFixed(2).replace(".",",")}
          <b>Data do Pedido:</b>
          {`${dateCreate.getDate()}/${
            dateCreate.getMonth() + 1
          }/${dateCreate.getFullYear()} ás ${dateCreate.getHours()}:${dateCreate.getMinutes()} `}
          <b>Data da Entrega:</b>
          {`${dateExpire.getDate()}/${
            dateExpire.getMonth() + 1
          }/${dateExpire.getFullYear()} ás ${dateExpire.getHours()}:${dateExpire.getMinutes()} `}
        </ContainerOrder2>
      </ConatinerOrder>
    </>
  );
};

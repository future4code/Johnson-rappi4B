import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { ResultsPageContainer, HistoryContainer } from "./styled";
import axios from "axios";
import { FaBackspace } from "react-icons/fa";
import { goToHomePage } from "./../../routes/coordinator";
import { useHistory } from "react-router-dom";

const HistoryOrder = () => {
  const [dataHistory, setDataHistory] = useState();
  const history = useHistory()
  useEffect(() => {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((res) => {
        setDataHistory(res.data.orders);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);
  

  return (
    <ResultsPageContainer>
      <h1>Histórico</h1>
      <p>
        <FaBackspace
          size="36px"
          color="#e86e5a"
          onClick={() => goToHomePage(history)}
        />
      </p>
      {dataHistory &&
        dataHistory.map((item) => {
          const dataCreated = new Date(item.createdAt);
          const dataExpires = new Date(item.expiresAt);

          return (
            <HistoryContainer>
              <p>Restaurante: {item.restaurantName}</p>
              <p>
                Preço Total: R$ {item.totalPrice.toFixed(2).replace(".", ",")}
              </p>
              <p>
                Data do Pedido:{" "}
                {`${dataCreated.getDate()}/${
                  1 + dataCreated.getMonth()
                }/${dataCreated.getFullYear()} às ${dataCreated.getHours()} Horas e ${dataCreated.getMinutes()} minutos.`}
              </p>
              <p>
                Data da Entrega:{" "}
                {`${dataExpires.getDate()}/${
                  1 + dataExpires.getMonth()
                }/${dataExpires.getFullYear()} às ${dataExpires.getHours()} Horas e ${dataExpires.getMinutes()} minutos.`}
              </p>
            </HistoryContainer>
          );
        })}
    </ResultsPageContainer>
  );
};

export default HistoryOrder;

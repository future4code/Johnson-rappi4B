import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { ResultsPageContainer } from "./styled";
import axios from "axios";
const HistoryOrder = () => {
  const [dataHistory, setDataHistory] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((res) => {
        setDataHistory(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  console.log("Dados do Historico", dataHistory);

  return (
    <ResultsPageContainer>
      <h1>Histórico de Pedidos</h1>
    </ResultsPageContainer>
  );
};

export default HistoryOrder;

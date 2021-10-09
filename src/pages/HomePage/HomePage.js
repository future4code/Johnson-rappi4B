import React, { useEffect } from "react";
import { HomePageContainer } from "./styled";
import { BASE_URL } from "./../../constants/urls";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToAddAddressPage,
  goToLoginPage,
} from "./../../routes/coordinator";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // Estado dos restaurantes
      })
      .catch((err) => {
        alert(err.response.data.message);
        if (err.response.data.message === "Não autorizado") {
          goToLoginPage(history);
        } else if (
          err.response.data.message === "Usuário não possui endereço cadastrado"
        ) {
          goToAddAddressPage(history);
        }
      });
  }, [history]);

  return <HomePageContainer>HOME PAGE</HomePageContainer>;
};

export default HomePage;

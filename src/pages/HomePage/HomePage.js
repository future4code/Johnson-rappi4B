import React, { useEffect } from "react";
import { HomePageContainer } from "./styled";
import { BASE_URL } from "./../../constants/urls";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToLoginPage } from "./../../routes/coordinator";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    getRestaurants();
  });

  const getRestaurants = () => {
   axios.get(`${BASE_URL}/restaurants`, {
     headers: {
       auth: localStorage.getItem('token')
     }
   }).then(res => {
     alert(res.data)
   }).catch((err) => {
     if(err){
      err.response.data.message === "Usuário não possui endereço cadastrado" ? goToLoginPage(history) : goToHomePage(history)
     }
   })
  };

  return <HomePageContainer>HOME PAGE</HomePageContainer>;
};

export default HomePage;

import React, { useEffect, useState } from "react";
import { HomePageContainer } from "./styled";
import { BASE_URL } from "./../../constants/urls";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {  
  goToAddAddressPage,
  goToLoginPage,
} from "./../../routes/coordinator";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";

const HomePage = () => {
  const history = useHistory();
  const [data, setdata] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setdata(res.data.restaurants)
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


  const foods = data && data.map((loja)=>{
    return <CardRestaurant key={loja.id} loja={loja} />
  }
)

  return (<HomePageContainer>
    {foods}
    </HomePageContainer>)
};

export default HomePage;

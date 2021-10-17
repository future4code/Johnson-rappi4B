import React, { useEffect, useState } from "react";
import { HomePageContainer, DiVCContainer } from "./styled";
import { BASE_URL } from "./../../constants/urls";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAddAddressPage, goToLoginPage } from "./../../routes/coordinator";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { Search } from "../../components/Search/Search";
import LogoRappi from "../../assets/logo.svg";
import { SnakBar } from "../../components/SnakBar/SnakBar";
import { FooterCard } from "../../components/FooterCard/FooterCard";

const HomePage = () => {
  const history = useHistory();
  const [data, setdata] = useState();
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setdata(res.data.restaurants);
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

  const selectCategory = (item) => {
    if (category === "") {
      setCategory(item);
    } else if (category === item) {
      setCategory("");
    } else {
      setCategory(item);
    }
  };

  const clearFilter = () => {
    if (window.confirm("Deseja limpar filtros")) {
      setCategory("");
    }
  };

  const filterRestaurants =
    data &&
    data.filter((item) => {
      return category === item.category;
    });

  const listRestaurant =
    filterRestaurants &&
    filterRestaurants.map((loja) => {
      return <CardRestaurant key={loja.id} loja={loja} />;
    });

  return (
    <HomePageContainer>
      <img src={LogoRappi} alt="Logo Rappi4" />
      <Search />
      <SnakBar
        data={data}
        selectCategory={selectCategory}
        clearFilter={clearFilter}
        category={category}
      />

      {category === ""
        ? data &&
          data.map((item) => {
            return <CardRestaurant key={item.id} loja={item} />;
          })
        : listRestaurant}
      <FooterCard />
    </HomePageContainer>
  );
};

export default HomePage;

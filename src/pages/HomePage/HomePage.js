import React, { useEffect, useState } from "react";
import { HomePageContainer } from "./styled";
import { BASE_URL } from "./../../constants/urls";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAddAddressPage, goToLoginPage } from "./../../routes/coordinator";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant";
import { Search } from "../../components/Search/Search";
import LogoRappi from "../../assets/logo.svg";
import { SnakBar } from "../../components/SnakBar/SnakBar";
import { FooterCard } from "../../components/FooterCard/FooterCard";
import CircularIndeterminate from "../../components/Loading/Loading";

const HomePage = () => {
  const history = useHistory();
  const [data, setdata] = useState();
  const [category, setCategory] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setdata(res.data.restaurants);
        setisLoading(false);
      })
      .catch((err) => {
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

  const removeSnack = () => {
    setCategory("");
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
        category={category}
        removeSnack={removeSnack}
      />
      {isLoading ? <CircularIndeterminate /> : ""}
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

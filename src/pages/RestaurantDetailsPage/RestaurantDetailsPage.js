import React, { useState, useEffect } from "react";
import { RestaurantDetailsPageContainer, RestaurantContainer, CardRestaurant } from "./styled";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./../../constants/urls";
import { useParams } from "react-router";
import { FooterCard } from "../../components/FooterCard/FooterCard";

const RestaurantDetailsPage = () => {
  const [data, setdata] = useState();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = (id) => {
    axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
       
        setdata(res.data.restaurant);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  return (
    <>
    <RestaurantDetailsPageContainer>
      <RestaurantContainer>
        <h4>Restaurante</h4>
      </RestaurantContainer>     
      
      <CardRestaurant>
        <img src={data && data.logoUrl} alt="foto da loja" />
        <p>{data && data.name} </p>
        <p>{data && data.category}</p>
        <div>
          {data && data.deliveryTime}-Min
          Frete R$ {data && data.shipping.toFixed(2).replace(".", ",")}
        </div>
        <p>{data && data.address}</p>
        {/* {data && data.description}  */}
      </CardRestaurant >
      <hr />
      
      {data &&
        data.products.map((i) => {
          return (
            <div key={i.id}>
              <img src={i.photoUrl} alt="foto do produto" />
              {i.name} <br />
              {i.description} <br />
              {i.price} <br />
            </div>
          );
        })}
    </RestaurantDetailsPageContainer>
    <FooterCard/>
    </>
  );
};

export default RestaurantDetailsPage;

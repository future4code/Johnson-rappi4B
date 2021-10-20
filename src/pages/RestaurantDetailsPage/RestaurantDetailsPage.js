import React, { useState, useEffect } from "react";
import { RestaurantDetailsPageContainer, RestaurantContainer, CardRestaurant, RestaurantImage, ProductCard, ProductImage, ProductInfo, ListProducts } from "./styled";
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
        <RestaurantImage src={data && data.logoUrl} alt="foto da loja"/>
          <span className="restaurant_name">{data && data.name}</span>
          <span className="restaurant_category">{data && data.category}</span>
          <div>
            <span>{data && data.deliveryTime}-Min</span>
            <span>Frete R$ {data && data.shipping.toFixed(2).replace(".", ",")}</span>
          </div>
          <span className="restaurant_address">{data && data.address}</span>
      </CardRestaurant >
      {data &&
      data.products.map((i) => {
        return (
          <ListProducts key={i.id}>
            <ProductCard>
              <ProductImage src={i.photoUrl} alt="foto do produto"/>
              <ProductInfo>
                <span className="product_name">{i.name}</span>
                <span className="product_description">{i.description}</span>
                <span className="product_price">R$ {i.price}</span>
              </ProductInfo>
            </ProductCard>
          </ListProducts>
        );
      })}
    </RestaurantDetailsPageContainer>
    <FooterCard/>
    </>
  );
};

export default RestaurantDetailsPage;

import React from "react";
import {
  CardRestaurantContainer,
  LogoRestaurant,
  RestaurantName,
  DataRestaurant,
} from "./styled";

const CardRestaurant = (props) => {
  return (
    <CardRestaurantContainer>
      <LogoRestaurant>
        <img src={props.loja.logoUrl} alt="Logo do Restaurante" />
      </LogoRestaurant>
      <RestaurantName>
        <span>{props.loja.name}</span>
      </RestaurantName>
      <DataRestaurant>
        <span>{props.loja.deliveryTime} min</span>
        <span>Frete R${props.loja.shipping.toFixed(2).replace(".", ",")}</span>
      </DataRestaurant>
    </CardRestaurantContainer>
  );
};

export default CardRestaurant;

import styled from "styled-components";

export const RestaurantDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  justify-content: center;
  align-items: center;
`;

export const RestaurantContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #b8b8b8;
`;

export const CardRestaurant = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  align-items: flex-start;
  width: 90%;
  color: #b8b8b8;
  border-bottom: 1px solid black;

  span {
    margin-top: 12px;
  }

  div {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }

  .restaurant_name {
    color: #de7e5d;
  }

  .restaurant_address {
    margin-bottom: 12px;
  }
`;

export const RestaurantImage = styled.img`
  display: flex;
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

export const ListProducts = styled.div`
  display: flex;
  justify-content: center;
  width: 96%;
  padding: 4px;
  margin-top: 8px;
`;

export const ProductCard = styled.div`
  display: flex;
  width: 328px;
  height: 112px;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 97px;
  height: 112px;
  border-radius: 8px 0 0 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  .product_name {
    color: #de7e5d;
  }

  .product_description {
    color: #b8b8b8;
  }

  .teste {
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 50%;
  

  p {
    margin: 0 6px;
    font-size: 18px;
  }
`;

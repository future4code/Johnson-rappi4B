import React, { useContext } from "react";
import { CartPageContainer } from "./styled";
import GlobalContextFood from "../../global/GlobalContextFood";

const CartPage = () => {
  const { cart, addValue } = useContext(GlobalContextFood);

  return (
    <CartPageContainer>
      <h1>CartPage</h1>
      {cart &&
        cart.map((item) => {
          return (
            <>
              <p>Nome: {item.name}</p>
              <br />
              <p>Quantidade: {item.quantity}</p>
              <p>ID: {item.id}</p>
              <p>Valor: {item.price}</p>
              <img src={item.photoUrl} alt="" />
            </>
          );
        })}
    </CartPageContainer>
  );
};

export default CartPage;

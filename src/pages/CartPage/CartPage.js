import React, { useContext } from "react";
import { CartPageContainer } from "./styled";
import GlobalContextFood from "../../global/GlobalContextFood";

const CartPage = () => {
  const { cart, addValue } = useContext(GlobalContextFood);

  console.log(cart);
  return (
    <CartPageContainer>
      <h1>CartPage</h1>
      {cart &&
        cart.map((item) => {
          return (
            <>
              <p>{item.name}</p>
              <br />
              <p>{item.quantity}</p>
            </>
          );
        })}
    </CartPageContainer>
  );
};

export default CartPage;

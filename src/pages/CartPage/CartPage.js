import React, { useContext } from "react";
import { CartPageContainer } from "./styled";
import GlobalContextFood from "../../global/GlobalContextFood";
import { Button } from '@material-ui/core';

const CartPage = () => {
  const { cart, addValue } = useContext(GlobalContextFood);

  const getTotal = (total, item) => {
    return total + item.price * item.quantity;
  };
  let amount = cart.reduce(getTotal, 0);

  const closeOrder = () => {
    alert('Obrigado pela Compra!')
  }

  return (
    <CartPageContainer>
      <h1>Pedido </h1>
      {cart &&
        cart.map((item) => {
          return (
            <>
              <img src={item.photoUrl} alt="" />
              <p>Nome: {item.name}</p>
              <p>Quantidade: {item.quantity} undidade(s)</p>
              <p>Preço unitário: {item.price.toFixed(2).replace(".", ",")}</p>
              <h4>
                Subtotal:{" "}
                {(item.price * item.quantity).toFixed(2).replace(".", ",")}
              </h4>
            </>
          );
        })}
      <h3>Total Pagar: {amount.toFixed(2).replace(".", ",")}</h3>
      <select>
        <option>Dinheiro</option>
        <option>Cartão Crédito</option>
        <option>Cartão Débito</option>
        <option>PIX</option>
      </select>
      <Button onClick={closeOrder} style={{margin: "10px 0"}} variant="contained" color="secondary">Fechar Pedido</Button>
    </CartPageContainer>
  );
};

export default CartPage;

import React, { useContext, useState } from "react";
import { CartPageContainer } from "./styled";
import GlobalContextFood from "../../global/GlobalContextFood";
import axios from "axios";
import { Button } from "@material-ui/core";
import { BASE_URL } from "./../../constants/urls";
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import { goToHomePage } from './../../routes/coordinator';

const CartPage = () => {
  const [method, setMethod] = useState('money')
  const params = useParams();
  const history = useHistory()
  const { cart, productOrder } = useContext(GlobalContextFood);

  const getTotal = (total, item) => {
    return total + item.price * item.quantity;
  }; 
  let amount = cart.reduce(getTotal, 0);


  const closeOrder = () => {
    const body = {products: [productOrder], paymentMethod: method};
    axios
      .post(`${BASE_URL}/restaurants/${params.id}/order`, body, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((res) => alert(res.data.message))
      .catch((err) => {
        alert(err.response.data.message);
      });
    alert("Obrigado pela Compra!");
    goToHomePage(history)
  };

  const onChangeMethod = (event) => {
    setMethod(event.target.method)
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
      <select onChange={onChangeMethod}>
        <option value="money">Dinheiro</option>
        <option value="creditcard">Cartão Crédito</option>
      </select>
      <Button
        onClick={closeOrder}
        style={{ margin: "10px 0" }}
        variant="contained"
        color="secondary"
      >
        Fechar Pedido
      </Button>
    </CartPageContainer>
  );
};

export default CartPage;

import React, { useState, useEffect } from "react";
import GlobalContextFood from "./GlobalContextFood";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [Price,setPrice] = useState()


  const addToCart = (product) => {
    const position = cart.findIndex((item) => {
      return item.id === product.id;
    });

    const newCart = [...cart];

    if (position === -1) {
      newCart.push({ ...product, quantity: 1 });
    } else {
      newCart[position].quantity += 1;
    }
    console.log(newCart);

    setCart(newCart);
  };

  const addRemove = (product) => {

    const position = cart.findIndex((item) => {
      return item.id === product.id;
    });

    let newCart = [...cart];

    if (newCart[position].quantity === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].quantity -= 1;
    }

    setCart(newCart);
  };



  // ESSA FUNÇÃO EMBAIXO retorna o valor total da compra mas já temos isso da API


  // useEffect(() => {
  //   let newPrice = 0;
  //   cart.forEach((product) => {
  //     newPrice += product.price * product.quantity;
  //   });
  //   setPrice(newPrice);
  // }, [cart]);

  return (
    <>
      <GlobalContextFood.Provider value={{ cart, addToCart, addRemove,Price }}>
        {props.children}
      </GlobalContextFood.Provider>
    </>
  );
};

export default GlobalState;

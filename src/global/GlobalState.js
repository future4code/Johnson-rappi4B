import React, { useState } from "react";
import GlobalContextFood from "./GlobalContextFood";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [productOrder, setProductOrder] = useState([])

  const addToCart = (product) => {
    const position = cart.findIndex((item) => {
      return item.id === product.id;
    });

    const newCart = [...cart];

    if (position === -1) {
      newCart.push({ ...product, quantity: 1 });
      setProductOrder({id: product.id, quantity: 1})
    } else {
      newCart[position].quantity += 1;
      setProductOrder({id: product.id, quantity: product.quantity + 1 || 1})
    }

    setCart(newCart);
  };

  const removeToCart = (product) => {
    const position = cart.findIndex((item) => {
      return item.id === product.id;
    });

    const newCart = [...cart];

    if (newCart[position].quantity === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].quantity -= 1;
    }

    setCart(newCart);
  };

  return (
    <>
      <GlobalContextFood.Provider value={{ cart, addToCart, removeToCart, productOrder }}>
        {props.children}
      </GlobalContextFood.Provider>
    </>
  );
};

export default GlobalState;

import React, { useState } from "react";
import GlobalContextFood from "./GlobalContextFood";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);

  const addValue = (product) => {
    const newCart = [ ...cart, {...product, quantity: 1}];
    setCart(newCart);
  };

  const addRemove = (product) => {
    const newCart = [ ...cart, {...product, quantity: 0}];
    setCart(newCart);
  };



  return (
    <>
      <GlobalContextFood.Provider value={{cart, addValue, addRemove}}>
        {props.children}
      </GlobalContextFood.Provider>
    </>
  );
};

export default GlobalState;

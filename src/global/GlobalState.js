import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  
  useEffect(() => {}, []);

  return (
    <>
      <GlobalStateContext.Provider>
        {props.children}
      </GlobalStateContext.Provider>
    </>
  );
};

export default GlobalState;

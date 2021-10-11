import React from "react";
import { ContainerSnakBar } from "./style";

export const SnackBar = (props) => {
  const menu = props.data;

  return (
    <ContainerSnakBar>
      {menu &&
        menu.map((item) => {
          return <div key={item.id}>{item.category}</div>;
        })}
    </ContainerSnakBar>
  );
};

import React from "react";
import { ContainerSnakBar, SnackBarButtom } from "./styled";

export const SnakBar = (props) => {
  const categories = props.data;
  console.log(props);
  return (
    <>
      <ContainerSnakBar>
        <buttom>Todos</buttom>
        {categories &&
          categories.map((item) => {
            return (
              <div>
                <SnackBarButtom
                  selected={props.category === item.category}
                  onClick={() => props.selectCategory(item.category)}
                  key={item.id}
                >
                  {item.category}
                </SnackBarButtom>
              </div>
            );
          })}
      </ContainerSnakBar>
    </>
  );
};

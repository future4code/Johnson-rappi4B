import React from "react";
import { ContainerSnakBar } from "./styled";

export const SnakBar = (props) => {
  const categories = props.data;

  return (
    <>
      <ContainerSnakBar >
        {categories &&
          categories.map((item) => {
            return (
              <div>
                <p
                  onClick={() => props.selectCategory(item.category)}
                  key={item.id}
                >
                  {item.category}
                </p>
              </div>
            );
          })}
      </ContainerSnakBar>
    </>
  );
};

import React from "react";
import { ContainerSnakBar } from "./styled";
import { FcClearFilters } from "react-icons/fc";

export const SnakBar = (props) => {
  const categories = props.data;

 
  return (
    <>
    <ContainerSnakBar>
      <FcClearFilters size={'28px'} style={{ position: 'absolute', cursor: 'pointer'}} onClick={() => props.clearFilter()}/>
      {categories &&
        categories.map((item) => {
          return (
            <div>
              <p onClick={() => props.selectCategory(item.category)} key={item.id}>
                {item.category}
              </p>
            </div>
          );
        })}
    </ContainerSnakBar>
    </>
  );
};

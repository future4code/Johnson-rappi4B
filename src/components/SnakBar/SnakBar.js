import React from "react";
import { ContainerSnakBar, SnackBarButtom } from "./styled";
import { RiFilterOffLine } from "react-icons/ri";

export const SnakBar = (props) => {
  const categories = props.data;

  return (
    <>
      <ContainerSnakBar>
        <p>
          <RiFilterOffLine color={"red"} size="24px" style={{ cursor: "pointer" }} onClick={props.removeSnack} />
        </p>
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

import React from "react";
import { FaSearch } from "react-icons/fa";

import { ContainerInput } from "./styled";

export const Search = (props) => {
  const onChangeName = (event) => {
    props.setInputSearch(event.target.value);
  };

  return (
    <ContainerInput>
      <FaSearch size="20px" />
      <input
        type="text"
        placeholder="Localize seu Restaurante"
        value={props.inputSearch}
        onChange={onChangeName}
      />
    </ContainerInput>
  );
};

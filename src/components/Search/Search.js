import React from "react";
import { FaSearch } from "react-icons/fa";

import { ContainerInput } from "./styled";

export const Search = () => {
  return (
    <ContainerInput>
      <FaSearch size="20px" />
      <input type="text" placeholder="Localize seu Restaurante" value="" />
    </ContainerInput>
  );
};

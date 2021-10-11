import React from "react";
import { FaSearch } from "react-icons/fa";

import { ContainerInput } from "./style";

export const Search = () => {
  return (
    <ContainerInput>
      <FaSearch size="20px" />
      <input type="text" placeholder="Restaurante" value="" />
    </ContainerInput>
  );
};

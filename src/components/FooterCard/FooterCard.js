import { Button } from "@material-ui/core";
import React from "react";
import { ContainerFooterButtons } from "./style";
import { RiHome5Line, RiShoppingCart2Line, RiContactsLine } from "react-icons/ri";

export const FooterCard = () => {
  return (
    <ContainerFooterButtons>
      <Button variant="contained">
        <RiHome5Line size="22px" />
      </Button>
      <Button variant="contained">
        <RiShoppingCart2Line size="22px" />
      </Button>
      <Button variant="contained">
        <RiContactsLine size="22px" />
      </Button>
    </ContainerFooterButtons>
  );
};

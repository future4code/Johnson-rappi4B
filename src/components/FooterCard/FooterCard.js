import { Button } from "@material-ui/core";
import React from "react";
import { ContainerFooterButtons } from "./style";
import { FaUser, FaHome, FaShoppingCart } from "react-icons/fa";

export const FooterCard = () => {
  return (
    <ContainerFooterButtons>
      <Button variant="contained">
        <FaHome size="24px" />
      </Button>
      <Button variant="contained">
        <FaShoppingCart size="24px" />
      </Button>
      <Button variant="contained">
        <FaUser size="24px" />
      </Button>
    </ContainerFooterButtons>
  );
};

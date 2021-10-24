import { Button } from "@material-ui/core";
import React from "react";
import { ContainerFooterButtons } from "./style";
import {
  RiHome5Line,
  RiShoppingCart2Line,
  RiContactsLine,
} from "react-icons/ri";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToProfilePage,
  goToCartPage,
} from "./../../routes/coordinator";

export const FooterCard = () => {
  const history = useHistory();

  return (
    <ContainerFooterButtons>
      <Button onClick={() => goToHomePage(history)} variant="contained">
        <RiHome5Line size="22px" />
      </Button>
      <Button onClick={() => goToCartPage(history, window.location.href.substring(34, 80))} variant="contained">
        <RiShoppingCart2Line size="22px" />
      </Button>
      <Button onClick={() => goToProfilePage(history)} variant="contained">
        <RiContactsLine size="22px" />
      </Button>
    </ContainerFooterButtons>
  );
};

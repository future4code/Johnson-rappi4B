import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { ContainerFooterButtons } from "./style";
import {
  RiHome5Line,
  RiShoppingCart2Line,
  RiContactsLine,
  RiHistoryFill,
} from "react-icons/ri";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToProfilePage,
  goToCartPage, 
  goToActiveOrder,
} from "./../../routes/coordinator";

export const FooterCard = () => {
  const history = useHistory();
  const [url, setUrl] = useState("home");

  return (
    <ContainerFooterButtons>
      <Button onClick={() => goToHomePage(history)} variant="contained">
        <RiHome5Line size="22px" />
      </Button>
      {url !== window.location.href.substring(22, 100) ? (
        <Button
          onClick={() =>
            goToCartPage(history, window.location.href.substring(34, 100))
          }
          variant="contained"
        >
          <RiShoppingCart2Line size="22px" />
        </Button>
      ) : (
        <Button onClick={() => goToActiveOrder(history)} variant="contained">
          <RiHistoryFill size="22px" />
        </Button>
      )}

      <Button onClick={() => goToProfilePage(history)} variant="contained">
        <RiContactsLine size="22px" />
      </Button>
    </ContainerFooterButtons>
  );
};

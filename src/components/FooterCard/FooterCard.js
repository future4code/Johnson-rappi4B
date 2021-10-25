import { Button } from "@material-ui/core";
import React, {useState} from "react";
import { ContainerFooterButtons } from "./style";
import {
  RiHome5Line,
  RiShoppingCart2Line,
  RiContactsLine,
  RiHistoryFill
} from "react-icons/ri";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToProfilePage,
  goToCartPage,
  goToHistoryOrder
} from "./../../routes/coordinator";

export const FooterCard = () => {
  const history = useHistory();
  const [url, setUrl] = useState('home')

console.log(window.location.href.substring(22, 50))

  return (
    <ContainerFooterButtons>
      <Button onClick={() => goToHomePage(history)} variant="contained">
        <RiHome5Line size="22px" />
      </Button>
      {url !== window.location.href.substring(31, 100) ? <Button onClick={() => goToCartPage(history, window.location.href.substring(34, 80))} variant="contained">
        <RiShoppingCart2Line size="22px" />
      </Button>:  <Button onClick={() => goToHistoryOrder(history)} variant="contained">
        <RiHistoryFill size="22px" />
      </Button> }
      
      <Button onClick={() => goToProfilePage(history)} variant="contained">
        <RiContactsLine size="22px" />
      </Button>
    </ContainerFooterButtons>
  );
};

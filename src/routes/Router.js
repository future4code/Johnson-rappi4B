import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddAddressPage from "../pages/AddAddressPage/AddAddressPage";
import CartPage from "../pages/CartPage/CartPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantDetailsPage from "../pages/RestaurantDetailsPage/RestaurantDetailsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SplashScreenPage from "../pages/SplashScreenPage/SplashScreenPage";
import { ActiveOrder } from "../pages/ActiveOrderPage/ActiveOrder";
import  HistoryOrder  from "../pages/HistoryPage/HistoryOrder";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={SplashScreenPage} />
        <Route exact path={"/home"} component={HomePage} />
        <Route exact path={"/cadastro"} component={SignUpPage} />
        <Route exact path={"/login"} component={LoginPage} />
        <Route exact path={"/perfil"} component={ProfilePage} />
        <Route exact path={"/endereco"} component={AddAddressPage} />        
        <Route
          exact
          path={"/restaurante/:id"}
          component={RestaurantDetailsPage}
        />
        <Route exact path={"/pedidos"} component={ActiveOrder} />
        <Route exact path={"/historico"} component={HistoryOrder} />
        <Route exact path={"/restaurante/:id/pedido"} component={CartPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

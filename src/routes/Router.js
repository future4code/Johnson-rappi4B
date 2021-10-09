import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddAddressPage from "../pages/AddAddressPage/AddAddressPage";
import CartPage from "../pages/CartPage/CartPage";
import EditPage from "../pages/EditPage/EditPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SplashScreenPage from "../pages/SplashScreenPage/SplashScreenPage";

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
        <Route exact path={"/editar"} component={EditPage} />
        <Route exact path={"/buscar"} component={SearchPage} />
        <Route exact path={"/resultados"} component={ResultsPage} />
        <Route exact path={"/carrinho"} component={CartPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

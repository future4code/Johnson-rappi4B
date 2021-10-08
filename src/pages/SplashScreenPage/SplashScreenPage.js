import React from "react";
// import { HomePageContainer } from "./styled";
import SplashScreen from "../../components/SplashScreen";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

const SplashScreenPage = () => {
  const history = useHistory();

  ReactDOM.render(
    <React.StrictMode>
      <SplashScreen />
    </React.StrictMode>,
    document.getElementById("root")
  );

  const changePage = () => {
    setTimeout(() => {
      history.push("/home");
      history.go();
    }, 3000);
  };

  changePage();

  return <></>;
};

export default SplashScreenPage;

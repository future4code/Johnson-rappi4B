import React from "react";
import styled from "styled-components";
import LogoRappi from "../../assets/logo-white.svg";

const SplashScreenContainer = styled.div`
    display: flex;
    background-color: #e86e5a;
    height: 640px;
    width: 360px;
    justify-content: center;
    align-items: center;

    img {
        width: 126px;
        height: 65px;
        object-fit: contain;
    }
`;

const SplashScreen = () => {
  return (
    <SplashScreenContainer>
      <img src={LogoRappi} alt="Logo Rappi4" />
    </SplashScreenContainer>
  );
};

export default SplashScreen;

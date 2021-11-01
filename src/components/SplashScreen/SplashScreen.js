import React from "react";
import styled from "styled-components";
import LogoRappi from "../../assets/logo-white.svg";

const SplashScreenContainer = styled.div`
  display: flex;
  background-color: #e86e5a;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    text-align: center;
    width: 126px;
    height: 65px;
    object-fit: contain;
  }
`;

const centerSplash = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;

`;

const SplashScreen = () => {
  return (
    <centerSplash>
      <SplashScreenContainer>
        <img src={LogoRappi} alt="Logo Rappi4" />
      </SplashScreenContainer>
    </centerSplash>
  );
};

export default SplashScreen;

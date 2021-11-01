import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const PhotoPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 30%;
  }
`;

export const ContainerPersonalData = styled.div`
  max-width: 290px;
  max-height: 500;
  flex-direction: column;
  justify-content: center;  
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid lightgrey;
  margin: 20px;
  padding: 8px;
  

  h3 {
    text-align: center;
  }
`;

export const ButtonsHeader = styled.div`
  width: 350px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 5px;

  p {
    margin: 0 30px;
  }
  button {
    margin: 0 20px;
  }
`;

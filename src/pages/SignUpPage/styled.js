import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SignUpPageContainer = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 640px;

  input {
    width:320px;
    height: 46px;
    margin: 8px 0 0;
    padding: 19px 48px 19px 16px;
    border-radius: 2px;
    
  }


  h3 {
    font-size: large;
    text-align: center;
    color: #e86e5a;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 350px;
  }

  a {
    text-decoration: none;
    color: red;
  }

  button {
    margin-top: 20px;
    background-color: #e86e5a;
    color: #fff;
  }
`;

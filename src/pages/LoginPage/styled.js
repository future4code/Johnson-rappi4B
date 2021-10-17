import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const LoginPageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 260;
  height: 440px;
  padding: 0 0 184px;

  img {
    width: 300px;
    text-align: center;
  }
  input{
    width:320px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 360px;
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

  p{
    text-align: center;
  }
`;

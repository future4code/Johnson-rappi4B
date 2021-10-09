import styled from "styled-components";

export const ContainerFomrAddress = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const AddAddressPageContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: 260;
  height: 340px;
  padding: 0 0 184px;

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

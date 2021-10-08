import React from "react";
import { LoginPageContainer } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router";
import { goToHomePage } from "../../routes/coordinator";
import LogoRappi from "../../assets/logo.svg";

const LoginPage = () => {
  const history = useHistory();

  //Custom hook Form
  const [form, handleInputChange, clear] = useForm({
    email: "",
    password: "",
  });

  //Função para submitar o Formulario
  const login = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        console.log(res.data);
        clear();
        localStorage.setItem("token", res.data.token);
        goToHomePage(history);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <LoginPageContainer>
      <img src={LogoRappi} alt="Logo Rappi4" />
      <form onSubmit={login}>
        <input
          name={"email"}
          label={"E-mail"}
          value={form.email}
          onChange={handleInputChange}
          placeholder="E-mail"
          type={"email"}
          required
        />
        <input
          name={"password"}
          label={"Senha"}
          value={form.password}
          onChange={handleInputChange}
          placeholder="Senha"
          type="password"
          required
          pattern={"^.{6,}"}
          title={"A senha deve ter no mínimo 6 caracteres"}
        />

        <button>Entrar</button>
        <div>
          <p>
            Não possui cadastro? <a href="/cadastro">Clique aqui.</a>
          </p>
        </div>
      </form>
    </LoginPageContainer>
  );
};

export default LoginPage;

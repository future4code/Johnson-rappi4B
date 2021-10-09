import React from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import { SignUpPageContainer } from "./styled";
import { goToAddAddressPage } from "../../routes/coordinator";
import axios from "axios";
import useForm from "../../hooks/useForm";

const SignUpPage = () => {
  const history = useHistory();

  const [form, handleInputChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const signUp = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("...quase lá!!!");
        clear();
        goToAddAddressPage(history);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <SignUpPageContainer>
      <form onSubmit={signUp}>
        <input
          name={"name"}
          label={"Nome"}
          value={form.name}
          onChange={handleInputChange}
          placeholder="Nome e sobrenome"
          type={"text"}
          required
        />
        <input
          name={"email"}
          label={"E-mail"}
          value={form.email}
          onChange={handleInputChange}
          placeholder="email@email.com"
          type={"email"}
          required
        />
        <input
          name={"cpf"}
          label={"CPF"}
          value={form.cpf}
          onChange={handleInputChange}
          placeholder="Digite com pontos e traço Ex.: 000.000.000-00"          
          required
          pattern={
            "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
          }
        />
        <input
          name={"password"}
          label={"Senha"}
          value={form.password}
          onChange={handleInputChange}
          placeholder="Mínimo 6 caracteres"
          type="password"
          required
          pattern={"^.{6,}"}
          title={"A senha deve ter no mínimo 6 caracteres"}
        />
        <input
          name={"confirmPassword"}
          label={"Confirmar"}
          value={form.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirme a senha anterior"
          type="password"
          required
          pattern={"^.{6,}"}
          title={"A senha deve ter no mínimo 6 caracteres"}
        />
        <button>Criar</button>
      </form>
    </SignUpPageContainer>
  );
};

export default SignUpPage;

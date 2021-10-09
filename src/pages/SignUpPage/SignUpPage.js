import React from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import { SignUpPageContainer } from "./styled";
import { goToAddAddressPage } from "../../routes/coordinator";
import axios from "axios";
import useForm from "../../hooks/useForm";
import {  TextField, Button } from "@material-ui/core";

const SignUpPage = () => {
  const history = useHistory();

  const [form, onChange, clear] = useForm({
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
    <>
      <SignUpPageContainer>
        <h3>Dados Pessoais</h3>
        <form onSubmit={signUp}>
          <TextField
            name={"name"}
            label={"Nome"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome e sobrenome"
            type={"text"}
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name={"email"}
            label={"E-mail"}
            value={form.email}
            onChange={onChange}
            placeholder="email@email.com"
            type={"email"}
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name={"cpf"}
            label={"CPF"}
            value={form.cpf}
            onChange={onChange}
            placeholder="Digite com pontos e traço Ex.: 000.000.000-00"
            required
            pattern={
              "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
            }
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name={"password"}
            label={"Senha"}
            value={form.password}
            onChange={onChange}
            placeholder="Mínimo 6 caracteres"
            type="password"
            required
            pattern={"^.{6,}"}
            title={"A senha deve ter no mínimo 6 caracteres"}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name={"confirmPassword"}
            label={"Confirmar"}
            value={form.confirmPassword}
            onChange={onChange}
            placeholder="Confirme a senha anterior"
            type="password"
            required
            pattern={"^.{6,}"}
            title={"A senha deve ter no mínimo 6 caracteres"}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button variant="contained">Criar</Button>
        </form>
      </SignUpPageContainer>
    </>
  );
};

export default SignUpPage;

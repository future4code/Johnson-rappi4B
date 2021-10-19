import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { ContainerForm } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const EditProfile = (props) => {
  const { name, cpf, email } = props.dataProfile;

  const [Name, SetName] = useState(name);
  const [Cpf, SetCpf] = useState(cpf);
  const [Email, SetEmail] = useState(email);

  const onChangeName = (event) => {
    SetName(event.target.value);
  };
  const onChanCPF = (event) => {
    SetCpf(event.target.value);
  };
  const onChangeEmail = (event) => {
    SetEmail(event.target.value);
  };

  const editionProfile = (event) => {
 event.preventDefault()
    const body = {
      name: Name,
      email: Email,
      cpf: Cpf,
    };
    axios.put(`${BASE_URL}/profile`, body, {
      headers: { auth: localStorage.getItem("token") },
    }).then(()=> {alert("Dados Atualizados com sucesso!")
  props.setPageInitial(false)})
  };

  return (
    <>
      <div>
        <h1>Editar Dados</h1>
      </div>
      <ContainerForm>
        <form>
          <TextField
            name={"name"}
            label={"Nome"}
            value={Name}
            onChange={onChangeName}
            type={"text"}
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name={"cpf"}
            label={"CPF"}
            value={Cpf}
            onChange={onChanCPF}
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name={"email"}
            label={"E-mail"}
            value={Email}
            onChange={onChangeEmail}
            type={"text"}
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            style={{ marginTop: "24px" }}
            type="submit"
            variant="contained"
            onClick={editionProfile}
          >
            Salvar
          </Button>
        </form>
      </ContainerForm>
    </>
  );
};

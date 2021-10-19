import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { ContainerForm } from "./styled";

export const CardEditeData = (props) => {
  const { name, cpf, email, address } = props.dataProfile;

  const [Name, SetName] = useState(name);
  const [Cpf, SetCpf] = useState(cpf);
  const [Email, SetEmail] = useState(email);
  const [Address, SetAddress] = useState(address);

  const onChangeName = (event) => {
    SetName(event.target.value);
  };
  const onChanCPF = (event) => {
    SetCpf(event.target.value);
  };
  const onChangeEmail = (event) => {
    SetEmail(event.target.value);
  };
  const onChangeAddress = (event) => {
    SetAddress(event.target.value);
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
          <TextField
            name={"endereco"}
            label={"Endereço"}
            value={Address}
            onChange={onChangeAddress}
            type={"text"}
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </form>
          <Button
            type="submit"
            variant="contained"
            onClick={() => props.editDataProfile()}
          >
            Salvar
          </Button>
      </ContainerForm>
    </>
  );
};

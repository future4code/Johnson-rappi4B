import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { AddAddressPageContainer, ContainerFomrAddress } from "./styled";
import { useHistory } from "react-router";
import { goToLoginPage } from "../../routes/coordinator";
import {  TextField, Button } from "@material-ui/core";

const AddAddressPage = () => {
  const history = useHistory();

  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  });

  const newAddress = (event) => {
    event.preventDefault();
    axios
      .put(`${BASE_URL}/address`, form, {
        headers: { auth: localStorage.getItem("token") },
      })
      .then((res) => {
       
        clear();
        localStorage.setItem("token", res.data.token);
        alert("Ufa...agora bora de lanches!");
        goToLoginPage(history);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <ContainerFomrAddress>
        <AddAddressPageContainer>
          <h3>Meu Endereço</h3>

          <form onSubmit={newAddress}>
            <TextField
              name={"street"}
              label={"Logradouro"}
              value={form.street}
              onChange={onChange}
              placeholder="Rua / Av."
              type={"text"}
              required
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              name={"number"}
              label={"Número"}
              value={form.number}
              onChange={onChange}
              placeholder="Número"
              type={"number"}
              required
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              name={"complement"}
              label={"Complemento"}
              value={form.complement}
              onChange={onChange}
              placeholder="Apto. / Bloco"
              type={"text"}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              name={"neighbourhood"}
              label={"Bairro"}
              value={form.neighbourhood}
              onChange={onChange}
              placeholder="Bairro"
              type={"text"}
              required
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              name={"city"}
              label={"Cidade"}
              value={form.city}
              onChange={onChange}
              placeholder="Cidade"
              type={"text"}
              required
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              name={"state"}
              label={"Estado"}
              value={form.state.toUpperCase()}
              onChange={onChange}
              placeholder="Ex.: SP"
              type={"text"}
              required
              maxLength="2"
              pattern={"[A-Z]{2}"}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Button type="submit" variant="contained">Criar</Button>
          </form>
        </AddAddressPageContainer>
      </ContainerFomrAddress>
    </>
  );
};

export default AddAddressPage;

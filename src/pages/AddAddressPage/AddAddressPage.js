import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { AddAddressPageContainer, ContainerFomrAddress } from "./styled";
import { useHistory } from "react-router";
import { goToLoginPage } from "../../routes/coordinator";
import { Button, TextField } from "@material-ui/core";

const AddAddressPage = () => {
  const history = useHistory();

  const [form, handleInputChange, clear] = useForm({
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
        console.log(res.data);
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              value={form.state}
              onChange={handleInputChange}
              placeholder="Ex.: SP"
              type={"text"}
              required
              maxLength="2"
              pattern={"[A-Z]{2}"}
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Button variant="contained">Salvar</Button>
          </form>
        </AddAddressPageContainer>
      </ContainerFomrAddress>
    </>
  );
};

export default AddAddressPage;

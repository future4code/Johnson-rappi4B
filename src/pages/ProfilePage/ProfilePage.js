import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { ProfilePageContainer } from "./styled";
import axios from "axios";
import { goToLoginPage } from "./../../routes/coordinator";
import { useHistory } from "react-router";

const ProfilePage = () => {
  const [dataProfile, setDataProfile] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/profile`, { headers: { auth: token } })
      .then((res) => setDataProfile(res.data.user))
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [token]);

  const logout = () => {
    setToken(localStorage.removeItem("token"));
    goToLoginPage(history);
  };

  return (
    <ProfilePageContainer>
      <h1>Perfil</h1>
      <avatar>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="foto usuário"
        />
      </avatar>
      <p>NOME: {dataProfile.name}</p>
      <p>E-mail: {dataProfile.email}</p>
      <p>CPF: {dataProfile.cpf}</p>
      <p>Endereço: {dataProfile.address}</p>
      <button onClick={logout}>Logout</button>
      <button>Editar Perfil</button>
    </ProfilePageContainer>
  );
};

export default ProfilePage;

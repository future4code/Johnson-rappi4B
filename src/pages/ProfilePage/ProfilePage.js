import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { goToLoginPage, goToHomePage } from "./../../routes/coordinator";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import { BiLogOut } from "react-icons/bi";
import { FaBackspace, FaRegEdit } from "react-icons/fa";
import Loading from "../../components/Loading/Loading";

import {
  ButtonsHeader,
  ContainerPersonalData,
  PhotoPerfil,
  ProfilePageContainer,
} from "./styled";

import { EditProfile } from "./../../components/CardEditeData/EditProfile";

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageInitial, setPageInitial] = useState(false);
  const [dataProfile, setDataProfile] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/profile`, { headers: { auth: token } })
      .then((res) => {
        setDataProfile(res.data.user);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [token, pageInitial]);

  const editDataProfile = () => {
   
  };

  const logout = () => {
    setToken(localStorage.removeItem("token"));
    goToLoginPage(history);
  };

  const editProfile = () => {
    setPageInitial(true);
  };

  return (
    <ProfilePageContainer>
      {pageInitial ? (
        <>
          <EditProfile dataProfile={dataProfile} setPageInitial={setPageInitial} pageInitial={pageInitial} />
        </>
      ) : (
        <>
          <ButtonsHeader>
            <p>
              <FaBackspace
                size="36px"
                color="#e86e5a"
                onClick={() => goToHomePage(history)}
              />
            </p>
            <p>
              <FaRegEdit color="#e86e5a" size="28px" onClick={editProfile} />
            </p>
          </ButtonsHeader>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <PhotoPerfil>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="foto usuário"
                />
              </PhotoPerfil>
              <ContainerPersonalData>
                <h3>Perfil do Usuário</h3>
                <p>
                  <b>Nome:</b> {dataProfile.name}
                </p>
                <p>
                  <b>E-mail:</b> {dataProfile.email}
                </p>
                <p>
                  <b>CPF:</b> {dataProfile.cpf}
                </p>
                <p>
                  <b>Endereço:</b> {dataProfile.address}
                </p>
              </ContainerPersonalData>
              <div>
                <Button
                  style={{ marginTop: "24px" }}
                  variant="contained"
                  color="error"
                  startIcon={<BiLogOut />}
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </ProfilePageContainer>
  );
};

export default ProfilePage;

import React from "react";
import styled from "styled-components";

import { user } from "../App";
import defaultPhoto from "../assets/default_user.jpg";
import { Colors } from "../constants/Colors";

const {
  primaryBlue,
  primaryRed,
  secondaryBlue,
  secondaryRed,
  backgroundText,
  colorText,
} = Colors;

export const UserProfile = () => {
  const handleReset = () => {
    window.location.replace("/reset");
  };

  const handleSignOut = () => {
    console.log("Cerrando Sesión");
  };

  return (
    <ProfileContainer>
      <PhotoContainer>
        <UserPhoto src={user.photo ? user.photo : defaultPhoto} />
      </PhotoContainer>
      <InfoContainer>
        <Label>Nombre</Label>
        <TextContainer>
          <Text>{user.username}</Text>
        </TextContainer>
        <Label>Apellido</Label>
        <TextContainer>
          <Text>{user.surname}</Text>
        </TextContainer>
        <Label>Fecha de Nacimiento</Label>
        <TextContainer>
          <Text>{user.date}</Text>
        </TextContainer>
        <Label>Email</Label>
        <TextContainer>
          <Text>{user.email}</Text>
        </TextContainer>
      </InfoContainer>
      <PasswordContainer>
        <ChangePasswordButton onClick={handleReset}>
          Cambiar Contraseña
        </ChangePasswordButton>
      </PasswordContainer>
      <SignOutContainer>
        <SignOutButton onClick={handleSignOut}>Cerrar Sesión</SignOutButton>
      </SignOutContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: block;
  margin: 2vw;
`;

const PhotoContainer = styled.div``;

const UserPhoto = styled.img`
  width: 8vw;
  margin-left: 5vw;
  margin-bottom: 1vw;
  border-radius: 100px;
  box-shadow: 0px 6px 5px #ccc;
  transition: all 0.4s ease-in-out;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const InfoContainer = styled.div``;

const Label = styled.h3`
  margin-left: 5vw;
  margin-bottom: -0.5rem;
  font-style: italic;
  color: ${secondaryBlue};
`;

const TextContainer = styled.div`
  background-color: ${backgroundText};
  width: 40vw;
  margin-left: 5vw;
  border-radius: 1rem;
  color: ${secondaryRed};
`;

const Text = styled.p`
  font-size: 1.3rem;
  padding: 1rem;
  font-weight: bold;
`;

const PasswordContainer = styled.div``;

const ChangePasswordButton = styled.button`
  width: 100%;
  margin-bottom: 3vh !important;
  margin-top: 2vh !important;
  font-family: "Roboto", sans-serif;
  background-color: ${primaryBlue};
  color: ${colorText};
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.7s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: ${secondaryBlue};
    transform: scale(1.02);
  }
`;

const SignOutContainer = styled.div``;

const SignOutButton = styled.button`
  width: 100%;
  margin-bottom: 3vh !important;
  font-family: "Roboto", sans-serif;
  background-color: ${primaryRed};
  color: ${colorText};
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.7s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: ${secondaryRed};
    transform: scale(1.02);
  }
`;

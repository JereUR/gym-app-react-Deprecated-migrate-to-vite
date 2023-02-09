import React, { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import styled from "styled-components";

import { user } from "../App";
import defaultPhoto from "../assets/default_user.jpg";
import { Colors } from "../constants/Colors";
import Modal from "./Modal";
import { UploadAnimation } from "./UploadAnimation";

const {
  primaryBlue,
  primaryRed,
  secondaryBlue,
  secondaryRed,
  backgroundText,
  colorText,
  errorInput,
} = Colors;

export const UserProfile = () => {
  const [userPhoto, setUserPhoto] = useState(null);
  const [errorInput, setErrorInput] = useState(null);
  const [changePhoto, setChangePhoto] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!changePhoto) {
      setUserPhoto(null);
    }
  }, [changePhoto]);

  useEffect(() => {
    if (userPhoto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(userPhoto);
    } else {
      setPreview("");
    }
  }, [userPhoto]);

  const reference = useRef();

  const handleModal = () => {
    setChangePhoto(!changePhoto);
  };

  const handleReset = () => {
    window.location.replace("/reset");
  };

  const handleSignOut = () => {
    console.log("Cerrando Sesión");
  };

  const uploadFiles = () => {
    reference.current.click();
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setUserPhoto(file);
      setErrorInput(null);
    } else {
      setUserPhoto(null);
      setErrorInput(
        "Archivo no compatible. Solo archivos tipo .jpg, .jpeg y .png."
      );
    }
  };

  const handleSend = () => {
    console.log(userPhoto);
    setChangePhoto(!changePhoto);

    toast.success(`Foto de perfil actualizada. Recargando...`, {
      position: "top-right",
      duration: 2000,
      style: {
        background: "rgba(215, 250, 215)",
        fontSize: "1rem",
        fontWeight: "500",
      },
    });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <ProfileContainer>
      <PhotoContainer>
        <UserPhoto src={user.photo ? user.photo : defaultPhoto} />
      </PhotoContainer>
      <ChangePhoto onClick={handleModal}>Cambiar foto de perfil</ChangePhoto>
      <Modal
        state={changePhoto}
        setState={setChangePhoto}
        title="Seleccione foto"
      >
        <Content>
          <UploadPhotoContainer>
            <InputPhoto
              type="file"
              name="photo"
              accept="'image/*"
              style={{ display: "none" }}
              onChange={handlePhoto}
              ref={reference}
            />
            {userPhoto ? (
              <ImagePhoto
                src={preview}
                onClick={uploadFiles}
                style={{ width: "25vw", height: "30vw", cursor: "pointer" }}
              />
            ) : (
              <UploadAnimation uploadFiles={uploadFiles} />
            )}
            {errorInput && <ErrorInput>{errorInput}</ErrorInput>}
            <SendPhoto onClick={handleSend}>Subir Foto</SendPhoto>
          </UploadPhotoContainer>
        </Content>
      </Modal>

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
        <SignOutButton onClick={handleSignOut} disabled={true}>
          Cerrar Sesión
        </SignOutButton>
      </SignOutContainer>
      <Toaster />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: block;
  margin: 2vw;
  margin-bottom: 1vw !important;
`;

const PhotoContainer = styled.div``;

const UserPhoto = styled.img`
  width: 8vw;
  margin-left: 5vw;
  margin-bottom: 1vw;
  border-radius: 100px;
  box-shadow: 0px 6px 5px #ccc;
  transition: all 0.4s ease-in-out;
`;

const ChangePhoto = styled.button`
  font-family: "Roboto", sans-serif;
  margin-left: 5.5vw;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: ${backgroundText};
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: bold;
  transition: all 0.4s ease;
  color: ${secondaryRed};

  :hover {
    cursor: pointer;
    color: ${secondaryBlue};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const UploadPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputPhoto = styled.input`
  margin-left: 2rem;
`;

const ImagePhoto = styled.img`
  margin-bottom: 1rem;
`;

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const SendPhoto = styled.button`
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
    transform: scale(1.05);
  }
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

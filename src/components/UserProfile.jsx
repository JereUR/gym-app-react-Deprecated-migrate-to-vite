import React, { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import uploadPhoto from "../static/upload-photo.json";

import defaultPhoto from "../assets/default_user.jpg";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import Modal from "./Modal";
import { UploadAnimation } from "./UploadAnimation";
import { UserInfo } from "./UserInfo";

const {
  primaryBlue,
  primaryRed,
  secondaryBlue,
  secondaryRed,
  backgroundText,
  colorText,
  errorInput,
} = Colors;

export const UserProfile = ({ user }) => {
  const [userPhoto, setUserPhoto] = useState(null);
  const [errorInput, setErrorInput] = useState(null);
  const [changePhoto, setChangePhoto] = useState(false);
  const [preview, setPreview] = useState("");

  const formData = new FormData();

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

  const handleChangePassword = () => {
    window.location.replace("/change-password");
  };

  const handleSignOut = () => {
    /* try {
          const resp = await fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user.email }),
          });
          console.log(resp);

           toast.success("Sesión cerrada.", {
            position: "top-right",
            duration: 6000,
            style: {
              background: "rgba(215, 250, 215)",
              fontSize: "1rem",
              fontWeight: "500",
            },
          });
        } catch (error) {
          toast.error("error.", {
            position: "top-right",
            duration: 6000,
            style: {
              background: "rgba(250, 215, 215)",
              fontSize: "1rem",
              fontWeight: "500",
            },
          });
        } */

    setTimeout(() => {
      window.location.replace("/");
    }, 1000);
  };

  const uploadFiles = () => {
    reference.current.click();
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      formData.append("image", file);
      setUserPhoto(file);
      /* console.log(userPhoto); */
      setErrorInput(null);
    } else {
      setUserPhoto(null);
      setErrorInput(
        "Archivo no compatible. Solo archivos tipo .jpg, .jpeg y .png."
      );
    }
  };

  const handleChange = () => {
    setUserPhoto(null);
  };

  const handleSend = async () => {
    setChangePhoto(!changePhoto);

    if (userPhoto != null) {
      /* try {
        const resp = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dataSignIn }),
        });

        toast.success("Foto de perfil actualizada. Recargando...", {
          position: "top-right",
          duration: 6000,
          style: {
            background: "rgba(215, 250, 215)",
            fontSize: "1rem",
            fontWeight: "500",
          },
        });

        console.log(resp);

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        toast.error("error.", {
          position: "top-right",
          duration: 6000,
          style: {
            background: "rgba(250, 215, 215)",
            fontSize: "1rem",
            fontWeight: "500",
          },
        });
      } */
    }
  };

  return (
    <ProfileContainer>
      <PhotoContainer>
        <UserPhoto src={user.photo ? user.photo : defaultPhoto} />
        <FaEdit size="1.5rem" onClick={handleModal} />
      </PhotoContainer>
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
              <UploadAnimation
                uploadFiles={uploadFiles}
                animation={uploadPhoto}
                height="25vw"
                width="30vw"
              />
            )}
            {errorInput && <ErrorInput>{errorInput}</ErrorInput>}
            {userPhoto && (
              <ChangePhoto onClick={handleChange}>Cambiar Foto</ChangePhoto>
            )}
            <SendPhoto onClick={handleSend}>Subir Foto</SendPhoto>
          </UploadPhotoContainer>
        </Content>
      </Modal>
      <UserInfo user={user} />
      <PasswordContainer>
        <ChangePasswordButton onClick={handleChangePassword}>
          Cambiar Contraseña
        </ChangePasswordButton>
      </PasswordContainer>
      <SignOutContainer>
        <SignOutButton onClick={handleSignOut}>Cerrar Sesión</SignOutButton>
      </SignOutContainer>
      <Toaster />
    </ProfileContainer>
  );
};

const ChangePasswordButton = styled.button`
  width: 90%;
  margin-bottom: 3vh !important;
  margin-top: 2vh !important;
  font-family: ${FontFamily};
  background-color: ${primaryBlue};
  color: ${colorText};
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 4px;
  transition: all 0.7s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${secondaryBlue};
  }
`;

const ChangePhoto = styled.button`
  font-family: ${FontFamily};
  background-color: ${primaryRed};
  color: ${colorText};
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.7s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${secondaryRed};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const ImagePhoto = styled.img`
  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    width: 60vw !important;
    height: 70vw !important;
  }
`;

const InputPhoto = styled.input`
  margin-left: 2rem;
`;

const PasswordContainer = styled.div`
  text-align: center;
`;

const PhotoContainer = styled.div`
  color: ${secondaryBlue};

  @media screen and (max-width: 480px) {
    margin-top: 10vw;
    margin-bottom: 10vw;
  }

  svg {
    padding: 1rem;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 480px) {
      padding: 1rem 1rem 0 0.5rem;
    }
  }

  svg:hover {
    cursor: pointer;
    color: ${secondaryRed};
  }
`;

const ProfileContainer = styled.div`
  display: block;
  margin: 2vw;
  margin-bottom: 1vw !important;
`;

const SendPhoto = styled.button`
  font-family: ${FontFamily};
  background-color: ${primaryBlue};
  color: ${colorText};
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.7s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${secondaryBlue};
  }
`;

const SignOutButton = styled.button`
  width: 90%;
  margin-bottom: 5vh !important;
  font-family: ${FontFamily};
  background-color: ${primaryRed};
  color: ${colorText};
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 4px;
  transition: all 0.7s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${secondaryRed};
  }
`;

const SignOutContainer = styled(PasswordContainer)``;

const UploadPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPhoto = styled.img`
  width: 8vw;
  margin-left: 5vw;
  margin-bottom: 1vw;
  border-radius: 1000px;
  box-shadow: 0px 6px 5px #ccc;
  background: ${backgroundText};

  @media screen and (max-width: 480px) {
    width: 25vw !important;
  }

  @media screen and (max-width: 1050px) {
    width: 15vw;
  }
`;

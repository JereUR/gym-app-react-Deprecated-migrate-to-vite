import React, { useState } from "react";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";

import logo from "../assets/logo.png";
import Loader from "./Loader";
import Modal from "./Modal";
import { Colors } from "../constants/Colors";

const { primaryBlue, primaryRed, secondaryBlue, secondaryRed, colorText } =
  Colors;

export const SignIn = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [emailRecover, setEmailRecover] = useState("");
  const [errorSignIn, setErrorSignIn] = useState(false);
  const [errorRecover, setErrorRecover] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleForgotPasswordModal = () => {
    setForgotPassword(!forgotPassword);
  };

  const handleEmailSignIn = (e) => {
    setEmailSignIn(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordSignIn(e.target.value);
  };

  const handleSubmitSignIn = (e) => {
    e.preventDefault();

    setLoading(true);
    const dataSignIn = { emailSignIn, passwordSignIn };
    document.getElementById("email-sign-in").value = "";
    document.getElementById("password-sign-in").value = "";

    /* try {
      fetch()
    } catch (error) {
      setEmailSignIn(true);
    } */

    if (errorSignIn) {
      toast.error("Email o contraseña incorrecto.", {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(250, 215, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      });
    }

    setLoading(false);
  };

  const handleEmailRecover = (e) => {
    setEmailRecover(e.target.value);
  };

  const handleSubmitRecover = (e) => {
    e.preventDefault();

    const dataRecover = { emailRecover };

    console.log(dataRecover);

    setForgotPassword(!forgotPassword);

    if (errorRecover) {
      toast.error("Email no registado.", {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(250, 215, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      });
    } else {
      toast.success(`Se envió un correo a ${emailRecover}.`, {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(215, 250, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      });
    }
  };

  return (
    <FormContainer>
      <LogoForm src={logo} />
      <Form onSubmit={handleSubmitSignIn}>
        <Input
          id="email-sign-in"
          type="email"
          placeholder="Ingrese su email"
          onChange={handleEmailSignIn}
          required
        />
        <Input
          id="password-sign-in"
          type="password"
          placeholder="Ingrese su contraseña"
          onChange={handlePassword}
          required
        />
        <ButtonSignIn>Iniciar Sesión</ButtonSignIn>
        {loading && <Loader />}
      </Form>
      <PasswordForgot onClick={handleForgotPasswordModal}>
        ¿Olvidaste tu contraseña?
      </PasswordForgot>
      <Modal
        state={forgotPassword}
        setState={setForgotPassword}
        title="Recuperar Cuenta"
      >
        <Content>
          <TextForgotPassword>
            Introduzca su correo electrónico para reestablecer tu contraseña.
          </TextForgotPassword>
          <FormContainer>
            <Form onSubmit={handleSubmitRecover}>
              <InputRecover
                type="email"
                placeholder="Ingrese su email"
                onChange={handleEmailRecover}
                required
              />
              <ButtonRecover>Enviar</ButtonRecover>
            </Form>
          </FormContainer>
        </Content>
      </Modal>
      <Toaster />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: block;
  text-align: center;
`;

const LogoForm = styled.img``;

const Form = styled.form`
  display: grid;
`;

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 1.5px solid rgb(150, 150, 150);
  background-color: ${colorText};
  color: ${secondaryBlue};
`;

const PasswordForgot = styled.p`
  font-size: 14px;
  color: ${secondaryBlue};

  :hover {
    cursor: pointer;
  }
`;

const ButtonSignIn = styled.button`
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
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;

const TextForgotPassword = styled.div`
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const InputRecover = styled.input`
  font-family: "Roboto", sans-serif;
  width: 20vw;
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 1.5px solid rgb(150, 150, 150);
  background-color: ${colorText};
  color: ${secondaryBlue};
`;

const ButtonRecover = styled.button`
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

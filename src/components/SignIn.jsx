import React, { useState } from "react";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";

import logo from "../assets/logo.png";
import Loader from "./Loader";
import Modal from "./Modal";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";

const { primaryBlue, primaryRed, secondaryBlue, secondaryRed, colorText } =
  Colors;

export const SignIn = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [emailRecover, setEmailRecover] = useState("");
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    document.getElementById("email-sign-in").value = "";
    document.getElementById("password-sign-in").value = "";
  };

  const handleForgotPasswordModal = () => {
    setForgotPassword(!forgotPassword);
  };

  const handleEmailSignIn = (e) => {
    setEmailSignIn(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordSignIn(e.target.value);
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();

    setLoading(true);
    const dataSignIn = { emailSignIn, passwordSignIn };

    /* try {
      const resp = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataSignIn }),
      });
      console.log(resp);
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

    clearForm();

    setLoading(false);
  };

  const handleEmailRecover = (e) => {
    setEmailRecover(e.target.value);
  };

  const handleSubmitRecover = (e) => {
    e.preventDefault();

    const dataRecover = { emailRecover };

    /* try {
      const resp = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataRecover }),
      });
      console.log(resp);
      toast.success(`Se envió un correo a ${emailRecover}.`, {
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

    setForgotPassword(!forgotPassword);
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
            Introduzca su correo electrónico para reestablecer su contraseña.
          </TextForgotPassword>
          <FormRecoverContainer>
            <Form onSubmit={handleSubmitRecover}>
              <InputRecover
                type="email"
                placeholder="Ingrese su email"
                onChange={handleEmailRecover}
                required
              />
              <ButtonRecover>Enviar</ButtonRecover>
            </Form>
          </FormRecoverContainer>
        </Content>
      </Modal>
      <Toaster />
    </FormContainer>
  );
};

const ButtonRecover = styled.button`
  font-family: ${FontFamily};
  background-color: ${primaryBlue};
  color: ${colorText};
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.7s ease-in-out;
  width: 20vw;

  :hover {
    cursor: pointer;
    background-color: ${secondaryBlue};
  }

  @media screen and (max-width: 480px) {
    width: 60%;
  }
`;

const ButtonSignIn = styled.button`
  font-family: ${FontFamily};
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
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 1vw;
    width: 60vw;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 1vw;
    width: 60vw;
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

const Form = styled.form`
  display: grid;

  .lds-ring {
    @media screen and (max-width: 480px) {
      left: 38%;
    }
  }

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const FormContainer = styled.div`
  display: block;
  text-align: center;
  margin-top: 4vw;

  @media screen and (max-width: 1380px) {
    margin-top: 2vw;
  }
`;

const FormRecoverContainer = styled(FormContainer)`
  margin-top: 0;
`;

const Input = styled.input`
  font-family: ${FontFamily};
  background-color: #fff;
  border: 2px solid ${primaryBlue};
  border-radius: 4px;
  color: #000;
  font-size: 1.2rem;
  padding: 10px;
  margin-bottom: 1rem;

  :focus {
    border-color: ${primaryRed};
    box-shadow: 0 0 0 3px rgba(65, 157, 199, 0.5);
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    margin-bottom: 3vh;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 1vh;
  }
`;

const InputRecover = styled.input`
  font-family: ${FontFamily};
  background-color: #fff;
  border: 2px solid ${primaryBlue};
  border-radius: 4px;
  color: #000;
  font-size: 1.2rem;
  padding: 10px;
  margin-bottom: 1rem;
  width: 20vw;

  :focus {
    border-color: ${primaryRed};
    box-shadow: 0 0 0 3px rgba(65, 157, 199, 0.5);
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const LogoForm = styled.img`
  @media screen and (max-width: 480px) {
    margin-bottom: 3vh !important;
    margin-top: 3vh !important;
  }

  @media screen and (max-width: 480px) {
    margin-top: 1vh !important;
    margin-bottom: 1vh !important;
  }
`;

const PasswordForgot = styled.p`
  font-size: 14px;
  color: ${secondaryBlue};

  :hover {
    cursor: pointer;
  }
`;

const TextForgotPassword = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2vw;

  @media screen and (max-width: 480px) {
    margin-top: 1vw;
    margin-bottom: 5vw;
  }
`;

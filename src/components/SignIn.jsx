import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";

import logo from "../assets/logo.png";
import Loader from "./Loader";
import Modal from "./Modal";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import { FetchPostData } from "../helpers/FetchPostData";
/* import { Home } from "./Home"; */

const { primaryBlue, primaryRed, secondaryBlue, secondaryRed, colorText } =
  Colors;

export const SignIn = (/* { user, months } */) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [remember, setRemember] = useState(false);
  const [emailRecover, setEmailRecover] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  /* const [isLoggedIn, setIsLoggedIn] = useState(false); */

  useEffect(() => {
    const storedCredentials = JSON.parse(
      localStorage.getItem("loginCredentials")
    );
    if (storedCredentials) {
      setCredentials(storedCredentials);
      /* setIsLoggedIn(true); */
    }
  }, []);

  const clearForm = () => {
    document.getElementById("email-sign-in").value = "";
    document.getElementById("password-sign-in").value = "";
  };

  const handleForgotPasswordModal = () => {
    setForgotPassword(!forgotPassword);
  };

  const handleCredentialsChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleRemember = (e) => {
    setRemember(e.target.checked);
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataSignIn = { emailSignIn, passwordSignIn };

    /* const resp = await FetchData({path:"/",data:{dataSignIn}}) 

    if (!(res instanceof Error)) {
      if (remember) {
        localStorage.setItem("loginCredentials", JSON.stringify(credentials));
      } else {
        localStorage.removeItem("loginCredentials");
      }

      clearForm();

      setLoading(false);
    }*/
  };

  const handleEmailRecover = (e) => {
    setEmailRecover(e.target.value);
  };

  const handleSubmitRecover = async (e) => {
    e.preventDefault();

    /* const resp = await FetchData({
      path: "/",
      data: {emailRecover},
      message: `Se envió un correo a ${emailRecover}.`,
    }); 
    if (!(res instanceof Error)) {
      setForgotPassword(!forgotPassword);
    }*/
  };

  /* if (isLoggedIn) {
    return <Home user={user} months={months} />;
  } else { */
  return (
    <FormContainer>
      <LogoForm src={logo} />
      <Form onSubmit={handleSubmitSignIn}>
        <Input
          id="email-sign-in"
          type="email"
          name="email"
          value={credentials.email}
          placeholder="Ingrese su email"
          onChange={handleCredentialsChange}
          required
        />
        <Input
          id="password-sign-in"
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Ingrese su contraseña"
          onChange={handleCredentialsChange}
          required
        />
        <InputCheckContainer>
          <InputCheck type="checkbox" onChange={handleRemember} />
          <Label>Recordarme</Label>
        </InputCheckContainer>
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
  /* } */
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
    left: 38%;
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

const InputCheck = styled.input`
  @media screen and (max-width: 480px) {
    margin-left: 10vw;
  }
`;

const InputCheckContainer = styled.div`
  text-align: left;
  margin: 0 0 1rem 0.5vw;
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

const Label = styled.label`
  font-weight: bold;
  margin: 0.5rem 0.5rem 0 0.5rem;
  font-style: italic;
  color: ${secondaryBlue};

  @media screen and (max-width: 480px) {
    margin-left: 1vw;
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

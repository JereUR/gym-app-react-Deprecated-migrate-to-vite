import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast, Toaster } from "react-hot-toast";

import logo from "../assets/logo.png";
import Loader from "./Loader";
import Modal from "./Modal";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import { FetchPostData } from "../helpers/FetchPostData";

const { primaryBlue, primaryRed, secondaryBlue, secondaryRed, colorText } =
  Colors;

const initialData = {
  email: "",
  password: "",
};

export const SignIn = ({ setUser }) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [emailRecover, setEmailRecover] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState(initialData);

  useEffect(() => {
    const storedCredentials = JSON.parse(
      localStorage.getItem("loginCredentials")
    );

    const remember = JSON.parse(localStorage.getItem("remember"));

    if (storedCredentials) {
      setCredentials(storedCredentials);
    }

    if (remember) {
      setRemember(remember);
    }
  }, []);

  const clearForm = () => {
    document.getElementById("email-sign-in").value = "";
    document.getElementById("password-sign-in").value = "";
    document.getElementById("remember").value = false;

    setRemember(false);
    setCredentials(initialData);
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

    const user = {
        email: credentials.email,
        password: credentials.password,
    };

    const res = await FetchPostData({
      path: "login",
      data: { user },
    });

    if (!(res instanceof Error)) {
      
      if (remember) {
        localStorage.setItem("loginCredentials", JSON.stringify(credentials));
        localStorage.setItem("remember", remember);
      } else {
        localStorage.removeItem("loginCredentials");
        localStorage.removeItem("remember");
      }

      setUser(res);

      clearForm();
      setLoading(false);
    } else {
      toast.error(res.message, {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(250, 215, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      });
      setLoading(false);
    }
  };

  const handleEmailRecover = (e) => {
    setEmailRecover(e.target.value);
  };

  const handleSubmitRecover = async (e) => {
    e.preventDefault();

    const res = await FetchPostData({
      path: "/",
      data: { emailRecover },
    });

    if (!(res instanceof Error)) {
      toast.success(`Se envió un correo a ${emailRecover}.`, {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(215, 250, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      });

      setForgotPassword(!forgotPassword);
    } else {
      toast.error(res.message, {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(250, 215, 215)",
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
          <InputCheck type="checkbox" id="remember" onChange={handleRemember} />
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
    margin-bottom: 3vw;
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
  margin-bottom: 1vw;
  @media screen and (max-width: 480px) {
    width: 80vw;
    margin-bottom: 3vh !important;
    margin-top: 3vh !important;
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

import React, { useState } from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import Modal from "./Modal";

export const SignIn = () => {
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleForgotPasswordModal = () => {
    setForgotPassword(!forgotPassword);
  };

  return (
    <FormContainer>
      <LogoForm src={logo} />
      <Form>
        <Input type="email" placeholder="Ingrese su email" />
        <Input type="password" placeholder="Ingrese su contraseña" />
        <ButtonSignIn>Iniciar Sesión</ButtonSignIn>
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
            <Form>
              <InputRecover type="email" placeholder="Ingrese su email" />
              <ButtonRecover>Enviar</ButtonRecover>
            </Form>
          </FormContainer>
        </Content>
      </Modal>
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
  background-color: rgb(250, 250, 250);
  color: #1f7da9;
`;

const PasswordForgot = styled.p`
  font-size: 14px;
  color: #1f7da9;

  :hover {
    cursor: pointer;
  }
`;

const ButtonSignIn = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #ee464f;
  color: rgb(250, 250, 250);
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.7s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: #c1393f;
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
  background-color: rgb(250, 250, 250);
  color: #1f7da9;
`;

const ButtonRecover = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #419dc7;
  color: rgb(250, 250, 250);
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.7s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: #1b7eac;
    transform: scale(1.05);
  }
`;

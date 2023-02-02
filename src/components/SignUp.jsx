import React, { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

export const SignUp = () => {
  const [register, setRegister] = useState(false);

  const handleRegisterModal = () => {
    setRegister(!register);
  };

  return (
    <FormContainer>
      <ButtonSignUp onClick={handleRegisterModal}>Registrarte</ButtonSignUp>

      <Modal state={register} setState={setRegister} title="Crear Cuenta">
        <Content>
          <FormContainer>
            <Form>
              <NameAndLastNameContainer>
                <InputName type="text" placeholder="Ingrese su nombre" />
                <Input type="text" placeholder="Ingrese su apellido" />
              </NameAndLastNameContainer>

              <Input type="email" placeholder="Ingrese su email" />
              <Input type="date" placeholder="Ingrese su fecha de nacimiento" />
              <Input type="password" placeholder="Ingrese su contraseña" />
              <Input type="password" placeholder="Confirme su contraseña" />
              <ButtonSignUp>Registrarte</ButtonSignUp>
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
`;

const NameAndLastNameContainer = styled.div``;

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

const InputName = styled.input`
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 1.5px solid rgb(150, 150, 150);
  background-color: rgb(250, 250, 250);
  color: #1f7da9;
`;

const ButtonSignUp = styled.button`
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

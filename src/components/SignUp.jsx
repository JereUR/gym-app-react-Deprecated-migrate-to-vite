import React, { useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";

import Modal from "./Modal";

export const SignUp = () => {
  const [register, setRegister] = useState(false);
  const [nameRegister, setNameRegister] = useState("");
  const [surnameRegister, setSurnameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [dateRegister, setDateRegister] = useState(null);
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisterModal = () => {
    setRegister(!register);
  };

  const handleName = (e) => {
    setNameRegister(e.target.value);
  };

  const handleSurname = (e) => {
    setSurnameRegister(e.target.value);
  };

  const handleEmail = (e) => {
    setEmailRegister(e.target.value);
  };

  const handleDate = (e) => {
    setDateRegister(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordRegister(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    if (passwordRegister === confirmPassword) {
      const dataRegister = {
        nameRegister,
        surnameRegister,
        emailRegister,
        dateRegister,
        passwordRegister,
      };

      console.log(dataRegister);
    }

    setRegister(false);
  };

  return (
    <FormContainer>
      <ButtonSignUp onClick={handleRegisterModal}>Registrarte</ButtonSignUp>

      <Modal state={register} setState={setRegister} title="Crear Cuenta">
        <Content>
          <FormContainer>
            <Form onSubmit={handleSubmitRegister}>
              <NameAndSurnameContainer>
                <InputName
                  type="text"
                  placeholder="Ingrese su nombre"
                  onChange={handleName}
                  required
                />
                <Input
                  type="text"
                  placeholder="Ingrese su apellido"
                  onChange={handleSurname}
                  required
                />
              </NameAndSurnameContainer>

              <Input
                type="email"
                placeholder="Ingrese su email"
                onChange={handleEmail}
                required
              />
              <Input
                type="date"
                placeholder="Ingrese su fecha de nacimiento"
                onChange={handleDate}
                required
              />
              <Input
                type="password"
                placeholder="Ingrese su contraseña"
                onChange={handlePassword}
                required
              />
              <Input
                type="password"
                placeholder="Confirme su contraseña"
                onChange={handleConfirmPassword}
                required
              />
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

const NameAndSurnameContainer = styled.div``;

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

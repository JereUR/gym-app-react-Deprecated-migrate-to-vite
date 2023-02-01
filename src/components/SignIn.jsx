import React from "react";
import styled from "styled-components";

export const SignIn = () => {
  return (
    <FormContainer>
      <Form>
        <Input type="email" placeholder="Ingrese su email" />
        <Input type="password" placeholder="Ingrese su contraseña" />
        <ButtonSignIn>Iniciar Sesión</ButtonSignIn>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div``;

const Form = styled.form`
  display: grid;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 1.5px solid rgb(150, 150, 150);
  background-color: rgb(250, 250, 250);
  color: #1f7da9;
`;

const ButtonSignIn = styled.button`
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

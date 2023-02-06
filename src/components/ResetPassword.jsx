import React, { useState } from "react";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";

import { user } from "../App";

const initialData = {
  newPassword: "",
  confirmPassword: "",
};

export const ResetPassword = () => {
  const [dataRecovery, setDataRecovery] = useState(initialData);
  const [errors, setErrors] = useState({});

  const onValidate = () => {
    let errorsForm = {};

    if (dataRecovery.newPassword.length < 8) {
      errorsForm.newPassword = `La contraseña debe tener más de 8 caracteres.`;
    }

    if (dataRecovery.newPassword !== dataRecovery.confirmPassword) {
      errorsForm.newPassword = `La contraseña y su confirmación no coinciden.`;
      errorsForm.confirmPassword = `La contraseña y su confirmación no coinciden.`;
    }

    return errorsForm;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataRecovery({ ...dataRecovery, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = onValidate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      console.log("Envio formulario");
      console.log(dataRecovery);
      setDataRecovery(initialData);
      toast.success("Contraseña cambiada con exito.", {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(215, 250, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      });
      setTimeout(() => {
        window.location.replace(`/usuario/:${user.username}`);
      }, 2000);
    }
  };

  return (
    <FormContainer>
      <TitleReset>Recuperar Contraseña</TitleReset>
      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="Nueva contraseña"
          name="newPassword"
          value={dataRecovery.newPassword}
          onChange={handleChange}
        />
        {errors.newPassword && <ErrorInput>{errors.newPassword}</ErrorInput>}
        <Input
          type="password"
          placeholder="Confirma nueva contraseña"
          name="confirmPassword"
          value={dataRecovery.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <ErrorInput>{errors.confirmPassword}</ErrorInput>
        )}
        <ButtonSend type="submit">Enviar</ButtonSend>
      </Form>
      <Toaster />
    </FormContainer>
  );
};

/* const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`; */

const FormContainer = styled.div`
  min-height: 200px;
  background: rgba(250, 250, 250);
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 11.5vw;
`;

const TitleReset = styled.h1`
  font-family: "Roboto", sans-serif;
  text-align: left;
  color: #419dc7;
`;

const Form = styled.form`
  display: grid;
`;

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  margin-top: 1rem;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 1.5px solid rgb(150, 150, 150);
  background-color: rgb(250, 250, 250);
  color: #1f7da9;
`;

const ButtonSend = styled.button`
  font-family: "Roboto", sans-serif;
  background-color: #419dc7;
  color: rgb(250, 250, 250);
  padding: 10px;
  margin: 10px;
  margin-top: 2rem;
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

const ErrorInput = styled.div`
  font-size: 12px;
  color: rgb(250, 90, 90);
  margin-top: 5px;
  text-align: left;
  margin-left: 0.5rem;
`;

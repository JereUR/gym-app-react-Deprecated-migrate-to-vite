import React, { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

const initialData = {
  nameRegister: "",
  surnameRegister: "",
  emailRegister: "",
  dateRegister: "",
  passwordRegister: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const [register, setRegister] = useState(false);
  const [dataRegister, setDataRegister] = useState(initialData);
  const [errors, setErrors] = useState({});

  const onValidate = () => {
    let errorsForm = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!dataRegister.nameRegister.trim()) {
      errorsForm.nameRegister = `Este campo no debe ser vacío.`;
    } else if (!regexName.test(dataRegister.nameRegister)) {
      errorsForm.nameRegister = "Este campo solo acepta letras y espacios.";
    }

    if (!dataRegister.surnameRegister.trim()) {
      errorsForm.surnameRegister = `Este campo no debe ser vacío.`;
    } else if (!regexName.test(dataRegister.surnameRegister)) {
      errorsForm.surnameRegister = "Este campo solo acepta letras y espacios.";
    }

    if (!dataRegister.emailRegister.trim()) {
      errorsForm.emailRegister = `Este campo no debe ser vacío.`;
    } else if (!regexEmail.test(dataRegister.emailRegister)) {
      errorsForm.emailRegister = "Correo no válido.";
    }

    if (!dataRegister.dateRegister.trim()) {
      errorsForm.dateRegister = `Este campo no debe ser vacío.`;
    }

    if (dataRegister.passwordRegister.length < 8) {
      errorsForm.passwordRegister = `La contraseña debe tener más de 8 caracteres.`;
    }

    if (dataRegister.passwordRegister !== dataRegister.confirmPassword) {
      errorsForm.passwordRegister = `La contraseña y su confirmación no coinciden.`;
      errorsForm.confirmPassword = `La contraseña y su confirmación no coinciden.`;
    }

    return errorsForm;
  };

  const handleRegisterModal = () => {
    setRegister(!register);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataRegister({ ...dataRegister, [name]: value });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    const err = onValidate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      console.log("Envio formulario");
      console.log(dataRegister);
      setDataRegister(initialData);
      setRegister(false);
    }
  };

  return (
    <FormContainer>
      <ButtonSignUp onClick={handleRegisterModal}>Registrarte</ButtonSignUp>

      <Modal state={register} setState={setRegister} title="Crear Cuenta">
        <Content>
          <FormContainer>
            <Form onSubmit={handleSubmitRegister}>
              <NameAndSurnameContainer>
                <InputContainer>
                  <InputName
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="nameRegister"
                    value={dataRegister.nameRegister}
                    onChange={handleChange}
                  />
                  {errors.nameRegister && (
                    <ErrorInputNameSurname>
                      {errors.nameRegister}
                    </ErrorInputNameSurname>
                  )}
                </InputContainer>
                <InputContainer>
                  <Input
                    type="text"
                    placeholder="Ingrese su apellido"
                    name="surnameRegister"
                    value={dataRegister.surnameRegister}
                    onChange={handleChange}
                  />
                  {errors.surnameRegister && (
                    <ErrorInputNameSurname>
                      {errors.surnameRegister}
                    </ErrorInputNameSurname>
                  )}
                </InputContainer>
              </NameAndSurnameContainer>
              <InputContainer>
                <Input
                  type="email"
                  placeholder="Ingrese su email"
                  name="emailRegister"
                  value={dataRegister.emailRegister}
                  onChange={handleChange}
                />
                {errors.emailRegister && (
                  <ErrorInput>{errors.emailRegister}</ErrorInput>
                )}
              </InputContainer>
              <InputContainer>
                <Input
                  type="date"
                  placeholder="Ingrese su fecha de nacimiento"
                  name="dateRegister"
                  value={dataRegister.dateRegister}
                  onChange={handleChange}
                />
                {errors.dateRegister && (
                  <ErrorInput>{errors.dateRegister}</ErrorInput>
                )}
              </InputContainer>
              <InputContainer>
                <Input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="passwordRegister"
                  value={dataRegister.passwordRegister}
                  onChange={handleChange}
                />
                {errors.passwordRegister && (
                  <ErrorInput>{errors.passwordRegister}</ErrorInput>
                )}
              </InputContainer>
              <InputContainer>
                <Input
                  type="password"
                  placeholder="Confirme su contraseña"
                  name="confirmPassword"
                  value={dataRegister.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <ErrorInput>{errors.confirmPassword}</ErrorInput>
                )}
              </InputContainer>
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

const InputContainer = styled.div``;

const NameAndSurnameContainer = styled.div`
  display: flex;
  margin-left: 0.9rem;
  margin-right: 0.9rem;
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
  width: 90%;
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

const ErrorInput = styled.div`
  font-size: 12px;
  color: rgb(250, 90, 90);
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const ErrorInputNameSurname = styled.div`
  font-size: 12px;
  color: rgb(250, 90, 90);
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 1rem;
`;

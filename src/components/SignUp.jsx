import React, { useState } from "react";
import styled from "styled-components";
import { Toaster, toast } from "react-hot-toast";

import Modal from "./Modal";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";

const { primaryBlue, primaryRed, secondaryBlue, colorText, errorInput } =
  Colors;

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

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    const err = onValidate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      /* try {
          const resp = await fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({dataRegister }),
          });
          toast.success("Registro exitoso.", {
            position: "top-right",
            duration: 6000,
            style: {
              background: "rgba(215, 250, 215)",
              fontSize: "1rem",
              fontWeight: "500",
            },
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
              <ButtonSignUpModal>Registrarte</ButtonSignUpModal>
            </Form>
          </FormContainer>
        </Content>
      </Modal>
      <Toaster />
    </FormContainer>
  );
};

const ButtonSignUp = styled.button`
  font-family: ${FontFamily};
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
  }

  @media screen and (max-width: 450px) {
    width: 60vw;
    margin-top: 5vh;
    margin-left: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    margin-top: 1.5vh;
  }
`;

const ButtonSignUpModal = styled(ButtonSignUp)`
  @media screen and (max-width: 450px) {
    width: 70vw;
    margin-top: 2vh;
    margin-left: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    margin-top: 1.5vh;
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

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const ErrorInputNameSurname = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 1rem;
`;

const Form = styled.form`
  display: grid;
  margin-top: 1rem;
`;

const FormContainer = styled.div`
  display: block;
  text-align: center;
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
  width: 90%;

  :focus {
    border-color: ${primaryRed};
    box-shadow: 0 0 0 3px rgba(65, 157, 199, 0.5);
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
    margin-bottom: 2vh;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const InputContainer = styled.div``;

const InputName = styled.input`
  font-family: ${FontFamily};
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 2px solid ${primaryBlue};
  background-color: #fff;
  color: #000;

  @media screen and (max-width: 450px) {
    width: 30vw;
    margin-left: -0.6rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const NameAndSurnameContainer = styled.div`
  display: flex;
  margin-left: 0.9rem;
  margin-right: 0.9rem;
`;

import React from "react";
import styled from "styled-components";
import { IoMdAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";

import { FontFamily } from "../constants/Fonts";
import { Colors } from "../constants/Colors";

const {
  primaryBlue,
  primaryRed,
  secondaryBlue,
  secondaryRed,
  success,
  errorInput,
  backgroundSuccess,
} = Colors;

export const FormAditionalInfo = ({
  handleChange,
  form,
  errors,
  handleChangeMedication,
  handleAddMedication,
  errorMedication,
  newMedications,
  deleteMedication,
}) => {
  return (
    <Form>
      <FirstPart>
        <InputContainer>
          <LabelForm>Peso</LabelForm>
          <InputForm
            type="text"
            name="height"
            onChange={handleChange}
            value={form.height}
          />
          {errors.height && <ErrorInput>{errors.height}</ErrorInput>}
        </InputContainer>
        <InputContainer>
          <LabelForm>Altura</LabelForm>
          <InputForm
            type="text"
            name="weight"
            onChange={handleChange}
            value={form.weight}
          />
          {errors.weight && <ErrorInput>{errors.weight}</ErrorInput>}
        </InputContainer>
      </FirstPart>
      <MedicationForm>
        <Title>Medicaciones</Title>
        <InputContainer>
          <InputForm
            type="text"
            name="medication"
            onChange={handleChangeMedication}
            placeholder="Ingrese nueva medicación"
            id="medication"
          />
          <IoMdAddCircle
            fontSize="3.5rem"
            type="button"
            onClick={handleAddMedication}
            className="add-btn add-info-form"
          />
        </InputContainer>
        {errorMedication && <ErrorInput>{errorMedication}</ErrorInput>}
        {newMedications.length > 0 ? (
          <List>
            {newMedications.map((el, index) => (
              <MedicationContainer key={index}>
                <MedicationItem>{el}</MedicationItem>
                <FaTrashAlt
                  fontSize="1.1rem"
                  color={secondaryRed}
                  onClick={() => deleteMedication(el)}
                />
              </MedicationContainer>
            ))}
          </List>
        ) : (
          <NoData>Sin medicación.</NoData>
        )}
      </MedicationForm>
    </Form>
  );
};

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const FirstPart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Form = styled.form`
  display: grid;
  margin: 1rem 0 0 1rem;
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

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2vh;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

const InputContainer = styled.div`
  display: block;
  align-items: flex-start;
`;

const InputForm = styled(Input)`
  width: 80%;
`;

const LabelForm = styled.label`
  margin: 0 0 1vw 0;
  font-style: italic;
  color: ${secondaryBlue};

  @media screen and (max-width: 480px) {
    margin-left: 8vw;
    margin-bottom: 1rem;
  }
`;

const List = styled.ol``;

const MedicationContainer = styled.div`
  display: flex;
  padding: 0.5vw 2vw 0.5vw 2vw;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: ${backgroundSuccess};
  width: max-content;

  @media screen and (max-width: 480px) {
    padding: 1.5vw;
    margin-left: -5vw;
  }

  svg {
    color: ${secondaryRed};
    padding-left: 20vw;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
      padding-left: 15vw;
      padding-right: 2vw;
    }
  }

  svg:hover {
    cursor: pointer;
  }
`;

const MedicationItem = styled.li`
  font-size: 1.1rem;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

  ::marker {
    font-weight: bold;
    color: ${secondaryRed};
  }
`;

const MedicationForm = styled.div`
  input {
    width: 70%;
    margin-right: 3vw;
  }

  svg {
    position: relative;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    color: ${success};
    transition: all 0.6s ease;

    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
`;

const NoData = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
`;

const Title = styled.h2`
  color: rgb(130, 130, 130);
  margin-bottom: 0;
`;

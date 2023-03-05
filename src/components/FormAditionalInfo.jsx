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
  handleChangeInjury,
  handleChangeTreatment,
  handleAddInjury,
  errorInjury,
  newInjuries,
  deleteInjury,
}) => {
  return (
    <Form>
      <FirstPart>
        <InputContainer>
          <LabelForm>Peso (Kg.)</LabelForm>
          <InputForm
            type="text"
            name="weight"
            onChange={handleChange}
            value={form.weight}
          />
          {errors.weight && <ErrorInput>{errors.weight}</ErrorInput>}
        </InputContainer>
        <InputContainer>
          <LabelForm>Altura (Cm.)</LabelForm>
          <InputForm
            type="text"
            name="height"
            onChange={handleChange}
            value={form.height}
          />
          {errors.height && <ErrorInput>{errors.height}</ErrorInput>}
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
      <InjuriesForm>
        <Title>Lesiones</Title>
        <InputContainerTwo>
          <LabelForm>Lesión</LabelForm>
          <InputForm
            type="text"
            name="injury"
            onChange={handleChangeInjury}
            placeholder="Ingrese nueva lesión"
            id="injury"
          />
          {errorInjury.injury && <ErrorInput>{errorInjury.injury}</ErrorInput>}
        </InputContainerTwo>
        <InputContainerTwo>
          <LabelForm>Tratamiento (Opcional)</LabelForm>
          <InputForm
            type="text"
            name="treatment"
            onChange={handleChangeTreatment}
            placeholder="Ingrese tratamiento"
            id="treatment"
          />
          {errorInjury.treatment && (
            <ErrorInput>{errorInjury.treatment}</ErrorInput>
          )}
        </InputContainerTwo>
        <IoMdAddCircle
          fontSize="3.5rem"
          type="button"
          onClick={handleAddInjury}
          className="add-btn add-info-form"
        />
        {newInjuries.length > 0 ? (
          <List>
            {newInjuries.map((el, index) => (
              <InjuryContainer key={index}>
                <InjuryItem>
                  {el.injury} -{" "}
                  {el.treatment ? `${el.treatment}` : "Sin tratamiento"}
                </InjuryItem>
                <FaTrashAlt
                  fontSize="1.1rem"
                  color={secondaryRed}
                  onClick={() => deleteInjury(el.injury)}
                />
              </InjuryContainer>
            ))}
          </List>
        ) : (
          <NoData>Sin lesiones.</NoData>
        )}
      </InjuriesForm>
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

const InjuriesForm = styled.div`
  input {
    width: 70%;
    margin-right: 3vw;
  }

  .add-info-form {
    position: relative;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    color: ${success};
    transition: all 0.6s ease;
    top: -5.2vw;
    left: 30vw;

    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  h2 {
    @media screen and (max-width: 480px) {
      margin-bottom: -6vw;
    }
  }

  ol {
    margin-top: -1vw;
  }

  p {
    margin-top: -1vw;
  }
`;

const InjuryContainer = styled.div`
  display: flex;
  padding: 0.5vw 2vw 0.5vw 2vw;
  margin-bottom: 1rem;
  margin-left: -2vw;
  border-radius: 1rem;
  background-color: ${backgroundSuccess};
  width: 90%;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    padding: 1.5vw 5vw 1.5vw 5vw;
    margin-left: -7vw;
    width: 90%;
  }

  svg {
    color: ${secondaryRed};

    @media screen and (max-width: 480px) {
      font-size: 1rem;
      padding-right: 2vw;
    }
  }

  svg:hover {
    cursor: pointer;
  }
`;

const InjuryItem = styled.li`
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

  svg {
    top: 1.2vw;

    @media screen and (max-width: 480px) {
      position: absolute;
      top: 9vw;
    }
  }
`;

const InputContainerTwo = styled(InputContainer)`
  display: grid;
  margin-bottom: -1vw;

  label {
    margin-top: 1vw;
    margin-bottom: 0;
  }
`;

const InputForm = styled(Input)`
  width: 80%;
  margin-top: 0.5vw;
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

const MedicationContainer = styled(InjuryContainer)``;

const MedicationItem = styled(InjuryItem)``;

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

  h2 {
    @media screen and (max-width: 480px) {
      margin-bottom: -6vw;
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

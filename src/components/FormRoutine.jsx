import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import db from "../static/db.json";
import { ExerciseComponent } from "./ExerciseComponent";

const {
  errorInput,
  primaryRed,
  primaryBlue,
  secondaryRed,
  secondaryBlue,
  backgroundText,
  backgroundBlue,
  success,
} = Colors;

const FormRoutine = () => {
  const [forData, setForData] = useState(null);
  const [dayData, setDayData] = useState(null);
  const [measure, setMeasure] = useState(null);
  const [count, setCount] = useState(null);
  const [zone, setZone] = useState(null);
  const [typeExercise, setTypeExercise] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [errorsExercises, setErrorsExercises] = useState({});
  const [errorsRoutine, setErrorsRoutine] = useState({});

  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  const clearFormRoutine = () => {
    document.getElementById("measureExercise").value = null;
    document.getElementById("countExercise").value = null;
    document.getElementById("zone").value = null;
    document.getElementById("exercise").value = null;

    setMeasure(null);
    setCount(null);
    setTypeExercise(null);
  };

  const clearData = () => {
    setForData(null);
    setDayData(null);

    setExercises([]);
  };

  const onValidateExercises = () => {
    let errorsForm = {};

    if (measure === null) {
      errorsForm.measure = "Debe especificar tipo de medida.";
    }

    if (count === null) {
      errorsForm.count = "Debe especificar cantidad.";
    }

    if (count <= 0 && count != null) {
      errorsForm.count = "La cantidad debe ser mayor a 0.";
    }

    if (typeExercise === null) {
      errorsForm.typeExercise = "Debe especificar tipo de ejercicio.";
    }

    return errorsForm;
  };

  const onValidateRoutine = () => {
    let errorsForm = {};

    if (forData === null) {
      errorsForm.forData = "Debe especificar destinatario.";
    }

    if (dayData === null) {
      errorsForm.dayData = "Debe especificar día de rutina.";
    }

    if (exercises.length === 0) {
      errorsForm.exercises = "La rutina esta vacia.";
    }

    return errorsForm;
  };

  const handleFor = (e) => {
    setForData(e.target.value);
  };

  const handleChangeFor = () => {
    setForData(null);
  };

  const handleDay = (e) => {
    setDayData(e.target.value);
  };

  const handleChangeDay = () => {
    setDayData(null);
  };

  const handleMeasure = (e) => {
    setMeasure(e.target.value);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  const handleZone = (e) => {
    setZone(e.target.value);
    document.getElementById("exercise").value = null;
  };

  const handleTypeExercise = (e) => {
    setTypeExercise(e.target.value);
  };

  const handleAddExercise = () => {
    timeout(2000);

    const err = onValidateExercises();
    setErrorsExercises(err);

    if (Object.keys(err).length === 0) {
      const e = { measure, count, typeExercise, id: exercises.length };
      setExercises(exercises.concat(e));
      clearFormRoutine();
    } else {
      console.log("Error ejercicio");
    }
  };

  const deleteData = (id) => {
    let newData = exercises.filter((el) => el.id !== id);
    setExercises(newData);
  };

  const handleSubmitRoutine = (e) => {
    e.preventDefault();

    const err = onValidateRoutine();
    setErrorsRoutine(err);

    if (Object.keys(err).length === 0) {
      const routineDay = {
        forData,
        dayData,
        exercises,
      };

      console.log(routineDay);
      clearData();
    } else {
      console.log("Error rutina");
    }
  };

  return (
    <Form onSubmit={handleSubmitRoutine}>
      <ForPartContainer>
        {!forData ? (
          <InputContainer>
            <Label>Para:</Label>
            <SelectFirst onChange={handleFor} id="for-data">
              <Option value="null">Seleccione un usuario</Option>
              {db.users.map((el, index) => (
                <Option key={index} value={el.email}>
                  {el.username} {el.surname} - {el.email}
                </Option>
              ))}
            </SelectFirst>
            {errorsRoutine.forData && (
              <ErrorInput>{errorsRoutine.forData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>Rutina para {forData}</ForText>
            <FaEdit size="1.5rem" onClick={handleChangeFor} />
          </ForTextContainer>
        )}
      </ForPartContainer>
      <DayPartContainer>
        {!dayData ? (
          <InputContainer>
            <Label>Día:</Label>
            <SelectFirst onChange={handleDay}>
              <Option value="null">Seleccione un día</Option>
              {db.days.map((el, index) => (
                <Option value={el.value} key={index}>
                  {el.day}
                </Option>
              ))}
            </SelectFirst>
            {errorsRoutine.dayData && (
              <ErrorInput>{errorsRoutine.dayData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>
              Para el día {db.days.find((el) => el.value === dayData).day}
            </ForText>
            <FaEdit size="1.5rem" onClick={handleChangeDay} />
          </ForTextContainer>
        )}
      </DayPartContainer>
      <DataContainer>
        <InputContainer>
          <Label>Cantidad</Label>
          <Input
            type="number"
            onChange={handleCount}
            id="countExercise"
            placeholder="Determine cantidad"
          />
          {errorsExercises.count && (
            <ErrorInput>{errorsExercises.count}</ErrorInput>
          )}
        </InputContainer>
        <InputContainer>
          <Label>Tipo de medida</Label>
          <Select onChange={handleMeasure} id="measureExercise">
            <Option value="null">Seleccione una medida</Option>
            <Option value="Repeticiones">Repeticiones</Option>
            <Option value="Segundos">Segundos</Option>
          </Select>
          {errorsExercises.measure && (
            <ErrorInput>{errorsExercises.measure}</ErrorInput>
          )}
        </InputContainer>
        <InputContainer>
          <Label>Zona del cuerpo</Label>
          <Select onChange={handleZone} id="zone">
            <Option value="null">Seleccione una zona</Option>
            {db.exercises.Zonas.map((el, index) => (
              <Option value={el} key={index}>
                {el}
              </Option>
            ))}
          </Select>
        </InputContainer>
        <InputContainer>
          <Label>Ejercicio</Label>
          <Select onChange={handleTypeExercise} id="exercise">
            <Option value="null">Seleccione un ejercicio</Option>
            {zone &&
              db.exercises[zone].map((el, index) => (
                <Option value={el} key={index}>
                  {el}
                </Option>
              ))}
          </Select>
          {errorsExercises.typeExercise && (
            <ErrorInput>{errorsExercises.typeExercise}</ErrorInput>
          )}
        </InputContainer>
        <IoMdAddCircle
          fontSize="3.5rem"
          type="button"
          onClick={handleAddExercise}
        />
      </DataContainer>
      {exercises && (
        <List>
          {exercises.map((el) => (
            <ExerciseComponent key={el.id} el={el} deleteData={deleteData} />
          ))}
        </List>
      )}
      {errorsRoutine.exercises && (
        <ErrorInput>{errorsRoutine.exercises}</ErrorInput>
      )}
      <ButtonSubmit type="submit">Enviar</ButtonSubmit>
    </Form>
  );
};

const ButtonSubmit = styled.button`
  font-family: ${FontFamily};
  font-size: 1.8rem;
  font-weight: 500;
  width: 100%;
  padding: 10px;
  margin-top: 1rem;
  border: none;
  background-color: ${primaryRed};
  border-radius: 1rem;
  transition: all 0.6s ease;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const DataContainer = styled.div`
  svg {
    position: relative;
    top: 3vw;
    font-weight: 500;
    margin-left: 5vw;
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

const DayPartContainer = styled.div``;

const ErrorInput = styled.div`
  font-size: 15px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 1rem;
`;

const Form = styled.form`
  padding: 0 5vw 0 5vw;
`;

const ForPartContainer = styled.div``;

const ForText = styled.p`
  margin-left: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${primaryRed};
  font-style: italic;
  border: 3px solid rgb(117, 112, 112);
  border-radius: 1rem;
`;

const ForTextContainer = styled.div`
  display: flex;

  svg {
    color: ${secondaryBlue};
    padding: 1rem;
    transition: all 0.7s ease;
    margin-top: 2.5rem;
  }

  svg:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: ${secondaryRed};
  }
`;

const Input = styled.input`
  font-family: ${FontFamily};
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 8px;
  background-color: ${backgroundBlue};
`;

const InputContainer = styled.div`
  display: inline-grid;
  margin: 1rem;
  line-height: 2.5rem;
`;

const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
`;

const List = styled.ol``;

const Option = styled.option``;

const Select = styled.select`
  font-family: ${FontFamily};
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 8px;
  background-color: ${backgroundBlue};

  :hover {
    cursor: pointer;
  }
`;

const SelectFirst = styled(Select)`
  width: 30vw;
`;

export default FormRoutine;

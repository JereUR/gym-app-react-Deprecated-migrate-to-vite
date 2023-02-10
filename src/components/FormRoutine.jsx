import React, { useState } from "react";
import styled from "styled-components";

import { Colors } from "../constants/Colors";
import db from "../static/db.json";
import { ExerciseComponent } from "./ExerciseComponent";

const { errorInput } = Colors;

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
    document.getElementById("measure").value = null;
    document.getElementById("count").value = null;
    document.getElementById("zone").value = null;
    document.getElementById("exercise").value = null;

    setMeasure(null);
    setCount(null);
    setTypeExercise(null);
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
      setExercises([]);
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
            <Select onChange={handleFor}>
              <Option value="null">Seleccione un usuario</Option>
              {db.users.map((el, index) => (
                <Option key={index} value={el.email}>
                  {el.username} {el.surname} - {el.email}
                </Option>
              ))}
            </Select>
            {errorsRoutine.forData && (
              <ErrorInput>{errorsRoutine.forData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>Rutina para {forData}</ForText>
            <ButtonForChange onClick={handleChangeFor}>
              Cambiar destinatario
            </ButtonForChange>
          </ForTextContainer>
        )}
      </ForPartContainer>
      <DayPartContainer>
        {!dayData ? (
          <InputContainer>
            <Label>Día:</Label>
            <Select onChange={handleDay}>
              <Option value="null">Seleccione un día</Option>
              {db.days.map((el, index) => (
                <Option value={el.value} key={index}>
                  {el.day}
                </Option>
              ))}
            </Select>
            {errorsRoutine.dayData && (
              <ErrorInput>{errorsRoutine.dayData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>
              Día {db.days.find((el) => el.value === dayData).day}
            </ForText>
            <ButtonForChange onClick={handleChangeDay}>
              Cambiar día
            </ButtonForChange>
          </ForTextContainer>
        )}
      </DayPartContainer>
      <DataContainer>
        <InputContainer>
          <Label>Tipo de medida</Label>
          <Select onChange={handleMeasure} id="measure">
            <Option value="null">Seleccione una medida</Option>
            <Option value="Repeticiones">Repeticiones</Option>
            <Option value="Segundos">Segundos</Option>
          </Select>
          {errorsExercises.measure && (
            <ErrorInput>{errorsExercises.measure}</ErrorInput>
          )}
        </InputContainer>
        <InputContainer>
          <Label>Cantidad</Label>
          <Input type="number" onChange={handleCount} id="count" />
          {errorsExercises.count && (
            <ErrorInput>{errorsExercises.count}</ErrorInput>
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
        <AddExercise type="button" onClick={handleAddExercise}>
          Agregar ejercicio
        </AddExercise>
      </DataContainer>
      {exercises && (
        <List>
          {exercises.map((el, index) => (
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

const Form = styled.form``;

const ForPartContainer = styled.div``;

const ForTextContainer = styled.div``;

const ButtonForChange = styled.button``;

const DayPartContainer = styled.div``;

const DataContainer = styled.div``;

const InputContainer = styled.div`
  display: inline-grid;
  margin: 1rem;
`;

const Label = styled.label``;

const Select = styled.select``;

const Option = styled.option``;

const ForText = styled.p``;

const Input = styled.input``;

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const AddExercise = styled.button``;

const List = styled.ol``;

const ButtonSubmit = styled.button``;

export default FormRoutine;

import React, { useState } from "react";
import styled from "styled-components";

import { Colors } from "../constants/Colors";
import db from "../static/db.json";
import { ExerciseComponent } from "./ExerciseComponent";

const { secondaryBlue, backgroundText } = Colors;

export const AdminPage = () => {
  const [measure, setMeasure] = useState(null);
  const [count, setCount] = useState(null);
  const [zone, setZone] = useState(null);
  const [typeExercise, setTypeExercise] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [routine, setRoutine] = useState(null);

  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  const clearFormRoutine = () => {
    document.getElementById("measure").value = null;
    document.getElementById("count").value = null;
    document.getElementById("zone").value = null;
    document.getElementById("exercise").value = null;
  };

  const handleMeasure = (e) => {
    setMeasure(e.target.value);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  const handleZone = (e) => {
    setZone(e.target.value);
  };

  const handleTypeExercise = (e) => {
    setTypeExercise(e.target.value);
  };

  const handleAddExercise = () => {
    timeout(2000);
    const e = { measure, count, typeExercise, id: exercises.length };

    setExercises(exercises.concat(e));
    clearFormRoutine();
  };

  const deleteData = (id) => {
    let newData = exercises.filter((el) => el.id !== id);
    setExercises(newData);
  };

  const handleSubmitRoutine = (e) => {
    e.preventDefault();

    setRoutine(exercises);
    timeout(3000);
    console.log(routine);
    setExercises([]);
  };

  return (
    <AdminContainer>
      <AddRoutineContainer>
        <Title>Agregar rutina</Title>
        <FormRoutine onSubmit={handleSubmitRoutine}>
          <InputContainer>
            <Label>Tipo de medida</Label>
            <Select onChange={handleMeasure} id="measure">
              <Option value="null">Seleccione una</Option>
              <Option value="Repeticiones">Repeticiones</Option>
              <Option value="Segundos">Segundos</Option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>Cantidad</Label>
            <Input type="number" onChange={handleCount} id="count" />
          </InputContainer>
          <InputContainer>
            <Label>Zona del cuerpo</Label>
            <Select onChange={handleZone} id="zone">
              <Option value="null">Seleccione una</Option>
              {db.Zonas.map((el, index) => (
                <Option value={el} key={index}>
                  {el}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>Ejercicio</Label>
            <Select onChange={handleTypeExercise} id="exercise">
              <Option value="null">Seleccione una</Option>
              {zone &&
                db[zone].map((el, index) => (
                  <Option value={el} key={index}>
                    {el}
                  </Option>
                ))}
            </Select>
          </InputContainer>
          <AddExercise type="button" onClick={handleAddExercise}>
            Agregar ejercicio
          </AddExercise>
          {exercises && (
            <List>
              {exercises.map((el, index) => (
                <ExerciseComponent
                  key={el.id}
                  el={el}
                  deleteData={deleteData}
                />
              ))}
            </List>
          )}
          <ButtonSubmit type="submit">Enviar</ButtonSubmit>
        </FormRoutine>
      </AddRoutineContainer>
      <Hr />
      <AddNutritionalPlan>
        <Title>Agregar plan nutricional</Title>
        <FormNutritionalPlan></FormNutritionalPlan>
      </AddNutritionalPlan>
      <Hr />
      <BillSection>
        <Title>Agregar pago</Title>
        <FormAddBill></FormAddBill>
        <Hr />
        <Title>Agregar próximo pago</Title>
        <FormAddNextPay></FormAddNextPay>
      </BillSection>
    </AdminContainer>
  );
};

const AdminContainer = styled.div``;

const AddRoutineContainer = styled.div``;

const Title = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  color: ${secondaryBlue};
  margin-left: 2vw;
  border-radius: 1rem;
`;

const FormRoutine = styled.form``;

const InputContainer = styled.div`
  display: inline-grid;
  margin: 1rem;
`;

const Label = styled.label``;

const Select = styled.select``;

const Option = styled.option``;

const Input = styled.input``;

const AddExercise = styled.button``;

const List = styled.ol``;

const ButtonSubmit = styled.button``;

const Hr = styled.hr`
  background-color: ${backgroundText};
  border: 0;
  height: 0.1rem;
  width: 90%;
  margin-bottom: 4rem;
  border-radius: 100px;
`;

const AddNutritionalPlan = styled(AdminContainer)``;

const FormNutritionalPlan = styled.form``;

const BillSection = styled(AdminContainer)``;

const FormAddBill = styled.form``;

const FormAddNextPay = styled.form``;

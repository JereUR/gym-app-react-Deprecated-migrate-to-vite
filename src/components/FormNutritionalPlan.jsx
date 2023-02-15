import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { Colors } from "../constants/Colors";
import db from "../static/db.json";
import { MealComponent } from "./MealComponent";

const { errorInput } = Colors;

export const FormNutritionalPlan = () => {
  const [forData, setForData] = useState(null);
  const [dayData, setDayData] = useState(null);
  const [mealData, setMealData] = useState(null);
  const [count, setCount] = useState(null);
  const [measure, setMeasure] = useState(null);
  const [type, setType] = useState(null);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [snack, setSnack] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [meals, setMeals] = useState([]);
  const [errorsPlan, setErrorsPlan] = useState({});
  const [errorsMeal, setErrorsMeal] = useState({});

  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  const clearFormMeal = () => {
    document.getElementById("countMeal").value = null;
    document.getElementById("measureMeal").value = null;
    document.getElementById("type").value = null;

    setCount(null);
    setMeasure(null);
    setType(null);
  };

  const clearData = () => {
    setForData(null);
    setDayData(null);
    setMealData(null);

    setBreakfast([]);
    setLunch([]);
    setSnack([]);
    setDinner([]);
  };

  const onValidateMeal = () => {
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

    if (type === null || type === "") {
      errorsForm.type = "Debe especificar tipo de comida.";
    }

    if (mealData === null) {
      errorsForm.mealData = "Debe especificar comida.";
    }

    return errorsForm;
  };

  const onValidatePlan = () => {
    let errorsForm = {};

    if (forData === null) {
      errorsForm.forData = "Debe especificar destinatario.";
    }

    if (dayData === null) {
      errorsForm.dayData = "Debe especificar día de plan nutricional.";
    }

    if (mealData === null) {
      errorsForm.mealData =
        "Debe especificar tipo de comida de plan nutricional.";
    }

    if (
      breakfast.length === 0 &&
      lunch.length === 0 &&
      snack.length === 0 &&
      dinner.length === 0
    ) {
      errorsForm.planData = "El plan nutricional está vacio.";
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

  const handleMeal = (e) => {
    setMealData(e.target.value);
  };

  const handleChangeMeal = () => {
    setMealData(null);
  };

  const handleMeasure = (e) => {
    setMeasure(e.target.value);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const deleteData = (id) => {
    let newData = meals.filter((el) => el.id !== id);
    setMeals(newData);
  };

  const handleAddMeal = () => {
    timeout(2000);

    const err = onValidateMeal();
    setErrorsMeal(err);

    if (Object.keys(err).length === 0) {
      switch (mealData) {
        case "breakfast":
          const bData = { measure, count, type, id: breakfast.length };
          setBreakfast(breakfast.concat(bData));
          break;
        case "lunch":
          const lData = { measure, count, type, id: lunch.length };
          setLunch(lunch.concat(lData));
          break;
        case "snack":
          const sData = { measure, count, type, id: snack.length };
          setSnack(snack.concat(sData));
          break;
        case "dinner":
          const dData = { measure, count, type, id: dinner.length };
          setDinner(dinner.concat(dData));
          break;
        default:
          break;
      }
      console.log(meals);
      clearFormMeal();
    } else {
      console.log("Error comida");
    }
  };

  const handleSubmitPlan = (e) => {
    e.preventDefault();

    const err = onValidatePlan();
    setErrorsPlan(err);

    if (Object.keys(err).length === 0) {
      const planDay = {
        forData,
        dayData,
        breakfast,
        lunch,
        snack,
        dinner,
      };

      clearData();
    } else {
      console.log("Error plan");
    }
  };

  return (
    <Form onSubmit={handleSubmitPlan}>
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
            {errorsPlan.forData && (
              <ErrorInput>{errorsPlan.forData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>Comida para {forData}</ForText>
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
            {errorsPlan.dayData && (
              <ErrorInput>{errorsPlan.dayData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>
              Día: {db.days.find((el) => el.value === dayData).day}
            </ForText>
            <ButtonForChange onClick={handleChangeDay}>
              Cambiar día
            </ButtonForChange>
          </ForTextContainer>
        )}
      </DayPartContainer>
      <MealPartContainer>
        {!mealData ? (
          <InputContainer>
            <Label>Comida:</Label>
            <Select onChange={handleMeal}>
              <Option value="null">Seleccione una comida</Option>
              {db.meals.map((el, index) => (
                <Option value={el.value} key={index}>
                  {el.meal}
                </Option>
              ))}
            </Select>
            {errorsPlan.mealData && (
              <ErrorInput>{errorsPlan.mealData}</ErrorInput>
            )}
            {errorsMeal.mealData && (
              <ErrorInput>{errorsMeal.mealData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>
              Comida: {db.meals.find((el) => el.value === mealData).meal}
            </ForText>
            <ButtonForChange onClick={handleChangeMeal}>
              Cambiar comida
            </ButtonForChange>
          </ForTextContainer>
        )}
      </MealPartContainer>
      <DataContainer>
        <InputContainer>
          <Label>Cantidad</Label>
          <Input
            type="number"
            onChange={handleCount}
            id="countMeal"
            placeholder="Determine cantidad"
          />
          {errorsMeal.count && <ErrorInput>{errorsMeal.count}</ErrorInput>}
        </InputContainer>
        <InputContainer>
          <Label>Tipo de medida</Label>
          <Select onChange={handleMeasure} id="measureMeal">
            <Option value="null">Seleccione una medida</Option>
            <Option value="Unidades">Unidades</Option>
            <Option value="Gramos">Gramos</Option>
          </Select>
          {errorsMeal.measure && <ErrorInput>{errorsMeal.measure}</ErrorInput>}
        </InputContainer>
        <InputContainer>
          <Label>Tipo de comida</Label>
          <Input
            type="text"
            onChange={handleType}
            id="type"
            placeholder="Especifique qué tipo de comida consumirá"
          />
          {errorsMeal.type && <ErrorInput>{errorsMeal.type}</ErrorInput>}
        </InputContainer>
        <AddMeal type="button" onClick={handleAddMeal}>
          Agregar comida
        </AddMeal>
      </DataContainer>
      <Type>Plan</Type>
      {breakfast.length > 0 && (
        <MealContainer>
          <MealName>Desayuno:</MealName>
          <List>
            {breakfast.map((el) => (
              <MealComponent key={el.id} el={el} deleteData={deleteData} />
            ))}
          </List>
        </MealContainer>
      )}
      {lunch.length > 0 && (
        <MealContainer>
          <MealName>Almuerzo:</MealName>
          <List>
            {lunch.map((el) => (
              <MealComponent key={el.id} el={el} deleteData={deleteData} />
            ))}
          </List>
        </MealContainer>
      )}
      {snack.length > 0 && (
        <MealContainer>
          <MealName>Merienda:</MealName>
          <List>
            {snack.map((el) => (
              <MealComponent key={el.id} el={el} deleteData={deleteData} />
            ))}
          </List>
        </MealContainer>
      )}
      {dinner.length > 0 && (
        <MealContainer>
          <MealName>Cena:</MealName>
          <List>
            {dinner.map((el) => (
              <MealComponent key={el.id} el={el} deleteData={deleteData} />
            ))}
          </List>
        </MealContainer>
      )}
      {errorsPlan.planData && <ErrorInput>{errorsPlan.planData}</ErrorInput>}
      <ButtonSubmit type="submit">Enviar</ButtonSubmit>
    </Form>
  );
};

const Form = styled.form``;

const ForPartContainer = styled.div``;

const ForTextContainer = styled.div``;

const ButtonForChange = styled.button``;

const DayPartContainer = styled.div``;

const MealPartContainer = styled.div``;

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

const AddMeal = styled.button``;

const MealContainer = styled.div``;

const MealName = styled.p``;

const List = styled.ol``;

const ButtonSubmit = styled.button``;

const Type = styled.p``;

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import db from "../static/db.json";
import { MealComponent } from "./MealComponent";

const {
  errorInput,
  primaryRed,
  secondaryBlue,
  secondaryRed,
  backgroundBlue,
  success,
} = Colors;

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

  const deleteData = (id, data) => {
    let newData = data.filter((el) => el.id !== id);

    switch (data) {
      case breakfast:
        setBreakfast(newData);
        break;
      case lunch:
        setLunch(newData);
        break;
      case snack:
        setSnack(newData);
        break;
      case dinner:
        setDinner(newData);
        break;

      default:
        break;
    }
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
            <SelectFirst onChange={handleFor}>
              <Option value="null">Seleccione un usuario</Option>
              {db.users.map((el, index) => (
                <Option key={index} value={el.email}>
                  {el.username} {el.surname} - {el.email}
                </Option>
              ))}
            </SelectFirst>
            {errorsPlan.forData && (
              <ErrorInput>{errorsPlan.forData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>Comida para {forData}</ForText>
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
            {errorsPlan.dayData && (
              <ErrorInput>{errorsPlan.dayData}</ErrorInput>
            )}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>
              Día: {db.days.find((el) => el.value === dayData).day}
            </ForText>
            <FaEdit size="1.5rem" onClick={handleChangeDay} />
          </ForTextContainer>
        )}
      </DayPartContainer>
      <MealPartContainer>
        {!mealData ? (
          <InputContainer>
            <Label>Comida:</Label>
            <SelectFirst onChange={handleMeal}>
              <Option value="null">Seleccione una comida</Option>
              {db.meals.map((el, index) => (
                <Option value={el.value} key={index}>
                  {el.meal}
                </Option>
              ))}
            </SelectFirst>
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
            <FaEdit size="1.5rem" onClick={handleChangeMeal} />
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
        <IoMdAddCircle
          fontSize="3.5rem"
          type="button"
          onClick={handleAddMeal}
        />
      </DataContainer>
      {breakfast.length > 0 && (
        <MealContainer>
          <MealName>Desayuno:</MealName>
          <List>
            {breakfast.map((el) => (
              <MealComponent
                key={el.id}
                el={el}
                deleteData={deleteData}
                data={breakfast}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {lunch.length > 0 && (
        <MealContainer>
          <MealName>Almuerzo:</MealName>
          <List>
            {lunch.map((el) => (
              <MealComponent
                key={el.id}
                el={el}
                deleteData={deleteData}
                data={lunch}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {snack.length > 0 && (
        <MealContainer>
          <MealName>Merienda:</MealName>
          <List>
            {snack.map((el) => (
              <MealComponent
                key={el.id}
                el={el}
                deleteData={deleteData}
                data={snack}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {dinner.length > 0 && (
        <MealContainer>
          <MealName>Cena:</MealName>
          <List>
            {dinner.map((el) => (
              <MealComponent
                key={el.id}
                el={el}
                deleteData={deleteData}
                data={dinner}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {errorsPlan.planData && <ErrorInput>{errorsPlan.planData}</ErrorInput>}
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
  width: 18vw;
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

const MealContainer = styled.div`
  margin-left: 3rem;
`;

const MealName = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  font-style: italic;
`;

const MealPartContainer = styled.div``;

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

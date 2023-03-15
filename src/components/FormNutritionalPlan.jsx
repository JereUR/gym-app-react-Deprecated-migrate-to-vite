import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Toaster, toast } from "react-hot-toast";

import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import { MealComponent } from "./MealComponent";

const {
  errorInput,
  primaryRed,
  primaryBlue,
  secondaryBlue,
  secondaryRed,
  success,
} = Colors;

export const FormNutritionalPlan = ({ db }) => {
  const [forData, setForData] = useState(null);
  const [errorFor, setErrorFor] = useState(null);
  const [dayData, setDayData] = useState(null);
  const [mealData, setMealData] = useState(null);
  const [count, setCount] = useState(null);
  const [measure, setMeasure] = useState(null);
  const [type, setType] = useState(null);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [snack, setSnack] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [afterDinner, setAfterDinner] = useState([]);
  const [preWorkout, setPreWorkout] = useState([]);
  const [postWorkout, setPostWorkout] = useState([]);
  const [collation, setCollation] = useState([]);
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
    setAfterDinner([]);
    setPreWorkout([]);
    setPostWorkout([]);
    setCollation([]);
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
      breakfast.length === 0 ||
      lunch.length === 0 ||
      snack.length === 0 ||
      dinner.length === 0
    ) {
      errorsForm.planData =
        "El plan nutricional debe contener como mínimo  desayuno, almuerzo, merienda y cena.";
    }

    return errorsForm;
  };

  const handleFor = (e) => {
    setForData(e.target.value);

    const user = db.users.find((u) => u.email === e.target.value);

    if (user.weight === null || user.height === null) {
      setErrorFor(
        `${e.target.value} no ha completado su información adicional. No es posible agregar un plan nutricional al mismo.`
      );
    } else {
      setErrorFor(null);
    }
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

  const editData = (el, data) => {
    deleteData(el.id, data);

    document.getElementById("countMeal").value = el.count;
    document.getElementById("measureMeal").value = el.measure;
    document.getElementById("type").value = el.type;

    setCount(el.count);
    setMeasure(el.measure);
    setType(el.type);
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
      case afterDinner:
        setAfterDinner(newData);
        break;
      case preWorkout:
        setPreWorkout(newData);
        break;
      case postWorkout:
        setPostWorkout(newData);
        break;
      case collation:
        setCollation(newData);
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
        case "after-dinner":
          const aData = { measure, count, type, id: afterDinner.length };
          setAfterDinner(afterDinner.concat(aData));
          break;
        case "pre-workout":
          const preData = { measure, count, type, id: preWorkout.length };
          setPreWorkout(preWorkout.concat(preData));
          break;
        case "post-workout":
          const postData = { measure, count, type, id: postWorkout.length };
          setPostWorkout(postWorkout.concat(postData));
          break;
        case "collation":
          const cData = { measure, count, type, id: collation.length };
          setCollation(collation.concat(cData));
          break;
        default:
          break;
      }
      clearFormMeal();
    } else {
      /* console.log("Error comida"); */
    }
  };

  const handleSubmitPlan = async (e) => {
    e.preventDefault();

    const err = onValidatePlan();
    setErrorsPlan(err);

    if (Object.keys(err).length === 0 && errorFor === null) {
      const planDay = {
        forData,
        dayData,
        breakfast,
        lunch,
        snack,
        dinner,
        afterDinner,
        preWorkout,
        postWorkout,
        collation,
      };

      console.log(planDay);

      /* try {
          const resp = await fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ planDay }),
          });
          console.log(resp);

           toast.success("Plan nutricional enviado.", {
            position: "top-right",
            duration: 6000,
            style: {
              background: "rgba(215, 250, 215)",
              fontSize: "1rem",
              fontWeight: "500",
            },
          });
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

      clearData();
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
            <ForText>Plan nutricional para {forData}</ForText>
            <FaEdit size="1.5rem" onClick={handleChangeFor} />
          </ForTextContainer>
        )}
        {errorFor && <ErrorInput>{errorFor}</ErrorInput>}
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
                editData={editData}
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
                editData={editData}
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
                editData={editData}
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
                editData={editData}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {afterDinner.length > 0 && (
        <MealContainer>
          <MealName>Post-cena:</MealName>
          <List>
            {afterDinner.map((el) => (
              <MealComponent
                key={el.id}
                el={el}
                deleteData={deleteData}
                data={afterDinner}
                editData={editData}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {preWorkout.length > 0 && (
        <MealContainer>
          <MealName>Pre-entreno:</MealName>
          <List>
            {preWorkout.map((el) => (
              <MealComponent
                key={el.id}
                el={el}
                deleteData={deleteData}
                data={preWorkout}
                editData={editData}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {postWorkout.length > 0 && (
        <MealContainer>
          <MealName>Post-entreno:</MealName>
          <List>
            {postWorkout.map((el) => (
              <MealComponent
                key={el.id}
                el={el}
                deleteData={deleteData}
                data={postWorkout}
                editData={editData}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {collation.length > 0 && (
        <MealContainer>
          <MealName>Colación:</MealName>
          <List>
            {collation.map((el) => (
              <MealComponent
                key={el.id}
                el={el}
                deleteData={deleteData}
                data={collation}
                editData={editData}
              />
            ))}
          </List>
        </MealContainer>
      )}
      {errorsPlan.planData && <ErrorInput>{errorsPlan.planData}</ErrorInput>}
      <ButtonSubmit type="submit">Enviar</ButtonSubmit>
      <Toaster />
    </Form>
  );
};

const ButtonSubmit = styled.button`
  font-family: ${FontFamily};
  background-color: ${primaryRed};
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 2rem;
  padding: 10px 20px;
  margin-top: 2rem;
  width: 100%;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${primaryBlue};
  }
`;

const DataContainer = styled.div`
  svg {
    position: relative;
    top: 3.5vw;
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

  @media screen and (max-width: 480px) {
    margin-bottom: 0 !important;
    line-height: 1rem;
    margin-top: 1rem;
  }
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

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ForTextContainer = styled.div`
  display: flex;

  svg {
    color: ${secondaryBlue};
    padding: 1rem;
    transition: all 0.7s ease;
    margin-top: 2.5rem;

    @media screen and (max-width: 480px) {
      margin-top: 3rem;
    }
  }

  svg:hover {
    cursor: pointer;
    transform: scale(1.1);
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
  width: 23vw;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    width: 55vw;
  }

  :focus {
    border-color: ${primaryRed};
    box-shadow: 0 0 0 3px rgba(65, 157, 199, 0.5);
  }
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

  @media screen and (max-width: 480px) {
    margin-left: -5vw;
  }
`;

const MealPartContainer = styled.div``;

const Option = styled.option`
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  background-image: none;
  border: none;
  outline: none;
  padding: 0;

  font-family: ${FontFamily};
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  width: 18vw;
  padding: 10px;
  border: 2px solid ${primaryBlue};
  border-radius: 4px;

  background-image: url('data:image/svg+xml;utf8,<svg fill="%23000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;

  @media screen and (max-width: 480px) {
    width: 60vw;
    font-size: 1.1rem;
    max-width: 60vw;
  }

  :focus {
    border-color: ${primaryRed};
    box-shadow: 0 0 0 3px rgba(65, 157, 199, 0.5);
  }

  :hover {
    cursor: pointer;
  }

  ::-ms-expand {
    display: none;
  }
`;

const SelectFirst = styled(Select)`
  width: 30vw;

  @media screen and (max-width: 480px) {
    width: 60vw;
  }
`;

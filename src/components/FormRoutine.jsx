import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Toaster, toast } from "react-hot-toast";

import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import { ExerciseComponent } from "./ExerciseComponent";

const {
  errorInput,
  primaryRed,
  primaryBlue,
  secondaryRed,
  secondaryBlue,
  success,
} = Colors;

const FormRoutine = ({ db }) => {
  const [forData, setForData] = useState(null);
  const [errorFor, setErrorFor] = useState(null);
  const [dayData, setDayData] = useState(null);
  const [measure, setMeasure] = useState(null);
  const [series, setSeries] = useState(null);
  const [count, setCount] = useState(null);
  const [zone, setZone] = useState(null);
  const [typeExercise, setTypeExercise] = useState(null);
  const [rest, setRest] = useState(null);
  const [description, setDescription] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [errorsExercises, setErrorsExercises] = useState({});
  const [errorsRoutine, setErrorsRoutine] = useState({});

  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  const clearFormRoutine = () => {
    document.getElementById("seriesExercise").value = null;
    document.getElementById("measureExercise").value = null;
    document.getElementById("countExercise").value = null;
    document.getElementById("zone").value = null;
    document.getElementById("exercise").value = null;
    document.getElementById("rest").value = null;
    document.getElementById("description").value = null;

    setSeries(null);
    setMeasure(null);
    setCount(null);
    setTypeExercise(null);
    setRest(null);
    setDescription(null);
  };

  const clearData = () => {
    setForData(null);
    setDayData(null);

    setExercises([]);
  };

  const onValidateExercises = () => {
    let errorsForm = {};

    if (series === null) {
      errorsForm.series = "Debe especificar series.";
    }

    if (series <= 0 && series != null) {
      errorsForm.series = "El número de series debe ser mayor a 0.";
    }

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

    const user = db.users.find((u) => u.email === e.target.value);

    if (user.weight === null || user.height === null) {
      setErrorFor(
        `${e.target.value} no ha completado su información adicional. No es posible agregar una rutina al mismo.`
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

  const handleMeasure = (e) => {
    setMeasure(e.target.value);
  };

  const handleSeries = (e) => {
    setSeries(e.target.value);
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

  const handleRest = (e) => {
    setRest(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddExercise = () => {
    timeout(2000);

    const err = onValidateExercises();
    setErrorsExercises(err);

    if (Object.keys(err).length === 0) {
      const e = {
        series,
        measure,
        count,
        typeExercise,
        rest,
        description,
        id: exercises.length,
      };
      setExercises(exercises.concat(e));
      clearFormRoutine();
    } else {
      /* console.log("Error ejercicio"); */
    }
  };

  const deleteData = (id) => {
    let newData = exercises.filter((el) => el.id !== id);
    setExercises(newData);
  };

  const handleSubmitRoutine = async (e) => {
    e.preventDefault();

    const err = onValidateRoutine();
    setErrorsRoutine(err);

    if (Object.keys(err).length === 0 && errorFor === null) {
      const routineDay = {
        forData,
        dayData,
        exercises,
      };
      console.log(routineDay);

      /* try {
          const resp = await fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ routineDay }),
          });
          console.log(resp);

          toast.success("Rutina enviada.", {
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
    } else {
      /* console.log("Error rutina"); */
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
          <Label>Series</Label>
          <Input
            type="number"
            onChange={handleSeries}
            id="seriesExercise"
            placeholder="Determine series"
          />
          {errorsExercises.series && (
            <ErrorInput>{errorsExercises.series}</ErrorInput>
          )}
        </InputContainer>
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
        <InputContainer>
          <Label>Descanso (En seg.)</Label>
          <Input
            type="number"
            onChange={handleRest}
            id="rest"
            placeholder="Determine tiempo de descanso"
          />
        </InputContainer>
        <InputContainer>
          <Label>Descripción</Label>
          <TextArea
            onChange={handleDescription}
            id="description"
            placeholder="Descripción adicional"
          />
        </InputContainer>
        <IoMdAddCircle
          fontSize="3.5rem"
          type="button"
          onClick={handleAddExercise}
          className="add-btn"
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

  @media screen and (max-width: 480px) {
    margin-bottom: 0 !important;
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
  width: 15vw;
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

const TextArea = styled.textarea`
  border: 2px solid ${primaryBlue};
  border-radius: 10px;
  box-shadow: none;
  font-family: ${FontFamily};
  font-size: 1.2rem;
  line-height: 1.5;
  height: 1.2vw;
  width: 15vw;
  padding: 10px;
  transition: border-color 0.3s ease-in-out;
  overflow-y: scroll;

  :focus {
    border-color: ${primaryRed};
    outline: none;
  }

  @media screen and (max-width: 480px) {
    height: 25vw;
    width: 55vw;
  }
`;

export default FormRoutine;

import React, { useState } from "react";
import styled from "styled-components";

import db from "../static/db.json";
import { DragAndDrop } from "./DragAndDrop";
import { Colors } from "../constants/Colors";

const { errorInput } = Colors;

export const FormBill = () => {
  const [forData, setForData] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [nextPayment, setNextPayment] = useState(true);
  const [dayNext, setDayNext] = useState(null);
  const [monthNext, setMonthNext] = useState(null);
  const [yearNext, setYearNext] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorsNext, setErrorsNext] = useState({});

  const getYear = () => {
    return new Date().getFullYear();
  };

  const clearForm = () => {
    document.getElementById("month").value = null;
    document.getElementById("year").value = null;
    document.getElementById("pdf-input").value = null;
    document.getElementById("day-next").value = null;
    document.getElementById("month-next").value = null;
    document.getElementById("year-next").value = null;
    document.getElementById("next-true").checked = true;

    setForData(null);
    setMonth(null);
    setYear(null);
    setPdf(null);
    setDayNext(null);
    setMonthNext(null);
    setYearNext(null);
    setErrors({});
  };

  const onValidate = () => {
    const errorsForm = {};

    if (forData === null) {
      errorsForm.forData = "Debe especificar destinatario.";
    }

    if (month === null) {
      errorsForm.month = "Debe especificar mes de pago realizado.";
    }

    if (year === null) {
      errorsForm.year = "Debe especificar año de pago realizado.";
    }

    if (year > getYear()) {
      errorsForm.year = "Ese año todavía no llega.";
    }

    if (pdf === null) {
      errorsForm.pdf = "Debe seleccionar un archivo pdf con el pago realizado.";
    }

    return errorsForm;
  };

  const onValidateNextPayment = () => {
    const errorsForm = {};

    if (dayNext === null) {
      errorsForm.dayNext = "Debe especificar día de próximo pago";
    }

    if (monthNext === null) {
      errorsForm.monthNext = "Debe especificar mes de próximo pago";
    }

    if (yearNext === null) {
      errorsForm.yearNext = "Debe especificar año de próximo pago";
    }

    return errorsForm;
  };

  const handleFor = (e) => {
    setForData(e.target.value);
  };

  const handleChangeFor = () => {
    setForData(null);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleNextPayment = (e) => {
    setNextPayment(!nextPayment);
  };

  const handleDayNext = (e) => {
    setDayNext(e.target.value);
  };

  const handleMonthNext = (e) => {
    setMonthNext(e.target.value);
  };

  const handleYearNext = (e) => {
    setYearNext(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = onValidate();
    setErrors(err);
    console.log(nextPayment);

    if (nextPayment) {
      const errNext = onValidateNextPayment();
      setErrorsNext(errNext);

      if (Object.keys(err).length === 0 && Object.keys(errNext).length === 0) {
        const payment = {
          forData,
          month,
          year,
          pdf,
          dayNext,
          monthNext,
          yearNext,
        };

        console.log(payment);
        clearForm();
      } else {
        console.log("Error pago con próximo.");
      }
    } else {
      setErrorsNext({});
      console.log(errorsNext);

      if (Object.keys(err).length === 0) {
        const payment = {
          forData,
          month,
          year,
          pdf,
          dayNext,
          monthNext,
          yearNext,
        };

        console.log(payment);
        clearForm();
      } else {
        console.log("Error pago sin próximo.");
      }
    }
  };

  return (
    <FormAddBill onSubmit={handleSubmit}>
      <ForPartContainer>
        {!forData ? (
          <InputContainer>
            <Label>Para:</Label>
            <Select onChange={handleFor}>
              <Option value="null">--- Seleccione un usuario ---</Option>
              {db.users.map((el, index) => (
                <Option key={index} value={el.email}>
                  {el.username} {el.surname} - {el.email}
                </Option>
              ))}
            </Select>
            {errors.forData && <ErrorInput>{errors.forData}</ErrorInput>}
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
      <PaymentContainer>
        <MonthContainer>
          <Label>Mes</Label>
          <Select onChange={handleMonth} id="month">
            <Option value="null">
              --- Seleccione mes de pago realizado ---
            </Option>
            <Option value="Enero">Enero</Option>
            <Option value="Febrero">Febrero</Option>
            <Option value="Marzo">Marzo</Option>
            <Option value="Abril">Abril</Option>
            <Option value="Mayo">Mayo</Option>
            <Option value="Junio">Junio</Option>
            <Option value="Julio">Julio</Option>
            <Option value="Agosto">Agosto</Option>
            <Option value="Septiembre">Septiembre</Option>
            <Option value="Octubre">Octubre</Option>
            <Option value="Noviembre">Noviembre</Option>
            <Option value="Diciembre">Diciembre</Option>
          </Select>
          {errors.month && <ErrorInput>{errors.month}</ErrorInput>}
        </MonthContainer>
        <YearContainer>
          <Label>Año</Label>
          <Select onChange={handleYear} id="year">
            <Option value="null">
              --- Seleccione año de pago realizado ---
            </Option>
            {[...Array(new Date().getFullYear() - 2000).keys()].map(
              (d, index) => (
                <Option value={d + 2001} key={index}>
                  {d + 2001}
                </Option>
              )
            )}
          </Select>
          {errors.year && <ErrorInput>{errors.year}</ErrorInput>}
        </YearContainer>
        <DragAndDrop pdf={pdf} setPdf={setPdf} error={errors.pdf} />
        <NextPaymentChoose>
          <Label>¿Quieres agregar próximo pago?</Label>
          <InputContainer>
            <Input
              type="radio"
              id="next-true"
              name="choose"
              onChange={handleNextPayment}
              defaultChecked
            />
            <Label htmlFor="next-true">Si</Label>
          </InputContainer>
          <InputContainer>
            <Input
              type="radio"
              id="next-false"
              name="choose"
              onChange={handleNextPayment}
            />
            <Label htmlFor="next-false">No</Label>
          </InputContainer>
        </NextPaymentChoose>
        <NextPaymentContainer>
          <InputContainer>
            <Label>Día</Label>
            <Select onChange={handleDayNext} id="day-next">
              <Option value="null">
                --- Seleccione día de pago realizado ---
              </Option>
              {[...Array(31).keys()].map((d, index) => (
                <Option value={d + 1} key={index}>
                  {d + 1}
                </Option>
              ))}
            </Select>
            {errorsNext.dayNext && (
              <ErrorInput>{errorsNext.dayNext}</ErrorInput>
            )}
          </InputContainer>
          <InputContainer>
            <Label>Mes</Label>
            <Select onChange={handleMonthNext} id="month-next">
              <Option value="null">
                --- Seleccione mes de pago realizado ---
              </Option>
              <Option value="Enero">Enero</Option>
              <Option value="Febrero">Febrero</Option>
              <Option value="Marzo">Marzo</Option>
              <Option value="Abril">Abril</Option>
              <Option value="Mayo">Mayo</Option>
              <Option value="Junio">Junio</Option>
              <Option value="Julio">Julio</Option>
              <Option value="Agosto">Agosto</Option>
              <Option value="Septiembre">Septiembre</Option>
              <Option value="Octubre">Octubre</Option>
              <Option value="Noviembre">Noviembre</Option>
              <Option value="Diciembre">Diciembre</Option>
            </Select>
            {errorsNext.monthNext && (
              <ErrorInput>{errorsNext.monthNext}</ErrorInput>
            )}
          </InputContainer>
          <InputContainer>
            <Label>Año</Label>
            <Select onChange={handleYearNext} id="year-next">
              <Option value="null">
                --- Seleccione año de pago realizado ---
              </Option>
              {[...Array(new Date().getFullYear() - 2000).keys()].map(
                (d, index) => (
                  <Option value={d + 2001} key={index}>
                    {d + 2001}
                  </Option>
                )
              )}
            </Select>
            {errorsNext.yearNext && (
              <ErrorInput>{errorsNext.yearNext}</ErrorInput>
            )}
          </InputContainer>
        </NextPaymentContainer>
        <ButtonSend type="submit">Enviar</ButtonSend>
      </PaymentContainer>
    </FormAddBill>
  );
};

const FormAddBill = styled.form``;

const ForPartContainer = styled.div``;

const ForTextContainer = styled.div``;

const ButtonForChange = styled.button``;

const ForText = styled.p``;

const PaymentContainer = styled.div``;

const MonthContainer = styled.div``;

const Label = styled.label``;

const Select = styled.select``;

const Option = styled.option``;

const YearContainer = styled.div``;

const Input = styled.input``;

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const NextPaymentChoose = styled.div``;

const InputContainer = styled.div`
  display: inline-grid;
  margin: 1rem;
`;

const NextPaymentContainer = styled.div``;

const ButtonSend = styled.button``;

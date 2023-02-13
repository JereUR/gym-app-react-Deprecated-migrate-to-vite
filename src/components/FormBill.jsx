import React, { useState } from "react";
import styled from "styled-components";

import { DragAndDrop } from "./DragAndDrop";
import { Colors } from "../constants/Colors";

const { errorInput } = Colors;

export const FormBill = () => {
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [errors, setErrors] = useState({});

  const getYear = () => {
    return new Date().getFullYear();
  };

  const clearForm = () => {
    document.getElementById("month").value = null;
    document.getElementById("year").value = null;
    document.getElementById("pdf-input").value = null;

    setMonth(null);
    setYear(null);
    setPdf(null);
    setErrors({});
  };

  const onValidate = () => {
    const errorsForm = {};

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

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = onValidate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      const payment = {
        month,
        year,
        pdf,
      };

      console.log(payment);
      clearForm();
    } else {
      console.log("Error pago");
    }
  };

  return (
    <FormAddBill onSubmit={handleSubmit}>
      <PaymentContainer>
        <Label>Mes</Label>
        <Select onChange={handleMonth} id="month">
          <Option value="null">Seleccione mes de pago realizado</Option>
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
        <Label>Año</Label>
        <Input
          type="number"
          placeholder="Especifique año de pago realizado"
          onChange={handleYear}
          id="year"
        />
        {errors.year && <ErrorInput>{errors.year}</ErrorInput>}
        <DragAndDrop pdf={pdf} setPdf={setPdf} error={errors.pdf} />
        <ButtonSend type="submit">Enviar</ButtonSend>
      </PaymentContainer>
    </FormAddBill>
  );
};

const FormAddBill = styled.form``;

const PaymentContainer = styled.div``;

const Label = styled.label``;

const Select = styled.select``;

const Option = styled.option``;

const Input = styled.input``;

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const ButtonSend = styled.button``;

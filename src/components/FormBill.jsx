import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

import { DragAndDrop } from "./DragAndDrop";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";

const { errorInput, primaryRed, primaryBlue, secondaryRed, secondaryBlue } =
  Colors;

export const FormBill = ({ db }) => {
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

  const handleSubmit = async (e) => {
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

        /* try {
          const resp = await fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ payment }),
          });
          console.log(resp);

           toast.success("Pago enviado.", {
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
        clearForm();
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

        /* try {
          const resp = await fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ payment }),
          });
          console.log(resp);

          toast.success("Pago enviado.", {
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
        clearForm();
      }
    }
  };

  return (
    <FormAddBill onSubmit={handleSubmit}>
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
            {errors.forData && <ErrorInput>{errors.forData}</ErrorInput>}
          </InputContainer>
        ) : (
          <ForTextContainer>
            <ForText>Pago realizado para {forData}</ForText>
            <FaEdit size="1.5rem" onClick={handleChangeFor} />
          </ForTextContainer>
        )}
      </ForPartContainer>
      <PaymentContainer>
        <MonthContainer>
          <InputContainer>
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
          </InputContainer>
        </MonthContainer>
        <YearContainer>
          <InputContainer>
            <Label>Año</Label>
            <Select onChange={handleYear} id="year">
              <Option value="null">Seleccione año de pago realizado</Option>
              {[...Array(new Date().getFullYear() - 2000).keys()].map(
                (d, index) => (
                  <Option value={d + 2001} key={index}>
                    {d + 2001}
                  </Option>
                )
              )}
            </Select>
            {errors.year && <ErrorInput>{errors.year}</ErrorInput>}
          </InputContainer>
        </YearContainer>
        <DragAndDrop pdf={pdf} setPdf={setPdf} error={errors.pdf} />
        <Label>¿Quieres agregar próximo pago?</Label>
        <NextPaymentChoose>
          <InputContainer>
            <LabelRadio htmlFor="next-true">
              <Input
                type="radio"
                id="next-true"
                name="choose"
                onChange={handleNextPayment}
                defaultChecked
              />
              <Span>Si</Span>
            </LabelRadio>
          </InputContainer>
          <InputContainer>
            <LabelRadio htmlFor="next-false">
              <Input
                type="radio"
                id="next-false"
                name="choose"
                onChange={handleNextPayment}
              />
              <Span>No</Span>
            </LabelRadio>
          </InputContainer>
        </NextPaymentChoose>
        <NextPaymentContainer>
          <InputContainer>
            <Label>Día</Label>
            <Select onChange={handleDayNext} id="day-next">
              <Option value="null">Seleccione día de pago realizado</Option>
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
            <SelectFirst onChange={handleMonthNext} id="month-next">
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
            </SelectFirst>
            {errorsNext.monthNext && (
              <ErrorInput>{errorsNext.monthNext}</ErrorInput>
            )}
          </InputContainer>
          <InputContainer>
            <Label>Año</Label>
            <Select onChange={handleYearNext} id="year-next">
              <Option value="null">Seleccione año de pago realizado</Option>
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
      <Toaster />
    </FormAddBill>
  );
};

const ButtonSend = styled.button`
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

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;

  @media screen and (max-width: 480px) {
    margin-bottom: 0 !important;
    line-height: 1rem;
    margin-top: 1rem;
  }
`;

const FormAddBill = styled.form`
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
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }

  :checked + span {
    color: ${primaryBlue};
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

  @media screen and (max-width: 480px) {
    margin-left: -5vw;
  }
`;

const LabelRadio = styled.div``;

const MonthContainer = styled.div`
  display: inline-grid;
  margin: 1rem;

  @media screen and (max-width: 480px) {
    margin: 0 1rem 0 0;
  }
`;

const NextPaymentContainer = styled.div``;

const NextPaymentChoose = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Option = styled.option`
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PaymentContainer = styled.div``;

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
    width: 80vw;
    font-size: 1.1rem;
    margin-left: -5vw;
  }

  :focus {
    border-color: 2px solid ${primaryRed};
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
    width: 80vw;
  }
`;

const Span = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${primaryRed};
`;

const YearContainer = styled.div`
  display: inline-grid;
  margin: 1rem 1rem 1rem 2rem;

  @media screen and (max-width: 480px) {
    margin: 0 1rem 0 0;
  }
`;

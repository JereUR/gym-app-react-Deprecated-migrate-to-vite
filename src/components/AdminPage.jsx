import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { toast, Toaster } from "react-hot-toast";

import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import { FormBill } from "./FormBill";
import { FormNutritionalPlan } from "./FormNutritionalPlan";
import FormRoutine from "./FormRoutine";
import { SeeUser } from "./SeeUser";
import { FetchPostData } from "../helpers/FetchPostData";
import { useEffect } from "react";
import { FetchGetData } from "../helpers/FetchGetData";

const { secondaryBlue, backgroundText, primaryBlue, primaryRed } = Colors;

export const AdminPage = ({ dbLocal, dbUsers }) => {
  const [debtorUsers, setDebtorUsers] = useState([]);
  const [viewDebtors, setViewDebtors] = useState(false);
  /* const [dbUsers, setDbUsers] = useState(null); */

  /* useEffect(() => {
    async function getUsers() {
      return await FetchGetData("/");
    }
    const res = getUsers();
    if (!(res instanceof Error)) {
      setDbUsers(res);
    } else {
      toast.error(
        { res },
        {
          position: "top-right",
          duration: 6000,
          style: {
            background: "rgba(250, 215, 215)",
            fontSize: "1rem",
            fontWeight: "500",
          },
        }
      );
    }
  }, []); */

  const handleDebtors = () => {
    if (!viewDebtors) {
      const today = new Date();
      let debtors = [];

      dbUsers.forEach((el) => {
        let userDate = new Date(
          el.payment.nextPayment.year,
          el.payment.nextPayment.month,
          el.payment.nextPayment.day
        );

        if (userDate < today) {
          let newData = {
            username: el.username,
            surname: el.surname,
            email: el.email,
          };

          debtors.push(newData);
        }
      });
      setViewDebtors(true);
      setDebtorUsers(debtors);
    } else {
      setDebtorUsers([]);
      setViewDebtors(false);
    }
  };

  const handleReport = async (email) => {
    /* const res = await FetchPostData({
      path: "/",
      data: { email },
    });

    if (!(res instanceof Error)) {
      toast.success(`Reporte enviado.`, {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(215, 250, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      });

      let newDebtors = debtorUsers.filter((el) => el.email !== email);

      if (newDebtors.length === 0) {
        setViewDebtors(false);
      }

      setDebtorUsers(newDebtors);
    } else {
      toast.error(
        { res },
        {
          position: "top-right",
          duration: 6000,
          style: {
            background: "rgba(250, 215, 215)",
            fontSize: "1rem",
            fontWeight: "500",
          },
        }
      );
    } */
  };

  return (
    <AdminContainer>
      <AddRoutineContainer>
        <Title>Agregar rutina</Title>
        <FormRoutine dbLocal={dbLocal} dbUsers={dbUsers} />
      </AddRoutineContainer>
      <Hr />
      <AddNutritionalPlan>
        <Title>Agregar plan nutricional</Title>
        <FormNutritionalPlan dbLocal={dbLocal} dbUsers={dbUsers} />
      </AddNutritionalPlan>
      <Hr />
      <BillSection>
        <Title>Agregar pago</Title>
        <FormBill dbLocal={dbLocal} dbUsers={dbUsers} />
      </BillSection>
      <SeeUserSection>
        <Title>Ver detalles de usuario</Title>
        <SeeUser dbLocal={dbLocal} dbUsers={dbUsers} />
      </SeeUserSection>
      <DebtorsContainer>
        <Title>Reportar deudores</Title>
        <ButtonDebtors type="button" onClick={handleDebtors}>
          Ver Deudores{" "}
          {viewDebtors ? (
            <AiOutlineArrowUp fontSize="2.5rem" />
          ) : (
            <AiOutlineArrowDown fontSize="2.5rem" />
          )}
        </ButtonDebtors>
        {debtorUsers.length > 0 && (
          <DebtorsResult>
            {debtorUsers.map((el, index) => (
              <DebtorItem key={index}>
                <DebtorInfo>
                  {el.username} {el.surname} - {el.email}
                </DebtorInfo>
                <LogoContainer>
                  <RiErrorWarningLine
                    fontSize="2.5rem"
                    onClick={() => handleReport(el.email)}
                  />
                  <Span className="tooltip">Enviar reporte a {el.email}</Span>
                </LogoContainer>
              </DebtorItem>
            ))}
          </DebtorsResult>
        )}
      </DebtorsContainer>
      <Toaster />
    </AdminContainer>
  );
};

const AdminContainer = styled.div``;

const AddRoutineContainer = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 1rem 3rem 1rem;
  margin: 3vw 3vw 3vw 3vw;
  border-radius: 1rem;

  @media (max-width: 480px) {
    margin: 7vw 4vw 7vw 4vw;
  }
`;

const AddNutritionalPlan = styled(AddRoutineContainer)``;

const ButtonDebtors = styled.button`
  font-family: ${FontFamily};
  background-color: ${primaryRed};
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 2rem;
  padding: 10px 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 50%;
  transition: all 0.5s ease-in-out;

  svg {
    position: relative;
    top: 0.5rem;

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  :hover {
    cursor: pointer;
    background-color: ${primaryBlue};
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    width: 80%;
  }
`;

const BillSection = styled(AddRoutineContainer)``;

const DebtorInfo = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${secondaryBlue};
`;

const DebtorItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 210, 210);
  margin: 2.5vw 5vw 0 5vw;
  padding: 0.5vw 2vw;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 3px 3px ${primaryRed};

  svg {
    position: relative;
    top: 0.8vw;
  }
`;

const DebtorsContainer = styled(AddRoutineContainer)`
  text-align: center;

  p {
    text-align: start;
  }
`;

const DebtorsResult = styled.div``;

const Hr = styled.hr`
  background-color: ${backgroundText};
  border: 0;
  height: 0.1rem;
  width: 90%;
  border-radius: 100px;
`;

const LogoContainer = styled.div`
  color: rgb(255, 69, 0);

  svg {
    cursor: pointer;
    transition: all 0.6s ease;

    :hover {
      transform: scale(1.1);
    }
  }

  .tooltip {
    visibility: hidden;
    position: absolute;
    transform: translate(-2%, -75%);
    background-color: black;
    color: white;
    padding: 0.7rem;
    border-radius: 15px 15px 15px 0;
    font-size: 0.8rem;

    @media screen and (max-width: 1350px) {
      transform: translate(-120%, -90%);
      border-radius: 15px 15px 0 15px;
    }

    @media screen and (max-width: 480px) {
      transform: translate(-120%, -90%);
      border-radius: 15px 15px 0 15px;
    }
  }

  :hover .tooltip {
    visibility: visible;
  }
`;

const SeeUserSection = styled(AddRoutineContainer)``;

const Span = styled.span``;

const Title = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  color: ${secondaryBlue};
  margin-left: 1vw;
  border-radius: 1rem;
`;

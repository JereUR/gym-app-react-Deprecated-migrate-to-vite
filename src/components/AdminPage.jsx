import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import { FormBill } from "./FormBill";
import { FormNutritionalPlan } from "./FormNutritionalPlan";
import FormRoutine from "./FormRoutine";
import { SeeUser } from "./SeeUser";

const { secondaryBlue, backgroundText, primaryBlue, primaryRed } = Colors;

export const AdminPage = ({ db }) => {
  const [debtorUsers, setDebtorUsers] = useState([]);

  const handleDebtors = () => {
    const today = new Date();
    let debtors = [];

    db.users.forEach((el) => {
      let month = db.months.find(
        (mo) => mo.month === el.payment.nextPayment.month
      );

      let userDate = new Date(
        el.payment.nextPayment.year,
        month.value,
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

    setDebtorUsers(debtors);
  };

  return (
    <AdminContainer>
      <AddRoutineContainer>
        <Title>Agregar rutina</Title>
        <FormRoutine db={db} />
      </AddRoutineContainer>
      <Hr />
      <AddNutritionalPlan>
        <Title>Agregar plan nutricional</Title>
        <FormNutritionalPlan db={db} />
      </AddNutritionalPlan>
      <Hr />
      <BillSection>
        <Title>Agregar pago</Title>
        <FormBill db={db} />
      </BillSection>
      <SeeUserSection>
        <Title>Ver detalles de usuario</Title>
        <SeeUser />
      </SeeUserSection>
      <DebtorsContainer>
        <Title>Reportar deudores</Title>
        <ButtonDebtors type="button" onClick={handleDebtors}>
          Ver Deudores <AiOutlineArrowDown fontSize="2.5rem" />
        </ButtonDebtors>
        {debtorUsers.length > 0 && (
          <DebtorsResult>
            {debtorUsers.map((el, index) => (
              <DebtorItem key={index}>
                <DebtorInfo>
                  {el.username} {el.surname} - {el.email}
                </DebtorInfo>
                <LogoContainer>
                  <RiErrorWarningLine fontSize="2rem" />
                </LogoContainer>
              </DebtorItem>
            ))}
          </DebtorsResult>
        )}
      </DebtorsContainer>
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

const DebtorInfo = styled.p``;

const DebtorItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 210, 210);
  margin: 2.5vw 5vw 0 5vw;
  padding: 0.5vw 2vw;
  border-radius: 5px;

  svg {
    position: relative;
    top: 0.5vw;
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
`;

const SeeUserSection = styled(AddRoutineContainer)``;

const Title = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  color: ${secondaryBlue};
  margin-left: 1vw;
  border-radius: 1rem;
`;

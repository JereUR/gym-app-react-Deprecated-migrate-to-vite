import React from "react";
import styled from "styled-components";

import { Colors } from "../constants/Colors";
import { FormBill } from "./FormBill";
import { FormNutritionalPlan } from "./FormNutritionalPlan";
import FormRoutine from "./FormRoutine";

const { secondaryBlue, backgroundText } = Colors;

export const AdminPage = () => {
  return (
    <AdminContainer>
      <AddRoutineContainer>
        <Title>Agregar rutina</Title>
        <FormRoutine />
      </AddRoutineContainer>
      <Hr />
      <AddNutritionalPlan>
        <Title>Agregar plan nutricional</Title>
        <FormNutritionalPlan />
      </AddNutritionalPlan>
      <Hr />
      <BillSection>
        <Title>Agregar pago</Title>
        <FormBill />
        <Hr />
      </BillSection>
    </AdminContainer>
  );
};

const AdminContainer = styled.div``;

const AddRoutineContainer = styled.div`
  background-color: ${backgroundText};
  padding: 1rem 1rem 3rem 1rem;
  margin: 2vw 3vw 2vw 3vw;
  border-radius: 1rem;
`;

const Title = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  color: ${secondaryBlue};
  margin-left: 1vw;
  border-radius: 1rem;
`;

const Hr = styled.hr`
  background-color: ${backgroundText};
  border: 0;
  height: 0.1rem;
  width: 90%;
  margin-bottom: 4rem;
  border-radius: 100px;
`;

const AddNutritionalPlan = styled(AddRoutineContainer)``;

const BillSection = styled(AddRoutineContainer)``;

const NextPaymentSection = styled.div``;

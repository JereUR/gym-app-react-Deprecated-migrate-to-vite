import React, { useState } from "react";
import styled from "styled-components";

import { Colors } from "../constants/Colors";
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
        <FormNutritionalPlan></FormNutritionalPlan>
      </AddNutritionalPlan>
      <Hr />
      <BillSection>
        <Title>Agregar pago</Title>
        <FormAddBill></FormAddBill>
        <Hr />
        <Title>Agregar próximo pago</Title>
        <FormAddNextPay></FormAddNextPay>
      </BillSection>
    </AdminContainer>
  );
};

const AdminContainer = styled.div``;

const AddRoutineContainer = styled.div``;

const Title = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  color: ${secondaryBlue};
  margin-left: 2vw;
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

const AddNutritionalPlan = styled(AdminContainer)``;

const FormNutritionalPlan = styled.form``;

const BillSection = styled(AdminContainer)``;

const FormAddBill = styled.form``;

const FormAddNextPay = styled.form``;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast, Toaster } from "react-hot-toast";

import { Colors } from "../constants/Colors";
import { FormBill } from "./FormBill";
import { FormNutritionalPlan } from "./FormNutritionalPlan";
import FormRoutine from "./FormRoutine";
import { SeeUser } from "./SeeUser";
import { FetchPostData } from "../helpers/FetchPostData";
import { FetchGetData } from "../helpers/FetchGetData";
import { DebtorsSection } from "./DebtorsSection";
import { FormClearRoutine } from "./FormClearRoutine";

const { secondaryBlue, backgroundText } = Colors;

export const AdminPage = ({ dbLocal, dbUsers }) => {
  const [users, setUsers] = useState(null);

  /* useEffect(() => {
    //Get users email,username,surname
    async function getUsers() {
      return await FetchGetData("/");
    }
    const res = getUsers();
    if (!(res instanceof Error)) {
      setUsers(res);
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

  return (
    <AdminContainer>
      <AddRoutineContainer>
        <Title>Agregar rutina</Title>
        <FormRoutine /*users={users}*/ dbLocal={dbLocal} dbUsers={dbUsers} />
      </AddRoutineContainer>
      <Hr />
      <ClearRoutineContainer>
        <Title>Borrar rutina</Title>
        <FormClearRoutine
          /*users={users}*/ dbLocal={dbLocal}
          dbUsers={dbUsers}
        />
      </ClearRoutineContainer>
      <Hr />
      <AddNutritionalPlan>
        <Title>Agregar plan nutricional</Title>
        <FormNutritionalPlan
          /*users={users}*/ dbLocal={dbLocal}
          dbUsers={dbUsers}
        />
      </AddNutritionalPlan>
      <Hr />
      <BillSection>
        <Title>Agregar pago</Title>
        <FormBill /*users={users}*/ dbLocal={dbLocal} dbUsers={dbUsers} />
      </BillSection>
      <SeeUserSection>
        <Title>Ver detalles de usuario</Title>
        <SeeUser /*users={users}*/ dbUsers={dbUsers} />
      </SeeUserSection>
      <DebtorsContainer>
        <Title>Reportar deudores</Title>
        <DebtorsSection /*users={users} */ dbUsers={dbUsers} />
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

const ClearRoutineContainer = styled(AddRoutineContainer)``;

const AddNutritionalPlan = styled(AddRoutineContainer)``;

const BillSection = styled(AddRoutineContainer)``;

const DebtorsContainer = styled(AddRoutineContainer)`
  text-align: center;

  p {
    text-align: start;
  }
`;

const Hr = styled.hr`
  background-color: ${backgroundText};
  border: 0;
  height: 0.1rem;
  width: 90%;
  border-radius: 100px;
`;

const SeeUserSection = styled(AddRoutineContainer)``;

const Title = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  color: ${secondaryBlue};
  margin-left: 1vw;
  border-radius: 1rem;
`;

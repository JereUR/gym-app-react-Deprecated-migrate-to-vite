import React from "react";
import styled from "styled-components";

import { NutritionalPlan } from "./NutritionalPlan";
import { Routine } from "./Routine";
import { UserViewInfo } from "./UserViewInfo";
import { useState } from "react";

export const ViewUserInfo = ({ email }) => {
  return (
    <InfoUser>
      <InfoContainer>
        <UserViewInfo email={email} />
      </InfoContainer>
      <RutineContainer>
        <Routine email={email} title={`Rutina:`} />
      </RutineContainer>
      <NutritionalPlanContainer>
        <NutritionalPlan email={email} title={`Plan Nutricional:`} />
      </NutritionalPlanContainer>
    </InfoUser>
  );
};

const InfoContainer = styled.div``;

const InfoUser = styled.div``;

const NutritionalPlanContainer = styled.div`
  text-align: center;

  @media screen and (max-width: 1050px) {
    margin: 0vw 4vw 5vw 4vw;
  }
`;

const RutineContainer = styled.div`
  text-align: center;

  @media screen and (max-width: 1050px) {
    margin: 4vw 4vw 2vw 4vw;
  }

  @media screen and (max-width: 900px) {
    margin: 8vw 4vw 5vw 4vw;
  }
`;

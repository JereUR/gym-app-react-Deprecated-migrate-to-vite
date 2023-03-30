import React from "react";
import styled from "styled-components";

import { NutritionalPlan } from "./NutritionalPlan";
import { Routine } from "./Routine";
import { UserViewInfo } from "./UserViewInfo";

export const ViewUserInfo = ({ /*email*/ user }) => {
  return (
    <InfoUser>
      <InfoContainer>
        <UserViewInfo /*email*/ user={user} />
      </InfoContainer>
      <RutineContainer>
        <Routine
          /*email*/
          user={user}
          title={`Rutina de ${user.username} ${user.surname}`}
        />
      </RutineContainer>
      <NutritionalPlanContainer>
        <NutritionalPlan
          /*email*/
          user={user}
          title={`Plan Nutricional de ${user.username} ${user.surname}`}
        />
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

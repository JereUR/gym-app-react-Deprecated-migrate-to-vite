import React, { useState } from "react";
import styled from "styled-components";

import banner from "../assets/banner_home2.jpg";
import { NutricionalPlan } from "./NutricionalPlan";
import { Routine } from "./Routine";

export const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <Banner src={banner} />
      </BannerContainer>
      <RutineContainer>
        <Routine />
      </RutineContainer>
      <NutricionalPlanContainer>
        <NutricionalPlan />
      </NutricionalPlanContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

const BannerContainer = styled.div`
  margin: 2rem;
  text-align: center;
`;

const Banner = styled.img`
  width: 100%;
  height: 400px;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  border-radius: 5px;
`;

const RutineContainer = styled.div`
  text-align: center;
`;

const NutricionalPlanContainer = styled.div`
  text-align: center;
`;

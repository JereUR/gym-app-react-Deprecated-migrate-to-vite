import React from "react";
import styled from "styled-components";

import banner from "../assets/banner_home.jpg";
import { Colors } from "../constants/Colors";
import { NutritionalPlan } from "./NutritionalPlan";
import { Routine } from "./Routine";

const { backgroundText } = Colors;

export const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <Banner src={banner} />
      </BannerContainer>
      <RutineContainer>
        <Routine />
      </RutineContainer>
      <NutritionalPlanContainer>
        <NutritionalPlan />
      </NutritionalPlanContainer>
    </HomeContainer>
  );
};

const Banner = styled.img`
  width: 100%;
  height: 400px;
  box-shadow: 6px 2px 6px 5px ${backgroundText};
  border-radius: 5px;
  margin-top: 2vw;

  @media screen and (max-width: 450px) {
    height: 200px;
  }
`;

const BannerContainer = styled.div`
  margin: 2vw 2vw 3vw 2vw;
  text-align: center;

  @media screen and (max-width: 450px) {
    margin: 10vw 4vw 5vw 4vw;
  }
`;

const HomeContainer = styled.div``;

const NutritionalPlanContainer = styled.div`
  text-align: center;
`;

const RutineContainer = styled.div`
  text-align: center;
`;

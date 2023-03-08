import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import banner from "../assets/banner_home.jpg";
import { Colors } from "../constants/Colors";
import { NutritionalPlan } from "./NutritionalPlan";
import { Routine } from "./Routine";

const { backgroundText } = Colors;

export const Home = ({ user, months }) => {
  const [debtor, setDebtor] = useState(false);
  const [addInfo, setAddInfo] = useState(false);

  useEffect(() => {
    let today = new Date();

    let month = months.find(
      (mo) => mo.month === user.payment.nextPayment.month
    );

    let userDate = new Date(
      user.payment.nextPayment.year,
      month.value,
      user.payment.nextPayment.day
    );

    if (userDate < today) {
      setDebtor(true);
    }

    if (user.weight === null || user.height === null) {
      setAddInfo(true);
    }
  }, [user, months]);

  return (
    <HomeContainer>
      <BannerContainer>
        <Banner src={banner} />
      </BannerContainer>
      {debtor && (
        <ReportPaymentContainer>
          <MessageDebtor>
            ¡Tienes un pago atrasado del día {user.payment.nextPayment.day} de{" "}
            {user.payment.nextPayment.month} del año{" "}
            {user.payment.nextPayment.year}!
          </MessageDebtor>
        </ReportPaymentContainer>
      )}
      <RutineContainer>
        <Routine user={user} title="Mis Rutinas" addInfo={addInfo} />
      </RutineContainer>
      <NutritionalPlanContainer>
        <NutritionalPlan
          user={user}
          title="Mi Plan Nutricional"
          addInfo={addInfo}
        />
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

  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;

const BannerContainer = styled.div`
  margin: 2vw 2vw 3vw 2vw;
  text-align: center;

  @media screen and (max-width: 480px) {
    margin: 10vw 4vw 5vw 4vw;
  }

  @media screen and (max-width: 900px) {
    margin: 5vw 4vw 5vw 4vw;
  }
`;

const HomeContainer = styled.div``;

const MessageDebtor = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgb(255, 210, 210);
  padding: 1vw 1vw;
  margin: 1vw 25vw;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 2px 2px black;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    margin: 1vw 5vw;
  }
`;

const NutritionalPlanContainer = styled.div`
  text-align: center;

  @media screen and (max-width: 1050px) {
    margin: 0vw 4vw 5vw 4vw;
  }
`;

const ReportPaymentContainer = styled.div`
  text-align: center;
  margin-bottom: 2vw;

  svg {
    position: relative;
    top: 0.3vw;
    color: rgb(255, 20, 0);
    margin: 0 1vw;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
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

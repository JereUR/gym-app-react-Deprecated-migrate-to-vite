import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import banner from "../assets/home-photo.jpg";
import { NutritionalPlan } from "./NutritionalPlan";
import { Routine } from "./Routine";

export const Home = ({ user, months }) => {
  const [debtor, setDebtor] = useState(false);
  const [addInfo, setAddInfo] = useState(false);

  useEffect(() => {
    if (user !== null || user !== undefined) {
      let today = new Date();

      let userDate = new Date(
        user.payment.nextPayment.year,
        user.payment.nextPayment.month,
        user.payment.nextPayment.day
      );

      if (userDate < today) {
        setDebtor(true);
      }

      if (user.weight === null || user.height === null) {
        setAddInfo(true);
      }
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
            {
              months.find((m) => m.value === user.payment.nextPayment.month)
                .month
            }{" "}
            del año {user.payment.nextPayment.year}!
          </MessageDebtor>
        </ReportPaymentContainer>
      )}
      <RutineContainer>
        <Routine user={user} addInfo={addInfo} />
      </RutineContainer>
      <Hr />
      <NutritionalPlanContainer>
        <NutritionalPlan user={user} addInfo={addInfo} />
      </NutritionalPlanContainer>
    </HomeContainer>
  );
};

const Banner = styled.img`
  width: 90%;
  height: auto;
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 5px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const BannerContainer = styled.div`
  margin: 2vw 2vw 3vw 2vw;
  text-align: center;

  @media screen and (max-width: 480px) {
    margin: 2vw -2vw 3vw 2vw;
  }
`;

const HomeContainer = styled.div``;

const Hr = styled.hr`
  width: 95%;
  border: none;
  border-top: 1px solid #ccc;
  height: 1px;
  background: linear-gradient(to right, #ccc, #333, #ccc);
`;

const MessageDebtor = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1vw 1vw;

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
  background-color: #ffc107;
  color: black;
  text-align: center;
  padding: 0.5vw;

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

import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowCircleDown, MdArrowCircleUp } from "react-icons/md";
import { IconContext } from "react-icons";

import { user } from "../App";
import { getDayNow } from "../helpers/GetDay";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";

const { primaryBlue, secondaryBlue, primaryRed, backgroundText } = Colors;

export const NutritionalPlan = () => {
  const [showPlan, setShowPlan] = useState(false);

  const handlePlan = () => {
    setShowPlan(!showPlan);
  };

  const day = getDayNow();

  return (
    <PlanContainer>
      <IconContext.Provider
        value={{ size: "1.9rem", style: { verticalAlign: "middle" } }}
      >
        <PlanButton onClick={handlePlan}>
          Mis Planes Nutricionales{" "}
          {!showPlan ? <MdArrowCircleDown /> : <MdArrowCircleUp />}
        </PlanButton>
      </IconContext.Provider>
      {showPlan && (
        <PlanData>
          <PlanDay>
            {day === 1 ? (
              <DayWeekNow>
                Lunes <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Lunes</DayWeek>
            )}
            <Hr />
            <List>
              <TextMeal>Desayuno</TextMeal>
              {user.nutricionalPlan.monday[0].breakfast.length > 0 ? (
                user.nutricionalPlan.monday[0].breakfast.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.monday[1].lunch.length > 0 ? (
                user.nutricionalPlan.monday[1].lunch.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.monday[2].snack.length > 0 ? (
                user.nutricionalPlan.monday[2].snack.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.monday[3].dinner.length > 0 ? (
                user.nutricionalPlan.monday[3].dinner.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
            </List>
          </PlanDay>
          <PlanDay>
            {day === 2 ? (
              <DayWeekNow>
                Martes <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Martes</DayWeek>
            )}
            <Hr />
            <List>
              <TextMeal>Desayuno</TextMeal>
              {user.nutricionalPlan.tuesday[0].breakfast.length > 0 ? (
                user.nutricionalPlan.tuesday[0].breakfast.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.tuesday[1].lunch.length > 0 ? (
                user.nutricionalPlan.tuesday[1].lunch.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.tuesday[2].snack.length > 0 ? (
                user.nutricionalPlan.tuesday[2].snack.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.tuesday[3].dinner.length > 0 ? (
                user.nutricionalPlan.tuesday[3].dinner.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
            </List>
          </PlanDay>
          <PlanDay>
            {day === 3 ? (
              <DayWeekNow>
                Miércoles <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Miércoles</DayWeek>
            )}
            <Hr />
            <List>
              <TextMeal>Desayuno</TextMeal>
              {user.nutricionalPlan.wednesday[0].breakfast.length > 0 ? (
                user.nutricionalPlan.wednesday[0].breakfast.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.wednesday[1].lunch.length > 0 ? (
                user.nutricionalPlan.wednesday[1].lunch.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.wednesday[2].snack.length > 0 ? (
                user.nutricionalPlan.wednesday[2].snack.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.wednesday[3].dinner.length > 0 ? (
                user.nutricionalPlan.wednesday[3].dinner.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
            </List>
          </PlanDay>
          <PlanDay>
            {day === 4 ? (
              <DayWeekNow>
                Jueves <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Jueves</DayWeek>
            )}
            <Hr />
            <List>
              <TextMeal>Desayuno</TextMeal>
              {user.nutricionalPlan.thursday[0].breakfast.length > 0 ? (
                user.nutricionalPlan.thursday[0].breakfast.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.thursday[1].lunch.length > 0 ? (
                user.nutricionalPlan.thursday[1].lunch.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.thursday[2].snack.length > 0 ? (
                user.nutricionalPlan.thursday[2].snack.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.thursday[3].dinner.length > 0 ? (
                user.nutricionalPlan.thursday[3].dinner.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
            </List>
          </PlanDay>
          <PlanDay>
            {day === 5 ? (
              <DayWeekNow>
                Viernes <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Viernes</DayWeek>
            )}
            <Hr />
            <List>
              <TextMeal>Desayuno</TextMeal>
              {user.nutricionalPlan.friday[0].breakfast.length > 0 ? (
                user.nutricionalPlan.friday[0].breakfast.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.friday[1].lunch.length > 0 ? (
                user.nutricionalPlan.friday[1].lunch.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.friday[2].snack.length > 0 ? (
                user.nutricionalPlan.friday[2].snack.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.friday[3].dinner.length > 0 ? (
                user.nutricionalPlan.friday[3].dinner.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
            </List>
          </PlanDay>
          <PlanDay>
            {day === 6 ? (
              <DayWeekNow>
                Sábado <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Sábado</DayWeek>
            )}
            <Hr />
            <List>
              <TextMeal>Desayuno</TextMeal>
              {user.nutricionalPlan.saturday[0].breakfast.length > 0 ? (
                user.nutricionalPlan.saturday[0].breakfast.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.saturday[1].lunch.length > 0 ? (
                user.nutricionalPlan.saturday[1].lunch.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.saturday[2].snack.length > 0 ? (
                user.nutricionalPlan.saturday[2].snack.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.saturday[3].dinner.length > 0 ? (
                user.nutricionalPlan.saturday[3].dinner.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
            </List>
          </PlanDay>
          <PlanDay>
            {day === 0 ? (
              <DayWeekNow>
                Domingo <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Domingo</DayWeek>
            )}
            <Hr />
            <List>
              <TextMeal>Desayuno</TextMeal>
              {user.nutricionalPlan.sunday[0].breakfast.length > 0 ? (
                user.nutricionalPlan.sunday[0].breakfast.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.sunday[1].lunch.length > 0 ? (
                user.nutricionalPlan.sunday[1].lunch.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.sunday[2].snack.length > 0 ? (
                user.nutricionalPlan.sunday[2].snack.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.sunday[3].dinner.length > 0 ? (
                user.nutricionalPlan.sunday[3].dinner.map((el, index) => (
                  <InfoItem key={index}>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información.</TextNoData>
                </NoData>
              )}
            </List>
          </PlanDay>
        </PlanData>
      )}
    </PlanContainer>
  );
};

const DayWeek = styled.h1``;

const DayWeekNow = styled(DayWeek)`
  color: ${primaryRed};
`;

const Hr = styled.hr``;

const InfoItem = styled.li`
  color: rgb(30, 30, 30);
  font-size: 1.2rem;
  line-height: 3rem;
  display: flex;
  margin-left: 1rem;
`;

const List = styled.div``;

const NoData = styled.div`
  text-align: center;
  color: rgb(30, 30, 30);
  font-style: italic;
`;

const PlanButton = styled.button`
  width: 90vw;
  margin-bottom: 5vw !important;
  font-family: ${FontFamily};
  font-weight: bold;
  background-color: #fff;
  color: ${primaryRed};
  padding: 10px;
  margin: 10px;
  font-size: 2rem;
  box-shadow: 0 0 3px 3px ${primaryRed};
  border: none;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 3px 3px ${secondaryBlue};
    color: ${secondaryBlue};
  }

  @media (max-width: 450px) {
    margin-bottom: 15vw !important;
  }
`;

const PlanContainer = styled.div`
  padding-top: -1rem;
`;

const PlanData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: -4rem 4rem 2rem 5rem;

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
    margin: -1.5rem 1rem 2rem 1rem;
  }
`;

const PlanDay = styled.div`
  color: ${primaryBlue};
  width: auto;
  min-width: 26vw;
  padding: 1rem;
  margin: 1rem;
  text-align: left;
  box-shadow: 0px 0px 5px ${primaryBlue};
  border-radius: 10px;

  @media (max-width: 450px) {
    margin: 0.1rem 0.1rem 1rem 0.1rem;
    padding: 0.9rem;
  }
`;

const TextMeal = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
`;

const TextNoData = styled.p`
  font-size: 1.4rem;

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

const Today = styled.i``;

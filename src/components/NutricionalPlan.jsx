import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowCircleDown } from "react-icons/md";
import { IconContext } from "react-icons";

import { user } from "../App";
import { getDayNow } from "../helpers/GetDay";

export const NutricionalPlan = () => {
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
          Mis Plan Nutricional <MdArrowCircleDown verticalAlign="middle" />
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
                user.nutricionalPlan.monday[0].breakfast.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.monday[1].lunch.length > 0 ? (
                user.nutricionalPlan.monday[1].lunch.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.monday[2].snack.length > 0 ? (
                user.nutricionalPlan.monday[2].snack.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.monday[3].dinner.length > 0 ? (
                user.nutricionalPlan.monday[3].dinner.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
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
                user.nutricionalPlan.tuesday[0].breakfast.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.tuesday[1].lunch.length > 0 ? (
                user.nutricionalPlan.tuesday[1].lunch.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.tuesday[2].snack.length > 0 ? (
                user.nutricionalPlan.tuesday[2].snack.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.tuesday[3].dinner.length > 0 ? (
                user.nutricionalPlan.tuesday[3].dinner.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
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
                user.nutricionalPlan.wednesday[0].breakfast.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.wednesday[1].lunch.length > 0 ? (
                user.nutricionalPlan.wednesday[1].lunch.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.wednesday[2].snack.length > 0 ? (
                user.nutricionalPlan.wednesday[2].snack.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.wednesday[3].dinner.length > 0 ? (
                user.nutricionalPlan.wednesday[3].dinner.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
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
                user.nutricionalPlan.thursday[0].breakfast.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.thursday[1].lunch.length > 0 ? (
                user.nutricionalPlan.thursday[1].lunch.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.thursday[2].snack.length > 0 ? (
                user.nutricionalPlan.thursday[2].snack.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.thursday[3].dinner.length > 0 ? (
                user.nutricionalPlan.thursday[3].dinner.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
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
                user.nutricionalPlan.friday[0].breakfast.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.friday[1].lunch.length > 0 ? (
                user.nutricionalPlan.friday[1].lunch.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.friday[2].snack.length > 0 ? (
                user.nutricionalPlan.friday[2].snack.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.friday[3].dinner.length > 0 ? (
                user.nutricionalPlan.friday[3].dinner.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
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
                user.nutricionalPlan.saturday[0].breakfast.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.saturday[1].lunch.length > 0 ? (
                user.nutricionalPlan.saturday[1].lunch.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.saturday[2].snack.length > 0 ? (
                user.nutricionalPlan.saturday[2].snack.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.saturday[3].dinner.length > 0 ? (
                user.nutricionalPlan.saturday[3].dinner.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
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
                user.nutricionalPlan.sunday[0].breakfast.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Almuerzo</TextMeal>
              {user.nutricionalPlan.sunday[1].lunch.length > 0 ? (
                user.nutricionalPlan.sunday[1].lunch.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Merienda</TextMeal>
              {user.nutricionalPlan.sunday[2].snack.length > 0 ? (
                user.nutricionalPlan.sunday[2].snack.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
              <TextMeal>Cena</TextMeal>
              {user.nutricionalPlan.sunday[3].dinner.length > 0 ? (
                user.nutricionalPlan.sunday[3].dinner.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.meal}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <InfoItem>Sin Información.</InfoItem>
                </NoData>
              )}
            </List>
          </PlanDay>
        </PlanData>
      )}
    </PlanContainer>
  );
};

const PlanContainer = styled.div`
  padding-top: -1rem;
`;

const TextMeal = styled.h4``;

const PlanButton = styled.button`
  width: 90vw;
  margin-bottom: 5vh !important;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  background-color: #fff;
  color: #ee464f;
  padding: 10px;
  margin: 10px;
  font-size: 2rem;
  box-shadow: 0 0 3px 3px #ee464f;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  :hover {
    cursor: pointer;
    background-color: rgb(250, 220, 220);
    box-shadow: 0 0 3px 3px rgb(30, 30, 30);
    color: rgb(30, 30, 30);

    path {
      transform: scale(1.1);
    }
  }
`;

const PlanData = styled.div`
  display: flex;
  justify-content: center;
`;

const PlanDay = styled.div`
  padding: 1rem;
  margin: 1rem;
  margin-top: 0 !important;
  text-align: left;
  background-color: rgb(230, 230, 230);
  border-radius: 10px;
`;

const DayWeek = styled.h1``;

const DayWeekNow = styled.h1`
  color: #ee464f;
`;

const Today = styled.i``;

const Hr = styled.hr``;

const List = styled.div``;

const InfoItem = styled.li``;

const NoData = styled.div``;

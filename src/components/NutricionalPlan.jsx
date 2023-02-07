import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowCircleDown } from "react-icons/md";
import { IconContext } from "react-icons";

import { user } from "../App";

export const NutricionalPlan = () => {
  const [showPlan, setShowPlan] = useState(false);

  const handlePlan = () => {
    setShowPlan(!showPlan);
  };

  return (
    <RoutineContainer>
      <IconContext.Provider
        value={{ size: "1.9rem", style: { verticalAlign: "middle" } }}
      >
        <RoutineButton onClick={handlePlan}>
          Mis Plan Nutricional <MdArrowCircleDown verticalAlign="middle" />
        </RoutineButton>
      </IconContext.Provider>
      {showPlan && (
        <RoutineData>
          <RoutineDay>
            <DayWeek>Lunes</DayWeek>
            <Hr />
            <List>
              {user.nutricionalPlan.monday[0].breakfast.length > 0 ? (
                user.nutricionalPlan.monday[0].breakfast.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Plan</TextNoData>
                </NoData>
              )}
              {user.nutricionalPlan.monday[1].lunch.length > 0 ? (
                user.nutricionalPlan.monday[1].lunch.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Plan</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Martes</DayWeek>
            <Hr />
            <List>
              {user.nutricionalPlan.tuesday.length > 0 ? (
                user.nutricionalPlan.tuesday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Plan</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Miércoles</DayWeek>
            <Hr />
            <List>
              {user.nutricionalPlan.wednesday.length > 0 ? (
                user.nutricionalPlan.wednesday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Plan</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Jueves</DayWeek>
            <Hr />
            <List>
              {user.nutricionalPlan.thursday.length > 0 ? (
                user.nutricionalPlan.thursday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Plan</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Viernes</DayWeek>
            <Hr />
            <List>
              {user.nutricionalPlan.friday.length > 0 ? (
                user.nutricionalPlan.friday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Plan</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Sábado</DayWeek>
            <Hr />
            <List>
              {user.nutricionalPlan.saturday.length > 0 ? (
                user.nutricionalPlan.saturday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Plan</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Domingo</DayWeek>
            <Hr />
            <List>
              {user.nutricionalPlan.sunday.length > 0 ? (
                user.nutricionalPlan.sunday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Plan</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
        </RoutineData>
      )}
    </RoutineContainer>
  );
};

const RoutineContainer = styled.div``;

const RoutineButton = styled.button`
  width: 90vw;
  margin-bottom: 3vh !important;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  background-color: #fff;
  color: #ee464f;
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  box-shadow: 0 0 3px 3px #ee464f;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: rgb(250, 200, 200);
    box-shadow: 0 0 3px 3px rgb(30, 30, 30);
    color: rgb(30, 30, 30);
  }
`;

const RoutineData = styled.div``;

const RoutineDay = styled.div`
  padding: 1rem;
  margin: 1rem;
  text-align: left;
  background-color: rgb(230, 230, 230);
`;

const DayWeek = styled.h1``;

const Hr = styled.hr``;

const List = styled.div``;

const InfoItem = styled.li``;

const NoData = styled.div``;

const TextNoData = styled.h2``;

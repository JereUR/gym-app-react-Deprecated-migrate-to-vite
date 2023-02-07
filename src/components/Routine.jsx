import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowCircleDown } from "react-icons/md";
import { IconContext } from "react-icons";

import { user } from "../App";

export const Routine = () => {
  const [showRoutine, setShowRoutine] = useState(false);

  const handleRoutine = () => {
    setShowRoutine(!showRoutine);
  };

  return (
    <RoutineContainer>
      <IconContext.Provider
        value={{ size: "1.9rem", style: { verticalAlign: "middle" } }}
      >
        <RoutineButton onClick={handleRoutine}>
          Mis Rutinas <MdArrowCircleDown verticalAlign="middle" />
        </RoutineButton>
      </IconContext.Provider>
      {showRoutine && (
        <RoutineData>
          <RoutineDay>
            <DayWeek>Lunes</DayWeek>
            <Hr />
            <List>
              {user.routine.monday.length > 0 ? (
                user.routine.monday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Libre</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Martes</DayWeek>
            <Hr />
            <List>
              {user.routine.tuesday.length > 0 ? (
                user.routine.tuesday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Libre</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Miércoles</DayWeek>
            <Hr />
            <List>
              {user.routine.wednesday.length > 0 ? (
                user.routine.wednesday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Libre</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Jueves</DayWeek>
            <Hr />
            <List>
              {user.routine.thursday.length > 0 ? (
                user.routine.thursday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Libre</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Viernes</DayWeek>
            <Hr />
            <List>
              {user.routine.friday.length > 0 ? (
                user.routine.friday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Libre</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Sábado</DayWeek>
            <Hr />
            <List>
              {user.routine.saturday.length > 0 ? (
                user.routine.saturday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Libre</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
          <RoutineDay>
            <DayWeek>Domingo</DayWeek>
            <Hr />
            <List>
              {user.routine.sunday.length > 0 ? (
                user.routine.sunday.map((el) => (
                  <InfoItem>
                    {el.mount} - {el.exercise}
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Libre</TextNoData>
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

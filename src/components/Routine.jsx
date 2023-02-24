import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowCircleDown, MdArrowCircleUp } from "react-icons/md";
import { IconContext } from "react-icons";

import { user } from "../App";
import { getDayNow } from "../helpers/GetDay";
import { Colors } from "../constants/Colors";

const { backgroundText, primaryRed, primaryBlue, secondaryBlue } = Colors;

export const Routine = () => {
  const [showRoutine, setShowRoutine] = useState(false);

  const handleRoutine = () => {
    setShowRoutine(!showRoutine);
  };

  const day = getDayNow();

  return (
    <RoutineContainer>
      <IconContext.Provider
        value={{ size: "1.9rem", style: { verticalAlign: "middle" } }}
      >
        <RoutineButton onClick={handleRoutine}>
          Mis Rutinas{" "}
          {!showRoutine ? <MdArrowCircleDown /> : <MdArrowCircleUp />}
        </RoutineButton>
      </IconContext.Provider>
      {showRoutine && (
        <RoutineData>
          <RoutineDay>
            {day === 1 ? (
              <DayWeekNow>
                Lunes <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Lunes</DayWeek>
            )}
            <Hr />
            <List>
              {user.routine.monday.length > 0 ? (
                user.routine.monday.map((el, index) => (
                  <InfoItem key={index}>
                    <Mount>{el.mount}</Mount>
                    <Exercise>- {el.exercise}</Exercise>
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
            {day === 2 ? (
              <DayWeekNow>
                Martes <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Martes</DayWeek>
            )}
            <Hr />
            <List>
              {user.routine.tuesday.length > 0 ? (
                user.routine.tuesday.map((el, index) => (
                  <InfoItem key={index}>
                    <Mount>{el.mount}</Mount>
                    <Exercise>- {el.exercise}</Exercise>
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
            {day === 3 ? (
              <DayWeekNow>
                Miércoles <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Miércoles</DayWeek>
            )}
            <Hr />
            <List>
              {user.routine.wednesday.length > 0 ? (
                user.routine.wednesday.map((el, index) => (
                  <InfoItem key={index}>
                    <Mount>{el.mount}</Mount>
                    <Exercise>- {el.exercise}</Exercise>
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
            {day === 4 ? (
              <DayWeekNow>
                Jueves <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Jueves</DayWeek>
            )}
            <Hr />
            <List>
              {user.routine.thursday.length > 0 ? (
                user.routine.thursday.map((el, index) => (
                  <InfoItem key={index}>
                    <Mount>{el.mount}</Mount>
                    <Exercise>- {el.exercise}</Exercise>
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
            {day === 5 ? (
              <DayWeekNow>
                Viernes <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Viernes</DayWeek>
            )}
            <Hr />
            <List>
              {user.routine.friday.length > 0 ? (
                user.routine.friday.map((el, index) => (
                  <InfoItem key={index}>
                    <Mount>{el.mount}</Mount>
                    <Exercise>- {el.exercise}</Exercise>
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
            {day === 6 ? (
              <DayWeekNow>
                Sábado <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Sábado</DayWeek>
            )}
            <Hr />
            <List>
              {user.routine.saturday.length > 0 ? (
                user.routine.saturday.map((el, index) => (
                  <InfoItem key={index}>
                    <Mount>{el.mount}</Mount>
                    <Exercise>- {el.exercise}</Exercise>
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
            {day === 0 ? (
              <DayWeekNow>
                Domingo <Today>(Hoy)</Today>
              </DayWeekNow>
            ) : (
              <DayWeek>Domingo</DayWeek>
            )}
            <Hr />
            <List>
              {user.routine.sunday.length > 0 ? (
                user.routine.sunday.map((el, index) => (
                  <InfoItem key={index}>
                    <Mount>{el.mount}</Mount>
                    <Exercise>- {el.exercise}</Exercise>
                  </InfoItem>
                ))
              ) : (
                <NoData>
                  <TextNoData>Sin Información</TextNoData>
                </NoData>
              )}
            </List>
          </RoutineDay>
        </RoutineData>
      )}
    </RoutineContainer>
  );
};

const DayWeek = styled.h1``;

const DayWeekNow = styled.h1`
  color: ${primaryRed};
`;

const Exercise = styled.p`
  padding-top: 1.6px;
`;

const Hr = styled.hr``;

const InfoItem = styled.li`
  color: rgb(30, 30, 30);
  font-size: 1.3rem;
  display: flex;

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const List = styled.div``;

const Mount = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: ${secondaryBlue};

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

const NoData = styled.div`
  text-align: center;
  color: rgb(30, 30, 30);
  font-style: italic;
`;

const RoutineButton = styled.button`
  width: 90vw;
  margin-bottom: 5vw !important;
  margin-top: 2vw !important;
  font-family: "Roboto", sans-serif;
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
    margin-top: 12vw !important;
    margin-bottom: 15vw !important;
  }
`;

const RoutineContainer = styled.div`
  align-content: center;
`;

const RoutineData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: -4rem 4rem 2rem 5rem;

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
    margin: -1.5rem 1rem 2rem 1rem;
  }

  @media (max-width: 1380px) {
    grid-gap: 0;
    margin: -1.5rem 1rem 2rem 1rem;
  }
`;

const RoutineDay = styled.div`
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

const TextNoData = styled.p`
  font-size: 1.4rem;

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

const Today = styled.i``;

import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowCircleDown } from "react-icons/md";
import { IconContext } from "react-icons";

import { user } from "../App";
import { getDayNow } from "../helpers/GetDay";

export const Routine = () => {
  const [showRoutine, setShowRoutine] = useState(false);

  const handleRoutine = () => {
    setShowRoutine(!showRoutine);
  };

  const day = getDayNow();
  console.log(day);

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
  margin-bottom: 5vh !important;
  margin-top: 2vh !important;
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

const RoutineData = styled.div`
  display: flex;
  justify-content: center;
`;

const RoutineDay = styled.div`
  padding: 1rem;
  margin: 1rem;
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

const TextNoData = styled.h2``;

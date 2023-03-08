import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowCircleDown, MdArrowCircleUp } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { IconContext } from "react-icons";

import { getDayNow } from "../helpers/GetDay";
import { Colors } from "../constants/Colors";

const { primaryRed, primaryBlue, secondaryBlue } = Colors;

export const Routine = ({ user, title, addInfo }) => {
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
          <TextContent>
            {title}{" "}
            {!showRoutine ? (
              <MdArrowCircleDown className="arrow" />
            ) : (
              <MdArrowCircleUp className="arrow" />
            )}{" "}
            {addInfo && (
              <LogoContainer>
                <RiErrorWarningLine className="report" />{" "}
                <Span className="tooltip">
                  Debes completar tu información en "Mi Perfil"
                </Span>
              </LogoContainer>
            )}
          </TextContent>
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
                    <Mount>
                      {el.series} x{el.count} {el.measure}
                    </Mount>
                    <ExerciseContainer></ExerciseContainer>
                    <Exercise>
                      <TypeExercise>{el.exercise}</TypeExercise>
                      <ExtraInfo>
                        {el.rest && `${el.rest} segundos de descanso`}{" "}
                        {el.description && `- ${el.description}`}
                        {el.rest === null &&
                          el.description === null &&
                          "Sin información adicional."}
                      </ExtraInfo>
                    </Exercise>
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
                    <Mount>
                      {el.series} x{el.count} {el.measure}
                    </Mount>
                    <ExerciseContainer></ExerciseContainer>
                    <Exercise>
                      <TypeExercise>{el.exercise}</TypeExercise>
                      <ExtraInfo>
                        {el.rest && `${el.rest} segundos de descanso`}{" "}
                        {el.description && `- ${el.description}`}
                        {el.rest === null &&
                          el.description === null &&
                          "Sin información adicional."}
                      </ExtraInfo>
                    </Exercise>
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
                    <Mount>
                      {el.series} x{el.count} {el.measure}
                    </Mount>
                    <ExerciseContainer></ExerciseContainer>
                    <Exercise>
                      <TypeExercise>{el.exercise}</TypeExercise>
                      <ExtraInfo>
                        {el.rest && `${el.rest} segundos de descanso`}{" "}
                        {el.description && `- ${el.description}`}
                        {el.rest === null &&
                          el.description === null &&
                          "Sin información adicional."}
                      </ExtraInfo>
                    </Exercise>
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
                    <Mount>
                      {el.series} x{el.count} {el.measure}
                    </Mount>
                    <ExerciseContainer></ExerciseContainer>
                    <Exercise>
                      <TypeExercise>{el.exercise}</TypeExercise>
                      <ExtraInfo>
                        {el.rest && `${el.rest} segundos de descanso`}{" "}
                        {el.description && `- ${el.description}`}
                        {el.rest === null &&
                          el.description === null &&
                          "Sin información adicional."}
                      </ExtraInfo>
                    </Exercise>
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
                    <Mount>
                      {el.series} x{el.count} {el.measure}
                    </Mount>
                    <ExerciseContainer></ExerciseContainer>
                    <Exercise>
                      <TypeExercise>{el.exercise}</TypeExercise>
                      <ExtraInfo>
                        {el.rest && `${el.rest} segundos de descanso`}{" "}
                        {el.description && `- ${el.description}`}
                        {el.rest === null &&
                          el.description === null &&
                          "Sin información adicional."}
                      </ExtraInfo>
                    </Exercise>
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
                    <Mount>
                      {el.series} x{el.count} {el.measure}
                    </Mount>
                    <ExerciseContainer></ExerciseContainer>
                    <Exercise>
                      <TypeExercise>{el.exercise}</TypeExercise>
                      <ExtraInfo>
                        {el.rest && `${el.rest} segundos de descanso`}{" "}
                        {el.description && `- ${el.description}`}
                        {el.rest === null &&
                          el.description === null &&
                          "Sin información adicional."}
                      </ExtraInfo>
                    </Exercise>
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
                    <Mount>
                      {el.series} x{el.count} {el.measure}
                    </Mount>
                    <ExerciseContainer></ExerciseContainer>
                    <Exercise>
                      <TypeExercise>{el.exercise}</TypeExercise>
                      <ExtraInfo>
                        {el.rest && `${el.rest} segundos de descanso`}{" "}
                        {el.description && `- ${el.description}`}
                        {el.rest === null &&
                          el.description === null &&
                          "Sin información adicional."}
                      </ExtraInfo>
                    </Exercise>
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

const Exercise = styled.div``;

const ExerciseContainer = styled.div`
  display: block;
  border-left: 3px solid ${primaryBlue};
  margin: 1rem;
`;

const ExtraInfo = styled.p`
  font-style: italic;
`;

const Hr = styled.hr``;

const InfoItem = styled.li`
  color: rgb(30, 30, 30);
  display: flex;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const List = styled.div``;

const LogoContainer = styled.div`
  color: rgb(255, 69, 0);

  svg {
    cursor: pointer;
    transition: all 0.6s ease;

    :hover {
      transform: scale(1.1);
    }
  }

  .tooltip {
    visibility: hidden;
    position: absolute;
    transform: translate(165%, -85%);
    background-color: black;
    color: white;
    padding: 0.7rem;
    border-radius: 15px 15px 0 15px;
    font-size: 0.8rem;

    @media screen and (max-width: 1600px) {
      transform: translate(50%, -100%);
      border-radius: 15px 15px 0 15px;
    }

    @media screen and (max-width: 1200px) {
      transform: translate(10%, -100%);
      border-radius: 15px 15px 0 15px;
    }

    @media screen and (max-width: 1000px) {
      transform: translate(-5%, -100%);
      border-radius: 15px 15px 0 15px;
    }

    @media screen and (max-width: 900px) {
      transform: translate(-30%, -100%);
      border-radius: 15px 15px 0 15px;
    }

    @media screen and (max-width: 480px) {
      transform: translate(-85%, -100%);
      width: max-content;
    }
  }

  :hover .tooltip {
    visibility: visible;
  }
`;

const Mount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: ${secondaryBlue};

  @media screen and (max-width: 480px) {
    font-size: 1rem;
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

  @media screen and (max-width: 480px) {
    margin-top: 12vw !important;
    margin-bottom: 15vw !important;
    font-size: 1.5rem;
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

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
    margin: -1.5rem 1rem 2rem 1rem;
  }

  @media screen and (max-width: 1380px) {
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

  @media screen and (max-width: 480px) {
    margin: 0.1rem 0.1rem 1rem 0.1rem;
    padding: 0.9rem;
  }
`;

const Span = styled.span``;

const TextContent = styled.div`
  display: inline-flex;
  text-align: center;

  .arrow {
    margin: 5px 0 5px 10px;

    @media screen and (max-width: 480px) {
      margin: 0 0 0 10px;
    }
  }

  .report {
    color: black;
    position: absolute;
    margin-left: 37.5%;

    @media screen and (max-width: 1700px) {
      margin-left: 30%;
    }

    @media screen and (max-width: 900px) {
      margin-left: 25%;
    }

    @media screen and (max-width: 480px) {
      margin-left: 10%;
    }
  }
`;

const TextNoData = styled.p`
  font-size: 1.4rem;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Today = styled.i``;

const TypeExercise = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${secondaryBlue};

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

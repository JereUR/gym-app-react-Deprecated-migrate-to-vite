import React from "react";
import styled from "styled-components";
import { RiErrorWarningLine } from "react-icons/ri";

import { getDayNow } from "../helpers/GetDay";
import { Colors } from "../constants/Colors";
import { useIntersection } from "./useIntersection";

const { primaryRed, primaryBlue, secondaryBlue, secondaryRed } = Colors;

export const Routine = ({ user, title, addInfo }) => {
  const day = getDayNow();

  const [routineRef, isIntersecting] = useIntersection({ threshold: 0.5 });

  return (
    <RoutineContainer>
      <TitleContainer>
        <TextDiv>
          <Title>{title} </Title>
        </TextDiv>
        {addInfo && (
          <LogoContainer>
            <RiErrorWarningLine className="report" />{" "}
            <Span className="tooltip">
              Debes completar tu información en "Mi Perfil"
            </Span>
          </LogoContainer>
        )}
      </TitleContainer>
      {user.routine ? (
        <RoutineData
          ref={routineRef}
          className={isIntersecting ? "visible" : "right"}
        >
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
      ) : (
        <NoRoutine>Sin Información.</NoRoutine>
      )}
    </RoutineContainer>
  );
};

const DayWeek = styled.p`
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const DayWeekNow = styled(DayWeek)`
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
  svg {
    cursor: pointer;
    transition: all 0.6s ease;

    :hover {
      transform: scale(1.1);
    }
  }

  .report {
    font-size: 2rem;
    color: black;
    position: absolute;
    margin-left: 2vw;

    @media screen and (max-width: 480px) {
      margin-left: 5vw;
    }
  }

  .tooltip {
    visibility: hidden;
    position: absolute;
    transform: translate(23%, -110%);
    background-color: black;
    color: white;
    padding: 0.7rem;
    border-radius: 15px 15px 15px 0;
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
      transform: translate(-95%, -100%);
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

  @media screen and (max-width: 1380px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const NoData = styled.div`
  text-align: center;
  color: rgb(30, 30, 30);
  font-style: italic;
`;

const NoRoutine = styled.p`
  font-size: 2rem;
  margin-top: -2vw;
  padding-bottom: 2vw;
`;

const RoutineContainer = styled.div`
  align-content: center;
  border-left: 4px solid ${secondaryRed};
  margin: 5vw 2vw 5vw 5vw;

  @media screen and (max-width: 1380px) {
    margin: 10vw -2vw 5vw 1vw;
  }

  @media screen and (max-width: 480px) {
    margin: 10vw 3vw 5vw 1vw;
  }

  .visible {
    opacity: 1;
    transform: scale(1);
  }

  .right {
    transform: translateX(200px);
  }
`;

const RoutineData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: -4vw 1vw 2vw 5vw;
  opacity: 0;
  transform: scale(0.9);
  transition: all 1s ease-in-out;

  @media screen and (max-width: 1380px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
    margin: -1.5rem 1rem 2rem 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0;
    margin: -1.5rem 1rem 2rem 1rem;
  }
`;

const RoutineDay = styled.div`
  color: ${primaryBlue};
  width: auto;
  max-width: 30vw;
  padding: 1rem;
  margin: 2vw 1vw 2vw 1vw;
  text-align: left;
  box-shadow: 0px 0px 5px ${primaryBlue};
  border-radius: 10px;

  @media screen and (max-width: 1380px) {
    max-width: 70vw;
  }

  @media screen and (max-width: 480px) {
    max-width: 90vw;
    margin: 10vw -8vw 0.5vw 2vw;
    padding: 2vw;
  }
`;

const Span = styled.span``;

const TextDiv = styled.div``;

const TextNoData = styled.p`
  font-size: 1.4rem;

  @media screen and (max-width: 1380px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Title = styled.p`
  display: flex;
  font-size: 3rem;
  color: ${secondaryBlue};
  font-weight: bold;
  text-align: start;
  margin: 0 -1vw 5vw 5vw;

  @media screen and (max-width: 1380px) {
    font-size: 2.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Today = styled.i``;

const TypeExercise = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${secondaryBlue};

  @media screen and (max-width: 1380px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

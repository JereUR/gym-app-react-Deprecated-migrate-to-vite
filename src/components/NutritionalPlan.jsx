import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";

import { getDayNow } from "../helpers/GetDay";
import { Colors } from "../constants/Colors";
import { UseIntersection } from "../helpers/UseIntersection";
import { FetchGetData } from "../helpers/FetchGetData";
import { toast, Toaster } from "react-hot-toast";

const { primaryBlue, secondaryBlue, primaryRed } = Colors;

export const NutritionalPlan = ({ email, title, addInfo }) => {
  const [viewData, setViewData] = useState(true);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const day = getDayNow();

  const [planRef, isIntersecting] = UseIntersection({ threshold: 0.5 });

  /* useEffect(() => {
    //Get plan
    if (email !== null) {
      async function getPlan(email) {
        return await FetchGetData(`${email}`);
      }
      setLoading(true);
      const res = getPlan(email);
      if (!(res instanceof Error)) {
        setPlan(res.data);
        setLoading(false);
      } else {
        toast.error(res.message, {
          position: "top-right",
          duration: 6000,
          style: {
            background: "rgba(250, 215, 215)",
            fontSize: "1rem",
            fontWeight: "500",
          },
        });
      }
    }
  }, [email]); */

  const handleView = () => {
    setViewData(!viewData);
  };

  return (
    <PlanContainer>
      <TitleContainer>
        <TextDiv>
          <Title>
            {viewData ? (
              <BsArrowBarUp onClick={handleView} />
            ) : (
              <BsArrowBarDown onClick={handleView} />
            )}{" "}
            {title}{" "}
          </Title>
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
      {loading && (
        <NoPlan>
          <i>Cargando plan nutricional....</i>
        </NoPlan>
      )}
      {viewData &&
        /* user. */ (plan ? (
          <PlanData
            ref={planRef}
            className={isIntersecting ? "visible" : "right"}
          >
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
                {
                  /* user. */ plan.monday[0].breakfast.length > 0 ? (
                    /* user. */ plan.monday[0].breakfast.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Almuerzo</TextMeal>
                {
                  /* user. */ plan.monday[1].lunch.length > 0 ? (
                    /* user. */ plan.monday[1].lunch.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Merienda</TextMeal>
                {
                  /* user. */ plan.monday[2].snack.length > 0 ? (
                    /* user. */ plan.monday[2].snack.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Cena</TextMeal>
                {
                  /* user. */ plan.monday[3].dinner.length > 0 ? (
                    /* user. */ plan.monday[3].dinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-cena</TextMeal>
                {
                  /* user. */ plan.monday[4].afterDinner.length > 0 ? (
                    /* user. */ plan.monday[4].afterDinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Pre-entreno</TextMeal>
                {
                  /* user. */ plan.monday[5].preWorkout.length > 0 ? (
                    /* user. */ plan.monday[5].preWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-entreno</TextMeal>
                {
                  /* user. */ plan.monday[6].postWorkout.length > 0 ? (
                    /* user. */ plan.monday[6].postWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Colación</TextMeal>
                {
                  /* user. */ plan.monday[7].collation.length > 0 ? (
                    /* user. */ plan.monday[7].collation.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
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
                {
                  /* user. */ plan.tuesday[0].breakfast.length > 0 ? (
                    /* user. */ plan.tuesday[0].breakfast.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Almuerzo</TextMeal>
                {
                  /* user. */ plan.tuesday[1].lunch.length > 0 ? (
                    /* user. */ plan.tuesday[1].lunch.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Merienda</TextMeal>
                {
                  /* user. */ plan.tuesday[2].snack.length > 0 ? (
                    /* user. */ plan.tuesday[2].snack.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Cena</TextMeal>
                {
                  /* user. */ plan.tuesday[3].dinner.length > 0 ? (
                    /* user. */ plan.tuesday[3].dinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-cena</TextMeal>
                {
                  /* user. */ plan.tuesday[4].afterDinner.length > 0 ? (
                    /* user. */ plan.tuesday[4].afterDinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Pre-entreno</TextMeal>
                {
                  /* user. */ plan.tuesday[5].preWorkout.length > 0 ? (
                    /* user. */ plan.tuesday[5].preWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-entreno</TextMeal>
                {
                  /* user. */ plan.tuesday[6].postWorkout.length > 0 ? (
                    /* user. */ plan.tuesday[6].postWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Colación</TextMeal>
                {
                  /* user. */ plan.tuesday[7].collation.length > 0 ? (
                    /* user. */ plan.tuesday[7].collation.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
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
                {
                  /* user. */ plan.wednesday[0].breakfast.length > 0 ? (
                    /* user. */ plan.wednesday[0].breakfast.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Almuerzo</TextMeal>
                {
                  /* user. */ plan.wednesday[1].lunch.length > 0 ? (
                    /* user. */ plan.wednesday[1].lunch.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Merienda</TextMeal>
                {
                  /* user. */ plan.wednesday[2].snack.length > 0 ? (
                    /* user. */ plan.wednesday[2].snack.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Cena</TextMeal>
                {
                  /* user. */ plan.wednesday[3].dinner.length > 0 ? (
                    /* user. */ plan.wednesday[3].dinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-cena</TextMeal>
                {
                  /* user. */ plan.wednesday[4].afterDinner.length > 0 ? (
                    /* user. */ plan.wednesday[4].afterDinner.map(
                      (el, index) => (
                        <InfoItem key={index}>
                          {el.mount} - {el.meal}
                        </InfoItem>
                      )
                    )
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Pre-entreno</TextMeal>
                {
                  /* user. */ plan.wednesday[5].preWorkout.length > 0 ? (
                    /* user. */ plan.wednesday[5].preWorkout.map(
                      (el, index) => (
                        <InfoItem key={index}>
                          {el.mount} - {el.meal}
                        </InfoItem>
                      )
                    )
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-entreno</TextMeal>
                {
                  /* user. */ plan.wednesday[6].postWorkout.length > 0 ? (
                    /* user. */ plan.wednesday[6].postWorkout.map(
                      (el, index) => (
                        <InfoItem key={index}>
                          {el.mount} - {el.meal}
                        </InfoItem>
                      )
                    )
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Colación</TextMeal>
                {
                  /* user. */ plan.wednesday[7].collation.length > 0 ? (
                    /* user. */ plan.wednesday[7].collation.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
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
                {
                  /* user. */ plan.thursday[0].breakfast.length > 0 ? (
                    /* user. */ plan.thursday[0].breakfast.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Almuerzo</TextMeal>
                {
                  /* user. */ plan.thursday[1].lunch.length > 0 ? (
                    /* user. */ plan.thursday[1].lunch.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Merienda</TextMeal>
                {
                  /* user. */ plan.thursday[2].snack.length > 0 ? (
                    /* user. */ plan.thursday[2].snack.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Cena</TextMeal>
                {
                  /* user. */ plan.thursday[3].dinner.length > 0 ? (
                    /* user. */ plan.thursday[3].dinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-cena</TextMeal>
                {
                  /* user. */ plan.thursday[4].afterDinner.length > 0 ? (
                    /* user. */ plan.thursday[4].afterDinner.map(
                      (el, index) => (
                        <InfoItem key={index}>
                          {el.mount} - {el.meal}
                        </InfoItem>
                      )
                    )
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Pre-entreno</TextMeal>
                {
                  /* user. */ plan.thursday[5].preWorkout.length > 0 ? (
                    /* user. */ plan.thursday[5].preWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-entreno</TextMeal>
                {
                  /* user. */ plan.thursday[6].postWorkout.length > 0 ? (
                    /* user. */ plan.thursday[6].postWorkout.map(
                      (el, index) => (
                        <InfoItem key={index}>
                          {el.mount} - {el.meal}
                        </InfoItem>
                      )
                    )
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Colación</TextMeal>
                {
                  /* user. */ plan.thursday[7].collation.length > 0 ? (
                    /* user. */ plan.thursday[7].collation.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
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
                {
                  /* user. */ plan.friday[0].breakfast.length > 0 ? (
                    /* user. */ plan.friday[0].breakfast.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Almuerzo</TextMeal>
                {
                  /* user. */ plan.friday[1].lunch.length > 0 ? (
                    /* user. */ plan.friday[1].lunch.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Merienda</TextMeal>
                {
                  /* user. */ plan.friday[2].snack.length > 0 ? (
                    /* user. */ plan.friday[2].snack.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Cena</TextMeal>
                {
                  /* user. */ plan.friday[3].dinner.length > 0 ? (
                    /* user. */ plan.friday[3].dinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-cena</TextMeal>
                {
                  /* user. */ plan.friday[4].afterDinner.length > 0 ? (
                    /* user. */ plan.friday[4].afterDinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Pre-entreno</TextMeal>
                {
                  /* user. */ plan.friday[5].preWorkout.length > 0 ? (
                    /* user. */ plan.friday[5].preWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-entreno</TextMeal>
                {
                  /* user. */ plan.friday[6].postWorkout.length > 0 ? (
                    /* user. */ plan.friday[6].postWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Colación</TextMeal>
                {
                  /* user. */ plan.friday[7].collation.length > 0 ? (
                    /* user. */ plan.friday[7].collation.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
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
                {
                  /* user. */ plan.saturday[0].breakfast.length > 0 ? (
                    /* user. */ plan.saturday[0].breakfast.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Almuerzo</TextMeal>
                {
                  /* user. */ plan.saturday[1].lunch.length > 0 ? (
                    /* user. */ plan.saturday[1].lunch.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Merienda</TextMeal>
                {
                  /* user. */ plan.saturday[2].snack.length > 0 ? (
                    /* user. */ plan.saturday[2].snack.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Cena</TextMeal>
                {
                  /* user. */ plan.saturday[3].dinner.length > 0 ? (
                    /* user. */ plan.saturday[3].dinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-cena</TextMeal>
                {
                  /* user. */ plan.saturday[4].afterDinner.length > 0 ? (
                    /* user. */ plan.saturday[4].afterDinner.map(
                      (el, index) => (
                        <InfoItem key={index}>
                          {el.mount} - {el.meal}
                        </InfoItem>
                      )
                    )
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Pre-entreno</TextMeal>
                {
                  /* user. */ plan.saturday[5].preWorkout.length > 0 ? (
                    /* user. */ plan.saturday[5].preWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-entreno</TextMeal>
                {
                  /* user. */ plan.saturday[6].postWorkout.length > 0 ? (
                    /* user. */ plan.saturday[6].postWorkout.map(
                      (el, index) => (
                        <InfoItem key={index}>
                          {el.mount} - {el.meal}
                        </InfoItem>
                      )
                    )
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Colación</TextMeal>
                {
                  /* user. */ plan.saturday[7].collation.length > 0 ? (
                    /* user. */ plan.saturday[7].collation.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
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
                {
                  /* user. */ plan.sunday[0].breakfast.length > 0 ? (
                    /* user. */ plan.sunday[0].breakfast.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Almuerzo</TextMeal>
                {
                  /* user. */ plan.sunday[1].lunch.length > 0 ? (
                    /* user. */ plan.sunday[1].lunch.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Merienda</TextMeal>
                {
                  /* user. */ plan.sunday[2].snack.length > 0 ? (
                    /* user. */ plan.sunday[2].snack.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Cena</TextMeal>
                {
                  /* user. */ plan.sunday[3].dinner.length > 0 ? (
                    /* user. */ plan.sunday[3].dinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-cena</TextMeal>
                {
                  /* user. */ plan.sunday[4].afterDinner.length > 0 ? (
                    /* user. */ plan.sunday[4].afterDinner.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Pre-entreno</TextMeal>
                {
                  /* user. */ plan.sunday[5].preWorkout.length > 0 ? (
                    /* user. */ plan.sunday[5].preWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Post-entreno</TextMeal>
                {
                  /* user. */ plan.sunday[6].postWorkout.length > 0 ? (
                    /* user. */ plan.sunday[6].postWorkout.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
                <TextMeal>Colación</TextMeal>
                {
                  /* user. */ plan.sunday[7].collation.length > 0 ? (
                    /* user. */ plan.sunday[7].collation.map((el, index) => (
                      <InfoItem key={index}>
                        {el.mount} - {el.meal}
                      </InfoItem>
                    ))
                  ) : (
                    <NoData>
                      <TextNoData>Sin Información.</TextNoData>
                    </NoData>
                  )
                }
              </List>
            </PlanDay>
          </PlanData>
        ) : (
          <NoPlan>Sin Información.</NoPlan>
        ))}
      <Toaster />
    </PlanContainer>
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

const Hr = styled.hr``;

const InfoItem = styled.li`
  color: rgb(30, 30, 30);
  font-size: 1.2rem;
  line-height: 3rem;
  display: flex;
  margin-left: 1rem;

  @media screen and (max-width: 1380px) {
    font-size: 1.1rem;
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
    margin-right: 1vw;

    @media screen and (max-width: 480px) {
      margin-left: -2vw;
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
      transform: translate(-105%, -100%);
      width: max-content;
    }
  }

  :hover .tooltip {
    visibility: visible;
  }
`;

const NoData = styled.div`
  text-align: center;
  color: rgb(30, 30, 30);
  font-style: italic;
`;

const NoPlan = styled.p`
  font-size: 2rem;
  margin-top: -2vw;
  padding-bottom: 2vw;
`;

const PlanContainer = styled.div`
  align-content: center;
  border-left: 4px solid ${primaryRed};
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

const PlanData = styled.div`
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

const PlanDay = styled.div`
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

const TextMeal = styled.p`
  font-weight: bold;
  font-size: 1.4rem;

  @media screen and (max-width: 1380px) {
    font-size: 1.3rem;
  }
`;

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
  margin: 0 -1vw 5vw 10vw;

  svg {
    cursor: pointer;
    position: absolute;
    font-size: 3.5rem;
    left: 11vw;
    transition: all 0.5s ease-in-out;

    :hover {
      transform: scale(1.1);
    }

    @media screen and (max-width: 1380px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 1380px) {
    font-size: 2.8rem;
    margin-left: 13vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-left: 18vw;
  }
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Today = styled.i``;

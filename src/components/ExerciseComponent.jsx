import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

import { Colors } from "../constants/Colors";

const { secondaryRed, backgroundSuccess } = Colors;

export const ExerciseComponent = ({ el, deleteData }) => {
  return (
    <ExerciseContainer>
      <ExerciseItem key={el.id}>
        {el.series} x {el.count} {el.measure} - {el.typeExercise} -{" "}
        {el.rest ? `${el.rest} seg. de descanso` : "Sin descanso estipulado"} -{" "}
        {el.description ? `${el.description}` : "Sin información adicional"}
      </ExerciseItem>
      <FaTrashAlt fontSize="1.1rem" onClick={() => deleteData(el.id)} />
    </ExerciseContainer>
  );
};

const ExerciseContainer = styled.div`
  display: flex;
  padding: 0.5vw 2vw 0.5vw 2vw;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: ${backgroundSuccess};
  width: max-content;

  @media screen and (max-width: 480px) {
    padding: 1.5vw;
    margin-left: -5vw;
  }

  svg {
    color: ${secondaryRed};
    padding-left: 20vw;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
      padding-left: 15vw;
      padding-right: 2vw;
    }
  }

  svg:hover {
    cursor: pointer;
  }
`;

const ExerciseItem = styled.li`
  font-size: 1.1rem;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

  ::marker {
    font-weight: bold;
    color: ${secondaryRed};
  }
`;

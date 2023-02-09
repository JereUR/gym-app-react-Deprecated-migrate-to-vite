import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

import { Colors } from "../constants/Colors";

const { secondaryRed } = Colors;

export const ExerciseComponent = ({ el, deleteData }) => {
  return (
    <ExerciseContainer>
      <ExerciseItem key={el.id}>
        {el.count} {el.measure} - {el.typeExercise}
      </ExerciseItem>
      <FaTrashAlt onClick={() => deleteData(el.id)} />
    </ExerciseContainer>
  );
};

const ExerciseItem = styled.li``;

const ExerciseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 80vw 0.5vw 5vw;

  svg {
    color: ${secondaryRed};
  }

  svg:hover {
    cursor: pointer;
  }
`;

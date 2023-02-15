import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

import { Colors } from "../constants/Colors";

const { secondaryRed, backgroundSuccess } = Colors;

export const ExerciseComponent = ({ el, deleteData }) => {
  return (
    <ExerciseContainer>
      <ExerciseItem key={el.id}>
        {el.count} {el.measure} - {el.typeExercise}
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

  svg {
    color: ${secondaryRed};
    padding-left: 20vw;
  }

  svg:hover {
    cursor: pointer;
  }
`;

const ExerciseItem = styled.li`
  font-size: 1.1rem;
  font-weight: 500;

  ::marker {
    font-weight: bold;
    color: ${secondaryRed};
  }
`;

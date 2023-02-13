import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

import { Colors } from "../constants/Colors";

const { secondaryRed } = Colors;

export const MealComponent = ({ el, deleteData }) => {
  return (
    <MealContainer>
      <MealItem key={el.id}>
        {el.count} {el.measure} - {el.type}
      </MealItem>
      <FaTrashAlt onClick={() => deleteData(el.id)} />
    </MealContainer>
  );
};

const MealItem = styled.li``;

const MealContainer = styled.div`
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

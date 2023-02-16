import React from "react";
import styled from "styled-components";

import { user } from "../App";
import oops from "../assets/oops.png";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";

const { primaryBlue, secondaryBlue, colorText } = Colors;

export const Error404 = () => {
  const handleGoHome = () => {
    if (!user.login) {
      window.location.replace("/");
    }

    if (user.login && !user.admin) {
      window.location.replace("/");
    }

    if (user.login && user.admin) {
      window.location.replace("/admin");
    }
  };

  return (
    <ErrorContainer>
      <OopsContainer>
        <OopsPhoto src={oops} />
      </OopsContainer>
      <TitleContainer>
        <Title>404 - PAGE NOT FOUND</Title>
      </TitleContainer>
      <TextContainer>
        <Text>
          La página que está buscando podría haber sido eliminada debido a que
          cambió su nombre o no simplemente no existe.
        </Text>
      </TextContainer>
      <ButtonHomeContainer>
        <ButtonHome type="button" onClick={handleGoHome}>
          IR AL INICIO{" "}
        </ButtonHome>
      </ButtonHomeContainer>
    </ErrorContainer>
  );
};

const ButtonHome = styled.button`
  width: 20%;
  margin-bottom: 3vh !important;
  margin-top: 2vh !important;
  font-family: ${FontFamily};
  background-color: ${primaryBlue};
  color: ${colorText};
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  border: none;
  border-radius: 4px;
  transition: all 0.7s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: ${secondaryBlue};
  }
`;

const ButtonHomeContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

const ErrorContainer = styled.div`
  padding: 10vw;
`;

const OopsContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

const OopsPhoto = styled.img`
  width: 20vw;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-left: 24vw;
  width: 40%;
  padding: 0 1rem 1rem 1rem;
`;

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
`;

const TitleContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

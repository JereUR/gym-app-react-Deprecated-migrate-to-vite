import React from "react";
import styled from "styled-components";

import frontPage from "../assets/gym-front-page2.jpg";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const SesionPage = () => {
  return (
    <Container>
      <LogoSection>
        <LogoContainer>
          <LogoImg src={frontPage} />
        </LogoContainer>
        <TextContainer>
          <TextContent>Vive energía, vive Milenium!!</TextContent>
        </TextContainer>
      </LogoSection>
      <FormData>
        <SignIn />
        <hr />
        <SignUp />
      </FormData>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoSection = styled.div`
  flex: 1;
  margin: 5vw 1vw auto 20vw;
  width: 100%;
  height: 50%;
  padding: 4vw;
  border-radius: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 20vw;
  height: auto;
  border-radius: 1.5rem;
`;

const TextContainer = styled.div`
  width: 20vw;
`;

const TextContent = styled.p`
  display: block;
  text-align: center;
  font-size: 20px;
  font-style: oblique;
`;

const FormData = styled.div`
  flex: 1;
  margin: 7vw 30vw auto 1vw;
`;

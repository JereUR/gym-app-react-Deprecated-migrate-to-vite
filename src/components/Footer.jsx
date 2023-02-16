import React from "react";
import styled from "styled-components";

import linkedin from "../assets/linkedin.png";
import logo from "../assets/logo.png";
import { Colors } from "../constants/Colors";

const { primaryBlue } = Colors;

export const Footer = () => {
  return (
    <FooterContainer>
      <LeftContent>
        <NameGym>Milenium Gimnasio</NameGym>
        <Info>Calle 4 n°539 e/42</Info>
        <Info>Tel: (0221) 526-1149</Info>
        <Info>Contacto: mileniumgim@hotmail.com</Info>
      </LeftContent>
      <CenterContent>
        <Logo src={logo} />
      </CenterContent>
      <RightContent>
        <PoweredBy>Desarrollado por</PoweredBy>
        <ByContent>
          <IconLinkedin
            href="https://www.linkedin.com/in/jeremias-dominguez-vega/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={linkedin}></Img>
          </IconLinkedin>
          <IconLinkedin
            href="https://www.linkedin.com/in/leandro-libutti-72258a6a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={linkedin}></Img>
          </IconLinkedin>
        </ByContent>
      </RightContent>
    </FooterContainer>
  );
};

const ByContent = styled.div`
  margin-right: 5vh;
`;

const CenterContent = styled.div``;

const FooterContainer = styled.div`
  display: flex;
  box-shadow: -10px 5px 11px 0px rgba(0, 0, 0, 0.7);
`;

const IconLinkedin = styled.a``;

const Img = styled.img`
  width: 25px;
  border-radius: 50px;
  margin: 5px;
`;

const Info = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 1rem;
  margin-left: 10px;
`;

const LeftContent = styled.div`
  flex: 1;
  padding-left: 3rem;
  line-height: 5px;
`;

const Logo = styled.img`
  width: 110px;
  margin-top: 1rem;
`;

const NameGym = styled.p`
  color: ${primaryBlue};
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 25px;
`;

const PoweredBy = styled.p`
  font-size: 0.9rem;
  padding-right: 2rem;
  font-weight: bold;
  text-decoration: underline;
`;

const RightContent = styled.div`
  flex: 1;
  text-align: end;
  padding-right: 1rem;
`;

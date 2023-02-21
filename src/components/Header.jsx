import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import { MenuHeader } from "./MenuHeader";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} />
      <MenuHeader />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  box-shadow: 0px 5px 11px -10px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: auto;
  height: auto;
  margin-left: 5vw;
  z-index: 2;
`;

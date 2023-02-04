import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  box-shadow: 0px 5px 11px -10px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: 130px;
  margin-left: 10vw;
`;

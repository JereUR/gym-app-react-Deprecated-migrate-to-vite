import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaHome, FaFileInvoiceDollar, FaUserAlt } from "react-icons/fa";

import { user } from "../App";
import { useAuthAdmin } from "./AdminRoute";
import { useAuth } from "./LoginRoute";
import { Colors } from "../constants/Colors";
import { BurgerButton } from "./BurgerButton";

const { secondaryBlue, colorText } = Colors;

export const MenuHeader = () => {
  const profilePath = `/usuario/${user.username}`;
  const auth = useAuth();
  const admin = useAuthAdmin();
  const authAdmin = auth && admin;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log("click");
  };

  return (
    <NavContainer>
      {!authAdmin && (
        <NavContainer>
          <NavLinks className={`links ${clicked ? "active" : ""}`}>
            <IconContext.Provider
              value={{ size: "1.2rem", style: { verticalAlign: "top" } }}
            >
              <NavLink to="/" activeclassname="active" onClick={handleClick}>
                <FaHome size="1.3rem" /> Inicio
              </NavLink>
              <NavLink
                to="/mis-pagos"
                activeclassname="active"
                onClick={handleClick}
              >
                <FaFileInvoiceDollar /> Mis Pagos
              </NavLink>
              <NavLink
                to={profilePath}
                activeclassname="active"
                onClick={handleClick}
              >
                <FaUserAlt /> Mi Perfil
              </NavLink>
            </IconContext.Provider>
          </NavLinks>
        </NavContainer>
      )}
      {authAdmin && (
        <NavContainer>
          <NavLinks>
            <NavLink to="/admin" onClick={handleClick}>
              Admin
            </NavLink>
            <NavLink
              to={profilePath}
              activeclassname="active"
              onClick={handleClick}
            >
              Mi Perfil
            </NavLink>
          </NavLinks>
        </NavContainer>
      )}
      <BurgerContainer className="burger">
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </BurgerContainer>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
    </NavContainer>
  );
};

const BgDiv = styled.div`
  position: absolute;
  background-color: ${colorText};
  top: -700px;
  right: -2000px;
  z-index: 1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 0 80%;
    top: 0;
    right: 0;
    width: 100%;
    height: 50%;
    box-shadow: 0px 5px 11px -10px rgba(0, 0, 0, 0.7);
  }
`;

const BurgerContainer = styled.div``;

const NavContainer = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  padding-top: 60px;

  a {
    font-size: 1.2rem;
    color: ${secondaryBlue};
    text-decoration: none;
    width: fit-content;
    margin-left: 15vw;
    margin-right: 1rem;
  }

  .burger {
    position: absolute;
    right: 5vw;
    margin-top: 5vw;

    @media (min-width: 1150px) {
      display: none;
    }
  }

  .links {
    display: flex;
    position: absolute;
    top: -200px;
    right: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    a {
      display: block;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    @media (min-width: 1150px) {
      position: initial !important;
      margin: 0;

      a {
        font-size: 1.2rem;
        display: inline !important;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 25%;
    left: 35%;
    right: 0;
    text-align: center;
  }
`;

const NavLinks = styled.div`
  z-index: 2;
  transition: all 0.5s ease;
`;

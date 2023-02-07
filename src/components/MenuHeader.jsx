import React from "react";
import { NavLink, Router } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaHome, FaFileInvoiceDollar, FaUserAlt } from "react-icons/fa";

import { user } from "../App";
import { useAuthAdmin } from "./AdminRoute";
import { useAuth } from "./LoginRoute";

export const MenuHeader = () => {
  const profilePath = `/usuario/${user.username}`;
  const auth = useAuth();
  const admin = useAuthAdmin();
  const authAdmin = auth && admin;

  return (
    <NavContainer>
      {!authAdmin && (
        <NavContainer>
          <IconContext.Provider
            value={{ size: "1.2rem", style: { verticalAlign: "top" } }}
          >
            <NavLink to="/" activeclassname="active">
              <FaHome size="1.3rem" /> Inicio
            </NavLink>
            <NavLink to="/mis-pagos" activeclassname="active">
              <FaFileInvoiceDollar /> Mis Pagos
            </NavLink>
            <NavLink to={profilePath} activeclassname="active">
              <FaUserAlt /> Mi Perfil
            </NavLink>
          </IconContext.Provider>
        </NavContainer>
      )}
      {authAdmin && (
        <NavContainer>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to={profilePath} activeclassname="active">
            Mi Perfil
          </NavLink>
        </NavContainer>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  padding-top: 60px;

  a {
    font-size: 1.2rem;
    color: #1f7da9;
    text-decoration: none;
    width: fit-content;
    margin-left: 15vw;
    margin-right: 1rem;
  }
`;

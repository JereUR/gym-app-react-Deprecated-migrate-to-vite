import React from "react";
import { NavLink, Router } from "react-router-dom";
import styled from "styled-components";

import { user } from "../App";
import { useAuthAdmin } from "./AdminRoute";
import { useAuth } from "./LoginRoute";

export const MenuHeader = () => {
  const profilePath = `/usuario/:${user.username}`;
  const auth = useAuth();
  const admin = useAuthAdmin();
  const authAdmin = auth && admin;

  return (
    <NavContainer>
      {!authAdmin && (
        <NavContainer>
          <NavLink to="/" activeclassname="active">
            Inicio
          </NavLink>
          <NavLink to="/mis-facturas" activeclassname="active">
            Mis Facturas
          </NavLink>
          <NavLink to={profilePath} activeclassname="active">
            Mi Perfil
          </NavLink>
        </NavContainer>
      )}
      {authAdmin && (
        <NavContainer>
          <NavLink to={profilePath} activeclassname="active">
            Mi Perfil
          </NavLink>
          <NavLink to="/admin">Admin</NavLink>
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
    color: #d4373d;
    text-decoration: none;
    width: fit-content;
    margin-left: 20vw;
    margin-right: 1rem;
  }
`;

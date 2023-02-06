import React from "react";
import { NavLink, Router } from "react-router-dom";
import styled from "styled-components";

import { user } from "../App";
import { useAuthAdmin } from "./AdminRoute";
import { useAuth } from "./LoginRoute";

export const MenuHeader = () => {
  const profilePath = `/usuario/:${user.username}`;

  return (
    <NavContainer>
      {useAuth() && (
        <NavLink to="/" activeclassname="active">
          Inicio
        </NavLink>
      )}
      {useAuth() && (
        <NavLink to="/mis-facturas" activeclassname="active">
          Mis Facturas
        </NavLink>
      )}
      {useAuth() && (
        <NavLink to={profilePath} activeclassname="active">
          Mi Perfil
        </NavLink>
      )}
      {useAuthAdmin() && <NavLink to="/admin">Admin</NavLink>}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  padding-top: 60px;

  a {
    color: #d4373d;
    text-decoration: none;
    width: fit-content;
    margin-left: 20vw;
    margin-right: 1rem;
  }
`;

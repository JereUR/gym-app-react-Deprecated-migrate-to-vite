import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth, useAuthAdmin } from "./PrivateRoute";

export const MenuHeader = () => {
  return (
    <NavContainer>
      {useAuth() && (
        <NavLink to="/" activeclassname="active">
          Inicio
        </NavLink>
      )}
      {useAuth() && (
        <NavLink to="/bill" activeclassname="active">
          Mis Facturas
        </NavLink>
      )}
      {useAuth() && (
        <NavLink to="/user/:username" activeclassname="active">
          Mi Perfil
        </NavLink>
      )}
      {useAuthAdmin() && <NavLink to="/admin">Admin</NavLink>}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  color: #ee464f;
`;

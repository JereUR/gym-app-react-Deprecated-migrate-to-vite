import React from "react";
import { Outlet } from "react-router-dom";

import { user } from "../App";
import { SesionPage } from "./SesionPage";

export const useAuth = () => {
  return user && user.login;
};

const LoginRoute = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <SesionPage />;
};

export default LoginRoute;

import React from "react";
import { Outlet } from "react-router-dom";

import { SesionPage } from "./SesionPage";

export const useAuth = (user) => {
  return user && user.login;
};

const LoginRoute = ({ user }) => {
  const isAuth = useAuth(user);

  return isAuth ? <Outlet /> : <SesionPage />;
};

export default LoginRoute;

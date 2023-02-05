import React from "react";
import { Outlet } from "react-router-dom";
import { user } from "../App";
import { Home } from "./Home";
import { useAuth } from "./LoginRoute";
import { SesionPage } from "./SesionPage";

export const useAuthAdmin = () => {
  return user && user.admin;
};

const AdminRoute = () => {
  const isAdmin = useAuthAdmin();
  const isLogin = useAuth();

  if (isLogin) {
    return isAdmin ? <Outlet /> : <Home />;
  }

  return <SesionPage />;
};

export default AdminRoute;

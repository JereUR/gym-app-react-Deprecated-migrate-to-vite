import React from "react";
import { Outlet } from "react-router-dom";
import { Home } from "./Home";
import { useAuth } from "./LoginRoute";
import { SesionPage } from "./SesionPage";

export const useAuthAdmin = (user) => {
  return user && user.admin;
};

const AdminRoute = ({ user, months }) => {
  const isAdmin = useAuthAdmin(user);
  const isLogin = useAuth(user);

  if (isLogin) {
    return isAdmin ? <Outlet /> : <Home user={user} months={months} />;
  }

  return <SesionPage />;
};

export default AdminRoute;

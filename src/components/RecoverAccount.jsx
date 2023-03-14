import React from "react";
import { Outlet } from "react-router-dom";

import { Home } from "./Home";
import { useAuth } from "./LoginRoute";
import { SesionPage } from "./SesionPage";

export const useRecover = (user) => {
  return user && user.recover;
};

const RecoverAccount = ({ user, months }) => {
  const isRecover = useRecover(user);
  const isLogin = useAuth();

  if (isLogin) {
    return isRecover ? <Outlet /> : <Home user={user} months={months} />;
  }

  return <SesionPage />;
};

export default RecoverAccount;

import React, { useState } from "react";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { FetchGetData } from "../helpers/FetchGetData";

import { SesionPage } from "./SesionPage";

export const useAuth = (user) => {
  return user && user.login;
};

const LoginRoute = ({ /*email*/ user }) => {
  /* const [isAuth, setIsAuth] = useState(false); */
  const isAuth = useAuth(user);

  /* useEffect(() => {
    //Get login of user
    async function getUserLogin(email) {
      return await FetchGetData("/", email);
    }
    const res = getUserLogin(email);
    if (!(res instanceof Error)) {
      setIsAuth(res);
    } else {
      toast.error(res.message, {
        position: "top-right",
        duration: 6000,
        style: {
          background: "rgba(250, 215, 215)",
          fontSize: "1rem",
          fontWeight: "500",
        },
      });
    }
  }, [email]); */

  return isAuth ? (
    <Outlet />
  ) : (
    <>
      <SesionPage />
      <Toaster />
    </>
  );
};

export default LoginRoute;

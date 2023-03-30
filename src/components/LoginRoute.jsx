import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { SesionPage } from "./SesionPage";

export const useAuth = (user) => {
  return user && user.login;
};

const LoginRoute = ({ user /*email*/ }) => {
  /*  const [isAuth, setIsAuth] = useState(false); */
  const isAuth = useAuth(user);

  /*  useEffect(() => {
    //Get login of user
    async function getUserLogin(email) {
      return await FetchGetData("/", email);
    }
    const res = getUserLogin(email);
    if (!(res instanceof Error)) {
      setIsAuth(res);
    } else {
      toast.error(
        { res },
        {
          position: "top-right",
          duration: 6000,
          style: {
            background: "rgba(250, 215, 215)",
            fontSize: "1rem",
            fontWeight: "500",
          },
        }
      );
    }
  }, [email]); */

  return isAuth ? <Outlet /> : <SesionPage />;
};

export default LoginRoute;

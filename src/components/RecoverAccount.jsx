import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { Home } from './Home'
import { useAuth } from './LoginRoute'
import { SesionPage } from './SesionPage'

export const useRecover = (user) => {
  return user && user.recover
}

const RecoverAccount = ({ /*email, login*/ user, months }) => {
  /* const [isRecover, setIsRecover] = useState(null); */
  const isRecover = useRecover(user)
  const isLogin = useAuth()

  /*  useEffect(() => {
    //Get recover
    async function getRecover(email) {
      return await FetchGetData("/",email);
    }
    const res = getRecover(email);
    if (!(res instanceof Error)) {
      setIsRecover(res);
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

  if (!isLogin) {
    return isRecover ? (
      <Outlet />
    ) : (
      <Home /*email={email}*/ user={user} months={months} />
    )
  }

  return <SesionPage />
}

export default RecoverAccount

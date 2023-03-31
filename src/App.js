import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { SesionPage } from "./components/SesionPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Bill } from "./components/Bill";
import { UserProfile } from "./components/UserProfile";
import { AdminPage } from "./components/AdminPage";
import { Error404 } from "./components/Error404";
import LoginRoute from "./components/LoginRoute";
import AdminRoute from "./components/AdminRoute";
import { ResetPassword } from "./components/ResetPassword";
import { ChangePassword } from "./components/ChangePassword";
import RecoverAccount from "./components/RecoverAccount";
import dbLocal from "./static/db_local.json";
import { useEffect, useState } from "react";
import { FetchGetData } from "./helpers/FetchGetData";
import { toast, Toaster } from "react-hot-toast";

function App({ /* user, dbUsers */ login, username, email, admin }) {
  /* const [user, setUser] = useState(null); */
  /* const pathUser = `/usuario/${user.username}`; */
  const pathUser = `/usuario/${username}`;

  /*  useEffect(() => {
    async function getUser() {
      return await FetchGetData("/");
    }
    const res = getUser();
    if (!(res instanceof Error)) {
      setUser(res);
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
  }, []); */

  return (
    <Container>
      <Router>
        {
          /* user. */ login && (
            <Header
              /* user={user} */ username={username}
              login={login}
              admin={admin}
            />
          )
        }
        <Routes>
          {!(/* user. */ login) && (
            <Route exact path="/" element={<SesionPage />} />
          )}
          <Route element={<LoginRoute /* user={user} */ email={email} />}>
            <Route
              exact
              path="/"
              element={
                <Home
                  /* user={user} */
                  months={dbLocal.months}
                  exercises={dbLocal.exercises}
                  email={email}
                />
              }
            />
            <Route
              exact
              path="/mis-pagos"
              element={
                <Bill email={email} /* user={user} */ months={dbLocal.months} />
              }
            />
            <Route
              exact
              path={pathUser}
              element={<UserProfile email={email} /* user={user} */ />}
            />
            <Route
              exact
              path="/change-password"
              element={<ChangePassword username={/* user. */ username} />}
            />
          </Route>
          <Route
            element={
              <AdminRoute
                admin={admin}
                login={login}
                email={email} /* user={user} */
                months={dbLocal.months}
              />
            }
          >
            <Route
              exact
              path="/admin"
              element={<AdminPage dbLocal={dbLocal} /* dbUsers={dbUsers} */ />}
            />
          </Route>
          <Route
            element={
              <RecoverAccount
                email={email} /* user={user} */
                months={dbLocal.months}
              />
            }
          >
            <Route exact path="/reset" element={<ResetPassword />} />
          </Route>
          <Route
            exact
            path="*"
            element={<Error404 /*login={login} admin={admin}*/ user={user} />}
          />
        </Routes>
      </Router>
      {user.login && <Footer />}
      <Toaster />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  justify-content: center;
`;

export default App;

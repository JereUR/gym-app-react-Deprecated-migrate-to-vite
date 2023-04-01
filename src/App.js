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
import { useRef } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const [surname, setSurname] = useState(null);
  const [admin, setAdmin] = useState(false);
  const res = useRef();
  /* const pathUser = `/usuario/${user.username}`; */
  /* const pathUser = `/usuario/${user.username}`; */

  useEffect(() => {
    res.current = FetchGetData(
      "http://localhost:3001/api/v1/users/currentuser"
    );

    if (!(res instanceof Error)) {
      res.current = res
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        });
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
  }, []);

  useEffect(() => {
    if (user !== null) {
      setEmail(user.email);
      setUsername(user.username);
      setSurname(user.surname);
      setAdmin(user.admin);
      setLogin(true);
    } else {
      setEmail(null);
      setUsername(null);
      setSurname(null);
      setAdmin(false);
      setLogin(false);
    }
  }, [user]);

  return (
    <Container>
      <Router>
        {login && <Header username={username} login={login} admin={admin} />}
        <Routes>
          {!login && <Route exact path="/" element={<SesionPage />} />}
          <Route element={<LoginRoute email={email} />}>
            <Route
              exact
              path="/"
              element={
                <Home
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
                <Bill
                  email={email}
                  username={username}
                  surname={surname}
                  months={dbLocal.months}
                />
              }
            />
            <Route
              exact
              path={`/usuario/${username}`}
              element={<UserProfile email={email} />}
            />
            <Route
              exact
              path="/change-password"
              element={<ChangePassword username={username} />}
            />
          </Route>
          <Route
            element={
              <AdminRoute
                admin={admin}
                login={login}
                email={email}
                months={dbLocal.months}
              />
            }
          >
            <Route
              exact
              path="/admin"
              element={<AdminPage dbLocal={dbLocal} />}
            />
          </Route>
          <Route
            element={
              <RecoverAccount
                email={email}
                login={login}
                months={dbLocal.months}
              />
            }
          >
            <Route exact path="/reset" element={<ResetPassword />} />
          </Route>
          <Route
            exact
            path="*"
            element={<Error404 login={login} admin={admin} />}
          />
        </Routes>
      </Router>
      {login && <Footer />}
      <Toaster />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  justify-content: center;
`;

export default App;

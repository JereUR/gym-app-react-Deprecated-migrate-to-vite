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

import db from "./static/db.json";

export let user = db.users[0];

const pathUser = `/usuario/${user.username}`;

function App() {
  return (
    <Container>
      <Router>
        {user.login && <Header />}
        <Routes>
          {!user.login && <Route exact path="/" element={<SesionPage />} />}
          <Route element={<LoginRoute />}>
            <Route exact path="/" element={<Home user={user} />} />
            <Route exact path="/mis-pagos" element={<Bill />} />
            <Route
              exact
              path={pathUser}
              element={<UserProfile user={user} />}
            />
            <Route exact path="/reset" element={<ResetPassword />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route exact path="/admin" element={<AdminPage db={db} />} />
            <Route exact path="/reset" element={<ResetPassword />} />
          </Route>
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </Router>
      {user.login && <Footer />}
    </Container>
  );
}

const Container = styled.div`
  display: block;
  justify-content: center;
`;

export default App;

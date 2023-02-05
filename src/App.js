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

export const user = {
  username: "Jeremias",
  surname: "Dominguez Vega",
  email: "jeremias.jdv@gmail.com",
  date: "1994-11-29",
  login: true,
  admin: false,
};

function App() {
  console.log(user.login);
  return (
    <Container>
      {user.login && <Header />}
      <Router>
        <Routes>
          {!user.login && <Route exact path="/" element={<SesionPage />} />}
          <Route element={<LoginRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/mis-facturas" element={<Bill />} />
            <Route exact path="/usuario/:username" element={<UserProfile />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route exact path="/admin" element={<AdminPage />} />
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

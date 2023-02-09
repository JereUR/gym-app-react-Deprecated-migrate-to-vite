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
import { MenuHeader } from "./components/MenuHeader";
import { ResetPassword } from "./components/ResetPassword";

export let user = {
  username: "Jeremias",
  surname: "Dominguez Vega",
  email: "jeremias.jdv@gmail.com",
  date: "1994-11-29",
  login: true,
  admin: false,
  photo: null,
  routine: {
    monday: [
      {
        mount: "15 Repeticiones",
        exercise: "xxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "Lorem Ipsum is simply dummy text of the.",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
    ],
    tuesday: [
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
    ],
    wednesday: [
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
    ],
    thursday: [
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
    ],
    friday: [
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
    ],
    saturday: [
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "15 Repeticiones",
        exercise: "xxxx",
      },
      {
        mount: "20 Repeticiones",
        exercise: "xxxx",
      },
    ],
    sunday: [],
  },
  nutricionalPlan: {
    monday: [
      {
        breakfast: [],
      },
      {
        lunch: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        snack: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        dinner: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
    ],
    tuesday: [
      {
        breakfast: [
          {
            mount: "3 ud",
            meal: "Huevo",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        lunch: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        snack: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        dinner: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
    ],
    wednesday: [
      {
        breakfast: [
          {
            mount: "3 ud",
            meal: "Huevo",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        lunch: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        snack: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        dinner: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
    ],
    thursday: [
      {
        breakfast: [
          {
            mount: "3 ud",
            meal: "Huevo",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        lunch: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        snack: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        dinner: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
    ],
    friday: [
      {
        breakfast: [
          {
            mount: "3 ud",
            meal: "Huevo",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        lunch: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        snack: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        dinner: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
    ],
    saturday: [
      {
        breakfast: [
          {
            mount: "3 ud",
            meal: "Huevo",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        lunch: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        snack: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        dinner: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
    ],
    sunday: [
      {
        breakfast: [
          {
            mount: "3 ud",
            meal: "Huevo",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        lunch: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        snack: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
      {
        dinner: [
          {
            mount: "200gr",
            meal: "Churrasco",
          },
          {
            mount: "200gr",
            meal: "Churrasco",
          },
        ],
      },
    ],
  },
};

const pathUser = `/usuario/${user.username}`;

function App() {
  return (
    <Container>
      <Router>
        {user.login && <Header />}
        <Routes>
          {!user.login && <Route exact path="/" element={<SesionPage />} />}
          <Route element={<LoginRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/mis-pagos" element={<Bill />} />
            <Route exact path={pathUser} element={<UserProfile />} />
            <Route exact path="/reset" element={<ResetPassword />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route exact path="/admin" element={<AdminPage />} />
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

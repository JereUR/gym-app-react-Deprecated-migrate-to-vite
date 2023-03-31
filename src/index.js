import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* import dbUsers from "./static/db_users.json"; */
import { FetchGetData } from "./helpers/FetchGetData";

/* let user = dbUsers[0]; */
let username, email, admin, login;

const currentUser = FetchGetData("http://localhost:3001/api/v1/currentuser");

if (currentUser !== null) {
  username = currentUser.username;
  email = currentUser.email;
  admin = currentUser.admin;
  login = true;
} else {
  username = "";
  email = "";
  admin = false;
  login = false;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App
    /* user={user}
    dbUsers={
      dbUsers
    } */ login={login}
    username={username}
    email={email}
    admin={admin}
  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

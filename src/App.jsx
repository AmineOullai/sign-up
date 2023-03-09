import { useState } from "react";
import "./App.css";
import Login from "./components/logIn";
import Signup from "./components/signUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES_NAMES } from "./constant";
import Profile from "./components/profile";

function App() {
  const [render, setRender] = useState(true);
  return (
    <div className="App">
      <div className="form">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={ROUTES_NAMES.login} />}
          ></Route>
          <Route path={ROUTES_NAMES.login} element={<Login />} />
          <Route path={ROUTES_NAMES.signup} element={<Signup />} />
          <Route path={ROUTES_NAMES.profile} element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Login from "./components/logIn";
import Signup from "./components/signUp";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [render, setRender] = useState(true);
  return (
    <div className="App">
      <div className="form">
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

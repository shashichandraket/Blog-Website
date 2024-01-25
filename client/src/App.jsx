import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterCom from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}

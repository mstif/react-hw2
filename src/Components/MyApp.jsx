import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarApp from "./NavBarApp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Registration from "./Registration";
import Page404 from "./Page404";

const MyApp = () => {
  return (
    <>
      <Router>
        <NavBarApp></NavBarApp>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default MyApp;

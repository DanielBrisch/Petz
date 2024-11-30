import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home";
import RegisterPage from "../pages/register/register";
import LoginPage from "../pages/login/login";
import AdminPage from "../pages/admin/admin";
import EditItem from "../pages/edit-item/edit-item";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

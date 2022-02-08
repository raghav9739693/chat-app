import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppRoute from "./AppRoutes";
import Home from "../components/Home";

const AppNavigator = () => {
  return (
    <>
      <Header />
      <Sidebar />

      <AppRoute />
      <Footer />
    </>
  );
};

export default AppNavigator;

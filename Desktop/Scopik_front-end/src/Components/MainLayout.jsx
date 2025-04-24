// src/Layouts/MainLayout.jsx
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

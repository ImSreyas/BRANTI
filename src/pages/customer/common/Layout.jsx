import React from "react";
import { Outlet } from "react-router-dom";
import { default as CustomerNav } from "./Nav";
import OptionCloser from "pages/common/OptionCloser";
import Footer from "./Footer";

const CustomerLayout = () => {
  return (
    <>
      <CustomerNav />
      <Outlet />
      <Footer />
      <OptionCloser />
    </>
  );
};

export default CustomerLayout;

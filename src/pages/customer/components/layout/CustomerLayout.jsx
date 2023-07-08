import React from "react";
import { Outlet } from "react-router-dom";
import CustomerNav from "../global/CustomerNav";
import OptionCloser from "../../../super-global/OptionCloser";
import Footer from "../global/CustomerFooter"

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

import React from "react";
import { Outlet } from "react-router-dom";
import CustomerNav from "./CustomerNav";

const CustomerLayout = () => {
  return (
    <>
      <CustomerNav />
      <Outlet />
      <footer>
        
      </footer>
    </>
  );
};

export default CustomerLayout;

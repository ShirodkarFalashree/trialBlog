import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Holder from "./pages/Holder/Holder";

const Layout = () => {
  return (
    <div className="w-[100vw] flex ">
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <Holder />
      </div>
    </div>
  );
};

export default Layout;

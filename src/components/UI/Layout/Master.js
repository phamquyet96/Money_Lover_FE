
import React, { useEffect, useState } from "react";
import MenuLeft from "../Dashboard/MenuLeft";
import NavBar from "../Dashboard/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="flex h-[100vh] fixed pt-16 top-0">
        <MenuLeft />
        <div className="w-[100vw] h-[100vh] flex bg-custom-gray justify-center ">
          <div className="shadow-2xl bg-white rounded mt-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

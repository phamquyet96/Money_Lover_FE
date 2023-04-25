
import React, { useEffect, useState } from "react";
import MenuLeft from "../Dashboard/MenuLeft";
import NavBar from "../Dashboard/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="flex bg-custom-gray">
        <MenuLeft />
        <div className="w-[100vw] h-[100vh] flex justify-center">
          <div className="shadow-2xl bg-white rounded-md w-[500px] h-[64px] mt-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

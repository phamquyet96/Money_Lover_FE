
import React from "react";
import MenuLeft from "../Dashboard/MenuLeft";
import NavBar from "../Dashboard/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="flex bg-custom-gray h-[100vh] pt-[62px]">
        <MenuLeft />
        <div className="w-[100vw] h-fit flex justify-center">
          <div className="shadow-2xl bg-white w-[500px] rounded mt-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

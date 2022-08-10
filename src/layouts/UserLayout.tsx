import React from "react";
import {Outlet} from "react-router-dom";
import HeaderComp from "../components/_general/Header";
import SidebarUserComp from "../components/_general/SidebarUser";

const UserLayout = () => {
  return (
    <>
      <Outlet />
      <HeaderComp />
      <SidebarUserComp />
    </>
  );
};

export default UserLayout;

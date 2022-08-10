import React from "react";
import {Outlet} from "react-router-dom";
import HeaderComp from "../components/_general/Header";
import SidebarAdminComp from "../components/_general/SidebarAdmin";

const AdminLayout = () => {
  return (
    <>
      <Outlet />
      <HeaderComp />
      <SidebarAdminComp />
    </>
  );
};

export default AdminLayout;

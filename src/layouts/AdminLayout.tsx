import React from "react";
import {Outlet} from "react-router-dom";
import HeaderComp from "../components/_general/Header";
import SidebarAdminComp from "../components/_general/SidebarAdmin";

const AdminLayout = () => {
  return (
    <div className='m mt-[152px] mb-8 ml-32 mr-[250px]'>
      <HeaderComp />
      <SidebarAdminComp />
      <Outlet />
    </div>
  );
};

export default AdminLayout;

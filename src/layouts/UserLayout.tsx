import React from "react";
import {Outlet} from "react-router-dom";
import HeaderComp from "../components/_general/Header";
import SidebarUserComp from "../components/_general/SidebarUser";

const UserLayout = () => {
  return (
    <div className='m mt-[152px] mb-8 ml-40 mr-[400px]'>
      <HeaderComp />
      <SidebarUserComp />
      <Outlet />
    </div>
  );
};

export default UserLayout;

import React from "react";
import {Outlet} from "react-router-dom";
import HeaderComp from "../components/_general/Header";
import SidebarUserComp from "../components/_general/SidebarUser";

const UserLayout = () => {
  return (
    <div className='mt-[152px] mb-8 ml-28 mr-[250px] lg:ml-12 lg:mr-24 md:ml-2 md:mr-12'>
      <HeaderComp />
      <SidebarUserComp />
      <Outlet />
    </div>
  );
};

export default UserLayout;

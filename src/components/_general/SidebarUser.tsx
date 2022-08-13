import React from "react";
import {NavLink} from "react-router-dom";
import {
  Home,
  User,
  ChartCircle,
  DollarSquare,
  Receipt1,
  Logout,
} from "iconsax-react";

const SidebarUserComp = () => {
  return (
    <div className='absolute right-0 top-0 min-h-screen w-[15.5vw] bg-blue pt-4 pr-6 pl-14'>
      <div className='flex gap-4 justify-center items-center'>
        <div className='w-[80px] h-[89px] '>
          <img src={"/assets/images/logo.png"} alt='logo' />
        </div>
        <p className='text-white text-2xl'>وامک</p>
      </div>
      <div className='flex flex-col mt-20 mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all hover:text-orange'>
          <div>
            <Home className='cursor-pointer w-8 h-8 text-white' />
          </div>
          <NavLink
            to={"/user/home"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>خانه</p>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <User className='cursor-pointer w-8 h-8 text-white' />
          </div>
          <NavLink
            to={"/user/profile"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>پروفایل</p>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <ChartCircle className='cursor-pointer w-8 h-8 text-white' />
          </div>
          <NavLink
            to={"/user/myaccount"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>حساب من</p>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <DollarSquare className='cursor-pointer w-8 h-8 text-white' />
          </div>
          <NavLink
            to={"/user/loan"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>وام</p>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <Receipt1 className='cursor-pointer w-8 h-8 text-white' />
          </div>
          <NavLink
            to={"/user/userreports"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>گزارشات</p>
          </NavLink>
        </div>
      </div>
      <div className='absolute bottom-11 flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
        <div>
          <Logout className='cursor-pointer w-8 h-8 text-white' />
        </div>
        <p className='cursor-pointer font-bold'>خروج از حساب</p>
      </div>
    </div>
  );
};

export default SidebarUserComp;

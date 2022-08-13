import React from "react";
import {NavLink, Link} from "react-router-dom";
import {
  LockCircle,
  User,
  Sms,
  DollarSquare,
  Receipt1,
  Logout,
} from "iconsax-react";

const SidebarAdminComp = () => {
  return (
    <div className='absolute right-0 top-0 h-screen w-[15.5vw] bg-blue pt-4 pr-6 pl-14'>
      <Link to={"/"}>
        <div className='flex gap-4 justify-center items-center'>
          <div className='w-[80px] h-[89px] '>
            <img src={"/assets/images/logo.png"} alt='logo' />
          </div>
          <p className='text-white text-2xl'>وامک</p>
        </div>
      </Link>
      <div className='flex flex-col mt-20 mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <LockCircle className='cursor-pointer w-8 h-8' />
          </div>
          <NavLink
            to={"/admin/fund"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>صندوق</p>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <User className='cursor-pointer w-8 h-8' />
          </div>
          <NavLink
            to={"/admin/users"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>کاربران</p>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <DollarSquare className='cursor-pointer w-8 h-8' />
          </div>
          <NavLink
            to={"/admin/loans"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>وام ها</p>
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <Receipt1 className='cursor-pointer w-8 h-8' />
          </div>
          <NavLink
            to={"/admin/adminreports"}
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
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <Sms className='cursor-pointer w-8 h-8' />
          </div>
          <NavLink
            to={"/admin/communications"}
            style={({isActive}) =>
              isActive
                ? {
                    color: "#FC8B18",
                  }
                : {color: "#FFFFFF"}
            }>
            <p className='cursor-pointer font-bold'>ارتباطات</p>
          </NavLink>
        </div>
      </div>
      <div className='absolute bottom-11 flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
        <div>
          <Logout className='cursor-pointer w-8 h-8' />
        </div>
        <p className='cursor-pointer font-bold'>خروج از حساب</p>
      </div>
    </div>
  );
};

export default SidebarAdminComp;

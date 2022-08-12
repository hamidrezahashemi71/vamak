import React from "react";
import {Link} from "react-router-dom";
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
        <div className='flex items-center gap-4 cursor-pointer transition-all text-lightOrange hover:text-orange'>
          <div>
            <Home className='cursor-pointer w-8 h-8' />
          </div>
          <Link to={"/user/home"}>
            <p className='cursor-pointer text-lg font-bold'>خانه</p>
          </Link>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <User className='cursor-pointer w-8 h-8' />
          </div>
          <Link to={"/user/profile"}>
            <p className='cursor-pointer text-lg font-bold'>پروفایل</p>
          </Link>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <ChartCircle className='cursor-pointer w-8 h-8' />
          </div>
          <Link to={"/user/myaccount"}>
            <p className='cursor-pointer text-lg font-bold'>حساب من</p>
          </Link>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <DollarSquare className='cursor-pointer w-8 h-8' />
          </div>
          <Link to={"/user/loan"}>
            <p className='cursor-pointer text-lg font-bold'>وام</p>
          </Link>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <Receipt1 className='cursor-pointer w-8 h-8' />
          </div>
          <Link to={"/user/userreports"}>
            <p className='cursor-pointer text-lg font-bold'>گزارشات</p>
          </Link>
        </div>
      </div>
      <div className='absolute bottom-11 flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
        <div>
          <Logout className='cursor-pointer w-8 h-8' />
        </div>
        <p className='cursor-pointer text-lg font-bold'>خروج از حساب</p>
      </div>
    </div>
  );
};

export default SidebarUserComp;

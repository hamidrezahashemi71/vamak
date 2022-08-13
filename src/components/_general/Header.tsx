import React from "react";
import {Link} from "react-router-dom";
import {Calendar, Notification} from "iconsax-react";

const HeaderComp = () => {
  return (
    <div className='absolute left-0 top-0 flex justify-between items-center w-[84.5vw] h-28 px-40 py-7 bg-white'>
      <div className='flex flex-col'>
        <p className='text-black text-xl'>حمیدرضا هاشمی</p>
        <p className='text-textGray text-lg'>به سامانه صندوق وامک خوش آمدید</p>
      </div>
      <div className='flex gap-8'>
        <Link to={"/user/usermessages"}>
          <Notification className='cursor-pointer transition-all hover:text-textGray' />
        </Link>
        <Calendar className='cursor-pointer transition-all hover:text-textGray' />
        <p className='text-lg '>تاریخ: 15 خرداد 1400</p>
      </div>
    </div>
  );
};

export default HeaderComp;

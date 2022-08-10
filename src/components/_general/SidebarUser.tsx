import React from "react";
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
    <div className='absolute right-0 top-0 h-screen w-[15.5vw] bg-blue pt-4 pr-6 pl-14'>
      <div className='flex gap-4 justify-center items-center'>
        <div className='w-[80px] h-[89px] '>
          <svg
            id='logoipsum-logo-50'
            xmlns='http://www.w3.org/2000/svg'
            width='80px'
            height='89px'
            viewBox='0 0 80 89'>
            <path
              id='Path_81'
              data-name='Path 81'
              d='M.879,50.537V9.394L23.1,20.823v18.4L40.879,48.48l17.778-9.257v-18.4L80.879,9.394V50.537l-40,20.572Z'
              transform='translate(-0.879 17.891)'
              fill='#fff'
            />
            <path
              id='Path_82'
              data-name='Path 82'
              d='M11.99,27.512.879,21.531,40.879,0l40,21.531L69.768,27.512v31.7L40.879,75.358,11.99,59.209Zm56.574.648-9.908,5.333v-.12L40.879,23.684,23.1,33.373v.12L13.194,28.16V58.547L40.879,74.022,68.564,58.547Z'
              transform='translate(-0.879)'
              fill='#ff8000'
              fill-rule='evenodd'
            />
          </svg>
        </div>
        <p className='text-white text-2xl'>وامک</p>
      </div>
      <div className='flex flex-col mt-20 mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-lightOrange hover:text-orange'>
          <div>
            <Home className='cursor-pointer w-8 h-8' />
          </div>
          <p className='cursor-pointer text-lg font-bold'>خانه</p>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <User className='cursor-pointer w-8 h-8' />
          </div>
          <p className='cursor-pointer text-lg font-bold'>پروفایل</p>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <ChartCircle className='cursor-pointer w-8 h-8' />
          </div>
          <p className='cursor-pointer text-lg font-bold'>حساب من</p>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <DollarSquare className='cursor-pointer w-8 h-8' />
          </div>
          <p className='cursor-pointer text-lg font-bold'>وام</p>
        </div>
      </div>
      <div className='flex flex-col mb-8'>
        <div className='flex items-center gap-4 cursor-pointer transition-all text-white hover:text-gray'>
          <div>
            <Receipt1 className='cursor-pointer w-8 h-8' />
          </div>
          <p className='cursor-pointer text-lg font-bold'>گزارشات</p>
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

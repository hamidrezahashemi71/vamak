import React from "react";

const Header = () => {
  return (
    <div className='w-full bg-white h-full rounded-md p-6 overflow-y-auto'>
      <div className='flex flex-col justyfy-center w-full'>
        <div className='flex justify-between w-full items-center'>
          <div className='flex items-center gap-1'>
            <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
            <p className='text-xl'>گزارش وام حمیدرضا هاشمی</p>
          </div>
          <button className='border-[1px] border-lightBlue rounded-md px-8 py-4 text-lightBlue transition-all hover:bg-blue hover:text-white'>
            تاریخچه وام ها
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

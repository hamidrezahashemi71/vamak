import React from "react";

const Header = () => {
  return (
    <div className='w-full bg-white h-full rounded-md p-6 overflow-y-auto'>
      <div className='flex flex-col justyfy-center w-full'>
        <div className='flex items-center gap-1'>
          <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
          <p className='text-xl'>ارتباطات</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

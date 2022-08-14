import React from "react";
import LoanHistoryAdmin from "../../_tables/LoanHistoryAdmin";

const LoanHistoryComp = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white rounded-md p-6 overflow-y-auto'>
      <div className='flex flex-col justyfy-center w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
            <p className='text-xl'>تاریخچه وام ها</p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='relative'>
              <input
                type='text'
                placeholder='نام و نام خانوادگی'
                className='w-auto border-[1px] border-gray rounded-md h-14 outline-none mt-1 pr-11'
              />
              <img
                className='absolute right-2 top-4'
                src={"/assets/images/search-normal.png"}
                alt='search-normal'
              />
            </div>
            <div>
              <select className='w-auto border-[1px] border-gray rounded-md h-14 outline-none'>
                <option value=''>همه وام ها</option>
              </select>
            </div>
          </div>
        </div>
        <LoanHistoryAdmin />
      </div>
    </div>
  );
};

export default LoanHistoryComp;

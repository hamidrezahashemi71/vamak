import React from "react";
import {Calendar} from "iconsax-react";

const ReportsComp = () => {
  return (
    <>
      <div className='w-full bg-white h-full rounded-md p-6'>
        <div className='flex flex-col justyfy-center w-full'>
          <div className='flex items-center gap-1'>
            <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
            <p className='text-xl'>گزارشات</p>
          </div>
          <div className='flex gap-6 items-center mt-12'>
            <div className='relative'>
              <input
                id='depositAmount'
                // value={depositAmount}
                // onChange={(e) => setDepositAmount(e.target.value)}
                className='relative w-full border-[1px] border-gray rounded-md h-14 outline-none mt-1 px-14 pl-11'
                type='Date'
                min={1000000}
              />
              <p className='absolute right-2 top-4 text-black opacity-60'>
                از تاریخ:
              </p>
              <Calendar className='absolute left-2 top-5 cursor-pointer transition-all hover:text-textGray' />
            </div>
            <div className='relative'>
              <input
                id='depositAmount'
                // value={depositAmount}
                // onChange={(e) => setDepositAmount(e.target.value)}
                className='relative w-full border-[1px] border-gray rounded-md h-14 outline-none mt-1 px-14 pl-11'
                type='Date'
                min={1000000}
              />
              <p className='absolute right-2 top-4 text-black opacity-60'>
                تا تاریخ:
              </p>
              <Calendar className='absolute left-2 top-5 cursor-pointer transition-all hover:text-textGray' />
            </div>
            <button className='border-[1px] border-lightBlue rounded-md px-8 py-4 text-lightBlue transition-all hover:bg-blue hover:text-white'>
              اعمال فیلتر
            </button>
            <img
              className='cursor-pointer'
              src={"/assets/images/pdf.png"}
              alt='pdf-file'
            />
            <img
              className='cursor-pointer'
              src={"/assets/images/excel.png"}
              alt='pdf-file'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsComp;

import React from "react";

const DepositWithdrawComp = () => {
  return (
    <>
      <div className='w-[50%] h-[350px] bg-white rounded-md p-6 overflow-hidden'>
        <div className='w-[200%] h-full'>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <button className='w-[25%] bg-green'>واریز</button>
              <button className='w-[25%] bg-red'>دریافت</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositWithdrawComp;

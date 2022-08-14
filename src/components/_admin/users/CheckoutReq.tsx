import React from "react";
import CheckoutTable from "../../_tables/Checkout";

const CheckoutReq = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white rounded-md overflow-y-auto'>
      <div className='relative'>
        <input
          type='text'
          placeholder='نام و نام خانوادگی'
          className='w-[30%] border-[1px] border-gray rounded-md h-14 outline-none mt-1 pr-11'
        />
        <img
          className='absolute right-2 top-4'
          src={"/assets/images/search-normal.png"}
          alt='search-normal'
        />
      </div>
      <CheckoutTable />
    </div>
  );
};

export default CheckoutReq;

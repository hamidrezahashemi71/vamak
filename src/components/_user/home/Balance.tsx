import React from "react";

const BalanceComp = () => {
  return (
    <div className='w-[66%] h-[360px] bg-white rounded-md px-6 pt-5 pb-8'>
      <div className='flex flex-col'>
        <div className='flex gap-1 items-center'>
          <div>
            <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
          </div>
          <p className='text-xl'>موجودی</p>
        </div>
        <div className='flex flex-col gap-2 mt-4 items-center justify-center'>
          <p className='text-4xl text-green'>0</p>
          <p className='text-black'>ریال</p>
        </div>
        <div className='flex justify-between gap-8 mt-16'>
          <p className='text-sm'>
            مبلغ قابل پرداخت برای حق عضویت در سامانه:
            <span className='text-orange'> 1/000/000</span> ریال
          </p>
          <p className='text-sm'>
            زمان پرداخت حق عضویت:
            <span className='text-orange'> 30</span> روز
          </p>
        </div>
        <button className='flex justify-center mx-auto w-[50%] py-3 mt-12 border-2 border-green text-green font-bold transition-all hover:bg-green hover:text-white rounded-md'>
          واریز
        </button>
      </div>
    </div>
  );
};

export default BalanceComp;

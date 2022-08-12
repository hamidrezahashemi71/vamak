import React from "react";

const FuturePaymentComp = () => {
  return (
    <>
      <div className='flex flex-col gap-1'>
        <div className='w-full h-32 bg-white rounded-md px-6 py-5'>
          <div className='flex gap-1 items-center'>
            <div>
              <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
            </div>
            <p className='text-xl'>قسط های پیش رو</p>
          </div>
          <div className='flex justify-center gap-20 mt-8'>
            <p className='text-black'>عنوان وام</p>
            <p className='text-black'>تاریخ و زمان پرداخت</p>
            <p className='text-black'>اقساط باقیمانده</p>
            <p className='text-black'>مبلغ قسط</p>
            <p className='text-black'>دیرکرد اقساط</p>
            <p className='text-black'>پرداخت</p>
          </div>
        </div>
        <div className='w-full h-[350px] bg-white rounded-md'>
          <p className='text-black opacity-40 text-xl text-center mt-20'>
            شما وام فعالی ندارید
          </p>
        </div>
      </div>
    </>
  );
};

export default FuturePaymentComp;

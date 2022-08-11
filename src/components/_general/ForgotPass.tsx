import React, {useState} from "react";
import {Link} from "react-router-dom";

const ForgotPassComp = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className=' flex justify-center items-center bg-lightGray'>
        <section className='w-2/6 h-2/6 '>
          <div className='h-screen flex flex-col items-center justify-center'>
            <div className='text-center text-2xl font-bold mb-4'>
              فراموشی رمز عبور
            </div>
            <div className='text-right mb-3'>
              لطفا شماره موبایل خود را وارد کنید.
            </div>
            <div className='w-[90%] flex-col items-center mx-auto bg-white mt-3 px-5 py-7 rounded-md'>
              <div className='flex flex-col'>
                <label htmlFor='phone'>شماره موبایل:</label>
                <input
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='border-[1px] border-gray rounded-md h-10 mb-8 outline-none mt-1'
                  type='number'
                />
              </div>

              <Link to={"/"} className='underline text-lightBlue'>
                بازگشت به صفحه ورود
              </Link>
              <Link to={"/confirmcode"}>
                <button
                  disabled={!phone}
                  className='disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-10 bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
                  تایید
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPassComp;

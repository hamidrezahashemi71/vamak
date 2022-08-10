import React, {useState} from "react";
import {Link} from "react-router-dom";

const ConfirmCodeComp = () => {
  const [confirmCode, setConfirmCode] = useState("");
  return (
    <>
      <div className=' flex justify-center items-center bg-lightGray'>
        <section className='w-2/6 h-2/6 '>
          <div className='h-screen flex flex-col items-center justify-center'>
            <div className='text-center text-2xl font-bold mb-4'>کد تایید</div>
            <div className='text-right mb-3'>
              کد تایید به شماره 09120678588 ارسال شد. کد را در کادر زیر وارد
              کنید
            </div>
            <div className='w-[90%] flex-col items-center mx-auto bg-white mt-3 px-5 py-7 rounded-md'>
              <div className='flex flex-col'>
                <input
                  id='phone'
                  value={confirmCode}
                  onChange={(e) => setConfirmCode(e.target.value)}
                  className='border-[1px] border-gray rounded-md h-10 mb-6 outline-none mt-1'
                  type='number'
                />
              </div>
              <div className='flex justify-center text-lightBlue text-center'>
                تا ارسال مجدد کد : 00:56
              </div>
              <div className='flex justify-between mt-7'>
                <div>
                  <Link
                    to={"#"}
                    className='underline text-lightBlue text-center'>
                    ویرایش شماره تلفن
                  </Link>
                </div>
                <div>
                  <Link
                    to={"#"}
                    className='underline text-lightBlue text-center'>
                    بازگشت به صفحه ورود
                  </Link>
                </div>
              </div>
              <button
                disabled={!confirmCode}
                className='disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-10 bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
                تایید
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConfirmCodeComp;

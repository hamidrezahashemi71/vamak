import React, {useState} from "react";
import {Link} from "react-router-dom";

const ConfirmCodeComp = () => {
  const [confirmCode, setConfirmCode] = useState("");

  const handleEnter = (event: any) => {
    if (event.key !== "Backspace") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index - 1].focus();
      event.preventDefault();
    }
    if (event.key === "Backspace") {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  };

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
              <form className='flex gap-3 w-full justify-center mb-6'>
                <input
                  className='w-10 h-10 text-center rounded-md border-[1px] border-black'
                  maxLength={1}
                />
                <input
                  className='w-10 h-10 text-center rounded-md border-[1px] border-black'
                  onKeyUp={handleEnter}
                  maxLength={1}
                />
                <input
                  className='w-10 h-10 text-center rounded-md border-[1px] border-black'
                  onKeyUp={handleEnter}
                  maxLength={1}
                />
                <input
                  className='w-10 h-10 text-center rounded-md border-[1px] border-black'
                  onKeyUp={handleEnter}
                  maxLength={1}
                />
              </form>
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
              <Link to={"/user"}>
                <button
                  disabled={!confirmCode}
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

export default ConfirmCodeComp;

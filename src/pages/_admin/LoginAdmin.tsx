import React, {useState} from "react";
import {Link} from "react-router-dom";
import useDocTitle from "../../lib/customHooks";

const LoginAdminPage = () => {
  useDocTitle("وامک | ورود ادمین");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  return (
    <>
      <Link to={"/adminlogin"}>
        <button className='absolute right-0 top-0 mr-4 mt-4 bg-lightBlue transition-all hover:bg-blue h-10 p-2 rounded-md text-white'>
          ورود ادمین
        </button>
      </Link>
      <Link to={"/"}>
        <button className='absolute right-24 top-0 mr-4 mt-4 bg-lightBlue transition-all hover:bg-blue h-10 p-2 rounded-md text-white'>
          ورود کاربر
        </button>
      </Link>
      <div className=' flex justify-center items-center bg-lightGray'>
        <section className='w-2/6 h-2/6 '>
          <div className='h-screen flex flex-col items-center justify-center'>
            <div className='text-center text-2xl font-bold mb-4'>
              ورود ادمین
            </div>
            <div className='text-right mb-3'>
              لطفا برای ورود به پنل خود نام کاربری و رمز عبور خود را وارد کنید
            </div>
            <div className='w-[90%] flex-col items-center mx-auto bg-white mt-3 px-6 py-8 rounded-md'>
              <div className='flex flex-col'>
                <label htmlFor='name'>نام:</label>
                <input
                  value={loginData.username}
                  onChange={(e) =>
                    setLoginData({...loginData, username: e.target.value})
                  }
                  className='border-[1px] border-gray rounded-md h-10 mb-8 outline-none mt-1'
                  type='text'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='password'>رمز عبور:</label>
                <input
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({...loginData, password: e.target.value})
                  }
                  className='border-[1px] border-gray rounded-md h-10 mb-8 outline-none mt-1'
                  type='password'
                />
              </div>
              <Link to={"/forgotpassword"} className='underline text-lightBlue'>
                فراموشی رمز عبور
              </Link>
              <Link to={"/admin"}>
                <button
                  disabled={!loginData.username || !loginData.password}
                  className='disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-10 bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
                  ورود به حساب ادمین
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginAdminPage;

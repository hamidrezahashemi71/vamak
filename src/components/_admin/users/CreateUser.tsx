import React, {useState} from "react";
import ChangeConfirmModal from "./CreateUserConfirmModal";
import {Edit} from "iconsax-react";

const CreateUser = () => {
  const [profileData, setprofileData] = useState({
    firstName: "",
    lastName: "",
    accountNum: "",
    nationalId: "",
    mobileNum: "",
    telephoneNum: "",
    address: "",
    postalCode: "",
    password: "",
  });
  const [passChange, setPassChange] = useState(false);
  const showModal = () => {
    setPassChange(true);
  };

  const hideModal = () => {
    setPassChange(false);
  };
  return (
    <>
      <div className=' w-full bg-white h-full rounded-md p-6'>
        <div className='relative flex flex-col justyfy-center w-full'>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='flex  justify-between w-full items-center'>
              <div className='flex justify-between items-center gap-1'>
                <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
                <p className='text-xl'>پروفایل</p>
              </div>
              <div className='flex gap-1 text-orange transition-all hover:text-lightOrange cursor-pointer'>
                <Edit />
                <p>ویرایش</p>
              </div>
            </div>
            <div className='flex flex-col w-full mt-14 justify-center h-full'>
              <div className='flex w-full px-8 justify-between gap-16 mb-10'>
                <div className='relative flex flex-col w-full '>
                  <label htmlFor='firstName'>نام:</label>
                  <input
                    value={profileData.firstName}
                    onChange={(e) =>
                      setprofileData({
                        ...profileData,
                        firstName: e.target.value,
                      })
                    }
                    id='firstName'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='text'
                  />
                  {!profileData.firstName ? (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/not-ok.png"} alt='' />
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/tick.png"} alt='' />
                    </p>
                  )}
                </div>
                <div className='relative flex flex-col w-full'>
                  <label htmlFor='lastName'>نام خانوادگی:</label>
                  <input
                    value={profileData.lastName}
                    onChange={(e) =>
                      setprofileData({...profileData, lastName: e.target.value})
                    }
                    id='lastName'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='text'
                  />
                  {!profileData.lastName ? (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/not-ok.png"} alt='' />
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/tick.png"} alt='' />
                    </p>
                  )}
                </div>
              </div>
              <div className='flex w-full px-8 justify-between gap-16 mb-10'>
                <div className='relative flex flex-col w-full '>
                  <label htmlFor='accountNum'>شماره حساب:</label>
                  <input
                    value={profileData.accountNum}
                    onChange={(e) =>
                      setprofileData({
                        ...profileData,
                        accountNum: e.target.value,
                      })
                    }
                    id='accountNum'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='text'
                  />
                  {!profileData.accountNum ? (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/not-ok.png"} alt='' />
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/tick.png"} alt='' />
                    </p>
                  )}
                </div>
                <div className='relative flex flex-col w-full'>
                  <label htmlFor='nationalId'>کدملی:</label>
                  <input
                    value={profileData.nationalId}
                    onChange={(e) =>
                      setprofileData({
                        ...profileData,
                        nationalId: e.target.value,
                      })
                    }
                    id='nationalId'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='text'
                  />
                  {!profileData.nationalId ? (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/not-ok.png"} alt='' />
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/tick.png"} alt='' />
                    </p>
                  )}
                </div>
              </div>
              <div className='flex w-full px-8 justify-between gap-16 mb-10'>
                <div className='relative flex flex-col w-full '>
                  <label htmlFor='mobileNum'>تلفن همراه:</label>
                  <input
                    value={profileData.mobileNum}
                    onChange={(e) =>
                      setprofileData({
                        ...profileData,
                        mobileNum: e.target.value,
                      })
                    }
                    id='mobileNum'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='text'
                  />
                  {!profileData.mobileNum ? (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/not-ok.png"} alt='' />
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/tick.png"} alt='' />
                    </p>
                  )}
                </div>
                <div className='relative flex flex-col w-full'>
                  <label htmlFor='telephoneNum'>تلفن ثابت:</label>
                  <input
                    value={profileData.telephoneNum}
                    onChange={(e) =>
                      setprofileData({
                        ...profileData,
                        telephoneNum: e.target.value,
                      })
                    }
                    id='telephoneNum'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='text'
                  />
                  {!profileData.telephoneNum ? (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/not-ok.png"} alt='' />
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/tick.png"} alt='' />
                    </p>
                  )}
                </div>
              </div>
              <div className='flex w-full px-8 justify-between gap-16 mb-10'>
                <div className='relative flex flex-col w-full '>
                  <label htmlFor='address'>آدرس محل سکونت:</label>
                  <input
                    value={profileData.address}
                    onChange={(e) =>
                      setprofileData({...profileData, address: e.target.value})
                    }
                    id='address'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='text'
                  />
                  {!profileData.address ? (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/not-ok.png"} alt='' />
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/tick.png"} alt='' />
                    </p>
                  )}
                </div>
                <div className='relative flex flex-col w-full'>
                  <label htmlFor='postalCode'>کد پستی:</label>
                  <input
                    value={profileData.postalCode}
                    onChange={(e) =>
                      setprofileData({
                        ...profileData,
                        postalCode: e.target.value,
                      })
                    }
                    id='postalCode'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='number'
                    minLength={10}
                  />
                  {!profileData.postalCode ? (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/not-ok.png"} alt='' />
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <img src={"/assets/images/tick.png"} alt='' />
                    </p>
                  )}
                </div>
              </div>
              <div className='flex w-[50%] px-8 justify-between gap-16 mb-10'>
                <div className='relative flex flex-col w-full '>
                  <label htmlFor='password'>رمز عبور:</label>
                  <input
                    value={profileData.password}
                    onChange={(e) =>
                      setprofileData({...profileData, password: e.target.value})
                    }
                    id='password'
                    className='border-[1px] border-gray rounded-md h-10 outline-none mt-1 pr-4 pl-11'
                    type='password'
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <button
                disabled={
                  !profileData.firstName ||
                  !profileData.lastName ||
                  !profileData.nationalId ||
                  !profileData.mobileNum ||
                  !profileData.accountNum ||
                  !profileData.telephoneNum ||
                  !profileData.address ||
                  !profileData.postalCode ||
                  !profileData.password
                }
                onClick={() => showModal()}
                className='disabled:opacity-50 disabled:cursor-not-allowed w-[15%] h-14 mt-10 bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
                ثبت
              </button>
            </div>
          </form>
        </div>
      </div>
      {passChange ? <ChangeConfirmModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default CreateUser;

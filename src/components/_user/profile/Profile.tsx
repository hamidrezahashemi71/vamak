import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Edit} from "iconsax-react";
import PassChangeModal from "./PassChangeModal";

const ProfileComp = () => {
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'>
                  <circle
                    id='Ellipse_117'
                    data-name='Ellipse 117'
                    cx='6'
                    cy='6'
                    r='6'
                    fill='#fc8b18'
                  />
                </svg>
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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_info-circle'
                          data-name='vuesax/outline/info-circle'
                          transform='translate(-364 -252)'>
                          <g id='info-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(365.25 253.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M.75,6.5A.755.755,0,0,1,0,5.75v-5A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v5A.755.755,0,0,1,.75,6.5Z'
                              transform='translate(375.25 259.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M1,2a1,1,0,0,1-.38-.08A1.155,1.155,0,0,1,.29,1.7a1.032,1.032,0,0,1-.21-.33A1,1,0,0,1,0,1,1,1,0,0,1,.08.615,1.155,1.155,0,0,1,.29.285,1.155,1.155,0,0,1,.62.075a1,1,0,0,1,.76,0,1.155,1.155,0,0,1,.33.21,1.155,1.155,0,0,1,.21.33A1,1,0,0,1,2,1a1,1,0,0,1-.08.38,1.032,1.032,0,0,1-.21.33,1.155,1.155,0,0,1-.33.21A1,1,0,0,1,1,2Z'
                              transform='translate(375 267.005)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-4'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(364 252)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_tick-circle'
                          data-name='vuesax/outline/tick-circle'
                          transform='translate(-748 -188)'>
                          <g id='tick-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(749.25 189.25)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z'
                              transform='translate(755.003 196.413)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(748 188)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_info-circle'
                          data-name='vuesax/outline/info-circle'
                          transform='translate(-364 -252)'>
                          <g id='info-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(365.25 253.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M.75,6.5A.755.755,0,0,1,0,5.75v-5A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v5A.755.755,0,0,1,.75,6.5Z'
                              transform='translate(375.25 259.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M1,2a1,1,0,0,1-.38-.08A1.155,1.155,0,0,1,.29,1.7a1.032,1.032,0,0,1-.21-.33A1,1,0,0,1,0,1,1,1,0,0,1,.08.615,1.155,1.155,0,0,1,.29.285,1.155,1.155,0,0,1,.62.075a1,1,0,0,1,.76,0,1.155,1.155,0,0,1,.33.21,1.155,1.155,0,0,1,.21.33A1,1,0,0,1,2,1a1,1,0,0,1-.08.38,1.032,1.032,0,0,1-.21.33,1.155,1.155,0,0,1-.33.21A1,1,0,0,1,1,2Z'
                              transform='translate(375 267.005)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-4'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(364 252)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_tick-circle'
                          data-name='vuesax/outline/tick-circle'
                          transform='translate(-748 -188)'>
                          <g id='tick-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(749.25 189.25)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z'
                              transform='translate(755.003 196.413)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(748 188)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_info-circle'
                          data-name='vuesax/outline/info-circle'
                          transform='translate(-364 -252)'>
                          <g id='info-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(365.25 253.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M.75,6.5A.755.755,0,0,1,0,5.75v-5A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v5A.755.755,0,0,1,.75,6.5Z'
                              transform='translate(375.25 259.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M1,2a1,1,0,0,1-.38-.08A1.155,1.155,0,0,1,.29,1.7a1.032,1.032,0,0,1-.21-.33A1,1,0,0,1,0,1,1,1,0,0,1,.08.615,1.155,1.155,0,0,1,.29.285,1.155,1.155,0,0,1,.62.075a1,1,0,0,1,.76,0,1.155,1.155,0,0,1,.33.21,1.155,1.155,0,0,1,.21.33A1,1,0,0,1,2,1a1,1,0,0,1-.08.38,1.032,1.032,0,0,1-.21.33,1.155,1.155,0,0,1-.33.21A1,1,0,0,1,1,2Z'
                              transform='translate(375 267.005)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-4'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(364 252)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_tick-circle'
                          data-name='vuesax/outline/tick-circle'
                          transform='translate(-748 -188)'>
                          <g id='tick-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(749.25 189.25)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z'
                              transform='translate(755.003 196.413)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(748 188)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_info-circle'
                          data-name='vuesax/outline/info-circle'
                          transform='translate(-364 -252)'>
                          <g id='info-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(365.25 253.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M.75,6.5A.755.755,0,0,1,0,5.75v-5A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v5A.755.755,0,0,1,.75,6.5Z'
                              transform='translate(375.25 259.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M1,2a1,1,0,0,1-.38-.08A1.155,1.155,0,0,1,.29,1.7a1.032,1.032,0,0,1-.21-.33A1,1,0,0,1,0,1,1,1,0,0,1,.08.615,1.155,1.155,0,0,1,.29.285,1.155,1.155,0,0,1,.62.075a1,1,0,0,1,.76,0,1.155,1.155,0,0,1,.33.21,1.155,1.155,0,0,1,.21.33A1,1,0,0,1,2,1a1,1,0,0,1-.08.38,1.032,1.032,0,0,1-.21.33,1.155,1.155,0,0,1-.33.21A1,1,0,0,1,1,2Z'
                              transform='translate(375 267.005)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-4'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(364 252)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_tick-circle'
                          data-name='vuesax/outline/tick-circle'
                          transform='translate(-748 -188)'>
                          <g id='tick-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(749.25 189.25)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z'
                              transform='translate(755.003 196.413)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(748 188)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  )}
                </div>
              </div>
              <div className='flex w-full px-8 justify-between gap-16 mb-10'>
                <div className='relative flex flex-col w-full '>
                  <label htmlFor='mobileNum'>تففن همراه:</label>
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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_info-circle'
                          data-name='vuesax/outline/info-circle'
                          transform='translate(-364 -252)'>
                          <g id='info-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(365.25 253.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M.75,6.5A.755.755,0,0,1,0,5.75v-5A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v5A.755.755,0,0,1,.75,6.5Z'
                              transform='translate(375.25 259.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M1,2a1,1,0,0,1-.38-.08A1.155,1.155,0,0,1,.29,1.7a1.032,1.032,0,0,1-.21-.33A1,1,0,0,1,0,1,1,1,0,0,1,.08.615,1.155,1.155,0,0,1,.29.285,1.155,1.155,0,0,1,.62.075a1,1,0,0,1,.76,0,1.155,1.155,0,0,1,.33.21,1.155,1.155,0,0,1,.21.33A1,1,0,0,1,2,1a1,1,0,0,1-.08.38,1.032,1.032,0,0,1-.21.33,1.155,1.155,0,0,1-.33.21A1,1,0,0,1,1,2Z'
                              transform='translate(375 267.005)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-4'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(364 252)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_tick-circle'
                          data-name='vuesax/outline/tick-circle'
                          transform='translate(-748 -188)'>
                          <g id='tick-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(749.25 189.25)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z'
                              transform='translate(755.003 196.413)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(748 188)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  )}
                </div>
                <div className='relative relative flex flex-col w-full'>
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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_info-circle'
                          data-name='vuesax/outline/info-circle'
                          transform='translate(-364 -252)'>
                          <g id='info-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(365.25 253.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M.75,6.5A.755.755,0,0,1,0,5.75v-5A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v5A.755.755,0,0,1,.75,6.5Z'
                              transform='translate(375.25 259.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M1,2a1,1,0,0,1-.38-.08A1.155,1.155,0,0,1,.29,1.7a1.032,1.032,0,0,1-.21-.33A1,1,0,0,1,0,1,1,1,0,0,1,.08.615,1.155,1.155,0,0,1,.29.285,1.155,1.155,0,0,1,.62.075a1,1,0,0,1,.76,0,1.155,1.155,0,0,1,.33.21,1.155,1.155,0,0,1,.21.33A1,1,0,0,1,2,1a1,1,0,0,1-.08.38,1.032,1.032,0,0,1-.21.33,1.155,1.155,0,0,1-.33.21A1,1,0,0,1,1,2Z'
                              transform='translate(375 267.005)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-4'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(364 252)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_tick-circle'
                          data-name='vuesax/outline/tick-circle'
                          transform='translate(-748 -188)'>
                          <g id='tick-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(749.25 189.25)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z'
                              transform='translate(755.003 196.413)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(748 188)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_info-circle'
                          data-name='vuesax/outline/info-circle'
                          transform='translate(-364 -252)'>
                          <g id='info-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(365.25 253.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M.75,6.5A.755.755,0,0,1,0,5.75v-5A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v5A.755.755,0,0,1,.75,6.5Z'
                              transform='translate(375.25 259.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M1,2a1,1,0,0,1-.38-.08A1.155,1.155,0,0,1,.29,1.7a1.032,1.032,0,0,1-.21-.33A1,1,0,0,1,0,1,1,1,0,0,1,.08.615,1.155,1.155,0,0,1,.29.285,1.155,1.155,0,0,1,.62.075a1,1,0,0,1,.76,0,1.155,1.155,0,0,1,.33.21,1.155,1.155,0,0,1,.21.33A1,1,0,0,1,2,1a1,1,0,0,1-.08.38,1.032,1.032,0,0,1-.21.33,1.155,1.155,0,0,1-.33.21A1,1,0,0,1,1,2Z'
                              transform='translate(375 267.005)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-4'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(364 252)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_tick-circle'
                          data-name='vuesax/outline/tick-circle'
                          transform='translate(-748 -188)'>
                          <g id='tick-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(749.25 189.25)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z'
                              transform='translate(755.003 196.413)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(748 188)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
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
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_info-circle'
                          data-name='vuesax/outline/info-circle'
                          transform='translate(-364 -252)'>
                          <g id='info-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(365.25 253.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M.75,6.5A.755.755,0,0,1,0,5.75v-5A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v5A.755.755,0,0,1,.75,6.5Z'
                              transform='translate(375.25 259.25)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M1,2a1,1,0,0,1-.38-.08A1.155,1.155,0,0,1,.29,1.7a1.032,1.032,0,0,1-.21-.33A1,1,0,0,1,0,1,1,1,0,0,1,.08.615,1.155,1.155,0,0,1,.29.285,1.155,1.155,0,0,1,.62.075a1,1,0,0,1,.76,0,1.155,1.155,0,0,1,.33.21,1.155,1.155,0,0,1,.21.33A1,1,0,0,1,2,1a1,1,0,0,1-.08.38,1.032,1.032,0,0,1-.21.33,1.155,1.155,0,0,1-.33.21A1,1,0,0,1,1,2Z'
                              transform='translate(375 267.005)'
                              fill='#fc8b18'
                            />
                            <path
                              id='Vector-4'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(364 252)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
                    </p>
                  ) : (
                    <p className='absolute left-3 bottom-2 text-orange text-lg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'>
                        <g
                          id='vuesax_outline_tick-circle'
                          data-name='vuesax/outline/tick-circle'
                          transform='translate(-748 -188)'>
                          <g id='tick-circle'>
                            <path
                              id='Vector'
                              d='M10.75,21.5A10.75,10.75,0,1,1,21.5,10.75,10.759,10.759,0,0,1,10.75,21.5Zm0-20A9.25,9.25,0,1,0,20,10.75,9.261,9.261,0,0,0,10.75,1.5Z'
                              transform='translate(749.25 189.25)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-2'
                              data-name='Vector'
                              d='M3.578,7.168a.749.749,0,0,1-.53-.22L.218,4.117a.75.75,0,0,1,1.06-1.06l2.3,2.3L8.718.218a.75.75,0,0,1,1.06,1.06l-5.67,5.67A.749.749,0,0,1,3.578,7.168Z'
                              transform='translate(755.003 196.413)'
                              fill='#00ac2e'
                            />
                            <path
                              id='Vector-3'
                              data-name='Vector'
                              d='M0,0H24V24H0Z'
                              transform='translate(748 188)'
                              fill='none'
                              opacity='0'
                            />
                          </g>
                        </g>
                      </svg>
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

                  <p
                    onClick={() => showModal()}
                    className='absolute left-3 bottom-2 text-orange text-sms cursor-pointer'>
                    تغییر رمز عبور
                  </p>
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
                className='disabled:opacity-50 disabled:cursor-not-allowed w-[15%] h-14 mt-10 bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
                ثبت
              </button>
            </div>
          </form>
        </div>
      </div>
      {passChange ? <PassChangeModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default ProfileComp;

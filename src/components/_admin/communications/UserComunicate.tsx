import React from "react";

const UserComunicateComp = () => {
  return (
    <div className='w-[35%] h-full bg-white rounded-md p-6 overflow-hidden'>
      <div className='flex flex-col'>
        <div className='relative'>
          <input
            type='text'
            placeholder='نام و نام خانوادگی'
            className='w-full border-[1px] border-gray rounded-md h-14 outline-none mt-1 pr-11'
          />
          <img
            className='absolute right-2 top-4'
            src={"/assets/images/search-normal.png"}
            alt='search-normal'
          />
        </div>
        <div className='flex justify-between mt-7'>
          <p>انتخاب همه</p>
          <input type='checkbox' />
        </div>
        <div className='overflow-y-auto'>
          <div className='flex justify-between mt-5 p-2 bg-veryLightOrange'>
            <div className='flex flex-col'>
              <p>حمیدرضا هاشمی</p>
              <p>0025417961</p>
            </div>
            <input type='checkbox' />
          </div>
          <div className='flex justify-between p-2 bg-lightGray'>
            <div className='flex flex-col'>
              <p>حمیدرضا هاشمی</p>
              <p>0025417961</p>
            </div>
            <input type='checkbox' />
          </div>
          <div className='flex justify-between p-2 bg-veryLightOrange'>
            <div className='flex flex-col'>
              <p>حمیدرضا هاشمی</p>
              <p>0025417961</p>
            </div>
            <input type='checkbox' />
          </div>
          <div className='flex justify-between p-2 bg-lightGray'>
            <div className='flex flex-col'>
              <p>حمیدرضا هاشمی</p>
              <p>0025417961</p>
            </div>
            <input type='checkbox' />
          </div>
          <div className='flex justify-between p-2 bg-veryLightOrange'>
            <div className='flex flex-col'>
              <p>حمیدرضا هاشمی</p>
              <p>0025417961</p>
            </div>
            <input type='checkbox' />
          </div>
          <div className='flex justify-between p-2 bg-lightGray'>
            <div className='flex flex-col'>
              <p>حمیدرضا هاشمی</p>
              <p>0025417961</p>
            </div>
            <input type='checkbox' />
          </div>
          <div className='flex justify-between p-2 bg-veryLightOrange'>
            <div className='flex flex-col'>
              <p>حمیدرضا هاشمی</p>
              <p>0025417961</p>
            </div>
            <input type='checkbox' />
          </div>
          <div className='flex justify-between p-2 bg-lightGray'>
            <div className='flex flex-col'>
              <p>حمیدرضا هاشمی</p>
              <p>0025417961</p>
            </div>
            <input type='checkbox' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComunicateComp;

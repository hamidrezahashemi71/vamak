import React from "react";

const SingleLoanForm = () => {
  return (
    <div className='w-[40%] bg-white h-full rounded-md p-6 overflow-y-auto'>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-6'>
          <label htmlFor='fullName'>نام و نام خانوادگی:</label>
          <input
            // value={loginData.username}
            // onChange={(e) =>
            //   setLoginData({...loginData, username: e.target.value})
            // }
            disabled
            id='fullName'
            className='w-full border-[1px] border-gray rounded-md h-10 outline-none mt-1'
            type='text'
          />
        </div>
        <div className='flex flex-col mb-6'>
          <label htmlFor='fullName'>مبلغ:</label>
          <input
            // value={loginData.username}
            // onChange={(e) =>
            //   setLoginData({...loginData, username: e.target.value})
            // }
            disabled
            id='fullName'
            className='w-full border-[1px] border-gray rounded-md h-10 outline-none mt-1'
            type='number'
          />
        </div>
        <div className='flex flex-col mb-6'>
          <label htmlFor='fullName'>تعداد اقساط:</label>
          <input
            // value={loginData.username}
            // onChange={(e) =>
            //   setLoginData({...loginData, username: e.target.value})
            // }
            disabled
            id='fullName'
            className='w-full border-[1px] border-gray rounded-md h-10 outline-none mt-1'
            type='number'
          />
        </div>
        <select className='w-full border-[1px] border-gray rounded-md h-10 mb-6 outline-none'>
          <option value=''>همه وام ها</option>
        </select>
        <div className='flex flex-col mb-6'>
          <label htmlFor='fullName'>توضیحات:</label>
          <textarea
            // value={loginData.username}
            // onChange={(e) =>
            //   setLoginData({...loginData, username: e.target.value})
            // }
            disabled
            id='fullName'
            className='w-full border-[1px] border-gray rounded-md h-64 outline-none mt-1'
            style={{resize: "none"}}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleLoanForm;

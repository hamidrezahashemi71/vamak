import React, {useState} from "react";
import SingleLoanPaybacksTable from "../../components/_tables/SingleLoanPaybacks";
import useDocTitle from "../../lib/customHooks";

const SingleLoan = () => {
  useDocTitle("وامک | وام فعلی");
  const [loanPaybacks, setloanPaybacks] = useState([1]);

  return (
    <>
      <div className='w-full bg-white h-full rounded-md p-6 overflow-y-auto'>
        <div className='flex flex-col justyfy-center w-full'>
          <div className='flex justify-between w-full items-center'>
            <div className='flex items-center gap-1'>
              <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
              <p className='text-xl'>اقساط وام جهیزیه</p>
            </div>
            <button className='border-[1px] border-lightBlue rounded-md px-8 py-4 text-lightBlue transition-all hover:bg-blue hover:text-white'>
              تاریخچه وام ها
            </button>
          </div>
          <div className='text-center mt-11 text-black'>
            <span className='text-lightBlue'>در حال بررسی </span>
            <span className='opacity-20'>----------------</span>
            <span className='text-lightOrange'>تایید شده </span>
            <span className='opacity-20'>----------------</span>
            <span className='opacity-20'>در حال پرداخت </span>
            <span className='opacity-20'>----------------</span>
            <span className='opacity-20'>پرداخت شده </span>
            <span className='opacity-20'>----------------</span>
          </div>
          <div className='flex justify-evenly mt-11'>
            <p>مبلغ وام: 5/000/000 ریال</p>
            <p>تعداد اقساط: 24 قسط</p>
            <p>تاریخ درخواست: 1400/03/24</p>
            <p>تاریخ شروع: 1400/03/31</p>
          </div>
          {!loanPaybacks.length ? (
            <p className='flex items-center justify-center text-black opacity-40 text-xl mt-20'>
              شما هنوز وام خود را دریافت نکرده اید.
            </p>
          ) : (
            <SingleLoanPaybacksTable />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleLoan;

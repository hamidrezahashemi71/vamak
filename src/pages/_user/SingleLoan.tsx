import React, {useState} from "react";
import PaybackDoneModal from "../../components/_user/loan/PaybackDoneModal";

const SingleLoan = () => {
  const [loanPaybacks, setloanPaybacks] = useState([1]);
  const [paybackConfirm, setPaybackConfirm] = useState(false);

  const showModal = () => {
    setPaybackConfirm(true);
  };

  const hideModal = () => {
    setPaybackConfirm(false);
  };

  return (
    <>
      <div className='w-full bg-white h-full rounded-md p-6'>
        <div className='flex flex-col justyfy-center w-full'>
          <div className='flex justify-between w-full items-center'>
            <div className='flex items-center gap-1'>
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
            <table className='text-center mt-20'>
              <thead>
                <tr>
                  <th>شماره</th>
                  <th>تاریخ پرداخت</th>
                  <th>مبلغ قسط</th>
                  <th>دیرکرد</th>
                  <th>پرداخت</th>
                </tr>
              </thead>
              <tbody>
                <tr className='odd:bg-lightGray even:bg-white'>
                  <td>شماره 1</td>
                  <td>1400/05/31</td>
                  <td>5/000/000 ریال</td>
                  <td>0 روز</td>
                  <td>
                    <button
                      onClick={() => showModal()}
                      className='px-8 py-3 border-[1px] border-green rounded-md text-green transition-all hover:bg-green hover:text-white'>
                      پرداخت
                    </button>
                  </td>
                </tr>
                <tr className='odd:bg-lightGray even:bg-white'>
                  <td>شماره 1</td>
                  <td>1400/05/31</td>
                  <td>5/000/000 ریال</td>
                  <td>0 روز</td>
                  <td>
                    <button
                      onClick={() => showModal()}
                      className='px-8 py-3 border-[1px] border-green rounded-md text-green transition-all hover:bg-green hover:text-white'>
                      پرداخت
                    </button>
                  </td>
                </tr>
                <tr className='odd:bg-lightGray even:bg-white'>
                  <td>شماره 1</td>
                  <td>1400/05/31</td>
                  <td>5/000/000 ریال</td>
                  <td>0 روز</td>
                  <td>
                    <button
                      onClick={() => showModal()}
                      className='px-8 py-3 border-[1px] border-green rounded-md text-green transition-all hover:bg-green hover:text-white'>
                      پرداخت
                    </button>
                  </td>
                </tr>
                <tr className='odd:bg-lightGray even:bg-white'>
                  <td>شماره 1</td>
                  <td>1400/05/31</td>
                  <td>5/000/000 ریال</td>
                  <td>0 روز</td>
                  <td>
                    <button
                      onClick={() => showModal()}
                      className='px-8 py-3 border-[1px] border-green rounded-md text-green transition-all hover:bg-green hover:text-white'>
                      پرداخت
                    </button>
                  </td>
                </tr>
                <tr className='odd:bg-lightGray even:bg-white'>
                  <td>شماره 1</td>
                  <td>1400/05/31</td>
                  <td>5/000/000 ریال</td>
                  <td>0 روز</td>
                  <td>
                    <button
                      onClick={() => showModal()}
                      className='px-8 py-3 border-[1px] border-green rounded-md text-green transition-all hover:bg-green hover:text-white'>
                      پرداخت
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      {paybackConfirm ? <PaybackDoneModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default SingleLoan;

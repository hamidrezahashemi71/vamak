import React, {useState} from "react";
import {Link} from "react-router-dom";

const LoanHistoryComp = () => {
  const [loanReqHistory, setloanReqHistory] = useState([1]);

  return (
    <div className=' w-[60%] bg-white h-[800px] rounded-md p-6'>
      <div className='flex flex-col justyfy-center w-full'>
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
          <p className='text-xl'>تاریخچه وام ها</p>
        </div>

        {!loanReqHistory.length ? (
          <p className='flex items-center justify-center text-black opacity-40 text-xl mt-20'>
            شما تا کنون هیچ درخواستی برای وام صادر نکرده اید.
          </p>
        ) : (
          <table className='mt-9 text-center'>
            <thead>
              <tr>
                <th>عنوان وام</th>
                <th>مبلغ کل</th>
                <th>تعداد اقساط</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody className='mt-8'>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>جهیزیه</td>
                <td>5/000/000 ریال</td>
                <td>8 قسط</td>
                <Link to={"/user/loan/:id"}>
                  <td className='text-lightBlue transition-all hover:text-blue'>
                    در حال بررسی
                  </td>
                </Link>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>جهیزیه</td>
                <td>5/000/000 ریال</td>
                <td>8 قسط</td>
                <Link to={"/user/loan/:id"}>
                  <td className='text-lightOrange transition-all hover:text-orange'>
                    تایید شده
                  </td>
                </Link>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>جهیزیه</td>
                <td>5/000/000 ریال</td>
                <td>8 قسط</td>
                <Link to={"/user/loan/:id"}>
                  <td className='text-lightGreen transition-all hover:text-green'>
                    در حال پرداخت
                  </td>
                </Link>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>جهیزیه</td>
                <td>5/000/000 ریال</td>
                <td>8 قسط</td>
                <Link to={"/user/loan/:id"}>
                  <td className='text-blue transition-all hover:text-lightBlue'>
                    پرداخت شده
                  </td>
                </Link>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>جهیزیه</td>
                <td>5/000/000 ریال</td>
                <td>8 قسط</td>
                <Link to={"/user/loan/:id"}>
                  <td className='text-red transition-all hover:text-darkRed'>
                    لغو
                  </td>
                </Link>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LoanHistoryComp;

import React from "react";
import {Link} from "react-router-dom";

const LoanHistoryAdmin = () => {
  return (
    <table className='mt-9 text-center border-separate [border-spacing:1rem]'>
      <thead>
        <tr>
          <th>نام و نام خانوادگی</th>
          <th>کد ملی</th>
          <th>عنوان وام</th>
          <th>مبلغ وام</th>
          <th>تاریخ درخواست</th>
          <th>وضعیت</th>
        </tr>
      </thead>
      <tbody className='mt-8'>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>حمیدرضا هاشمی</td>
          <td>4270571081</td>
          <td>جهیزیه</td>
          <td>5/000/000 ریال</td>
          <td>1400/11/03</td>
          <Link to={"/user/loan/:id"}>
            <td className='text-lightBlue transition-all hover:text-blue'>
              در حال بررسی
            </td>
          </Link>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>حمیدرضا هاشمی</td>
          <td>4270571081</td>
          <td>جهیزیه</td>
          <td>5/000/000 ریال</td>
          <td>1400/11/03</td>
          <Link to={"/user/loan/:id"}>
            <td className='text-lightOrange transition-all hover:text-orange'>
              تایید شده
            </td>
          </Link>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>حمیدرضا هاشمی</td>
          <td>4270571081</td>
          <td>جهیزیه</td>
          <td>5/000/000 ریال</td>
          <td>1400/11/03</td>
          <Link to={"/user/loan/:id"}>
            <td className='text-lightGreen transition-all hover:text-green'>
              در حال پرداخت
            </td>
          </Link>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>حمیدرضا هاشمی</td>
          <td>4270571081</td>
          <td>جهیزیه</td>
          <td>5/000/000 ریال</td>
          <td>1400/11/03</td>
          <Link to={"/user/loan/:id"}>
            <td className='text-blue transition-all hover:text-lightBlue'>
              پرداخت شده
            </td>
          </Link>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>حمیدرضا هاشمی</td>
          <td>4270571081</td>
          <td>جهیزیه</td>
          <td>5/000/000 ریال</td>
          <td>1400/11/03</td>
          <Link to={"/user/loan/:id"}>
            <td className='text-red transition-all hover:text-darkRed'>لغو</td>
          </Link>
        </tr>
      </tbody>
    </table>
  );
};

export default LoanHistoryAdmin;

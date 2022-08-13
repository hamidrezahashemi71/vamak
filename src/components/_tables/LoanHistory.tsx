import React from "react";
import {Link} from "react-router-dom";

const LoanHistoryTable = () => {
  return (
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
            <td className='text-red transition-all hover:text-darkRed'>لغو</td>
          </Link>
        </tr>
      </tbody>
    </table>
  );
};

export default LoanHistoryTable;

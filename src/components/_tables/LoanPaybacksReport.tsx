import React from "react";

const LoanPaybacksReport = () => {
  return (
    <table className='mt-9 text-center border-separate [border-spacing:1rem]'>
      <thead>
        <tr>
          <th>تاریخ قسط</th>
          <th>مبلغ قسط</th>
          <th>دیرکرد</th>
          <th>وضعیت</th>
        </tr>
      </thead>
      <tbody className='mt-8'>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>1400/03/11</td>
          <td>5/000/000 ریال</td>
          <td>0 روز</td>
          <td className='text-green'>پرداخت شده</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>1400/03/11</td>
          <td>5/000/000 ریال</td>
          <td className='text-red'>3 روز</td>
          <td className='text-green'>پرداخت شده</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>1400/03/11</td>
          <td>5/000/000 ریال</td>
          <td>0 روز</td>
          <td className='text-blue'>پرداخت نشده</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>1400/03/11</td>
          <td>5/000/000 ریال</td>
          <td>0 روز</td>
          <td className='text-blue'>پرداخت نشده</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>1400/03/11</td>
          <td>5/000/000 ریال</td>
          <td>0 روز</td>
          <td className='text-blue'>پرداخت نشده</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>1400/03/11</td>
          <td>5/000/000 ریال</td>
          <td>0 روز</td>
          <td className='text-blue'>پرداخت نشده</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>1400/03/11</td>
          <td>5/000/000 ریال</td>
          <td>0 روز</td>
          <td className='text-blue'>پرداخت نشده</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>1400/03/11</td>
          <td>5/000/000 ریال</td>
          <td>0 روز</td>
          <td className='text-blue'>پرداخت نشده</td>
        </tr>
      </tbody>
    </table>
  );
};

export default LoanPaybacksReport;

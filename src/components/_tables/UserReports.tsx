import React from "react";

const UserReportsTable = () => {
  return (
    <table className='text-center mt-11'>
      <thead>
        <tr>
          <th>عنوان گزارش</th>
          <th>شماره پیگیری</th>
          <th>تاریخ گردش مالی</th>
          <th>مبلغ انتقال یافته</th>
          <th>وضعیت گردش</th>
        </tr>
      </thead>
      <tbody>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>قسط شماره 1 وام جهیزیه</td>
          <td>2955965</td>
          <td>1400/11/03</td>
          <td>5/000/000 ریال</td>
          <td className='text-lightGreen'>واریز</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>قسط شماره 1 وام جهیزیه</td>
          <td>2955965</td>
          <td>1400/11/03</td>
          <td>5/000/000 ریال</td>
          <td className='text-red'>برداشت</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>قسط شماره 1 وام جهیزیه</td>
          <td>2955965</td>
          <td>1400/11/03</td>
          <td>5/000/000 ریال</td>
          <td className='text-lightGreen'>واریز</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>قسط شماره 1 وام جهیزیه</td>
          <td>2955965</td>
          <td>1400/11/03</td>
          <td>5/000/000 ریال</td>
          <td className='text-red'>برداشت</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>قسط شماره 1 وام جهیزیه</td>
          <td>2955965</td>
          <td>1400/11/03</td>
          <td>5/000/000 ریال</td>
          <td className='text-lightGreen'>واریز</td>
        </tr>
        <tr className='odd:bg-lightGray even:bg-white'>
          <td>قسط شماره 1 وام جهیزیه</td>
          <td>2955965</td>
          <td>1400/11/03</td>
          <td>5/000/000 ریال</td>
          <td className='text-red'>برداشت</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserReportsTable;

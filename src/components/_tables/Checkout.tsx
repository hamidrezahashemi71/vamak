import React, {useState} from "react";
import {Link} from "iconsax-react";
import CheckoutConfirm from "../_admin/users/CheckoutConfirm";

const CheckoutTable = () => {
  const [checkoutConfirm, setCheckoutConfirm] = useState(false);
  const showModal = () => {
    setCheckoutConfirm(true);
  };

  const hideModal = () => {
    setCheckoutConfirm(false);
  };
  return (
    <>
      <table className='text-center mt-8'>
        <thead>
          <tr>
            <th>نام و نام خانوادگی</th>
            <th>شماره</th>
            <th>موجودی حساب</th>
            <th>شماره کارت</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          <tr className='odd:bg-lightGray even:bg-white'>
            <td>حمیدرضا هاشمی</td>
            <td>09195892013</td>
            <td>5/000/000 ریال</td>
            <td>6063-7310-6028-6870</td>
            <td className='flex justify-center gap-6'>
              <button
                onClick={() => showModal()}
                className='text-blue transition-all hover:text-lightBlue'>
                تایید
              </button>
              <button className='text-blue transition-all hover:text-lightBlue'>
                لغو
              </button>
            </td>
          </tr>
          <tr className='odd:bg-lightGray even:bg-white'>
            <td>حمیدرضا هاشمی</td>
            <td>09195892013</td>
            <td>5/000/000 ریال</td>
            <td>6063-7310-6028-6870</td>
            <td className='flex justify-center gap-6'>
              <button
                onClick={() => showModal()}
                className='text-blue transition-all hover:text-lightBlue'>
                تایید
              </button>
              <button className='text-blue transition-all hover:text-lightBlue'>
                لغو
              </button>
            </td>
          </tr>
          <tr className='odd:bg-lightGray even:bg-white'>
            <td>حمیدرضا هاشمی</td>
            <td>09195892013</td>
            <td>5/000/000 ریال</td>
            <td>6063-7310-6028-6870</td>
            <td className='flex justify-center gap-6'>
              <button
                onClick={() => showModal()}
                className='text-blue transition-all hover:text-lightBlue'>
                تایید
              </button>
              <button className='text-blue transition-all hover:text-lightBlue'>
                لغو
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {checkoutConfirm ? <CheckoutConfirm hideModal={hideModal} /> : ""}
    </>
  );
};

export default CheckoutTable;

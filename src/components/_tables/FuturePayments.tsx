import React, {useState} from "react";
import PaybackDoneModal from "../../components/_user/loan/PaybackDoneModal";

const FuturePaymentsTable = () => {
  const [paybackConfirm, setPaybackConfirm] = useState(false);
  const showModal = () => {
    setPaybackConfirm(true);
  };

  const hideModal = () => {
    setPaybackConfirm(false);
  };

  return (
    <>
      <table className='text-center w-full md:w-[50%] border-separate [border-spacing:2rem]'>
        <thead>
          <tr>
            <th>عنوان وام</th>
            <th>تاریخ زمان پرداخت</th>
            <th>اقساط باقیمانده</th>
            <th>مبلغ قسط</th>
            <th>دیرکرد اقساط</th>
            <th>پرداخت</th>
          </tr>
        </thead>
        <tbody>
          <tr className='odd:bg-lightGray even:bg-white'>
            <td>جهیزیه</td>
            <td>1400/11/03</td>
            <td>8 قسط</td>
            <td>5/000/000 ریال</td>
            <td className='text-red'>5 روز</td>
            <td>
              <button
                onClick={() => showModal()}
                className='px-8 py-3 border-[1px] border-green rounded-md text-green transition-all hover:bg-green hover:text-white'>
                پرداخت
              </button>
            </td>
          </tr>
          <tr className='odd:bg-lightGray even:bg-white'>
            <td>جهیزیه</td>
            <td>1400/11/03</td>
            <td>8 قسط</td>
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
            <td>جهیزیه</td>
            <td>1400/11/03</td>
            <td>8 قسط</td>
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
            <td>جهیزیه</td>
            <td>1400/11/03</td>
            <td>8 قسط</td>
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
            <td>جهیزیه</td>
            <td>1400/11/03</td>
            <td>8 قسط</td>
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
      {paybackConfirm ? <PaybackDoneModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default FuturePaymentsTable;

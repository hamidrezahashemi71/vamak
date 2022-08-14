import React, {useState} from "react";
import PaybackDoneModal from "../../components/_user/loan/PaybackDoneModal";

const SingleLoanPaybacksTable = () => {
  const [paybackConfirm, setPaybackConfirm] = useState(false);

  const showModal = () => {
    setPaybackConfirm(true);
  };

  const hideModal = () => {
    setPaybackConfirm(false);
  };
  return (
    <>
      <table className='text-center mt-20 border-separate [border-spacing:0.6rem]'>
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
      {paybackConfirm ? <PaybackDoneModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default SingleLoanPaybacksTable;

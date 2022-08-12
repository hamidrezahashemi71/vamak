import React, {useState} from "react";
import LoanReqDoneModal from "./LoanReqDoneModal";

const LoanQueryComp = () => {
  const [loanReqData, setloanReqData] = useState({
    loanTitle: "",
    loanAmount: "",
    paybackMonths: "",
    loanDesc: "",
  });

  const [loanReqConfirm, setloanReqConfirm] = useState(false);

  const showLoanReqDoneModal = () => {
    setloanReqConfirm(true);
  };

  const hideModal = () => {
    setloanReqConfirm(false);
  };

  return (
    <>
      <div className=' w-[40%] bg-white h-[800px] rounded-md p-6'>
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
            <p className='text-xl'>درخواست جدید</p>
          </div>
          <div className=' flex flex-col mt-12'>
            <label htmlFor='loanTitle'>عنوان وام:</label>
            <input
              value={loanReqData.loanTitle}
              onChange={(e) =>
                setloanReqData({...loanReqData, loanTitle: e.target.value})
              }
              id='loanTitle'
              className='border-[1px] border-gray rounded-md h-10 outline-none mt-1'
              type='text'
            />
          </div>
          <div className='relative flex flex-col mt-8'>
            <label htmlFor='loanAmount'>مبلغ وام:</label>
            <input
              value={loanReqData.loanAmount}
              onChange={(e) =>
                setloanReqData({...loanReqData, loanAmount: e.target.value})
              }
              id='loanAmount'
              className='border-[1px] border-gray rounded-md h-10 outline-none mt-1'
              type='number'
            />
            <p className='absolute left-2 top-9 text-orange text-sm'>ریال</p>
          </div>
          <div className='relative flex flex-col mt-8'>
            <label htmlFor='paybackMonths'>تعداد اقساط:</label>
            <input
              value={loanReqData.paybackMonths}
              onChange={(e) =>
                setloanReqData({...loanReqData, paybackMonths: e.target.value})
              }
              id='paybackMonths'
              className='border-[1px] border-gray rounded-md h-10 outline-none mt-1'
              type='number'
            />
            <p className='absolute left-2 top-9 text-orange text-sm'>ماه</p>
          </div>
          <div className=' flex flex-col mt-12'>
            <label htmlFor='loanDesc'>توضیحات:</label>
            <input
              value={loanReqData.loanDesc}
              onChange={(e) =>
                setloanReqData({...loanReqData, loanDesc: e.target.value})
              }
              id='loanDesc'
              className='border-[1px] border-gray rounded-md h-10 outline-none mt-1'
              type='text'
            />
          </div>
          <button
            disabled={
              !loanReqData.loanTitle ||
              !loanReqData.loanAmount ||
              !loanReqData.paybackMonths ||
              !loanReqData.loanDesc
            }
            onClick={() => showLoanReqDoneModal()}
            className='disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-[200px] bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
            ارسال درخواست وام
          </button>
        </div>
      </div>
      {loanReqConfirm ? <LoanReqDoneModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default LoanQueryComp;

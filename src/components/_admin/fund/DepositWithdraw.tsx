import React, {useState} from "react";
import PaymentModal from "./PaymentModal";

const DepositWithdrawComp = () => {
  const [adminDepositAmount, setAdminDepositAmount] = useState("");
  const [payConfirm, setPayConfirm] = useState(false);
  let [xPos, setXpos] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(${xPos}px)`,
  });
  const showModal = () => {
    setPayConfirm(true);
  };

  const hideModal = () => {
    setPayConfirm(false);
  };

  const changeSlide = (direction: string) => {
    direction === "left" ? (xPos -= 100) : (xPos += 100);
    setStyle({transform: `translateX(${xPos}px)`});
    console.log(xPos);
  };

  return (
    <>
      <div className='w-[50%] h-[350px] bg-white rounded-md p-6'>
        <div className='w-full h-full'>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <button
                onClick={() => changeSlide("left")}
                className='w-[50%] underline'>
                واریز
              </button>
              <button className='w-[50%] underline'>دریافت</button>
            </div>
            <div className='flex items-center w-[200%] bg-red'>
              <div className='flex flex-col w-[50%] ml-14'>
                <div className='relative mt-9'>
                  <label htmlFor='adminDepositAmount'>مبلغ:</label>
                  <input
                    id='adminDepositAmount'
                    value={adminDepositAmount}
                    onChange={(e) => setAdminDepositAmount(e.target.value)}
                    className='relative w-full border-[1px] border-gray rounded-md h-14 outline-none mt-1 pr-3 pl-11'
                    type='number'
                    min={1000000}
                  />
                  <p className='absolute left-2 top-10 text-orange text-lg'>
                    ریال
                  </p>
                </div>
                <button
                  onClick={() => showModal()}
                  disabled={!adminDepositAmount}
                  className='mx-auto disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-28 border-[1px] border-green transition-all hover:bg-green rounded-md text-green hover:text-white'>
                  پرداخت
                </button>
              </div>
              <div className='flex flex-col  w-[50%]'>
                <div className='relative mt-9'>
                  <label htmlFor='adminDepositAmount'>مبلغ:</label>
                  <input
                    id='adminDepositAmount'
                    value={adminDepositAmount}
                    onChange={(e) => setAdminDepositAmount(e.target.value)}
                    className='relative w-full border-[1px] border-gray rounded-md h-14 outline-none mt-1 pr-3 pl-11'
                    type='number'
                    min={1000000}
                  />
                  <p className='absolute left-2 top-10 text-orange text-lg'>
                    ریال
                  </p>
                </div>
                <button
                  onClick={() => showModal()}
                  disabled={!adminDepositAmount}
                  className='mx-auto disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-28 border-[1px] border-green transition-all hover:bg-green rounded-md text-green hover:text-white'>
                  پرداخت
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {payConfirm ? <PaymentModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default DepositWithdrawComp;

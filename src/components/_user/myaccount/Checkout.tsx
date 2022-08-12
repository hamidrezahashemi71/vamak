import React, {useState} from "react";
import ShabaReqModal from "./ShabaReqModal";

const CheckoutComp = () => {
  const [shabaNumber, setShabaNumber] = useState("");
  const [shabaConfirm, setShabeConfirm] = useState(false);

  const showModal = () => {
    setShabeConfirm(true);
  };

  const hideModal = () => {
    setShabeConfirm(false);
  };
  return (
    <>
      <div className='relative w-[50%] h-[350px] bg-white rounded-md p-6'>
        <div className='flex flex-col'>
          <div className='flex gap-1 items-center justify-center'>
            <div>
              <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
            </div>
            <p className='text-xl'>درخواست تسویه حساب</p>
          </div>
          <div className='flex flex-col mt-14'>
            <label htmlFor='depositAmount'>شماره:</label>
            <div className='relative'>
              <input
                id='depositAmount'
                value={shabaNumber}
                onChange={(e) => setShabaNumber(e.target.value)}
                className='relative w-full border-[1px] border-gray rounded-md h-14 outline-none mt-1 pr-3 pl-11'
                type='number'
              />
              <p className='absolute left-2 top-4 text-orange text-lg'>-IR</p>
            </div>
          </div>
          <button
            onClick={() => showModal()}
            disabled={!shabaNumber}
            className='absolute bottom-6 mx-auto disabled:opacity-50 disabled:cursor-not-allowed w-[90%] h-14  border-[1px] border-green transition-all hover:bg-green rounded-md text-green hover:text-white'>
            ارسال درخواست
          </button>
        </div>
      </div>
      {shabaConfirm ? <ShabaReqModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default CheckoutComp;

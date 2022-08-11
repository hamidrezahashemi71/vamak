import React, {useState} from "react";
import PaymentModal from "./PaymentModal";

interface Props {
  myBalance: number;
  setMyBalance: React.Dispatch<React.SetStateAction<number>>;
}

const DepositComp: React.FC<Props> = ({myBalance, setMyBalance}) => {
  const [depositAmount, setDepositAmount] = useState("");
  const [payConfirm, setPayConfirm] = useState(false);

  const showModal = () => {
    setPayConfirm(true);
  };

  const hideModal = () => {
    setPayConfirm(false);
  };

  return (
    <>
      <div className='relative w-[50%] h-[350px] bg-white rounded-md p-6'>
        <div className='flex flex-col'>
          <div className='flex gap-1 items-center justify-center'>
            <div>
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
            </div>
            <p className='text-xl'>واریز به صندوق</p>
          </div>
          <div className='flex flex-col mt-14'>
            <label htmlFor='depositAmount'>مبلغ:</label>
            <div className='relative'>
              <input
                id='depositAmount'
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className='relative w-full border-[1px] border-gray rounded-md h-14 outline-none mt-1 pr-3 pl-11'
                type='number'
                min={1000000}
              />
              <p className='absolute left-2 top-4 text-orange text-lg'>ریال</p>
            </div>
          </div>
          <p className='text-black mt-4'>
            حداقل مبلغ برای واریز به صندوق 1/000/000 ریال است.
          </p>
          <button
            onClick={() => showModal()}
            disabled={!depositAmount}
            className='absolute bottom-6 mx-auto disabled:opacity-50 disabled:cursor-not-allowed w-[90%] h-14 mt-10 border-[1px] border-green transition-all hover:bg-green rounded-md text-green hover:text-white'>
            پرداخت
          </button>
        </div>
      </div>

      {payConfirm ? <PaymentModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default DepositComp;

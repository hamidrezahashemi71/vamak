import React, {useState} from "react";
import CheckoutFullConfirmModal from "./CheckoutFullConfirmModal";

interface Props {
  hideModal: () => void;
}

const CheckoutConfirm: React.FC<Props> = ({hideModal}) => {
  const [checkoutFullConfirm, setCheckoutFullConfirm] = useState(false);
  const showNextModal = () => {
    setCheckoutFullConfirm(true);
  };

  return (
    <>
      <div
        className='fixed h-full w-full bg-black/60 top-0 right-0 z-10'
        onClick={hideModal}></div>
      <div className='fixed top-[calc(50vh-100px)] right-[calc(50vw-315px)] w-[630px] h-[200px] bg-white rounded-md z-20'>
        <div className='flex flex-col items-center justify-center gap-16 py-8 px-16'>
          <p className='text-black text-xl'>درخواست تسویه را تایید میکنید؟.</p>
          <div className='flex gap-5'>
            <button
              onClick={() => hideModal()}
              className='w-28 h-11 rounded-md text-blue border-[1px] border-blue transition-all hover:bg-blue hover:text-white'>
              لغو
            </button>
            <button
              onClick={() => showNextModal()}
              className='w-28 h-11 rounded-md text-blue border-[1px] border-blue transition-all hover:bg-blue hover:text-white'>
              تایید
            </button>
          </div>
        </div>
      </div>
      {checkoutFullConfirm ? (
        <CheckoutFullConfirmModal hideModal={hideModal} />
      ) : (
        ""
      )}
    </>
  );
};

export default CheckoutConfirm;

import React, {useState} from "react";
import {CloseCircle} from "iconsax-react";
import PassChangeConfitm from "./PassChangeConfitm";

interface Props {
  hideModal: () => void;
}

const PassChangeModal: React.FC<Props> = ({hideModal}) => {
  const [passChangePhone, setpassChangePhone] = useState("");
  const [passChangeConfirm, setPassChangeConfirm] = useState(false);

  const showNextModal = () => {
    setPassChangeConfirm(true);
  };

  return (
    <>
      <div
        className='fixed h-full w-full bg-black/60 top-0 right-0 z-10'
        onClick={hideModal}></div>
      <div className='fixed top-[calc(50vh-210px)] right-[calc(50vw-300px)] w-[600px] h-[420px] bg-white rounded-md z-20'>
        <div className='flex flex-col w-full h-full px-6 py-7'>
          <div className='flex justify-between mb-5'>
            <p> ویرایش رمز عبور</p>
            <CloseCircle
              className='cursor-pointer'
              onClick={() => hideModal()}
            />
          </div>
          <p> برای ویرایش رمز عبور شما باید اول شماره تلفن خود را وارد کنید:</p>
          <div className='flex flex-col mt-11'>
            <label htmlFor='passChangePhone'>شماره تلفن:</label>
            <input
              id='passChangePhone'
              value={passChangePhone}
              onChange={(e) => setpassChangePhone(e.target.value)}
              className='border-[1px] border-gray rounded-md h-10 mb-8 outline-none mt-1'
              type='number'
            />
          </div>
          <button
            onClick={() => {
              showNextModal();
            }}
            disabled={!passChangePhone}
            className='disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-28 bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
            تایید
          </button>
        </div>
      </div>
      {passChangeConfirm ? <PassChangeConfitm hideModal={hideModal} /> : ""}
    </>
  );
};

export default PassChangeModal;

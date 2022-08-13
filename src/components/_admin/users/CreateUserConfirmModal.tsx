import React from "react";

interface Props {
  hideModal: () => void;
}

const CreateUserConfirmModal: React.FC<Props> = ({hideModal}) => {
  return (
    <>
      <div
        className='fixed h-full w-full bg-black/60 top-0 right-0 z-10'
        onClick={hideModal}></div>
      <div className='fixed top-[calc(50vh-100px)] right-[calc(50vw-315px)] w-[630px] h-[200px] bg-white rounded-md z-20'>
        <div className='flex flex-col items-center justify-center gap-16 py-8 px-16'>
          <p className='text-black text-xl'>
            تغییرات اطلاعات با موفقیت ثبت شد.
          </p>
          <button
            onClick={() => hideModal()}
            className='2 w-28 h-11 rounded-md text-white bg-lightGreen transition-all hover:bg-green'>
            تایید
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateUserConfirmModal;

import React, {useState} from "react";
import {CloseCircle} from "iconsax-react";
import PassChangeDoneModal from "./PassChangeDoneModal";

interface Props {
  hideModal: () => void;
}

const SetNewPassModal: React.FC<Props> = ({hideModal}) => {
  const [newPass, setNewPass] = useState("");
  const [newPassRepat, setNewPassRepeat] = useState("");
  const [done, setDone] = useState(false);

  const showDoneModal = () => {
    setDone(true);
  };

  return (
    <>
      <div
        className='fixed h-full w-full bg-black/60 top-0 right-0 z-10'
        onClick={hideModal}></div>
      <div className='fixed top-[calc(50vh-210px)] right-[calc(50vw-300px)] w-[600px] h-[420px] bg-white rounded-md z-20'>
        <div className='flex flex-col w-full h-full px-6 py-7'>
          <div className='flex justify-between mb-5'>
            <p> رمز عبور جدید</p>
            <CloseCircle
              className='cursor-pointer'
              onClick={() => hideModal()}
            />
          </div>
          <p>
            رمز عبور باید حداقل دارای 8 کاراکتر و ترکیب حروف بزرگ و کوچک باشد.
          </p>
          <div className='flex flex-col mt-11'>
            <label htmlFor='passChangePhone'>رمز عبور:</label>
            <input
              id='passChangePhone'
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className='border-[1px] border-gray rounded-md h-10 mb-6 outline-none mt-1'
              type='password'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='passChangePhone'>تکرار رمز عبور:</label>
            <input
              id='passChangePhone'
              value={newPassRepat}
              onChange={(e) => setNewPassRepeat(e.target.value)}
              className='border-[1px] border-gray rounded-md h-10 outline-none mt-1'
              type='password'
            />
          </div>
          <button
            onClick={() => showDoneModal()}
            disabled={!newPass || !newPassRepat || newPass !== newPassRepat}
            className='disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-11 bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
            تایید
          </button>
        </div>
      </div>
      {done ? <PassChangeDoneModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default SetNewPassModal;

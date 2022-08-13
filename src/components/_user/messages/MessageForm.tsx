import React, {useState} from "react";
import Comments from "./Comments";
import MessageSentModal from "./MessageSentModal";

const MessageForm = () => {
  const [messageSub, setMessageSub] = useState("");
  const [messageText, setMessageText] = useState("");
  const [sentConfirm, setSentConfirm] = useState(false);

  const showModal = () => {
    setSentConfirm(true);
  };

  const hideModal = () => {
    setSentConfirm(false);
  };

  return (
    <>
      <div className='w-full bg-white h-full rounded-md p-6'>
        <div className='flex flex-col justyfy-center w-full'>
          <div className='flex items-center gap-1'>
            <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
            <p className='text-xl'>پیام ها</p>
          </div>
          <form className='px-60'>
            <div className='flex flex-col mt-7'>
              <label htmlFor='messageSubject'>موضوع:</label>
              <input
                value={messageSub}
                onChange={(e) => setMessageSub(e.target.value)}
                id='messageSubject'
                className='border-[1px] border-gray rounded-md h-10 outline-none mt-1'
                type='text'
              />
            </div>
            <div className='flex flex-col mt-6'>
              <label htmlFor='messageSubject'>متن:</label>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                id='messageSubject'
                className='border-[1px] border-gray rounded-md mb-8 outline-none mt-1 h-64'
                style={{resize: "none"}}
              />
            </div>
            <button
              onClick={() => showModal()}
              disabled={!messageSub || !messageText}
              className='disabled:opacity-50 disabled:cursor-not-allowed w-full h-14 mt-6 bg-lightBlue transition-all hover:bg-blue rounded-md text-white'>
              ارسال پیام
            </button>
          </form>
          <Comments />
        </div>
      </div>
      {sentConfirm ? <MessageSentModal hideModal={hideModal} /> : ""}
    </>
  );
};

export default MessageForm;

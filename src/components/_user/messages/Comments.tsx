import React, {useState} from "react";

const Comments = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='flex flex-col'>
      <div className=' mx-auto mt-11 w-[95%] bg-veryLightOrange p-5 h-28'>
        <div className='flex items-center justify-between'>
          <p className='text-orange'>مدیر</p>
          <p>1400/12/05</p>
        </div>
        <div className='flex '>
          <p className='mt-4 text-xs w-[90%]'>
            سلام خدمت کارکنان محترم هیئت فاطمیون من زمانی که قسط شماره 5 وام
            خودم را پرداخت کردم برام پیام تایید آمد و از حساب من پول کسر شد اما
            جالت قسط من عوض نشد و در همان حالت ...
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className=' text-gray text-xs'>
            {showMore ? "کمتر" : "بیشتر بخوانید"}
          </button>
        </div>
      </div>
      <div className=' mx-auto mt-11 w-[95%] bg-lightGray p-5 h-28'>
        <div className='flex items-center justify-between'>
          <p className='text-gray'>شما</p>
          <p>1400/12/05</p>
        </div>
        <div className='flex '>
          <p className='mt-4 text-xs w-[90%]'>
            سلام خدمت کارکنان محترم هیئت فاطمیون من زمانی که قسط شماره 5 وام
            خودم را پرداخت کردم برام پیام تایید آمد و از حساب من پول کسر شد اما
            جالت قسط من عوض نشد و در همان حالت ...
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className=' text-gray text-xs'>
            {showMore ? "کمتر" : "بیشتر بخوانید"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;

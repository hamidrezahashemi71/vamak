import React, {useState} from "react";

const LatestEventsComp = () => {
  const [latestEvents, setLatestEvents] = useState([1]);
  return (
    <div className='w w-[33%] h-[360px] bg-white rounded-md px-6 pt-5 pb-8'>
      <div className='flex flex-col'>
        <div className='flex gap-1 items-center'>
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
          <p className='text-xl'>رویدادهای آخر</p>
        </div>
        {!latestEvents.length ? (
          <p className='flex items-center justify-center text-black opacity-40 text-xl mt-20'>
            رویدادی رخ نداده است
          </p>
        ) : (
          <table className='mt-4'>
            <tbody>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>شروع وام:</td>
                <td>15:31</td>
                <td>1400/13/05</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>درخواست وام:</td>
                <td>15:31</td>
                <td>1400/13/05</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>واریز به صندوق:</td>
                <td>15:31</td>
                <td>1400/13/05</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>پرداخت قسط:</td>
                <td>15:31</td>
                <td>1400/13/05</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>پرداخت قسط:</td>
                <td>15:31</td>
                <td>1400/13/05</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>پرداخت قسط:</td>
                <td>15:31</td>
                <td>1400/13/05</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LatestEventsComp;

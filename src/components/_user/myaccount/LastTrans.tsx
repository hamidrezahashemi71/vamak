import React, {useState} from "react";

const LastTransComp = () => {
  const [lastTransactions, setLastTransactions] = useState([]);
  return (
    <div className='w-[50%] h-[350px] bg-white rounded-md p-6'>
      <div className='flex flex-col'>
        <div className='flex gap-1 items-center'>
          <div>
            <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
          </div>
          <p className='text-xl'>انتقالات آخر</p>
        </div>
        {!lastTransactions.length ? (
          <p className='flex items-center justify-center text-black opacity-40 text-xl mt-20'>
            شما تا کنون انتقالی نداشته اید.
          </p>
        ) : (
          <table className='w-full mt-6 border-collapse-[7px] '>
            <thead className='text-center text-sm font-normal'>
              <tr>
                <th>تاریخ</th>
                <th>مبلغ</th>
                <th>کد پیگیری</th>
              </tr>
            </thead>
            <tbody className='text-center text-sm'>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>1400/05/13</td>
                <td>5/000/000 ریال</td>
                <td>296345</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>1400/05/13</td>
                <td>5/000/000 ریال</td>
                <td>296345</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>1400/05/13</td>
                <td>5/000/000 ریال</td>
                <td>296345</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>1400/05/13</td>
                <td>5/000/000 ریال</td>
                <td>296345</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>1400/05/13</td>
                <td>5/000/000 ریال</td>
                <td>296345</td>
              </tr>
              <tr className='odd:bg-lightGray even:bg-white'>
                <td>1400/05/13</td>
                <td>5/000/000 ریال</td>
                <td>296345</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default LastTransComp;

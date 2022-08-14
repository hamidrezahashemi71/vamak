import React, {useState} from "react";
import LastTransTable from "../../_tables/LastTrans";

const LastTransComp = () => {
  const [lastTransactions, setLastTransactions] = useState([1]);
  return (
    <div className='w-[50%] h-[350px] bg-white rounded-md p-6  overflow-y-auto'>
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
          <LastTransTable />
        )}
      </div>
    </div>
  );
};

export default LastTransComp;

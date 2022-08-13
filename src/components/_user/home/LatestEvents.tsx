import React, {useState} from "react";
import LatestEventsTable from "../../_tables/LatestEvents";

const LatestEventsComp = () => {
  const [latestEvents, setLatestEvents] = useState([1]);
  return (
    <div className='w w-[33%] h-[360px] bg-white rounded-md px-6 pt-5 pb-8'>
      <div className='flex flex-col'>
        <div className='flex gap-1 items-center'>
          <div>
            <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
          </div>
          <p className='text-xl'>رویدادهای آخر</p>
        </div>
        {!latestEvents.length ? (
          <p className='flex items-center justify-center text-black opacity-40 text-xl mt-20'>
            رویدادی رخ نداده است
          </p>
        ) : (
          <LatestEventsTable />
        )}
      </div>
    </div>
  );
};

export default LatestEventsComp;

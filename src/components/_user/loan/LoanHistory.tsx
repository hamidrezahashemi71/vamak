import React, {useState} from "react";
import LoanHistoryTable from "../../_tables/LoanHistory";

const LoanHistoryComp = () => {
  const [loanReqHistory, setloanReqHistory] = useState([1]);

  return (
    <div className=' w-[60%] bg-white h-[800px] rounded-md p-6'>
      <div className='flex flex-col justyfy-center w-full'>
        <div className='flex items-center gap-1'>
          <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
          <p className='text-xl'>تاریخچه وام ها</p>
        </div>

        {!loanReqHistory.length ? (
          <p className='flex items-center justify-center text-black opacity-40 text-xl mt-20'>
            شما تا کنون هیچ درخواستی برای وام صادر نکرده اید.
          </p>
        ) : (
          <LoanHistoryTable />
        )}
      </div>
    </div>
  );
};

export default LoanHistoryComp;

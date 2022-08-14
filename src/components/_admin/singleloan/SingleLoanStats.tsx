import React, {useState} from "react";
import LoanPaybacksReport from "../../_tables/LoanPaybacksReport";

const SingleLoanStats = () => {
  const [loanReport, setLoanReport] = useState([1]);
  return (
    <div className='w-[60%] bg-white h-full rounded-md p-6 overflow-y-auto'>
      <div className='flex flex-col justyfy-center w-full'>
        <p className='text-xl'>وام جهیزیه</p>
        {!loanReport.length ? (
          <p className='flex items-center justify-center text-black opacity-40 text-xl mt-20'>
            این وام هنوز تایید نشده است.
          </p>
        ) : (
          <LoanPaybacksReport />
        )}
      </div>
    </div>
  );
};

export default SingleLoanStats;

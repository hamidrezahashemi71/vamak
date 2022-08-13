import React from "react";
import LoanHistoryComp from "../../components/_user/loan/LoanHistory";
import LoanQueryComp from "../../components/_user/loan/LoanQuery";
import useDocTitle from "../../lib/customHooks";

const LoanPage = () => {
  useDocTitle("وامک | وام");
  return (
    <div className='flex gap-4'>
      <LoanQueryComp />
      <LoanHistoryComp />
    </div>
  );
}; 
 
export default LoanPage;

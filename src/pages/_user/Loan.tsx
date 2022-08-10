import React from "react";
import LoanHistoryComp from "../../components/_user/loan/LoanHistory";
import LoanQueryComp from "../../components/_user/loan/LoanQuery";

const LoanPage = () => {
  return (
    <>
      <LoanQueryComp />
      <LoanHistoryComp />
    </>
  );
};
 
export default LoanPage;

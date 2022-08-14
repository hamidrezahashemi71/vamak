import React from "react";
import LoanHistoryComp from "../../components/_admin/loans/LoanHistory";
import PaginationComp from "../../components/_general/Pagination";
import useDocTitle from "../../lib/customHooks";

const LoansPage = () => {
  useDocTitle("وامک ادمین | وامها");
  return (
    <>
      <LoanHistoryComp />
      <PaginationComp />
    </>
  );
};

export default LoansPage;

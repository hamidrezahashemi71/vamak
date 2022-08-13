import React from "react";
import LoanHistoryComp from "../../components/_admin/loans/LoanHistory";
import PaginationComp from "../../components/_general/Pagination";
import SelectComp from "../../components/_general/Select";
import useDocTitle from "../../lib/customHooks";

const LoansPage = () => {
  useDocTitle("وامک ادمین | وامها");
  return (
    <>
      <SelectComp />
      <PaginationComp />
    </>
  );
};

export default LoansPage;

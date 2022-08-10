import React from "react";
import LoanHistoryComp from "../../components/_admin/loans/LoanHistory";
import PaginationComp from "../../components/_general/Pagination";
import SearchComp from "../../components/_general/Search";
import SelectComp from "../../components/_general/Select";

const LoansPage = () => {
  return (
    <>
      <LoanHistoryComp />
      <SearchComp />
      <SelectComp />
      <PaginationComp />
    </>
  ); 
};

export default LoansPage;

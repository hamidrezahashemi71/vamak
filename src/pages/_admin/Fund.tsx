import React from "react";
import AdminBalanceComp from "../../components/_admin/fund/AdminBalance";
import ChartComp from "../../components/_admin/fund/Chart";
import DepositWithdrawComp from "../../components/_admin/fund/DepositWithdraw";

const FundPage = () => {
  return (
    <>
      <AdminBalanceComp />
      <DepositWithdrawComp />
      <ChartComp />
    </>
  );
}; 

export default FundPage;

import React from "react";
import AdminBalanceComp from "../../components/_admin/fund/AdminBalance";
import ChartComp from "../../components/_admin/fund/Chart";
import DepositWithdrawComp from "../../components/_admin/fund/DepositWithdraw";
import useDocTitle from "../../lib/customHooks";

const FundPage = () => {
  useDocTitle("وامک ادمین | صندوق");
  return (
    <div className='bg-white w-full h-full'>
      <AdminBalanceComp />
      <DepositWithdrawComp />
      <ChartComp />
    </div>
  );
}; 

export default FundPage;

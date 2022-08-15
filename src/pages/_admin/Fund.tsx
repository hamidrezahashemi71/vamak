import React, {useState} from "react";
import AdminBalanceComp from "../../components/_admin/fund/AdminBalance";
import ChartComp from "../../components/_admin/fund/Chart";
import DepositWithdrawComp from "../../components/_admin/fund/DepositWithdraw";
import useDocTitle from "../../lib/customHooks";

const FundPage = () => {
  const [adminBalance, setAdminBalance] = useState(30000000);
  useDocTitle("وامک ادمین | صندوق");
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-6 justify-center md:flex-col'>
        <AdminBalanceComp adminBalance={adminBalance} />
        <DepositWithdrawComp />
      </div>
      <ChartComp />
    </div>
  );
};

export default FundPage;

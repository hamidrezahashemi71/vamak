import React from "react";
import CheckoutComp from "../../components/_user/myaccount/Checkout";
import DepositComp from "../../components/_user/myaccount/Deposit";
import LastTransComp from "../../components/_user/myaccount/LastTrans";
import MyBalanceComp from "../../components/_user/myaccount/MyBalance";

const MyAccountPage = () => {
  return (
    <>
      <LastTransComp />
      <MyBalanceComp />
      <DepositComp />
      <CheckoutComp />
    </>
  );
};
 
export default MyAccountPage;

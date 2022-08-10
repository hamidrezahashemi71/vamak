import React from "react";
import LatestTransComp from "../../components/_user/home/LatestTrans";
import FuturePaymentComp from "../../components/_user/home/FuturePayment";
import BalanceComp from "../../components/_user/home/Balance";

const HomePage = () => {
  return (
    <>
      <LatestTransComp />
      <FuturePaymentComp />
      <BalanceComp />
    </>
  );
}; 

export default HomePage;
 
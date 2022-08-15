import React from "react";
import LatestEventsComp from "../../components/_user/home/LatestEvents";
import FuturePaymentComp from "../../components/_user/home/FuturePayment";
import BalanceComp from "../../components/_user/home/Balance";
import useDocTitle from "../../lib/customHooks";

const HomePage = () => {
  useDocTitle("وامک | خانه");
  return (
    <>
      <div className='flex gap-6 mb-6 lg:flex-col lg:items-center'>
        <BalanceComp />
        <LatestEventsComp />
      </div>
      <FuturePaymentComp />
    </>
  );
}; 

export default HomePage;
 
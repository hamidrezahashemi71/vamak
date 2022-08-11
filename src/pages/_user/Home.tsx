import React from "react";
import LatestEventsComp from "../../components/_user/home/LatestEvents";
import FuturePaymentComp from "../../components/_user/home/FuturePayment";
import BalanceComp from "../../components/_user/home/Balance";

const HomePage = () => {
  return (
    <>
      <div className='flex gap-6 mb-6'>
        <BalanceComp />
        <LatestEventsComp />
      </div>
      <FuturePaymentComp />
    </>
  );
}; 

export default HomePage;
 
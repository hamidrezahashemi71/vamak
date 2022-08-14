import React from "react";
import PaymentDelayTable from "../../_tables/PaymentDelay";

const PaybackDelay = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white rounded-md overflow-y-auto'>
      <PaymentDelayTable />
    </div>
  );
};

export default PaybackDelay;

import React, {useState} from "react";
import CheckoutComp from "../../components/_user/myaccount/Checkout";
import DepositComp from "../../components/_user/myaccount/Deposit";
import LastTransComp from "../../components/_user/myaccount/LastTrans";
import MyBalanceComp from "../../components/_user/myaccount/MyBalance";

const MyAccountPage = () => {
  const [myBalance, setMyBalance] = useState(0);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-6 justify-center'>
        <MyBalanceComp myBalance={myBalance} />
        <LastTransComp />
      </div>
      <div className='flex gap-0 justify-center'>
        <DepositComp myBalance={myBalance} setMyBalance={setMyBalance} />
        <div className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='3'
            height='320'
            viewBox='0 0 3 320'>
            <line
              id='Line_12'
              data-name='Line 12'
              y2='320'
              transform='translate(1.5)'
              fill='none'
              stroke='#707070'
              stroke-width='3'
              opacity='0.4'
            />
          </svg>
        </div>
        <CheckoutComp />
      </div>
    </div>
  );
};

export default MyAccountPage;

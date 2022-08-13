import React, {useState} from "react";
import CheckoutComp from "../../components/_user/myaccount/Checkout";
import DepositComp from "../../components/_user/myaccount/Deposit";
import LastTransComp from "../../components/_user/myaccount/LastTrans";
import MyBalanceComp from "../../components/_user/myaccount/MyBalance";
import useDocTitle from "../../lib/customHooks";

const MyAccountPage = () => {
  useDocTitle("وامک | حساب من");
  const [myBalance, setMyBalance] = useState(3000000);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-6 justify-center'>
        <MyBalanceComp myBalance={myBalance} />
        <LastTransComp />
      </div>
      <div className='flex gap-0 justify-center'>
        <DepositComp myBalance={myBalance} setMyBalance={setMyBalance} />
        <div className='flex items-center'>
          <img src={"/assets/images/line.png"} alt='line' />
        </div>
        <CheckoutComp />
      </div>
    </div>
  );
};

export default MyAccountPage;

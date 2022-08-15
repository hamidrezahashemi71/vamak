import React, {useState} from "react";
import FuturePaymentsTable from "../../_tables/FuturePayments";

const FuturePaymentComp = () => {
  const [futurePayments, setFuturePayments] = useState([1]);

  return (
    <>
      <div className='w-full bg-white flex flex-col gap-1 overflow-y-auto'>
        <div className='h-32  rounded-md px-6 py-5'>
          <div className='flex gap-1 items-center'>
            <div>
              <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
            </div>
            <p className='text-xl'>قسط های پیش رو</p>
          </div>
        </div>
        <div className='w-full h-[350px] bg-white rounded-md'>
          {!futurePayments.length ? (
            <p className='text-black opacity-40 text-xl text-center mt-20'>
              شما وام فعالی ندارید
            </p>
          ) : (
            <FuturePaymentsTable />
          )}
        </div>
      </div>
    </>
  );
};

export default FuturePaymentComp;

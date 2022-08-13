import React, {useState} from "react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  adminBalance: number;
}

const AdminBalanceComp: React.FC<Props> = ({adminBalance}) => {
  return (
    <>
      <div className='w-[50%] h-[350px] bg-white rounded-md p-6'>
        <div className='flex flex-col'>
          <div className='flex gap-1 items-center'>
            <div>
              <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
            </div>
            <p className='text-xl'>موجودی</p>
          </div>
          <div className='w-40 mx-auto'>
            <CircularProgressbar
              maxValue={80000000}
              strokeWidth={12}
              value={adminBalance}
              text={`${adminBalance} ریال`}
              styles={buildStyles({
                textSize: "10px",
                textColor: "#000000",
                pathColor: "#313757",
                trailColor: "#FC8B18",
              })}
            />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-1 mt-9'>
              <img src={"/assets/images/blue-dot.png"} alt='blue-dot' />
              <div className='flex text-xs'>
                <p>مبالغ ثابت:</p>
                <span className='text-orange'>5/000/000</span>
                <span className='xs'>ریال</span>
              </div>
            </div>
            <div className='flex items-center gap-1 mt-9'>
              <img src={"/assets/images/orange-dot.png"} alt='orange-dot' />
              <div className='flex text-xs'>
                <p>مجموع موجودی کاربران:</p>
                <span className='text-orange'>50/000/000</span>
                <span className='xs'>ریال</span>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center gap-1 mt-9'>
            <div className='flex text-xs'>
              <p>مبالغ وام داده شده:</p>
              <span className='text-orange'>50/000/000</span>
              <span className='xs'>ریال</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBalanceComp;

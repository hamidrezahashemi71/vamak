import React from "react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  myBalance: number;
}

const MyBalanceComp: React.FC<Props> = ({myBalance}) => {
  return (
    <div className='w-[50%] h-[350px] bg-white rounded-md p-6'>
      <div className='flex flex-col'>
        <div className='flex gap-1 items-center'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              viewBox='0 0 12 12'>
              <circle
                id='Ellipse_117'
                data-name='Ellipse 117'
                cx='6'
                cy='6'
                r='6'
                fill='#fc8b18'
              />
            </svg>
          </div>
          <p className='text-xl'>موجودی</p>
        </div>
        <div className='flex justify-between gap-24'>
          <div className='flex flex-col gap-6 mt-16'>
            <div className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'>
                <circle
                  id='Ellipse_84'
                  data-name='Ellipse 84'
                  cx='6'
                  cy='6'
                  r='6'
                  fill='#313757'
                />
              </svg>
              <div className='flex gap-28 text-sm'>
                <p>حق عضویت:</p>
                <p>0 ریال</p>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'>
                <circle
                  id='Ellipse_85'
                  data-name='Ellipse 85'
                  cx='6'
                  cy='6'
                  r='6'
                  fill='#ffaa54'
                />
              </svg>

              <div className='flex gap-28 text-sm'>
                <p>پس انداز:</p>
                <p>0 ریال</p>
              </div>
            </div>
          </div>
          <div className='w-40'>
            <CircularProgressbar
              maxValue={80000000}
              strokeWidth={12}
              value={myBalance}
              text={`${myBalance} ریال`}
              styles={buildStyles({
                textSize: "10px",
                textColor: "#000000",
                pathColor: "#313757",
                trailColor: "#FC8B18",
              })}
            />
          </div>
        </div>
        <div className='flex justify-between gap-12 mt-11'>
          <p className='text-sm'>
            زمان پرداخت حق عضویت:
            <span className='text-orange'> 30</span> روز
          </p>
          <p className='text-sm'>
            مبلغ پرداخت حق عضویت:
            <span className='text-orange'> 1/000/000</span> ریال
          </p>
        </div>
        <p className='text-black mt-9'>تاریخ ثبت حساب: 1400/01/15</p>
      </div>
    </div>
  );
};

export default MyBalanceComp;

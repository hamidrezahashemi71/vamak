import React from "react";

interface Props {
  pagination: string;
  setpagination: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonsComp: React.FC<Props> = ({pagination, setpagination}) => {
  return (
    <div className='flex gap-6'>
      <button
        onClick={() => setpagination("0")}
        className={
          pagination === "0"
            ? "w-[25%] bg-white text-orange h-20 rounded-md"
            : "w-[25%] bg-white h-20 rounded-md"
        }>
        فهرست
      </button>
      <button
        onClick={() => setpagination("1")}
        className={
          pagination === "1"
            ? "w-[25%] bg-white text-orange h-20 rounded-md"
            : "w-[25%] bg-white h-20 rounded-md"
        }>
        ساخت کاربر جدید
      </button>
      <button
        onClick={() => setpagination("2")}
        className={
          pagination === "2"
            ? "w-[25%] bg-white text-orange h-20 rounded-md"
            : "w-[25%] bg-white h-20 rounded-md"
        }>
        درخواست تسویه
      </button>
      <button
        onClick={() => setpagination("3")}
        className={
          pagination === "3"
            ? "w-[25%] bg-white text-orange h-20 rounded-md"
            : "w-[25%] bg-white h-20 rounded-md"
        }>
        مبالغ دیرکرد
      </button>
    </div>
  );
};

export default ButtonsComp;

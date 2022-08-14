import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartComp = () => {
  const data = [
    {
      name: "فروردین",
      uv: 4000,
      amt: 2400,
    },
    {
      name: "اردیبهشت",
      uv: 3000,
      amt: 2210,
    },
    {
      name: "خرداد",
      uv: 2000,
      amt: 2290,
    },
    {
      name: "تیر",
      uv: 2780,
      amt: 2000,
    },
    {
      name: "مرداد",
      uv: 1890,
      amt: 2181,
    },
    {
      name: "شهریور",
      uv: 2390,
      amt: 2500,
    },
    {
      name: "مهر",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "آبان",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "آذر",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "دی",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "بهمن",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "اسفند",
      uv: 3490,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className='w-full h-[350px] bg-white rounded-md p-6'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='uv'
              stroke='#82ca9d'
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ChartComp;

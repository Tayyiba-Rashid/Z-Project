import { decrement, increment } from "@/features/counterSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  // const [count, setCount] = useState(0)

  // const increase = () => {
  //     setCount(count + 1)
  // }
  // const decrease = () => {
  //     setCount(count - 1)
  // }
  // useEffect(()=>{
  //     console.log(`Count Value is ${count}`)
  // }, [count])

  // useSelector() reads
  // useDispatch() Sends

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="max-w-sm w-full overflow-hidden shadow-xl rounded-3xl bg-white p-8 flex flex-col items-center justify-center border border-gray-200">
    <h1 className="font-extrabold text-5xl text-gray-800 mb-6">ZIMO COUNTER</h1>
    <p className="font-bold text-3xl text-gray-700 mb-8">Counter: {count}</p>
    <div className="flex flex-col space-y-4 w-full">
      <button
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() => dispatch(increment())}
      >
        Increase Count
      </button>
      <button
        className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() => dispatch(decrement())}
      >
        Decrease Count
      </button>
    </div>
  </div>
</div>

  );
}

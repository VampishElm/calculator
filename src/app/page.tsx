"use client";

import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("0");

  const handleClick = (value: string) => {
    if (input === "0" && value !== ".") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const clearDisplay = () => {
    setInput("0");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="min-h-screen bg-[#020B1E] flex items-center justify-center">
      <div className="bg-[#08132D] p-6 rounded-2xl shadow-2xl w-[270px]">
        {/* Display */}
        <div className="bg-[#1C2B47] h-14 rounded-md flex items-center justify-end px-4 text-gray-300 text-3xl mb-6 overflow-hidden">
          {input}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={clearDisplay}
            className="col-span-3 bg-red-600 hover:bg-red-700 text-white rounded-md h-10 font-semibold"
          >
            C
          </button>

          <button
            onClick={() => handleClick("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-md h-10"
          >
            /
          </button>

          <button
            onClick={() => handleClick("7")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            9
          </button>

          <button
            onClick={() => handleClick("*")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-md h-10"
          >
            *
          </button>

          <button
            onClick={() => handleClick("4")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            6
          </button>

          <button
            onClick={() => handleClick("-")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-md h-10"
          >
            -
          </button>

          <button
            onClick={() => handleClick("1")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            3
          </button>

          <button
            onClick={() => handleClick("+")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-md h-10"
          >
            +
          </button>

          <button
            onClick={() => handleClick("0")}
            className="col-span-2 bg-[#111827] text-white rounded-md h-10"
          >
            0
          </button>

          <button
            onClick={() => handleClick(".")}
            className="bg-[#111827] text-white rounded-md h-10"
          >
            .
          </button>

          <button
            onClick={calculate}
            className="bg-green-500 hover:bg-green-600 text-white rounded-md h-10"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
} 


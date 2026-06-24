"use client";

import { useState } from "react";

export default function Number() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleClear = () => {
        setCount(0);
    };

    return (
       <div className="min-h-screen bg-slate-800 text-white flex items-center justify-center">
           <div className="text-center">
               <h1 className="text-4xl font-bold">Counter: {count}</h1>
               <div className="mt-4">
                   <button
                       className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                       onClick={handleAdd}
                   >
                       Increment
                   </button>
                   <button
                       className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                       onClick={handleClear}
                   >
                       Clear
                   </button>
               </div>
           </div>
       </div>
   );
}
     
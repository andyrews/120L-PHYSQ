import React from "react";

const IntakeMonitor = () => {
  return (
    <div className="bg-black text-white h-screen p-6 flex gap-8">
      <div className="w-1/3 border-r border-gray-700 pr-6">
        <div className="mb-6">
          <label className="block mb-1 font-semibold">FOOD NAME</label>
          <input
            type="text"
            placeholder="Enter food name"
            className="w-full bg-base-1000 p-2 rounded text-red placeholder-gray-400 focus:outline-none border border-gray-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold">QUANTITY / PORTION</label>
          <input
            type="text"
            placeholder="e.g. 100g or 3pcs"
            className="w-full bg-base-1000 p-2 rounded text-red placeholder-gray-400 focus:outline-none border border-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">CALORIES</label>
          <input
            type="number"
            placeholder="e.g. 200"
            className="w-full bg-base-1000 p-2 rounded text-white placeholder-gray-400 focus:outline-none border border-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">DATE & TIME</label>
          <input
            type="datetime-local"
            className="w-full bg-base-1000 p-2 rounded text-white focus:outline-none border border-gray-500"
          />
        </div>        
        <button className="block mx-auto bg-[#FFB100] text-black px-4 py-2 rounded-full font-semibold hover:bg-orange-400 transition-colors transform hover:scale-105 duration-500 shadow-lg text-sm">
         ADD MEAL
        </button>            
      </div>

      <div className="flex-1 space-y-4">
        <div className="border-b border-gray-700 pb-4 flex justify-between">
          <div>
            <div className="text-xl font-semibold">Steak</div>
            <div className="text-sm text-gray-300">
              QUANTITY: 100g | 271 CALORIES
            </div>
            <div className="text-sm text-[#FFB100]">Feb 19 | 9:00 AM</div>
          </div>
          <div className="flex items-start space-x-4">
            <button className="text-[#FFB100] font-semibold hover:underline">
              UPDATE
            </button>
            <button className="text-red-500 font-semibold hover:underline">
              DELETE
            </button>
          </div>
        </div>

        <div className="border-b border-gray-700 pb-4 flex justify-between">
          <div>
            <div className="text-xl font-semibold">Eggs</div>
            <div className="text-sm text-gray-300">
              QUANTITY: 3 | 215 CALORIES
            </div>
            <div className="text-sm text-[#FFB100]">Feb 17 | 1:00 PM</div>
          </div>
          <div className="flex items-start space-x-4">
            <button className="text-[#FFB100] font-semibold hover:underline">
              UPDATE
            </button>
            <button className="text-red-500 font-semibold hover:underline">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeMonitor;

import React from "react";

const DietTable = () => {
  const data = [
    { food: "Meat", meal: "Break Fast", time: "08:00 AM", carbs: "20 gm" },
    { food: "Burger", meal: "Lunch", time: "01:00 AM", carbs: "30 gm" },
    { food: "Burrito", meal: "Dinner", time: "01:00 PM", carbs: "10 gm" },
    { food: "Ice Cream", meal: "Lunch", time: "01:00 AM", carbs: "90 gm" },
    { food: "Pizza Slice", meal: "Branch", time: "11:00 AM", carbs: "50 gm" },
    { food: "Cookies", meal: "Break Fast", time: "08:00 AM", carbs: "30 gm" },
    { food: "Fries", meal: "Lunch", time: "01:00 AM", carbs: "90 gm" },
    { food: "Egg & Bacon", meal: "Dinner", time: "10:00 PM", carbs: "70 gm" },
    { food: "Cup Cake", meal: "Break Fast", time: "08:00 AM", carbs: "40 gm" },
    { food: "Taco", meal: "Lunch", time: "01:00 AM", carbs: "80 gm" },
  ];

  return (
    <div className="p-6">
        <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="text-left">
            <th className="py-3 px-4 text-md font-semibold text-[#475569] whitespace-nowrap">Food</th>
            <th className="py-3 px-4 text-md font-semibold text-[#475569] whitespace-nowrap">Meal</th>
            <th className="py-3 px-4 text-md font-semibold text-[#475569] whitespace-nowrap">Calories</th>
            <th className="py-3 px-4 text-md font-semibold text-[#475569] whitespace-nowrap">Priorities</th>
            <th className="py-3 px-4 text-md font-semibold text-[#475569] whitespace-nowrap">Carbs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className=" rounded-lg bg-white mb-4"
            >
              <td className="py-4 px-4 flex items-center gap-2 text-gray-700 whitespace-nowrap">
                <div className="w-8 h-8 bg-[#CD44EF26] border border-[#CD44EF26] rounded-full font-medium">
                    <img src="" alt="" />
                </div>
                {item.food}
              </td>
              <td className="py-4 px-4 text-gray-700 font-medium whitespace-nowrap">{item.meal}</td>
              <td className="py-4 px-4 text-gray-700 font-medium whitespace-nowrap">Receiving</td>
              <td className="py-4 px-4 text-gray-700 font-medium whitespace-nowrap">{item.time}</td>
              <td className="py-4 px-4 text-gray-700 font-medium whitespace-nowrap">{item.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default DietTable;

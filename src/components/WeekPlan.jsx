import React from 'react';

const WeekPlan = () => {
  const weekData = [
    { day: 'Monday', food: 'Pizza', meal: 'Breakfast', time: '8:00 pm' },
    { day: 'Tuesday', food: 'Chicken', meal: 'Lunch', time: '12:00 pm' },
    { day: 'Wednesday', food: 'Icecream', meal: 'Dinner', time: '7:00 pm' },
    { day: 'Thursday', food: 'Burger', meal: 'Lunch', time: '3:00 pm' },
    { day: 'Friday', food: 'Fries', meal: 'Dinner', time: '1:00 pm' },
    { day: 'Saturday', food: 'Burrito', meal: 'Brunch', time: '9:00 am' },
    { day: 'Sunday', food: 'Egg & Bacon', meal: 'Breakfast', time: '8:00 pm' },
  ];

  return (
    <div>
      <h1 className="mb-9 font-semibold">Week Plan</h1>
      <div className="flex flex-col gap-3">
        {weekData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-3 rounded-lg"
          >
            <div className="flex flex-col">
              <h2 className="font-medium text-md">{item.day}</h2>
              <p className="text-sm text-[#475569]">
                {item.food} | {item.meal}
              </p>
            </div>
            <div>
              <p className="bg-[#FFF7ED] text-[#CD44EF] px-3 py-1 rounded-lg text-center">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekPlan;

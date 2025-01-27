import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckListIcon from "../../assets/checklist.png";

import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  add,
  sub,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = add(day, { days: 1 });
  }

  const handlePrevMonth = () => setCurrentDate(sub(currentDate, { months: 1 }));
  const handleNextMonth = () => setCurrentDate(add(currentDate, { months: 1 }));

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const closeModal = () => {
    setSelectedDate(null);
  };

  return (
    <>
      <h1 className="text-start m-12 mb-8 px-1">History</h1>
      <div className="p-4 mx-8">
        <div className="flex justify-between items-center mb-8">
          <button className="text-xl" onClick={handlePrevMonth}>
            &lt;
          </button>
          <h2 className="text-lg font-semibold">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <button className="text-xl" onClick={handleNextMonth}>
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-6 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="font-bold">
              {day}
            </div>
          ))}
          {days.map((date, index) => (
            <div
              key={index}
              className={`p-2 rounded-full cursor-pointer ${
                isSameMonth(date, currentDate)
                  ? isSameDay(date, new Date())
                    ? "bg-[#20c997] text-white"
                    : "hover:bg-gray-200"
                  : "text-gray-400"
              }`}
              onClick={() => handleDayClick(date)}
            >
              {format(date, "d")}
            </div>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4">
              {format(selectedDate, "yyyy-MM-dd")}
            </h2>
            <p className="text-gray-700 mb-6">안녕하세요!</p>
          </div>
        </div>
      )}

      <Link to="/">
        <img
          src={CheckListIcon}
          className="absolute w-15 right-8 bottom-10 opacity-20 hover:opacity-100 transition-opacity duration-120"
        />
      </Link>
    </>
  );
};

export default Calendar;

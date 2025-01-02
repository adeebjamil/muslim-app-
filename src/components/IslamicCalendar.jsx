// src/components/IslamicCalendar.jsx
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar-sa';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);
dayjs.locale('ar-sa');

const events = [
  { date: "2025-01-01", name: "Start of Rajab (Sacred month)", islamicDate: "1 Rajab 1446 AH", day: "Wednesday" },
  { date: "2025-01-13", name: "Fasting Ayyamul Bidh", islamicDate: "13 Rajab 1446 AH", day: "Monday" },
  // ... (Other events)
];

const months = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarMonth = ({ month, year, events }) => {
  const firstDayOfMonth = dayjs(`${year}-${month}-01`).startOf('month').day();
  const daysInMonth = dayjs(`${year}-${month}-01`).daysInMonth();

  const daysArray = Array.from({ length: firstDayOfMonth }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <div className="mb-10 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-center text-indigo-600">{months[month - 1]} {year}</h3>
      <div className="grid grid-cols-7 gap-2 text-sm">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-bold text-gray-500">{day}</div>
        ))}
        {daysArray.map((day, index) => (
          <div key={index} className={`h-24 border border-gray-200 flex items-center justify-center ${day ? 'bg-indigo-50' : 'bg-gray-100'} rounded-lg shadow-sm`}>
            {day && (
              <div className="text-center">
                <div className="font-bold text-gray-800">{day}</div>
                {events
                  .filter(event => dayjs(event.date).isSame(`${year}-${month}-${day}`, 'day'))
                  .map((event, i) => (
                    <div key={i} className="text-xs text-gray-600 mt-1">{event.name}</div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const IslamicCalendar = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading calendar events...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      {Array.from({ length: 12 }, (_, i) => (
        <CalendarMonth key={i} month={i + 1} year={2025} events={events} />
      ))}
    </div>
  );
};

export default IslamicCalendar;
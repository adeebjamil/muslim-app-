// src/pages/CalendarPage.jsx
import React from 'react';
import IslamicCalendar from '../components/IslamicCalendar';

const CalendarPage = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Islamic Calendar 2025-2026</h1>
      <IslamicCalendar />
    </div>
  );
};

export default CalendarPage;
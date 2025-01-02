import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

// Function to format time with AM/PM
const formatTime = (time) => {
  const [hour, minute] = time.split(':');
  let formattedHour = parseInt(hour);
  const isPM = formattedHour >= 12;
  formattedHour = formattedHour % 12 || 12; // Convert 0 to 12 for 12 AM/PM
  const formattedMinute = minute.padStart(2, '0');
  const ampm = isPM ? 'PM' : 'AM';
  return `${formattedHour}:${formattedMinute} ${ampm}`;
};

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/timings`);
        setPrayerTimes(response.data.data.timings);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch prayer times");
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString('en-US', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  if (loading) return <p>Loading prayer times...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Prayer Times</h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-lg shadow-lg"
      >
        <div className="text-4xl font-bold">{currentDate.getDate()}</div>
        <div className="text-lg">{currentDate.toLocaleDateString('en-US', { month: 'long' })}</div>
        <div className="text-lg">{currentDate.getFullYear()}</div>
      </motion.div>
      <AnimatePresence>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-4"
        >
          {Object.keys(prayerTimes).map((key, index) => (
            <motion.li
              key={index}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-md"
            >
              <span className="font-bold">{key}:</span> {formatTime(prayerTimes[key])}
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default PrayerTimes;
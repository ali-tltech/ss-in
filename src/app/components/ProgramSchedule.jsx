"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const events = [
  {
    time: "9:00 AM",
    title: "Opening Ceremony",
    description: "Welcome speeches from dignitaries and inauguration committee",
  },
  {
    time: "10:30 AM",
    title: "Ribbon Cutting Ceremony",
    description: "Official inauguration of the new cultural center",
  },
  {
    time: "11:30 AM",
    title: "Keynote Address",
    description: "Vision for the future by the Chief Guest",
  },
  {
    time: "1:00 PM",
    title: "Networking Luncheon",
    description: "Catered dining experience with special performances",
  },
  {
    time: "3:00 PM",
    title: "Panel Discussion",
    description: "Industry leaders discuss emerging trends and innovations",
  },
  {
    time: "5:30 PM",
    title: "Gala Dinner",
    description: "Exclusive evening reception with awards presentation",
  },
];

const ProgramSchedule = () => {
  const [isClient, setIsClient] = useState(false); // 🔐 Protects against SSR

   useEffect(() => {
      setIsClient(true); // ✅ Mark that we're now on the client
    }, []);
    if (!isClient) return null; // ❌ Prevent mismatch by not rendering during SSR

  return (
    <section className="mb-16 max-w-7xl py-12 mx-auto md:px-0 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-indigo-800">Program Schedule</h2>
        <p className="text-sm text-gray-500 mt-1">
          January 15, 2025 • National Cultural Center
        </p>
      </motion.div>

      <motion.div
        className="relative border-l-4 border-indigo-200 space-y-10 pl-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Dot */}
            <div className="absolute -left-[18px] top-2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300" />

            {/* Card */}
            <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <p className="text-xs text-indigo-500 font-semibold">{event.time}</p>
              <h3 className="text-lg font-bold text-gray-800 mt-1">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProgramSchedule;

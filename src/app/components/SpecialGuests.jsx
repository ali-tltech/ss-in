"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Guests } from "../data/Guests";
import Image from "next/image";

const SpecialGuests = () => {
  const [activeGuest, setActiveGuest] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGuest((prev) => (prev + 1) % Guests.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Client-side protection
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      className="relative z-10 py-20 bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-50 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-indigo-800 mb-4">Special Guests</h2>
        <p className="text-gray-600 mb-10">Meet the distinguished personalities joining us</p>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Main Slider */}
          <div className="relative h-96"> {/* Fixed height container */}
            <AnimatePresence initial={false}>
              <motion.div
                key={activeGuest}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full flex justify-center"
              >
                <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-xl rounded-3xl p-6 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-6">
                    {/* Use Next.js Image component properly */}
                    {Guests[activeGuest].image && (
                      <Image
                        src={Guests[activeGuest].image}
                        alt={Guests[activeGuest].name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-900">{Guests[activeGuest].name}</h3>
                  <p className="text-indigo-600 font-medium">{Guests[activeGuest].title}</p>
                  <p className="text-gray-500 text-sm mt-1">{Guests[activeGuest].organization}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setActiveGuest((prev) => (prev - 1 + Guests.length) % Guests.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-indigo-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-800">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button 
            onClick={() => setActiveGuest((prev) => (prev + 1) % Guests.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-indigo-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-800">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 gap-3">
            {Guests.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveGuest(index)}
                className={`w-3 h-3 rounded-full border border-indigo-500 transition-colors ${
                  activeGuest === index ? "bg-indigo-600" : "bg-transparent"
                }`}
                aria-label={`View guest ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialGuests;
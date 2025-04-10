"use client";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SpecialGuests from "./SpecialGuests";
import { ChevronRight, Facebook, Instagram, Mail, MapPin, Mouse, Phone, Twitter } from "lucide-react";
const ProgramSchedule = dynamic(() => import("./ProgramSchedule"), {
  ssr: false,
});
const BookingForm = dynamic(() => import("./BookingForm"), {
  ssr: false,
});
const SocialMediaSet = dynamic(() => import("./SocialMediaSet"), {
  ssr: false,
});

const InaugurationProgram = () => {
  const [isClient, setIsClient] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // useEffect(() => {
  //   if (isDrawerOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isDrawerOpen]);
  
  // Ensure client-side rendering by setting isClient to true after the initial render
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents rendering on the server side

  return (
    <motion.section
      className="w-full h-full  bg-gradient-to-br overflow-x-hidden from-blue-50 to-indigo-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Banner */}
      <div className="relative h-screen bg-indigo-800 overflow-x-hidden">
      <div className="absolute text-[100px] font-bold top-0 right-10 text-white/40">SWAYAMWARA SILKS</div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-pink-800 opacity-90" />
        <div className="absolute bg-cover bg-center inset-0 bg-[url('https://www.ultimateevents.in/wp-content/uploads/2023/11/oioi-2-1536x1023.jpg')] opacity-10" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 md:px-0 flex flex-col justify-center items-start py-16">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcJ0VAZ3eqSUz1ajSVbtCom6T__nn-K3RxVKDQAf3CkdiFrA2VoMLW8-e9Xi-7yNOZw&usqp=CAU"
        width={200}
        height={150}
        alt="Event image"
        className="rounded-xl mb-6 shadow-lg"
      />

      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Inauguration Event 2025
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-indigo-100 max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Join us for this historic celebration as we inaugurate our new cultural center with distinguished guests and memorable events.
      </motion.p>

      <motion.div
        className="mt-4 text-lg md:text-xl text-indigo-100 flex items-center gap-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <span>Our new shop is opening in</span>
        <span className="font-semibold text-white flex items-center gap-1">
          Palakkad <MapPin className="w-5 h-5 text-pink-400" />
        </span>
      </motion.div>

      <motion.p
        className="mt-4 text-lg md:text-xl text-indigo-100"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        📅 <span className="font-medium">12/05/2025</span>
      </motion.p>

      <motion.p
        className="mt-2 text-lg bg-stone-100/10 p-1 md:text-xl text-indigo-100"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
         <span className="font-medium">Venue:</span> National Cultural Center,
       
        123 Main Avenue, Capital City
      </motion.p>

      <div className="mt-6">
        <SocialMediaSet />
      </div>
<div className="absolute bottom-10 ">

</div>
      <motion.button
        onClick={() => setIsDrawerOpen(true)}
        className="mt-8 bg-pink-600 absolute bottom-10 left-0 hover:bg-pink-700 text-white font-semibold px-6 py-2 border-2 shadow-md transition duration-300"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Book Your Presence
      </motion.button>
      <motion.button
        onClick={() => setIsDrawerOpen(true)}
        className=" absolute bottom-10 right-0 text-white  md:flex hidden justify-center items-center gap-1 transition duration-300"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Mouse /> <span>scroll down for more details</span>
      </motion.button>
    </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 py-12">
        <SpecialGuests />
        <ProgramSchedule />


        <section className="bg-gradient-to-b from-white to-gray-100 py-10 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        We sincerely appreciate your presence and support for the inauguration.
        Your contribution made the event truly special.
      </p>
    </section>
      </div>

      <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Swayamvara Silks</h3>
            <p className="text-gray-300 mb-4">
              Discover the elegance of traditional silk sarees and modern designs at our showroom.
            </p>
            <SocialMediaSet/>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>Our Collections</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Showroom Location</h3>
            <p className="text-gray-300 mb-4">Visit our showroom—contact us for more details!</p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                {/* <Location className="text-indigo-400 h-5 w-5 mt-1 mr-3 flex-shrink-0" /> */}
                <span className="text-gray-300">
                  Near Victoria College<br />
                  16/500(1), College Road, Parakkunnam,<br />
                  Palakkad, Kerala, 678001
                </span>
              </li>
              
              <li className="flex items-center">
                {/* <Phone className="text-indigo-400 h-5 w-5 mr-3 flex-shrink-0" /> */}
                <span className="text-gray-300">+91 90 72 88 55 99</span>
              </li>
              
              <li className="flex items-center">
                {/* <Mail className="text-indigo-400 h-5 w-5 mr-3 flex-shrink-0" /> */}
                <span className="text-gray-300">info@swayamvarasilks.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2025 <a href="https://www.tltechnologies.net" className="text-indigo-400 hover:text-indigo-300 transition-colors">TL TECHNOLOGIES PRIVATE LIMITED</a>. All Rights Reserved
        </div>
      </div>
    </footer>

      {/* Drawer (Booking Form) */}
      <div
        className={`fixed bottom-0 left-0 w-full z-[999] md:p-0 p-5 h-screen    duration-300 ease-in-out transition-transform transform ${
          isDrawerOpen ? "translate-y-0" : "translate-y-full "
        } `}
      >
       
        
        
        <BookingForm setIsDrawerOpen={setIsDrawerOpen}/>
        
      </div>
    </motion.section>
  );
};

export default InaugurationProgram;

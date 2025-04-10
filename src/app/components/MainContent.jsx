"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MainContent = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsClient(true);
    
    // Auto-rotate featured sections
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const fashionCollections = [
    {
      title: "Gradient Essence",
      description: "Fluid forms meet innovative textiles in our signature collection",
      image: "/api/placeholder/800/500"
    },
    {
      title: "Chromatic Shift",
      description: "Bold colors transition across sustainable fabrics with precision",
      image: "/api/placeholder/800/500"
    },
    {
      title: "Textile Revolution",
      description: "Where traditional craftsmanship meets future-forward design",
      image: "/api/placeholder/800/500"
    }
  ];

  if (!isClient) return null;

  return (
    <motion.section
      className="relative  flex flex-col items-center justify-start "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dynamic Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ 
          background: [
            "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
            "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
          ]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Mesh Overlay */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5 z-10" />

      {/* Header */}
      <motion.header 
        className="relative z-20 w-full flex justify-between items-center bg-white p-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">AVANTE</h2>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">Collections</a>
          <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">Runway</a>
          <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">Designers</a>
          <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">Editorial</a>
        </nav>
        <button className="p-2 md:hidden">
            hello
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> */}
        </button>
      </motion.header>

      {/* Hero Section */}
      <div className="relative z-20 text-center max-w-4xl mt-12 md:mt-20">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500">
            FASHION FORWARD 2025
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-800 text-xl md:text-2xl leading-relaxed font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Redefining the boundaries between art and fashion with gradient-inspired designs
          that transform with the wearer and environment.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col md:flex-row gap-4 justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:opacity-90 transition">
            Explore Collection
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent border border-gray-800 text-gray-800 font-medium hover:bg-gray-100 transition">
            Book Runway Show
          </button>
        </motion.div>
      </div>

      {/* Featured Collections */}
      <motion.div 
        className="relative z-20 w-full max-w-5xl mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Featured Collections</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {fashionCollections.map((collection, index) => (
            <motion.div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-sm transform transition-all duration-500 ${activeSection === index ? 'md:scale-105 ring-2 ring-purple-500' : 'md:hover:scale-103'}`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.2 }}
            >
              <div className="h-48 overflow-hidden">
                <img src={collection.image} alt={collection.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-gray-600">{collection.description}</p>
                <button className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition flex items-center">
                  View Collection
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> */}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div 
        className="relative z-20 w-full max-w-3xl mt-24 mb-12 bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Design Community</h2>
        <p className="text-gray-600 mb-6">Be the first to receive our latest lookbooks, runway invitations, and emerging designer spotlights.</p>
        
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MainContent;
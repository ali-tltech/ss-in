"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
  { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
];

const SocialMediaSet = () => {
  return (
    <motion.div
      className="flex space-x-4 mt-6 justify-center md:justify-start"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-stone-200 hover:bg-stone-100 rounded-full p-3 transition"
          whileHover={{ scale: 1.2 }}
          title={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialMediaSet;

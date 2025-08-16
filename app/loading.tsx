"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
    >
      {/* Glowing circle pulse */}
      <motion.div
        className="w-32 h-32 rounded-full border-4 border-teal-400 shadow-[0_0_30px_#14f1c5]"
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      />

      {/* Loading Text */}
      <motion.h1
        className="absolute text-4xl md:text-6xl font-bold text-teal-400 drop-shadow-[0_0_20px_#14f1c5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Loading...
      </motion.h1>
    </motion.div>
  );
}

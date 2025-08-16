"use client";

import { motion } from "framer-motion";

export default function BlogLoading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p className="ml-4 text-gray-400">Fetching articles...</p>
    </div>
  );
}

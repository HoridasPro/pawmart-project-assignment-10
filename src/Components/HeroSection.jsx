// HeroSection.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-900 dark:text-gray-100">
      <motion.h1
        className="text-5xl font-bold mb-4 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          words={[
            "Welcome to PawMart!",
            "Adopt a Pet Today!",
            "Shop Accessories!",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h1>

      <motion.p
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        Your one-stop portal for pets and supplies.
      </motion.p>
    </div>
  );
};

export default HeroSection;

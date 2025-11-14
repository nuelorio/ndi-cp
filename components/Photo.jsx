"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="relative"
      >
        {/* === TRIANGLE SVG (defines the viewBox) === */}
        <motion.svg
          className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px]"
          viewBox="0 0 608 608"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          style={{ pointerEvents: "none" }}
        >
          <motion.polygon
            points="0,606 303,0 606,606"
            stroke="#0084ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ strokeDasharray: "24 10 0 0", strokeDashoffset: 0 }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              strokeDashoffset: [0, -500],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* === CENTERED <Image> (same viewBox, perfectly aligned) === */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeInOut" }}
          className={`
            absolute -bottom-12 left-1/2 transform -translate-x-1/2
            w-[350px] h-[350px] xl:w-[500px] xl:h-[500px]
            mix-blend-lighten
            pointer-events-none
          `}
        >
          <Image
            src="/assets/ndi.png"
            priority
            quality={(100, 75)}
            fill
            alt="Profile"
            className="object-contain"
            style={{
              // Map image to same viewBox: center 498×498 inside 608×608
              clipPath: "inset(55px round 0)", // (608 - 498)/2 = 55px
              objectPosition: "center",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

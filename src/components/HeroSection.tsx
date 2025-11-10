'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);  // Parallax

  // ... kitas kodas

  return (
    <motion.section
      ref={ref}
      id="about"
      style={{ y }}  // Parallax efektas
      className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"  // Fono animacija
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      {/* ... turinys */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="text-center"
      >
        <motion.h1 variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}>Karolis Čibiras</motion.h1>
        {/* ... */}
      </motion.div>
    </motion.section>
  );
}
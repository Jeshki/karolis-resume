'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export function ScrollProgressBar() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-40 origin-left"
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-blue-600 to-purple-600"
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.div>
  );
}
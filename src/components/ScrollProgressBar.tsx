'use client';

import { motion, useReducedMotion, useScroll } from 'framer-motion';

export function ScrollProgressBar() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
  });

  if (reduceMotion) return null;

  return (
    <motion.div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-[60] origin-left pointer-events-none">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 h-full bg-black"
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.div>
  );
}

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Props:
 *  className (string) - extra classes for the wrapper
 *  intensity: 'low' | 'medium' | 'high'
 */
export default function AnimatedGradientBg({ className = '', intensity = 'medium' }) {
  const opacityMap = { low: 0.25, medium: 0.45, high: 0.7 };
  const op = opacityMap[intensity] ?? 0.45;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Cyan orb */}
      <motion.div
        animate={{
          x: ['0%', '8%', '-6%', '0%'],
          y: ['0%', '-10%', '6%', '0%'],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity: op }}
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-[#00fff7] blur-[120px]"
      />

      {/* Magenta orb */}
      <motion.div
        animate={{
          x: ['0%', '-10%', '7%', '0%'],
          y: ['0%', '12%', '-8%', '0%'],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ opacity: op }}
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-[#ff28e1] blur-[140px]"
      />

      {/* Center deep navy overlay for glass feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
    </div>
  );
}

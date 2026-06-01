import { motion } from 'framer-motion';

/**
 * Props:
 *  children, className, hover (bool), glow ('cyan'|'magenta'|'none'), onClick
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = 'none',
  onClick,
  ...rest
}) {
  const glowMap = {
    cyan: 'hover:shadow-[0_0_40px_rgba(0,255,247,0.18)]',
    magenta: 'hover:shadow-[0_0_40px_rgba(255,40,225,0.18)]',
    none: '',
  };

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={hover ? { y: -4, scale: 1.015 } : undefined}
      className={`
        relative rounded-3xl
        bg-white/[0.04] backdrop-blur-xl
        border border-white/[0.08]
        shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        transition-shadow duration-300
        ${glowMap[glow]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...rest}
    >
      {/* Inner highlight line */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      {children}
    </motion.div>
  );
}

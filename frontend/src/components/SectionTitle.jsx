import { motion } from 'framer-motion';

/**
 * Props:
 *  eyebrow (string), title (string), subtitle (string),
 *  align: 'left' | 'center' | 'right'
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-3 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white/5 border border-[#00fff7]/25 text-[#00fff7]">
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-white/50 leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Gradient underline accent */}
      <div
        className={`h-1 w-16 rounded-full bg-gradient-to-r from-[#00fff7] to-[#ff28e1] mt-1 ${
          align === 'center' ? 'self-center' : align === 'right' ? 'self-end' : 'self-start'
        }`}
      />
    </motion.div>
  );
}

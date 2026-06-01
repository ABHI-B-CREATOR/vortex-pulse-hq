import { motion } from 'framer-motion';

/**
 * Props:
 *  variant: 'primary' | 'secondary' | 'ghost'
 *  size: 'sm' | 'md' | 'lg'
 *  children, onClick, href, type, disabled, className
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#00fff7] to-[#ff28e1] text-black font-bold hover:shadow-[0_0_28px_rgba(0,255,247,0.45)] hover:scale-105',
    secondary:
      'bg-transparent border border-[#00fff7]/50 text-[#00fff7] font-semibold hover:border-[#00fff7] hover:shadow-[0_0_20px_rgba(0,255,247,0.25)] hover:scale-105',
    ghost:
      'bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-white/10 hover:text-white hover:scale-105',
  };

  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileTap: { scale: 0.96 },
    whileHover: { y: -1 },
  };

  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps} {...rest}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

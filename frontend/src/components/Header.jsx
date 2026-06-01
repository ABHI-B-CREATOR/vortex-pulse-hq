import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000717]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,255,247,0.07)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="relative group">
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#00fff7] to-[#ff28e1] bg-clip-text text-transparent">
            PORTFOLIO
          </span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00fff7] to-[#ff28e1] transition-all duration-300 group-hover:w-full rounded-full" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#00fff7] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#00fff7] to-[#ff28e1] text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,247,0.4)] transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 bg-white/80 rounded-full transition-all duration-300"
              style={{
                transform:
                  menuOpen && i === 0
                    ? 'translateY(8px) rotate(45deg)'
                    : menuOpen && i === 2
                    ? 'translateY(-8px) rotate(-45deg)'
                    : menuOpen && i === 1
                    ? 'scaleX(0)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#000717]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

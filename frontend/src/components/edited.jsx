import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const MenuIcon = Icons['Menu'] || Icons['HelpCircle'];
  const XIcon = Icons['X'] || Icons['HelpCircle'];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-[40px] border-b border-white/[0.06] shadow-[0_8px_40px_rgba(0,255,247,0.05),0_2px_0_rgba(255,40,225,0.04)]'
          : 'bg-transparent backdrop-blur-[20px]'
      }`}
    >
      <div className={`max-w-[1280px] mx-auto px-8 md:px-12 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>

        <a
          href="#home"
          className="relative group flex items-center gap-2"
          data-imagine-id="header-logo"
        >
          <span className={`font-black tracking-[-0.03em] bg-gradient-to-r from-[#00fff7] via-white to-[#ff28e1] bg-clip-text text-transparent transition-all duration-500 ${
            scrolled ? 'text-xl' : 'text-2xl md:text-3xl'
          }`}>
            nebula<span className="text-white/40 font-light">/</span>spectrum
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#00fff7] to-[#ff28e1] transition-all duration-500 group-hover:w-full rounded-full opacity-80" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link?.label}
              href={link?.href}
              data-imagine-id={`header-nav-link-${idx}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + idx * 0.08, ease: 'easeOut' }}
              className="relative group text-sm font-medium tracking-wide text-white/55 hover:text-white transition-colors duration-300"
            >
              {link?.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#00fff7] to-[#ff28e1] transition-all duration-400 group-hover:w-full rounded-full" />
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            data-imagine-id="header-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.45, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00fff7] to-[#ff28e1] opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff28e1] to-[#00fff7] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_0_0_rgba(0,255,247,0)] group-hover:shadow-[0_0_28px_4px_rgba(0,255,247,0.25)] transition-all duration-400" />
            <span className="relative z-10 text-black font-bold tracking-wide">Hire Me</span>
          </motion.a>
        </nav>

        <motion.button
          className="md:hidden relative z-10 p-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white/80 hover:text-white hover:border-white/20 transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.93 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <XIcon size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                <MenuIcon size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/80 backdrop-blur-[40px] border-t border-white/[0.06]"
          >
            <div className="px-8 py-6 flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link?.label}
                  href={link?.href}
                  data-imagine-id={`header-mobile-link-${idx}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.06, ease: 'easeOut' }}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white font-medium text-base py-3 border-b border-white/[0.05] last:border-none transition-colors duration-200 flex items-center justify-between group"
                >
                  <span>{link?.label}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#00fff7] text-xs tracking-widest">→</span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                data-imagine-id="header-mobile-cta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25, ease: 'easeOut' }}
                onClick={() => setMenuOpen(false)}
                className="mt-4 text-center px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-[#00fff7] to-[#ff28e1] text-black hover:shadow-[0_0_24px_rgba(0,255,247,0.3)] transition-all duration-300"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

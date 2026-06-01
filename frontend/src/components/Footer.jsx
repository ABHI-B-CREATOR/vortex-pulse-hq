import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Dribbble', href: '#' },
];

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#000717] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00fff7]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <span className="text-xl font-extrabold bg-gradient-to-r from-[#00fff7] to-[#ff28e1] bg-clip-text text-transparent">
              PORTFOLIO
            </span>
            <p className="text-white/40 text-sm">Crafting digital experiences.</p>
          </motion.div>

          {/* Links */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50 hover:border-[#00fff7]/50 hover:text-[#00fff7] hover:shadow-[0_0_12px_rgba(0,255,247,0.2)] transition-all duration-200"
              >
                {s.label[0]}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/[0.05] pt-6 text-center">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

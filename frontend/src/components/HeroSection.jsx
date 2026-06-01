import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const ArrowRight = Icons['ArrowRight'] || Icons['HelpCircle'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      aria-label="Hero"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30"
          style={{}}
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.28, 0.38, 0.28],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-radial from-fuchsia-600 via-pink-700 to-transparent blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full opacity-20"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-radial from-cyan-400 via-sky-600 to-transparent blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-15"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-radial from-fuchsia-500 via-cyan-600 to-transparent blur-3xl" />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.72)_100%)]" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 py-24 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-5">
          <span
            data-imagine-id="herosection-badge"
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-fuchsia-500/40 text-fuchsia-300 bg-fuchsia-950/30 backdrop-blur-sm"
          >
            Available for Projects
          </span>
        </motion.div>

        <motion.h1
          data-imagine-id="herosection-title"
          variants={itemVariants}
          className="font-inter font-black text-white leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4"
        >
          Crafting Digital
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Experiences
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-400 to-cyan-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.1 }}
              style={{ transformOrigin: 'left center' }}
            />
          </span>
        </motion.h1>

        <motion.p
          data-imagine-id="herosection-subheading"
          variants={itemVariants}
          className="font-inter text-white/50 text-base sm:text-lg md:text-xl font-light tracking-wide mt-8 mb-10 max-w-xl"
        >
          Full Stack Developer — Generative AI, 3D Web, Immersive Interfaces
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href="#contact"
            data-imagine-id="herosection-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-fuchsia-600 via-pink-600 to-fuchsia-700 shadow-lg shadow-fuchsia-900/50 hover:shadow-fuchsia-500/40 transition-shadow duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
          >
            Contact Me
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.a>

          <motion.a
            href="#projects"
            data-imagine-id="herosection-projects-link"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-semibold text-sm tracking-wide text-white/70 border border-white/15 bg-white/5 backdrop-blur-sm hover:text-white hover:border-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center gap-8 text-white/30"
        >
          <div className="flex flex-col items-center gap-1">
            <span
              data-imagine-id="herosection-stat-projects-number"
              className="font-inter font-bold text-2xl text-white/80"
            >
              6+
            </span>
            <span
              data-imagine-id="herosection-stat-projects-label"
              className="font-inter text-xs tracking-widest uppercase text-white/35"
            >
              Projects
            </span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex flex-col items-center gap-1">
            <span
              data-imagine-id="herosection-stat-stack-number"
              className="font-inter font-bold text-2xl text-white/80"
            >
              AI + 3D
            </span>
            <span
              data-imagine-id="herosection-stat-stack-label"
              className="font-inter text-xs tracking-widest uppercase text-white/35"
            >
              Specialization
            </span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex flex-col items-center gap-1">
            <span
              data-imagine-id="herosection-stat-years-number"
              className="font-inter font-bold text-2xl text-white/80"
            >
              5+
            </span>
            <span
              data-imagine-id="herosection-stat-years-label"
              className="font-inter text-xs tracking-widest uppercase text-white/35"
            >
              Years
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top center' }}
        />
        <span
          data-imagine-id="herosection-scroll-hint"
          className="font-inter text-[10px] tracking-[0.25em] uppercase text-white/25"
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

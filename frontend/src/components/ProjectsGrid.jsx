import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';

const ExternalLink = Icons['ExternalLink'] || Icons['HelpCircle'];
const Zap = Icons['Zap'] || Icons['HelpCircle'];

function GitHubIcon({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: 'VisualMind AI',
    subtitle: 'AI Image Generation Studio',
    badge: 'AI',
    badgeColor: 'magenta',
    thumbnail: 'https://placehold.co/800x450/0a0a0f/00fff7?text=VisualMind+AI',
    highlights: [
      { label: 'Stable Diffusion', detail: 'fine-tuned pipeline with LoRA adapters' },
      { label: 'Real-time preview', detail: 'streaming inference at 2s per image' },
      { label: 'Prompt editor', detail: 'token-aware with style presets' },
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'ContentForge',
    subtitle: 'AI Copywriting & Content Engine',
    badge: 'AI',
    badgeColor: 'magenta',
    thumbnail: 'https://placehold.co/800x450/0a0a0f/ff28e1?text=ContentForge',
    highlights: [
      { label: 'GPT-4o powered', detail: 'multi-modal text + image briefing' },
      { label: 'Brand voice', detail: 'custom persona fine-tuning' },
      { label: 'Export pipeline', detail: 'Notion, Markdown, CMS-ready' },
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Orion 3D',
    subtitle: '3D Web Experience & Interactive Scene',
    badge: '3D Web',
    badgeColor: 'cyan',
    thumbnail: 'https://placehold.co/800x450/000717/00fff7?text=Orion+3D',
    highlights: [
      { label: 'Three.js + R3F', detail: 'custom shader materials & HDRI lighting' },
      { label: 'Physics engine', detail: 'Rapier WASM for real-time simulation' },
      { label: '60 fps mobile', detail: 'adaptive LOD and instanced meshes' },
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Nebula Commerce',
    subtitle: 'Full-Stack E-Commerce Platform',
    badge: 'Business',
    badgeColor: 'cyan',
    thumbnail: 'https://placehold.co/800x450/0a0a0f/ffffff?text=Nebula+Commerce',
    highlights: [
      { label: 'Next.js 14', detail: 'edge-rendered catalog with ISR' },
      { label: 'Stripe Checkout', detail: 'subscriptions + one-time payments' },
      { label: 'Admin dashboard', detail: 'real-time analytics with Recharts' },
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    title: 'DepthScan',
    subtitle: 'AI Depth Estimation from Single Image',
    badge: 'AI',
    badgeColor: 'magenta',
    thumbnail: 'https://placehold.co/800x450/000717/ff28e1?text=DepthScan',
    highlights: [
      { label: 'MiDaS model', detail: 'monocular depth via transformer backbone' },
      { label: 'WASM inference', detail: 'runs fully client-side in browser' },
      { label: '3D point cloud', detail: 'Three.js live depth visualization' },
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    title: 'Prisma Agency',
    subtitle: 'Award-Winning Agency Site',
    badge: 'Business',
    badgeColor: 'cyan',
    thumbnail: 'https://placehold.co/800x450/0a0a0f/00fff7?text=Prisma+Agency',
    highlights: [
      { label: 'GSAP ScrollTrigger', detail: 'cinematic parallax section reveals' },
      { label: 'Lenis smooth scroll', detail: 'buttery 120 fps scroll inertia' },
      { label: 'Lighthouse 99', detail: 'perfect performance + a11y scores' },
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

const badgeStyles = {
  magenta: 'border-[#ff28e1] text-[#ff28e1] shadow-[0_0_12px_rgba(255,40,225,0.35)]',
  cyan: 'border-[#00fff7] text-[#00fff7] shadow-[0_0_12px_rgba(0,255,247,0.35)]',
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: 'easeOut',
    },
  },
};

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  const LinkIcon = Icons['ExternalLink'] || Icons['HelpCircle'];
  const DotIcon = Icons['Dot'] || Icons['HelpCircle'];

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-3xl overflow-hidden bg-[#07070f] border border-white/[0.07] shadow-[0_8px_60px_rgba(0,0,0,0.85)] group"
      style={{}}
    >
      <motion.div
        animate={{
          boxShadow: hovered
            ? project?.badgeColor === 'magenta'
              ? '0 0 0 1.5px rgba(255,40,225,0.35), inset 0 0 40px rgba(255,40,225,0.06)'
              : '0 0 0 1.5px rgba(0,255,247,0.35), inset 0 0 40px rgba(0,255,247,0.06)'
            : '0 0 0 0px transparent, inset 0 0 0px transparent',
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute inset-0 rounded-3xl pointer-events-none z-10"
      />

      <div className="relative overflow-hidden">
        <motion.img
          src={project?.thumbnail}
          alt={project?.title}
          data-imagine-id={`projects-grid-card-${index}-thumbnail`}
          className="w-full aspect-video object-cover"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/800x450/0a0a0f/ffffff?text=Project`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent opacity-80" />

        <span
          data-imagine-id={`projects-grid-card-${index}-badge`}
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase border bg-black/60 backdrop-blur-sm ${badgeStyles[project?.badgeColor] ?? badgeStyles.cyan}`}
        >
          {project?.badge}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-7 gap-5">
        <div className="space-y-1">
          <h3
            data-imagine-id={`projects-grid-card-${index}-title`}
            className="text-white text-2xl font-bold tracking-tight leading-tight font-inter"
          >
            {project?.title}
          </h3>
          <p
            data-imagine-id={`projects-grid-card-${index}-subtitle`}
            className="text-[#00fff7] text-sm font-medium tracking-wide opacity-80"
          >
            {project?.subtitle}
          </p>
        </div>

        <ul className="space-y-2 flex-1">
          {project?.highlights?.map((h, hi) => (
            <li
              key={hi}
              data-imagine-id={`projects-grid-card-${index}-highlight-${hi}`}
              className="flex items-start gap-2 text-sm leading-relaxed"
            >
              <span className="mt-[3px] shrink-0">
                <Zap size={13} className="text-[#ff28e1]" />
              </span>
              <span>
                <span className="text-white font-semibold">{h?.label}</span>
                <span className="text-white/45 font-normal"> — {h?.detail}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 pt-2">
          <motion.a
            href={project?.github}
            target="_blank"
            rel="noopener noreferrer"
            data-imagine-id={`projects-grid-card-${index}-github-btn`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-white/70 text-sm font-medium hover:border-white/35 hover:text-white transition-colors duration-200 backdrop-blur-sm"
          >
            <GitHubIcon size={14} />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href={project?.demo}
            target="_blank"
            rel="noopener noreferrer"
            data-imagine-id={`projects-grid-card-${index}-demo-btn`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black transition-all duration-200 relative overflow-hidden"
            style={{}}
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #ff28e1, #00fff7)',
              }}
            />
            <motion.span
              className="absolute inset-0 rounded-full opacity-0"
              animate={{ opacity: hovered ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'linear-gradient(90deg, #ff28e1, #00fff7)',
                filter: 'blur(8px)',
              }}
            />
            <span className="relative flex items-center gap-2">
              <LinkIcon size={13} />
              Live Demo
            </span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full py-28 px-4 sm:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-[0.07] blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, #ff28e1 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.06] blur-[100px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, #00fff7 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 text-center space-y-4"
        >
          <span
            data-imagine-id="projects-grid-eyebrow"
            className="inline-block px-4 py-1.5 rounded-full border border-[#ff28e1]/30 text-[#ff28e1] text-xs font-semibold tracking-[0.2em] uppercase bg-[#ff28e1]/[0.06] mb-2"
          >
            Selected Work
          </span>
          <h2
            data-imagine-id="projects-grid-heading"
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none font-inter"
          >
            Projects
          </h2>
          <p
            data-imagine-id="projects-grid-subheading"
            className="text-white/40 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            A curated collection of AI tools, immersive 3D experiences, and production-grade web products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project?.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsGrid;

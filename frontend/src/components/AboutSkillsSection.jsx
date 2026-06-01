import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';

const SKILLS = [
  { label: 'React', icon: 'Layers' },
  { label: 'TypeScript', icon: 'FileCode' },
  { label: 'Go', icon: 'Terminal' },
  { label: 'AI / ML', icon: 'Brain' },
  { label: '3D WebGL', icon: 'Box' },
  { label: 'PostgreSQL', icon: 'Database' },
  { label: 'Node.js', icon: 'Server' },
  { label: 'Docker', icon: 'Container' },
  { label: 'Three.js', icon: 'Globe' },
  { label: 'Python', icon: 'Code2' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

function SkillBadge({ label, icon, index }) {
  const IconComp = Icons[icon] || Icons['HelpCircle'];

  return (
    <motion.div
      variants={badgeVariants}
      whileHover={{
        scale: 1.07,
        boxShadow: '0 0 22px 2px #00fff755, 0 0 8px 1px #ff28e144',
      }}
      className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full cursor-default select-none"
      style={{}}
    >
      <span
        className="absolute inset-0 rounded-full"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, #00fff722 0%, #ff28e122 100%)',
          border: '1.5px solid transparent',
          backgroundClip: 'padding-box',
        }}
      />
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(135deg, #00fff7, #ff28e1) border-box',
          WebkitMask:
            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
          border: '1.5px solid transparent',
        }}
      />
      <span className="relative z-10 flex items-center gap-2.5">
        <IconComp
          size={16}
          className="text-cyan-400 group-hover:text-magenta-400 transition-colors duration-300"
          strokeWidth={1.8}
        />
        <span
          data-imagine-id={`aboutskillssection-skill-${index}-label`}
          className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white transition-colors duration-300 font-inter"
        >
          {label}
        </span>
      </span>
    </motion.div>
  );
}

function AboutSkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-black overflow-hidden py-28 md:py-36 lg:py-44"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(circle, #ff28e1 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(circle, #00fff7 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute left-0 top-0 h-full w-px opacity-30"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, #ff28e1 30%, #00fff7 70%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeUpVariants} className="flex flex-col gap-3">
              <span
                data-imagine-id="aboutskillssection-eyebrow"
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: '#ff28e1' }}
              >
                About Me
              </span>
              <h2
                data-imagine-id="aboutskillssection-heading"
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white font-inter"
              >
                Crafting the
                <br />
                <span
                  style={{
                    background:
                      'linear-gradient(90deg, #00fff7, #ff28e1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  future
                </span>{' '}
                of the web.
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              data-imagine-id="aboutskillssection-bio-p1"
              className="text-xl md:text-2xl leading-relaxed text-white/70 font-inter font-light max-w-lg"
            >
              I'm a full-stack engineer obsessed with the intersection of{' '}
              <span
                data-imagine-id="aboutskillssection-bio-highlight-1"
                className="font-semibold"
                style={{ color: '#ff28e1' }}
              >
                artificial intelligence
              </span>
              ,{' '}
              <span
                data-imagine-id="aboutskillssection-bio-highlight-2"
                className="font-semibold"
                style={{ color: '#00fff7' }}
              >
                immersive 3D
              </span>{' '}
              experiences, and high-performance systems.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              data-imagine-id="aboutskillssection-bio-p2"
              className="text-lg leading-relaxed text-white/50 font-inter font-light max-w-lg"
            >
              With years shipping products across generative AI tooling, real-time 3D web
              environments, and enterprise backends — I care deeply about craft,
              performance, and the feeling a product leaves behind.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="flex items-center gap-4 pt-2">
              <a
                href="#contact"
                data-imagine-id="aboutskillssection-cta"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold tracking-wide text-black transition-all duration-300 hover:scale-105 hover:shadow-xl font-inter"
                style={{
                  background:
                    'linear-gradient(90deg, #00fff7, #ff28e1)',
                  boxShadow: '0 0 24px 2px #00fff744',
                }}
              >
                {
                  (() => {
                    const ArrowIcon = Icons['ArrowRight'] || Icons['HelpCircle'];
                    return <ArrowIcon size={16} strokeWidth={2.5} />;
                  })()
                }
                Get in touch
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-10">
            <motion.div variants={fadeUpVariants} className="flex flex-col gap-2">
              <span
                data-imagine-id="aboutskillssection-skills-eyebrow"
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: '#00fff7' }}
              >
                Technical Skills
              </span>
              <h3
                data-imagine-id="aboutskillssection-skills-heading"
                className="text-3xl md:text-4xl font-black tracking-tight text-white font-inter"
              >
                What I work with
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3"
            >
              {SKILLS?.map((skill, idx) => (
                <SkillBadge
                  key={skill?.label}
                  label={skill?.label}
                  icon={skill?.icon}
                  index={idx}
                />
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="rounded-3xl p-8 md:p-10 flex flex-col gap-5"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,255,247,0.05) 0%, rgba(255,40,225,0.05) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow:
                  '0 8px 40px 0 rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col gap-6">
                {
                  [
                    { label: 'Years of experience', value: '5+', icon: 'CalendarDays' },
                    { label: 'Projects shipped', value: '30+', icon: 'Rocket' },
                    { label: 'Open source contributions', value: '120+', icon: 'GitBranch' },
                  ]?.map((stat, idx) => {
                    const StatIcon = Icons[stat?.icon] || Icons['HelpCircle'];
                    return (
                      <div key={stat?.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <StatIcon size={18} className="text-white/30" strokeWidth={1.5} />
                          <span
                            data-imagine-id={`aboutskillssection-stat-${idx}-label`}
                            className="text-sm text-white/50 font-inter"
                          >
                            {stat?.label}
                          </span>
                        </div>
                        <span
                          data-imagine-id={`aboutskillssection-stat-${idx}-value`}
                          className="text-2xl font-black font-inter"
                          style={{
                            background: 'linear-gradient(90deg, #00fff7, #ff28e1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {stat?.value}
                        </span>
                      </div>
                    );
                  })
                }
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSkillsSection;

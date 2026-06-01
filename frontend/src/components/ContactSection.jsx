import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const SendIcon = Icons['Send'] || Icons['HelpCircle'];

function GithubIcon({ size = 22, className = "" }) {
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

function LinkedinIcon({ size = 22, className = "" }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
const CheckCircleIcon = Icons['CheckCircle'] || Icons['HelpCircle'];
const AlertCircleIcon = Icons['AlertCircle'] || Icons['HelpCircle'];
const XIcon = Icons['X'] || Icons['HelpCircle'];

const SOCIAL_LINKS = [
  { id: 'github', Icon: GithubIcon, label: 'GitHub', href: 'https://github.com' },
  { id: 'linkedin', Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
];

const INITIAL_FORM = { name: '', email: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', message: '' };

function validate(fields) {
  const errs = { name: '', email: '', message: '' };
  if (!fields?.name?.trim()) errs.name = 'Name is required.';
  if (!fields?.email?.trim()) {
    errs.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errs.email = 'Please enter a valid email.';
  }
  if (!fields?.message?.trim()) errs.message = 'Message is required.';
  else if (fields.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
  return errs;
}

function hasErrors(errs) {
  return Object.values(errs).some(Boolean);
}

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [shakeField, setShakeField] = useState('');
  const [status, setStatus] = useState('idle');
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  function showToast(type, message) {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(() => setToast(null), 4500);
  }

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function triggerShake(field) {
    setShakeField(field);
    setTimeout(() => setShakeField(''), 600);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (hasErrors(errs)) {
      setErrors(errs);
      const firstError = Object.keys(errs).find(k => errs[k]);
      if (firstError) triggerShake(firstError);
      return;
    }
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1600));
    const success = Math.random() > 0.15;
    if (success) {
      setStatus('idle');
      setForm(INITIAL_FORM);
      setErrors(INITIAL_ERRORS);
      showToast('success', "Message sent! I'll be in touch soon.");
    } else {
      setStatus('idle');
      showToast('error', 'Something went wrong. Please try again.');
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -8, 8, -4, 4, 0],
      transition: { duration: 0.55, ease: 'easeInOut' },
    },
    idle: { x: 0 },
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 opacity-60"
        style={undefined}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-[#ff28e1] blur-[140px] opacity-25" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#00fff7] blur-[120px] opacity-15" />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-2xl"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-10">
            <h2
              data-imagine-id="contactsection-heading"
              className="text-5xl md:text-6xl font-black tracking-tight text-white text-center leading-none mb-4"
              style={undefined}
            >
              Let's{' '}
              <span className="bg-gradient-to-r from-[#ff28e1] to-[#00fff7] bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-[#00fff7] via-[#ff28e1] to-transparent rounded-full" />
            <p
              data-imagine-id="contactsection-subheading"
              className="mt-4 text-white/50 text-center text-base md:text-lg font-light tracking-wide max-w-md"
            >
              Have a project in mind? Send a message and I'll respond within 24 hours.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              <motion.div
                variants={shakeVariants}
                animate={shakeField === 'name' ? 'shake' : 'idle'}
                className="flex flex-col gap-2"
              >
                <label
                  data-imagine-id="contactsection-label-name"
                  htmlFor="contact-name"
                  className="text-white/60 text-sm font-medium tracking-widest uppercase pl-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  className={`w-full rounded-full bg-white/8 border ${
                    errors.name ? 'border-[#ff28e1]' : 'border-white/15'
                  } text-white placeholder:text-white/30 text-base px-7 py-4 outline-none transition-all duration-300 focus:border-[#ff28e1] focus:shadow-[0_0_0_3px_rgba(255,40,225,0.25)] focus:bg-white/10`}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="error-name"
                      data-imagine-id="contactsection-error-name"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="text-[#ff28e1] text-xs pl-4 font-medium"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                variants={shakeVariants}
                animate={shakeField === 'email' ? 'shake' : 'idle'}
                className="flex flex-col gap-2"
              >
                <label
                  data-imagine-id="contactsection-label-email"
                  htmlFor="contact-email"
                  className="text-white/60 text-sm font-medium tracking-widest uppercase pl-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  className={`w-full rounded-full bg-white/8 border ${
                    errors.email ? 'border-[#ff28e1]' : 'border-white/15'
                  } text-white placeholder:text-white/30 text-base px-7 py-4 outline-none transition-all duration-300 focus:border-[#ff28e1] focus:shadow-[0_0_0_3px_rgba(255,40,225,0.25)] focus:bg-white/10`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="error-email"
                      data-imagine-id="contactsection-error-email"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="text-[#ff28e1] text-xs pl-4 font-medium"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                variants={shakeVariants}
                animate={shakeField === 'message' ? 'shake' : 'idle'}
                className="flex flex-col gap-2"
              >
                <label
                  data-imagine-id="contactsection-label-message"
                  htmlFor="contact-message"
                  className="text-white/60 text-sm font-medium tracking-widest uppercase pl-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  className={`w-full rounded-3xl bg-white/8 border ${
                    errors.message ? 'border-[#ff28e1]' : 'border-white/15'
                  } text-white placeholder:text-white/30 text-base px-7 py-5 outline-none transition-all duration-300 focus:border-[#ff28e1] focus:shadow-[0_0_0_3px_rgba(255,40,225,0.25)] focus:bg-white/10 resize-none`}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      id="error-message"
                      data-imagine-id="contactsection-error-message"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="text-[#ff28e1] text-xs pl-4 font-medium"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status !== 'loading' ? { scale: 1.035, boxShadow: '0 0 32px rgba(255,40,225,0.45)' } : {}}
                whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
                transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                data-imagine-id="contactsection-submit-btn"
                className="w-full mt-2 py-4 px-8 rounded-full font-bold text-base tracking-wide text-white bg-gradient-to-r from-[#ff28e1] to-[#00fff7] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-opacity duration-200"
                aria-label="Send message"
              >
                {status === 'loading' ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                      className="inline-block w-5 h-5 border-2 border-white/40 border-t-white rounded-full"
                    />
                    <span data-imagine-id="contactsection-btn-loading-text">Sending...</span>
                  </>
                ) : (
                  <>
                    <SendIcon size={18} />
                    <span data-imagine-id="contactsection-btn-idle-text">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mt-10"
          >
            {SOCIAL_LINKS.map(({ id, Icon, label, href }) => (
              <motion.a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{
                  scale: 1.18,
                  boxShadow: '0 0 28px rgba(0,255,247,0.55)',
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                className="w-14 h-14 rounded-full border border-white/15 bg-white/6 backdrop-blur flex items-center justify-center text-white/70 hover:text-[#00fff7] transition-colors duration-200"
                data-imagine-id={`contactsection-social-${id}`}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            data-imagine-id="contactsection-privacy-note"
            className="text-center text-white/25 text-xs mt-6 tracking-wide"
          >
            No email address is shared publicly. All inquiries are handled privately.
          </motion.p>
        </motion.div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-7 py-4 rounded-full shadow-2xl backdrop-blur-xl border text-sm font-semibold ${
              toast.type === 'success'
                ? 'bg-black/80 border-[#00fff7]/40 text-[#00fff7]'
                : 'bg-black/80 border-[#ff28e1]/40 text-[#ff28e1]'
            }`}
            role="alert"
            aria-live="assertive"
          >
            {toast.type === 'success' ? (
              <CheckCircleIcon size={18} />
            ) : (
              <AlertCircleIcon size={18} />
            )}
            <span data-imagine-id="contactsection-toast-message">{toast?.message}</span>
            <button
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
              className="ml-2 text-current opacity-60 hover:opacity-100 transition-opacity"
            >
              <XIcon size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
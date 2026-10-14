import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Users, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Composition with Theme Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: isDark
            ? 'radial-gradient(ellipse at 50% 20%, #363D39 0%, #292E2B 60%, #1E2320 100%)'
            : 'radial-gradient(ellipse at 50% 20%, #E6DBD0 0%, #D8C8B8 60%, #CBBAB0 100%)',
          transition: 'all 0.3s ease',
        }}
      />

      {/* Atmospheric ambient glows */}
      <div
        className="ambient-glow"
        style={{
          width: '450px',
          height: '450px',
          background: isDark
            ? 'radial-gradient(circle, rgba(216,200,184,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(54, 61, 57, 0.12) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
        }}
      />
      <div
        className="ambient-glow"
        style={{
          width: '500px',
          height: '500px',
          background: isDark
            ? 'radial-gradient(circle, rgba(34,39,36,0.6) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 70%)',
          top: '30%',
          right: '5%',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="section-badge">
              <Sparkles size={14} />
              <span>THE OFFICIAL TEAM SHOWCASE</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.35rem, 8vw, 5.25rem)',
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            We are <span className="gradient-text-sage">DEVI FARLO</span>
          </motion.h1>

          {/* Core Slogan */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.1rem, 3.5vw, 1.7rem)',
              fontWeight: 700,
              color: isDark ? '#F6F1EC' : '#222724',
              lineHeight: 1.4,
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
              padding: '0 0.5rem',
            }}
          >
            "Different individuals. One team. Endless possibilities."
          </motion.p>

          {/* Iconic Anthem Highlight */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-block',
              margin: '0.25rem 0 1.5rem 0',
              padding: '0.5rem 1.35rem',
              borderRadius: '9999px',
              background: isDark ? 'rgba(216, 200, 184, 0.12)' : 'rgba(54, 61, 57, 0.08)',
              border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.25)',
              boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(54, 61, 57, 0.08)',
              maxWidth: '92vw',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(0.95rem, 3vw, 1.35rem)',
                fontWeight: 900,
                letterSpacing: '0.14em',
                color: isDark ? '#D8C8B8' : '#363D39',
                textTransform: 'uppercase',
              }}
            >
              "YOU CAN DO IT."
            </span>
          </motion.div>

          {/* Subtext Paragraph */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(0.95rem, 2.4vw, 1.05rem)',
              color: isDark ? '#C0B5AA' : '#4E5651',
              lineHeight: 1.65,
              maxWidth: '720px',
              margin: '0 auto 2rem auto',
              padding: '0 0.5rem',
              fontWeight: 500,
            }}
          >
            Eight visionary minds converging from different domains — unified by relentless curiosity,
            unshakable trust, and the audacity to redefine what collective human potential can achieve.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-btn-group"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2.5rem',
            }}
          >
            <button
              onClick={() => scrollTo('#team')}
              style={{
                backgroundColor: isDark ? '#D8C8B8' : '#363D39',
                color: isDark ? '#363D39' : '#D8C8B8',
                padding: '0.85rem 1.8rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: isDark ? '0 8px 25px rgba(0, 0, 0, 0.4)' : '0 8px 25px rgba(54, 61, 57, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease',
                minHeight: '48px',
              }}
              className="hero-btn"
            >
              <Users size={18} />
              <span>Meet Our Team</span>
            </button>

            <button
              onClick={() => scrollTo('#team-message')}
              style={{
                backgroundColor: isDark ? 'rgba(216, 200, 184, 0.1)' : 'rgba(54, 61, 57, 0.08)',
                color: isDark ? '#F6F1EC' : '#222724',
                padding: '0.85rem 1.7rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.25)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease',
                minHeight: '48px',
              }}
              className="hero-btn"
            >
              <Heart size={18} />
              <span>Our Team Anthem</span>
            </button>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              color: isDark ? '#C0B5AA' : '#4E5651',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '1.5rem 0.5rem 0.5rem 0.5rem',
              fontWeight: 600,
            }}
            onClick={() => scrollTo('#stats')}
          >
            <span>Scroll to Discover</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={17} color={isDark ? '#D8C8B8' : '#363D39'} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .hero-btn-group {
            flex-direction: column !important;
            width: 100% !important;
            max-width: 320px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

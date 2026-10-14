import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Users, Heart, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* Background Ambient Composition with Theme Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: isDark
            ? 'radial-gradient(ellipse at 50% 10%, #363D39 0%, #282E2B 60%, #1E2320 100%)'
            : 'radial-gradient(ellipse at 50% 10%, #EAE0D5 0%, #D8C8B8 60%, #CBBAB0 100%)',
          transition: 'all 0.3s ease',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* TOP SHOWCASE BADGE */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1.15rem',
              borderRadius: '9999px',
              background: isDark ? 'rgba(216, 200, 184, 0.12)' : 'rgba(54, 61, 57, 0.08)',
              border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.2)',
              color: isDark ? '#D8C8B8' : '#363D39',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={14} />
            <span>THE OFFICIAL TEAM SHOWCASE</span>
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#4ade80',
                boxShadow: '0 0 8px #4ade80',
                marginLeft: '0.2rem',
              }}
            />
          </div>
        </div>

        {/* 1. THE OFFICIAL COVER PHOTO - 100% UNTOUCHED, UNCROPPED & FULLY VISIBLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1120px',
            margin: '0 auto 2rem auto',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: isDark
              ? '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(216, 200, 184, 0.22)'
              : '0 25px 60px -15px rgba(54, 61, 57, 0.22), 0 0 0 1px rgba(54, 61, 57, 0.18)',
            background: isDark ? '#1F2421' : '#DDD2C5',
          }}
        >
          {/* Zero overlays, zero cropping - every face is 100% sharp and visible */}
          <img
            src="/images/hero-cover.jpg"
            alt="DEVI FARLO Official Team Cover"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'none',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </motion.div>

        {/* 2. TEAM IDENTITY & DETAILS - Cleanly placed BELOW the cover photo so NO faces are ever covered */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          {/* Official Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ display: 'inline-block', marginBottom: '0.85rem' }}
          >
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '20px',
                padding: '5px',
                background: isDark ? '#2B312E' : '#EAE1D7',
                border: isDark ? '2.5px solid #D8C8B8' : '2.5px solid #363D39',
                boxShadow: isDark ? '0 10px 25px rgba(0, 0, 0, 0.45)' : '0 10px 25px rgba(54, 61, 57, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
              }}
            >
              <img
                src="/images/logo.png"
                alt="DEVI FARLO Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '15px',
                  objectFit: 'contain',
                }}
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 4.4rem)',
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}
          >
            We are <span className="gradient-text-sage">DEVI FARLO</span>
          </motion.h1>

          {/* Official Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-block',
              margin: '0.2rem 0 1.2rem 0',
              padding: '0.55rem 1.6rem',
              borderRadius: '9999px',
              background: isDark ? 'rgba(216, 200, 184, 0.15)' : 'rgba(54, 61, 57, 0.08)',
              border: isDark ? '1.5px solid rgba(216, 200, 184, 0.35)' : '1.5px solid rgba(54, 61, 57, 0.25)',
              boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(54, 61, 57, 0.08)',
              maxWidth: '92vw',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1rem, 3.2vw, 1.45rem)',
                fontWeight: 900,
                letterSpacing: '0.14em',
                color: isDark ? '#D8C8B8' : '#363D39',
                textTransform: 'uppercase',
              }}
            >
              "YOU HAVE TO DO IT."
            </span>
          </motion.div>

          {/* Core Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{
              fontSize: 'clamp(1.05rem, 3vw, 1.4rem)',
              fontWeight: 700,
              color: isDark ? '#F6F1EC' : '#222724',
              lineHeight: 1.4,
              marginBottom: '0.85rem',
              letterSpacing: '-0.01em',
              padding: '0 0.5rem',
            }}
          >
            "Different individuals. One team. Endless possibilities."
          </motion.p>

          {/* Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: 'clamp(0.92rem, 2.2vw, 1.05rem)',
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="hero-btn-group"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
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
          <div
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
              padding: '0.5rem',
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
          </div>
        </div>
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

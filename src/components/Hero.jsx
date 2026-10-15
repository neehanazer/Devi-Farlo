import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Users, Heart } from 'lucide-react';
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingTop: 'clamp(6rem, 16vh, 12rem)',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Cover Photo with Cinematic Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/team-cover.jpg"
          alt="DEVI FARLO Official Team"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: isDark ? 'brightness(0.82) contrast(1.08)' : 'brightness(0.78) contrast(1.05)',
            transform: 'scale(1.02)',
            transition: 'all 0.4s ease',
          }}
        />

        {/* Cinematic smooth gradient overlay matching reference image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isDark
              ? 'linear-gradient(180deg, rgba(18, 22, 20, 0.4) 0%, rgba(18, 22, 20, 0.15) 25%, rgba(18, 22, 20, 0.65) 55%, #222724 100%)'
              : 'linear-gradient(180deg, rgba(28, 33, 30, 0.42) 0%, rgba(28, 33, 30, 0.18) 25%, rgba(28, 33, 30, 0.7) 55%, #2B312E 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Soft radial vignette for theatrical center focus */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 30%, transparent 35%, rgba(14, 18, 16, 0.75) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* TEAM IDENTITY & DETAILS */}
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
                width: '74px',
                height: '74px',
                borderRadius: '20px',
                padding: '5px',
                background: 'rgba(34, 39, 36, 0.85)',
                border: '2px solid rgba(216, 200, 184, 0.6)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.55), 0 0 20px rgba(216, 200, 184, 0.25)',
                backdropFilter: 'blur(10px)',
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
              fontSize: 'clamp(2.5rem, 7.5vw, 4.8rem)',
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              textShadow: '0 4px 25px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.7)',
              marginBottom: '0.75rem',
            }}
          >
            We are <span style={{ color: '#D8C8B8', textShadow: '0 0 25px rgba(216, 200, 184, 0.4)' }}>DEVI FARLO</span>
          </motion.h1>

          {/* Official Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-block',
              margin: '0.2rem 0 1.2rem 0',
              padding: '0.5rem 1.6rem',
              borderRadius: '9999px',
              background: 'rgba(22, 26, 24, 0.7)',
              border: '1.5px solid rgba(216, 200, 184, 0.45)',
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(12px)',
              maxWidth: '92vw',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(0.95rem, 3.2vw, 1.4rem)',
                fontWeight: 900,
                letterSpacing: '0.14em',
                color: '#F6F1EC',
                textTransform: 'uppercase',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)',
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
              fontSize: 'clamp(1.05rem, 2.8vw, 1.38rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.4,
              marginBottom: '0.85rem',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.85)',
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
              fontSize: 'clamp(0.92rem, 2.2vw, 1.08rem)',
              color: 'rgba(235, 230, 222, 0.92)',
              lineHeight: 1.65,
              maxWidth: '720px',
              margin: '0 auto 2rem auto',
              padding: '0 0.5rem',
              fontWeight: 400,
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.85)',
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
              marginBottom: '2.5rem',
            }}
          >
            <button
              onClick={() => scrollTo('#team')}
              style={{
                backgroundColor: '#D8C8B8',
                color: '#222724',
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                fontSize: '0.96rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(216, 200, 184, 0.3)',
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
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                fontSize: '0.96rem',
                fontWeight: 700,
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
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
              color: 'rgba(246, 241, 236, 0.8)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '0.5rem',
              fontWeight: 700,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
            }}
            onClick={() => scrollTo('#stats')}
          >
            <span>Scroll to Discover</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={17} color="#D8C8B8" />
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

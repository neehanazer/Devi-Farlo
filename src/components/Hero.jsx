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

      {/* Ambient Blurred Background Layer from Cover Photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/images/hero-cover.jpg')",
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          filter: 'blur(45px)',
          opacity: isDark ? 0.18 : 0.12,
          transform: 'scale(1.1)',
          pointerEvents: 'none',
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
              "YOU HAVE TO DO IT."
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

          {/* Hero Panoramic Cover Photo Showcase - Unobstructed and Fully Visible */}
          <motion.div
            variants={itemVariants}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1060px',
              margin: '0.75rem auto 2.5rem auto',
            }}
          >
            {/* Ambient backlight glow */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '28px',
                background: isDark
                  ? 'radial-gradient(ellipse at center, rgba(216, 200, 184, 0.22) 0%, rgba(38, 44, 41, 0.1) 70%, transparent 100%)'
                  : 'radial-gradient(ellipse at center, rgba(54, 61, 57, 0.16) 0%, rgba(216, 200, 184, 0.24) 70%, transparent 100%)',
                filter: 'blur(25px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Frame container */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: isDark
                  ? '0 25px 60px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(216, 200, 184, 0.22)'
                  : '0 25px 60px -15px rgba(54, 61, 57, 0.22), 0 0 0 1px rgba(54, 61, 57, 0.18)',
                background: isDark ? '#262B28' : '#ECE3D8',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top Meta Bar - Cleanly positioned above the photo */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.4rem',
                  background: isDark ? 'rgba(34, 39, 36, 0.95)' : 'rgba(235, 226, 217, 0.95)',
                  borderBottom: isDark ? '1px solid rgba(216, 200, 184, 0.18)' : '1px solid rgba(54, 61, 57, 0.15)',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#4ade80',
                      boxShadow: '0 0 10px #4ade80',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 800,
                      color: isDark ? '#D8C8B8' : '#363D39',
                    }}
                  >
                    Official Team Cover • DEVI FARLO
                  </span>
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '9999px',
                    background: isDark ? 'rgba(216, 200, 184, 0.15)' : 'rgba(54, 61, 57, 0.1)',
                    border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.2)',
                    color: isDark ? '#F6F1EC' : '#222724',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}
                >
                  <Users size={13} />
                  <span>8 Minds • One Purpose</span>
                </div>
              </div>

              {/* The Cover Photo - 100% visible, completely uncropped, zero overlays blocking anyone */}
              <div style={{ width: '100%', position: 'relative', overflow: 'hidden', background: isDark ? '#1F2421' : '#DDD2C5' }}>
                <img
                  src="/images/hero-cover.jpg"
                  alt="DEVI FARLO Team - You Have To Do It"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    maxHeight: 'none',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Bottom Caption Bar - Cleanly positioned below the photo */}
              <div
                style={{
                  padding: '0.85rem 1.4rem',
                  background: isDark ? 'rgba(34, 39, 36, 0.95)' : 'rgba(235, 226, 217, 0.95)',
                  borderTop: isDark ? '1px solid rgba(216, 200, 184, 0.18)' : '1px solid rgba(54, 61, 57, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                    fontWeight: 800,
                    color: isDark ? '#F6F1EC' : '#222724',
                    letterSpacing: '-0.01em',
                  }}
                >
                  DEVI FARLO — <span style={{ color: isDark ? '#D8C8B8' : '#363D39', fontStyle: 'italic' }}>"You have to do it."</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: isDark ? '#C0B5AA' : '#4E5651', fontWeight: 600 }}>
                  Official Group Portrait • Every Visionary United
                </div>
              </div>
            </div>
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
              padding: '0.5rem 0.5rem 0.5rem 0.5rem',
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

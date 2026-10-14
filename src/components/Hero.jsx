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
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '6rem',
        paddingBottom: '2.5rem',
        overflow: 'hidden',
      }}
    >
      {/* 1. FULL HERO BACKGROUND COVER PHOTO */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/images/hero-cover.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 22%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 2. CINEMATIC GRADIENT OVERLAY - Perfectly balanced so every face in the middle is 100% visible and bright */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: isDark
            ? 'linear-gradient(180deg, rgba(20, 24, 22, 0.72) 0%, rgba(20, 24, 22, 0.12) 32%, rgba(20, 24, 22, 0.18) 58%, rgba(20, 24, 22, 0.92) 88%, #2B312E 100%)'
            : 'linear-gradient(180deg, rgba(34, 39, 36, 0.72) 0%, rgba(34, 39, 36, 0.12) 32%, rgba(34, 39, 36, 0.18) 58%, rgba(34, 39, 36, 0.92) 88%, #D8C8B8 100%)',
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
            ? 'radial-gradient(circle, rgba(216,200,184,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
          zIndex: 2,
        }}
      />

      {/* 3. TOP SECTION: Elegant Badge (Anchored above faces so heads are never blocked) */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1.15rem',
              borderRadius: '9999px',
              background: 'rgba(20, 24, 22, 0.65)',
              border: '1px solid rgba(216, 200, 184, 0.35)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
              color: '#F6F1EC',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={14} color="#D8C8B8" />
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
        </motion.div>
      </div>

      {/* 4. MIDDLE SPACER: Kept completely open so all 7 members' faces are 100% visible and unblocked */}
      <div style={{ flex: 1, minHeight: '160px', position: 'relative', zIndex: 2 }} />

      {/* 5. BOTTOM SECTION: Team Identity, Tagline, & CTAs (Anchored over lower frame) */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 3, width: '100%', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '1.75rem 1.5rem',
            borderRadius: '24px',
            background: isDark ? 'rgba(34, 39, 36, 0.75)' : 'rgba(24, 28, 26, 0.75)',
            border: '1px solid rgba(216, 200, 184, 0.25)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55)',
          }}
        >
          {/* Logo & Headline Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <img
              src="/images/logo.png"
              alt="DEVI FARLO"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                objectFit: 'contain',
                border: '1.5px solid rgba(216, 200, 184, 0.4)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              }}
            />
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                lineHeight: 1.1,
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              We are <span style={{ color: '#D8C8B8' }}>DEVI FARLO</span>
            </h1>
          </div>

          {/* Official Tagline Badge */}
          <div style={{ margin: '0.4rem 0 0.85rem 0' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '0.45rem 1.4rem',
                borderRadius: '9999px',
                background: 'rgba(216, 200, 184, 0.16)',
                border: '1px solid rgba(216, 200, 184, 0.4)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.95rem, 3vw, 1.35rem)',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  color: '#D8C8B8',
                  textTransform: 'uppercase',
                }}
              >
                "YOU HAVE TO DO IT."
              </span>
            </div>
          </div>

          {/* Core Slogan */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2.6vw, 1.25rem)',
              fontWeight: 700,
              color: '#F6F1EC',
              lineHeight: 1.4,
              marginBottom: '0.6rem',
              letterSpacing: '-0.01em',
            }}
          >
            "Different individuals. One team. Endless possibilities."
          </p>

          {/* Short Narrative */}
          <p
            style={{
              fontSize: 'clamp(0.88rem, 2vw, 0.98rem)',
              color: '#C0B5AA',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 1.5rem auto',
              fontWeight: 500,
            }}
          >
            Eight visionary minds converging from different domains — unified by relentless curiosity,
            unshakable trust, and the audacity to redefine what collective human potential can achieve.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-btn-group"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <button
              onClick={() => scrollTo('#team')}
              style={{
                backgroundColor: '#D8C8B8',
                color: '#363D39',
                padding: '0.8rem 1.75rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease',
                minHeight: '46px',
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
                color: '#F6F1EC',
                padding: '0.8rem 1.65rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease',
                minHeight: '46px',
              }}
              className="hero-btn"
            >
              <Heart size={18} />
              <span>Our Team Anthem</span>
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              color: '#D8C8B8',
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 700,
              paddingTop: '0.35rem',
            }}
            onClick={() => scrollTo('#stats')}
          >
            <span>Scroll to Discover</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={15} color="#D8C8B8" />
            </motion.div>
          </div>
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

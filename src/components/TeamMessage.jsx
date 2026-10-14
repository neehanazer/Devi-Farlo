import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function TeamMessage() {
  return (
    <section
      id="team-message"
      className="team-message-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #D8C8B8 0%, #E3D7CA 50%, #D8C8B8 100%)',
      }}
    >
      {/* Background Visual Composition */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(216,200,184,0.85) 0%, rgba(227,217,206,0.92) 50%, #D8C8B8 100%), url('/images/team-cover.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          filter: 'contrast(1.05)',
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div
        className="ambient-glow"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(54,61,57,0.1) 0%, transparent 70%)',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Emotional Message Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Section Badge */}
          <div className="section-badge" style={{ marginBottom: '1.5rem' }}>
            <Heart size={14} />
            <span>OUR CORE ANTHEM</span>
          </div>

          {/* Carefully Spaced Poetic Lines */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 3.2vw, 1.95rem)',
              fontWeight: 500,
              lineHeight: 1.65,
              color: '#222724',
              marginBottom: '2rem',
              padding: '0 0.5rem',
            }}
          >
            <p style={{ marginBottom: '1rem' }}>
              Our journey is about more than reaching a destination.
            </p>
            <p style={{ color: '#363D39', marginBottom: '1.5rem', fontWeight: 800 }}>
              It is about the people we become along the way.
            </p>
            <p style={{ color: '#4E5651', fontSize: '0.92em', marginBottom: '1.25rem' }}>
              And whenever doubt appears, we remind ourselves
              <br className="desktop-break" />
              and each other of the words that define us:
            </p>
          </div>

          {/* Prominent Visual Tagline */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="prominent-tagline-wrap"
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 6.5vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '0.12em',
                lineHeight: 1.1,
                color: '#363D39',
                textTransform: 'uppercase',
                textShadow: '0 0 25px rgba(54, 61, 57, 0.15)',
              }}
            >
              "YOU CAN DO IT."
            </div>
          </motion.div>

          {/* Closing Affirmation */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 3.5vw, 1.85rem)',
              fontWeight: 800,
              color: '#222724',
              lineHeight: 1.4,
              marginBottom: '1rem',
              padding: '0 0.5rem',
            }}
          >
            We are <span className="gradient-text-sage">DEVI FARLO</span>.
            <div style={{ color: '#4E5651', fontWeight: 600, fontSize: '0.82em', marginTop: '0.35rem' }}>
              And this is only the beginning of our story.
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .team-message-section {
          padding: 6rem 0 5.5rem 0;
        }
        .prominent-tagline-wrap {
          display: inline-block;
          margin: 0.5rem 0 2.5rem 0;
          padding: 1.15rem 3rem;
          border-radius: 1.75rem;
          background: linear-gradient(135deg, rgba(54, 61, 57, 0.08) 0%, rgba(54, 61, 57, 0.15) 100%);
          border: 2px solid rgba(54, 61, 57, 0.35);
          box-shadow: 0 8px 30px rgba(54, 61, 57, 0.12);
          max-width: 90vw;
        }

        @media (max-width: 768px) {
          .team-message-section {
            padding: 4rem 0 3.5rem 0;
          }
          .prominent-tagline-wrap {
            padding: 0.85rem 1.5rem;
            margin: 0.25rem 0 2rem 0;
            border-radius: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}

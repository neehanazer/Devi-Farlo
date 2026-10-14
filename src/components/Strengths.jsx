import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';
import { teamStrengths } from '../data/teamData';

export default function Strengths() {
  return (
    <section id="strengths" className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(43, 49, 46, 0.5)' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-badge">
            <ShieldCheck size={14} />
            <span>COLLECTIVE FORTE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Our <span className="gradient-text-cream">Strengths</span>
          </h2>
          <p style={{ color: '#C0B5AA', fontSize: '1.05rem', lineHeight: 1.6 }}>
            What happens when 8 different skill sets harmonize seamlessly without ego.
            Our collective strength index reflects disciplined craftsmanship and mutual trust.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="strengths-grid">
          {teamStrengths.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-gold-hover strength-card"
              style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(54, 61, 57, 0.65)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.25rem)', fontWeight: 800, color: '#F6F1EC' }}>
                  {item.title}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 900,
                    color: '#D8C8B8',
                  }}
                >
                  {item.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  height: '8px',
                  backgroundColor: 'rgba(216, 200, 184, 0.1)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.15 }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #D8C8B8 0%, #C2B09F 100%)',
                    borderRadius: '9999px',
                  }}
                />
              </div>

              <p style={{ color: '#C0B5AA', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The DEVI FARLO Formula Banner */}
        <div
          className="glass-panel formula-banner"
          style={{
            background: 'linear-gradient(135deg, rgba(54,61,57,0.9) 0%, rgba(43,49,46,0.95) 100%)',
            border: '1px solid rgba(216, 200, 184, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.75rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D8C8B8', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <Zap size={15} />
              <span>THE DEVI FARLO MULTIPLIER</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.75rem)', fontWeight: 800, color: '#F6F1EC', marginBottom: '0.65rem', lineHeight: 1.25 }}>
              Individual Brilliance × Uncompromising Unity
            </h3>
            <p style={{ color: '#C0B5AA', fontSize: '0.92rem', lineHeight: 1.6 }}>
              A single genius can solve a problem, but only a synchronized team can define a new era.
              By leaning into each other's superpowers, every weakness is neutralized and every triumph is shared.
            </p>
          </div>

          <div
            className="formula-stat-box"
            style={{
              padding: '1.25rem 2rem',
              borderRadius: '1rem',
              backgroundColor: 'rgba(216, 200, 184, 0.1)',
              border: '1px solid rgba(216, 200, 184, 0.3)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#C0B5AA', letterSpacing: '0.1em' }}>
              Team Morale Index
            </div>
            <div style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontWeight: 900, color: '#D8C8B8', lineHeight: 1.1, margin: '0.2rem 0' }}>
              100%
            </div>
            <div style={{ fontSize: '0.8rem', color: '#F6F1EC' }}>
              "You Have To Do It" Commitment
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .strengths-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }
        .strength-card {
          padding: 2rem;
        }
        .formula-banner {
          padding: 2.5rem;
        }

        @media (max-width: 768px) {
          .strengths-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin-bottom: 2rem;
          }
          .strength-card {
            padding: 1.35rem 1.15rem;
          }
          .formula-banner {
            padding: 1.5rem 1.25rem;
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
          }
          .formula-stat-box {
            width: 100%;
            padding: 1.15rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

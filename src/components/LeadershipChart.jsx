import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { teamMembers } from '../data/teamData';

export default function LeadershipChart({ onSelectMember }) {
  const captain = teamMembers.find(m => m.role === 'Captain');
  const viceCaptain = teamMembers.find(m => m.role === 'Vice-Captain');

  return (
    <section id="leadership" className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(43, 49, 46, 0.4)' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
          <div className="section-badge">
            <Crown size={14} />
            <span>EXECUTIVE STEWARDSHIP</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
            Leadership & <span className="gradient-text-cream">Synergy</span>
          </h2>
          <p style={{ color: '#C0B5AA', fontSize: 'clamp(0.92rem, 2.4vw, 1.05rem)', lineHeight: 1.6, padding: '0 0.5rem' }}>
            Leadership at DEVI FARLO is not about hierarchy; it is about service, amplification, and creating an arena where all eight members thrive.
          </p>
        </div>

        {/* Leadership Dual Card Showcase */}
        <div className="leadership-cards-grid">
          {/* Captain Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-gold-hover leadership-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              borderTop: '3px solid #D8C8B8',
              backgroundColor: 'rgba(54, 61, 57, 0.7)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(216, 200, 184, 0.12)',
                  color: '#D8C8B8',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                <Crown size={14} />
                <span>TEAM CAPTAIN</span>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#948B82', fontWeight: 700 }}>DF-01</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <img
                src={captain?.image}
                alt={captain?.name}
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '1rem',
                  objectFit: 'cover',
                  border: '2px solid #D8C8B8',
                  flexShrink: 0,
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#F6F1EC', marginBottom: '0.15rem', lineHeight: 1.2 }}>
                  {captain?.name}
                </h3>
                <div style={{ color: '#D8C8B8', fontWeight: 600, fontSize: '0.85rem' }}>
                  {captain?.superpower}
                </div>
                <div style={{ color: '#C0B5AA', fontSize: '0.78rem', marginTop: '0.15rem' }}>
                  Focus: Vision & Cohesion
                </div>
              </div>
            </div>

            <p style={{ color: '#C0B5AA', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
              {captain?.bio}
            </p>

            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(216, 200, 184, 0.08)',
                border: '1px solid rgba(216, 200, 184, 0.2)',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#D8C8B8', fontWeight: 700, letterSpacing: '0.1em' }}>
                Leadership Philosophy
              </div>
              <div style={{ fontSize: '0.88rem', color: '#F6F1EC', fontStyle: 'italic', marginTop: '0.25rem' }}>
                "{captain?.motto}"
              </div>
            </div>

            <button
              onClick={() => onSelectMember(captain)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(216, 200, 184, 0.1)',
                color: '#D8C8B8',
                border: '1px solid rgba(216, 200, 184, 0.3)',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minHeight: '44px',
                transition: 'all 0.2s',
              }}
            >
              <span>View Captain's Dossier</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Vice-Captain Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel glass-panel-hover leadership-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              borderTop: '3px solid rgba(216, 200, 184, 0.7)',
              backgroundColor: 'rgba(54, 61, 57, 0.7)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(216, 200, 184, 0.12)',
                  color: '#D8C8B8',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                <Zap size={14} />
                <span>VICE-CAPTAIN</span>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#948B82', fontWeight: 700 }}>DF-02</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <img
                src={viceCaptain?.image}
                alt={viceCaptain?.name}
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '1rem',
                  objectFit: 'cover',
                  border: '2px solid rgba(216, 200, 184, 0.7)',
                  flexShrink: 0,
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#F6F1EC', marginBottom: '0.15rem', lineHeight: 1.2 }}>
                  {viceCaptain?.name}
                </h3>
                <div style={{ color: '#D8C8B8', fontWeight: 600, fontSize: '0.85rem' }}>
                  {viceCaptain?.superpower}
                </div>
                <div style={{ color: '#C0B5AA', fontSize: '0.78rem', marginTop: '0.15rem' }}>
                  Focus: Operations & Synergy
                </div>
              </div>
            </div>

            <p style={{ color: '#C0B5AA', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
              {viceCaptain?.bio}
            </p>

            <div
              style={{
                padding: '0.85rem 1rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(216, 200, 184, 0.08)',
                border: '1px solid rgba(216, 200, 184, 0.2)',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#D8C8B8', fontWeight: 700, letterSpacing: '0.1em' }}>
                Operational Creed
              </div>
              <div style={{ fontSize: '0.88rem', color: '#F6F1EC', fontStyle: 'italic', marginTop: '0.25rem' }}>
                "{viceCaptain?.motto}"
              </div>
            </div>

            <button
              onClick={() => onSelectMember(viceCaptain)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(216, 200, 184, 0.1)',
                color: '#D8C8B8',
                border: '1px solid rgba(216, 200, 184, 0.3)',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minHeight: '44px',
                transition: 'all 0.2s',
              }}
            >
              <span>View Vice-Captain's Dossier</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Synergy Bridge Bar */}
        <div className="synergy-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '9px',
                backgroundColor: 'rgba(216, 200, 184, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D8C8B8',
                flexShrink: 0,
              }}
            >
              <Sparkles size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#F6F1EC', fontSize: '0.95rem' }}>
                The Dual-Anchor Leadership Model
              </div>
              <div style={{ color: '#C0B5AA', fontSize: '0.82rem' }}>
                Visionary inspiration synchronized with tactical cadence creates unstoppable momentum.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', color: '#D8C8B8', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(54,61,57,0.7)', border: '1px solid rgba(216,200,184,0.2)' }}>
              100% Trust
            </span>
            <span style={{ fontSize: '0.75rem', color: '#D8C8B8', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(54,61,57,0.7)', border: '1px solid rgba(216,200,184,0.2)' }}>
              Rapid Consensus
            </span>
            <span style={{ fontSize: '0.75rem', color: '#D8C8B8', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(54,61,57,0.7)', border: '1px solid rgba(216,200,184,0.2)' }}>
              Empowered Autonomy
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .leadership-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
          margin-bottom: 2rem;
        }
        .leadership-card {
          padding: 2.25rem 2rem;
        }
        .synergy-banner {
          margin-top: 2rem;
          padding: 1.25rem 1.75rem;
          border-radius: 1.25rem;
          background: linear-gradient(90deg, rgba(54,61,57,0.8) 0%, rgba(216,200,184,0.12) 100%);
          border: 1px solid rgba(216, 200, 184, 0.2);
          display: flex;
          align-items: center;
          justifyContent: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          .leadership-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .leadership-card {
            padding: 1.5rem 1.25rem;
          }
          .synergy-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.25rem;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

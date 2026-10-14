import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Users, HeartHandshake, Flame, Compass, Sparkles } from 'lucide-react';
import { missionVision } from '../data/teamData';

export default function MissionVision() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Users': return <Users size={22} color="#D8C8B8" />;
      case 'HeartHandshake': return <HeartHandshake size={22} color="#E2D5C7" />;
      case 'Flame': return <Flame size={22} color="#CBBBAE" />;
      case 'Compass': return <Compass size={22} color="#D8C8B8" />;
      default: return <Sparkles size={22} color="#D8C8B8" />;
    }
  };

  return (
    <section id="mission" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-badge">
            <Compass size={14} />
            <span>PURPOSE & PRINCIPLES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Mission & <span className="gradient-text-cream">Vision</span>
          </h2>
          <p style={{ color: '#C0B5AA', fontSize: '1.05rem', lineHeight: 1.6 }}>
            What steers eight disparate innovators forward as one unified force: our shared compass and unwavering creed.
          </p>
        </div>

        {/* Dual Major Cards: Vision & Mission */}
        <div className="mission-dual-grid">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-gold-hover mission-card"
            style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(54, 61, 57, 0.65)' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#D8C8B8',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                marginBottom: '0.85rem',
              }}
            >
              <Eye size={18} />
              <span>{missionVision.vision.title}</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.35rem, 4.5vw, 1.75rem)', fontWeight: 800, color: '#F6F1EC', marginBottom: '0.85rem', lineHeight: 1.25 }}>
              {missionVision.vision.heading}
            </h3>
            <p style={{ color: '#C0B5AA', fontSize: '0.95rem', lineHeight: 1.65 }}>
              {missionVision.vision.description}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel glass-panel-hover mission-card"
            style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(54, 61, 57, 0.65)' }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#D8C8B8',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                marginBottom: '0.85rem',
              }}
            >
              <Target size={18} />
              <span>{missionVision.mission.title}</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.35rem, 4.5vw, 1.75rem)', fontWeight: 800, color: '#F6F1EC', marginBottom: '0.85rem', lineHeight: 1.25 }}>
              {missionVision.mission.heading}
            </h3>
            <p style={{ color: '#C0B5AA', fontSize: '0.95rem', lineHeight: 1.65 }}>
              {missionVision.mission.description}
            </p>
          </motion.div>
        </div>

        {/* 4 Core Pillars */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.4rem)', fontWeight: 700, color: '#F6F1EC' }}>
            Our Foundational Pillars
          </h3>
        </div>

        <div className="mission-pillars-grid">
          {missionVision.coreValues.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover pillar-card"
              style={{ backgroundColor: 'rgba(54, 61, 57, 0.6)' }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(216, 200, 184, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.85rem',
                  border: '1px solid rgba(216, 200, 184, 0.18)',
                }}
              >
                {getIcon(val.icon)}
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F6F1EC', marginBottom: '0.45rem' }}>
                {val.title}
              </h4>
              <p style={{ color: '#C0B5AA', fontSize: '0.88rem', lineHeight: 1.6 }}>
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .mission-dual-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .mission-card {
          padding: 2.5rem;
        }
        .mission-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .pillar-card {
          padding: 1.75rem 1.5rem;
        }

        @media (max-width: 768px) {
          .mission-dual-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin-bottom: 2.25rem;
          }
          .mission-card {
            padding: 1.5rem 1.25rem !important;
            border-radius: 1rem !important;
          }
          .mission-pillars-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .pillar-card {
            padding: 1.25rem 1.15rem;
          }
        }
      `}</style>
    </section>
  );
}

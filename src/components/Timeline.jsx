import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';
import { journeyTimeline } from '../data/teamData';

export default function Timeline() {
  return (
    <section id="journey" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div className="section-badge">
            <Compass size={14} />
            <span>CHRONICLES OF DEVI FARLO</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Our <span className="gradient-text-cream">Journey</span>
          </h2>
          <p style={{ color: '#C0B5AA', fontSize: '1.05rem', lineHeight: 1.6 }}>
            "Our journey is about more than reaching a destination. It is about the people we become along the way."
            From our founding sparks to uncharted horizons.
          </p>
        </div>

        {/* Timeline Flow */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical Center Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              width: '2px',
              background: 'linear-gradient(180deg, #D8C8B8 0%, rgba(216, 200, 184, 0.4) 50%, #363D39 100%)',
              transform: 'translateX(-50%)',
              opacity: 0.5,
            }}
            className="timeline-track"
          />

          <div className="timeline-items-flow" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {journeyTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    position: 'relative',
                  }}
                  className={`timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}`}
                >
                  {/* Center Node Indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '24px',
                      transform: 'translate(-50%, -50%)',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#222724',
                      border: '3px solid #D8C8B8',
                      boxShadow: '0 0 15px rgba(216, 200, 184, 0.5)',
                      zIndex: 3,
                    }}
                    className="timeline-node"
                  />

                  {/* Card Content */}
                  <div
                    className="glass-panel glass-panel-gold-hover timeline-card"
                    style={{
                      width: '45%',
                      padding: '2rem',
                      position: 'relative',
                      backgroundColor: 'rgba(54, 61, 57, 0.65)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.75rem',
                        flexWrap: 'wrap',
                        gap: '0.35rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: '#D8C8B8',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.year} • {item.tag}
                      </span>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#948B82',
                          fontWeight: 600,
                        }}
                      >
                        {item.phase}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)', fontWeight: 800, color: '#F6F1EC', marginBottom: '0.65rem' }}>
                      {item.title}
                    </h3>

                    <p style={{ color: '#C0B5AA', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {item.description}
                    </p>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '0.5rem',
                        backgroundColor: 'rgba(216, 200, 184, 0.1)',
                        border: '1px solid rgba(216, 200, 184, 0.25)',
                        color: '#D8C8B8',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                      }}
                    >
                      <Sparkles size={13} color="#D8C8B8" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-track {
            left: 16px !important;
          }
          .timeline-node {
            left: 16px !important;
            width: 20px !important;
            height: 20px !important;
            top: 20px !important;
          }
          .timeline-items-flow {
            gap: 1.5rem !important;
          }
          .timeline-item {
            justify-content: flex-end !important;
          }
          .timeline-card {
            width: calc(100% - 36px) !important;
            padding: 1.25rem 1.1rem !important;
            border-radius: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

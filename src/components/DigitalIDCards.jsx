import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, QrCode, Sparkles, Shield, RotateCw, CheckCircle2 } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import { useTheme } from '../context/ThemeContext';

export default function DigitalIDCards() {
  const { isDark } = useTheme();
  const [selectedMemberId, setSelectedMemberId] = useState(teamMembers[0].id);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentMember = teamMembers.find(m => m.id === selectedMemberId) || teamMembers[0];

  return (
    <section id="digital-ids" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
          <div className="section-badge">
            <CreditCard size={14} />
            <span>COLLECTIBLE BADGES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
            Digital <span className="gradient-text-sage">ID Passes</span>
          </h2>
          <p style={{ 
            color: isDark ? '#D8C8B8' : '#4E5651', 
            fontSize: 'clamp(0.92rem, 2.4vw, 1.05rem)', 
            lineHeight: 1.6, 
            padding: '0 0.5rem', 
            fontWeight: 500 
          }}>
            Each member carries an encrypted identity pass reflecting their rank, signature superpower, and permanent commitment to the team creed.
          </p>
        </div>

        {/* Member Selector Tabs */}
        <div className="id-selector-container">
          {teamMembers.map((member) => {
            const isSelected = selectedMemberId === member.id;
            return (
              <button
                key={member.id}
                onClick={() => {
                  setSelectedMemberId(member.id);
                  setIsFlipped(false);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  border: isSelected 
                    ? (isDark ? '1px solid #D8C8B8' : '1px solid #363D39') 
                    : (isDark ? '1px solid rgba(216, 200, 184, 0.15)' : '1px solid rgba(54, 61, 57, 0.15)'),
                  background: isSelected 
                    ? (isDark ? '#D8C8B8' : '#363D39') 
                    : (isDark ? 'rgba(43, 49, 46, 0.7)' : 'rgba(54, 61, 57, 0.08)'),
                  color: isSelected 
                    ? (isDark ? '#363D39' : '#D8C8B8') 
                    : (isDark ? '#C0B5AA' : '#4E5651'),
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
                }}
              >
                <span style={{ 
                  color: isSelected 
                    ? (isDark ? '#363D39' : '#D8C8B8') 
                    : (isDark ? '#D8C8B8' : '#363D39'), 
                  fontWeight: 900, 
                  fontSize: '0.72rem' 
                }}>
                  {member.id}
                </span>
                <span>{member.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Holographic Card Display */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="id-card-wrapper" style={{ perspective: '1200px', width: '100%' }}>
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                transformStyle: 'preserve-3d',
                width: '100%',
                minHeight: '500px',
              }}
            >
              {/* Card Front */}
              <div
                className="id-card-panel"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  borderRadius: '1.5rem',
                  background: 'linear-gradient(145deg, #363D39 0%, #262B28 100%)',
                  border: '2px solid rgba(216, 200, 184, 0.35)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(216, 200, 184, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                {/* Hologram Sheen Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    right: '-50%',
                    bottom: '-50%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(216, 200, 184, 0.12) 50%, transparent 60%)',
                    transform: 'rotate(25deg)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Card Top Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: '#D8C8B8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#363D39',
                        fontWeight: 900,
                        fontSize: '0.9rem',
                      }}
                    >
                      DF
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F6F1EC', letterSpacing: '0.05em' }}>
                        DEVI FARLO
                      </div>
                      <div style={{ fontSize: '0.62rem', color: '#D8C8B8', letterSpacing: '0.1em' }}>
                        OPERATIVE ID
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      color: '#D8C8B8',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {currentMember.id}
                  </span>
                </div>

                {/* Card Center: Portrait & Info */}
                <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '0.85rem' }}>
                    <img
                      src={currentMember.image}
                      alt={currentMember.name}
                      style={{
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        border: '3px solid #D8C8B8',
                        boxShadow: '0 0 25px rgba(216, 200, 184, 0.4)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        right: '4px',
                        background: '#363D39',
                        borderRadius: '50%',
                        padding: '4px',
                        border: '1px solid #D8C8B8',
                      }}
                    >
                      <Sparkles size={15} color="#D8C8B8" />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#F6F1EC', marginBottom: '0.2rem', lineHeight: 1.2 }}>
                    {currentMember.name}
                  </h3>
                  <div style={{ color: '#D8C8B8', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                    {currentMember.role}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#C0B5AA', marginTop: '0.25rem' }}>
                    Superpower: <strong style={{ color: '#F6F1EC' }}>{currentMember.superpower}</strong>
                  </div>
                </div>

                {/* Card Bottom: Barcode & Flip Prompt */}
                <div>
                  <div
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(216, 200, 184, 0.06)',
                      border: '1px solid rgba(216, 200, 184, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', color: '#948B82' }}>SECURITY CLEARANCE</span>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F6F1EC' }}>LEVEL 8 • OMNI-ACCESS</span>
                    </div>
                    <QrCode size={26} color="#D8C8B8" />
                  </div>

                  <button
                    onClick={() => setIsFlipped(true)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(216, 200, 184, 0.1)',
                      border: '1px solid rgba(216, 200, 184, 0.25)',
                      color: '#D8C8B8',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      minHeight: '42px',
                    }}
                  >
                    <RotateCw size={14} />
                    <span>Flip to View Security Oath</span>
                  </button>
                </div>
              </div>

              {/* Card Back (Flipped) */}
              <div
                className="id-card-panel"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  borderRadius: '1.5rem',
                  background: 'linear-gradient(145deg, #2D3330 0%, #202422 100%)',
                  border: '2px solid rgba(216, 200, 184, 0.35)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(216, 200, 184, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#D8C8B8', letterSpacing: '0.15em' }}>
                      DEVI FARLO COVENANT
                    </div>
                    <Shield size={18} color="#D8C8B8" />
                  </div>

                  <div
                    style={{
                      padding: '1rem',
                      borderRadius: '0.85rem',
                      background: 'rgba(216, 200, 184, 0.06)',
                      border: '1px solid rgba(216, 200, 184, 0.15)',
                      marginBottom: '1rem',
                    }}
                  >
                    <div style={{ fontSize: '0.68rem', color: '#948B82', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      Official Creed
                    </div>
                    <div style={{ fontStyle: 'italic', color: '#F6F1EC', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      "{currentMember.motto}"
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.68rem', color: '#948B82', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      Primary Directives
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C0B5AA', fontSize: '0.8rem' }}>
                        <CheckCircle2 size={15} color="#D8C8B8" />
                        <span>Continuous collective evolution</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C0B5AA', fontSize: '0.8rem' }}>
                        <CheckCircle2 size={15} color="#D8C8B8" />
                        <span>Unconditional support: "You have to do it."</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#C0B5AA', fontSize: '0.8rem' }}>
                        <CheckCircle2 size={15} color="#D8C8B8" />
                        <span>Zero compromise on craft and ethics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setIsFlipped(false)}
                    style={{
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(216, 200, 184, 0.1)',
                      border: '1px solid rgba(216, 200, 184, 0.25)',
                      color: '#D8C8B8',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      minHeight: '42px',
                    }}
                  >
                    <RotateCw size={14} />
                    <span>Flip Back to Front</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .id-selector-container {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .id-card-wrapper {
          max-width: 420px;
        }
        .id-card-panel {
          padding: 1.75rem;
        }

        @media (max-width: 640px) {
          .id-selector-container {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            margin-bottom: 1.75rem;
          }
          .id-selector-container::-webkit-scrollbar {
            display: none;
          }
          .id-card-wrapper {
            max-width: 100%;
          }
          .id-card-panel {
            padding: 1.25rem 1.15rem;
          }
        }
      `}</style>
    </section>
  );
}

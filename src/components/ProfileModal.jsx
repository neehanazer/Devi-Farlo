import React from 'react';
import { Modal } from 'antd';
import { 
  X, Award, ChevronLeft, ChevronRight, 
  Quote, CheckCircle2 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ProfileModal({ 
  member, 
  visible, 
  onClose, 
  onPrev, 
  onNext,
  hasPrev,
  hasNext 
}) {
  const { isDark } = useTheme();

  if (!member) return null;

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={760}
      centered
      closable={false}
      styles={{
        content: {
          backgroundColor: isDark ? '#2B312E' : '#EAE1D7',
          border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.25)',
          borderRadius: '1.25rem',
          padding: 0,
          overflow: 'hidden',
          boxShadow: isDark 
            ? '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(216, 200, 184, 0.15)' 
            : '0 25px 60px -15px rgba(54, 61, 57, 0.35), 0 0 35px rgba(54, 61, 57, 0.1)',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        },
        mask: {
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          backgroundColor: isDark ? 'rgba(18, 22, 20, 0.78)' : 'rgba(34, 39, 36, 0.65)',
        }
      }}
    >
      <div style={{ position: 'relative', overflowY: 'auto', maxHeight: '90vh', WebkitOverflowScrolling: 'touch' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: isDark ? 'rgba(54, 61, 57, 0.85)' : 'rgba(255, 255, 255, 0.8)',
            border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.25)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isDark ? '#D8C8B8' : '#363D39',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = isDark ? '#FFFFFF' : '#181C1A')}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header Banner */}
        <div
          className="modal-banner"
          style={{
            position: 'relative',
            background: isDark 
              ? 'linear-gradient(135deg, rgba(22, 26, 24, 0.95) 0%, #2B312E 100%)' 
              : 'linear-gradient(135deg, rgba(54, 61, 57, 0.15) 0%, #EAE1D7 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            borderBottom: isDark ? '1px solid rgba(216, 200, 184, 0.15)' : '1px solid rgba(54, 61, 57, 0.15)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: isDark ? '#D8C8B8' : '#363D39',
              background: isDark ? 'rgba(43, 49, 46, 0.9)' : 'rgba(255, 255, 255, 0.85)',
              border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.25)',
            }}
          >
            <span>OFFICIAL PROFILE • {member.id}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-wrap">
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {/* Avatar */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img
                src={member.image}
                alt={member.name}
                className="modal-avatar"
                style={{
                  borderRadius: '1.25rem',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  border: isDark ? '3px solid #D8C8B8' : '3px solid #363D39',
                  boxShadow: isDark ? '0 8px 25px rgba(0, 0, 0, 0.5)' : '0 8px 25px rgba(54, 61, 57, 0.25)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  right: '-4px',
                  background: isDark ? '#363D39' : '#363D39',
                  borderRadius: '9999px',
                  padding: '4px',
                  border: isDark ? '1px solid #D8C8B8' : '1px solid #363D39',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Award size={15} color="#D8C8B8" />
              </div>
            </div>

            {/* Name & Titles */}
            <div style={{ flex: 1, minWidth: '200px', paddingTop: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.85rem)', fontWeight: 800, color: isDark ? '#F6F1EC' : '#222724', margin: 0, lineHeight: 1.2 }}>
                  {member.name}
                </h2>
                <span
                  style={{
                    backgroundColor: isDark ? '#D8C8B8' : '#363D39',
                    color: isDark ? '#363D39' : '#D8C8B8',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                  }}
                >
                  {member.role}
                </span>
              </div>
              <div style={{ color: isDark ? '#D8C8B8' : '#363D39', fontWeight: 700, fontSize: '0.88rem', marginTop: '0.2rem' }}>
                {member.title}
              </div>
            </div>
          </div>

          {/* Motto Box */}
          <div
            style={{
              margin: '1.25rem 0',
              padding: '1rem 1.15rem',
              borderRadius: '0.85rem',
              backgroundColor: isDark ? 'rgba(43, 49, 46, 0.85)' : 'rgba(255, 255, 255, 0.7)',
              borderLeft: isDark ? '4px solid #D8C8B8' : '4px solid #363D39',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}
          >
            <Quote size={20} color={isDark ? '#D8C8B8' : '#363D39'} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontStyle: 'italic', color: isDark ? '#F6F1EC' : '#222724', fontSize: '0.92rem', lineHeight: 1.5, fontWeight: 500 }}>
                "{member.motto}"
              </div>
              <div style={{ fontSize: '0.7rem', color: isDark ? '#C0B5AA' : '#4E5651', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem', fontWeight: 600 }}>
                Personal Creed • DEVI FARLO
              </div>
            </div>
          </div>

          {/* Bio & Details Grid */}
          <div className="modal-details-grid">
            {/* Biography & Contribution */}
            <div>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: isDark ? '#D8C8B8' : '#4E5651', marginBottom: '0.4rem', fontWeight: 700 }}>
                Team Biography
              </h4>
              <p style={{ color: isDark ? '#F6F1EC' : '#222724', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {member.bio}
              </p>

              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: isDark ? '#D8C8B8' : '#4E5651', marginBottom: '0.4rem', fontWeight: 700 }}>
                Key Contribution
              </h4>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  background: isDark ? 'rgba(43, 49, 46, 0.85)' : 'rgba(255, 255, 255, 0.7)',
                  border: isDark ? '1px solid rgba(216, 200, 184, 0.2)' : '1px solid rgba(54, 61, 57, 0.15)',
                  color: isDark ? '#F6F1EC' : '#222724',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                }}
              >
                <CheckCircle2 size={16} color={isDark ? '#D8C8B8' : '#363D39'} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{member.contribution}</span>
              </div>
            </div>

            {/* Superpower & Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '0.75rem',
                  background: isDark ? 'rgba(43, 49, 46, 0.85)' : 'rgba(255, 255, 255, 0.7)',
                  border: isDark ? '1px solid rgba(216, 200, 184, 0.2)' : '1px solid rgba(54, 61, 57, 0.15)',
                }}
              >
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: isDark ? '#C0B5AA' : '#4E5651', fontWeight: 700 }}>
                  Signature Superpower
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: isDark ? '#D8C8B8' : '#363D39', margin: '0.15rem 0 0.35rem 0' }}>
                  {member.superpower}
                </div>
                <div style={{ fontSize: '0.82rem', color: isDark ? '#F6F1EC' : '#222724' }}>
                  Primary Strength: <strong style={{ color: isDark ? '#D8C8B8' : '#363D39' }}>{member.strength}</strong>
                </div>
              </div>

              {/* Skills Tags */}
              <div>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: isDark ? '#D8C8B8' : '#4E5651', marginBottom: '0.4rem', fontWeight: 700 }}>
                  Core Competencies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {member.skills?.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.3rem 0.65rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: isDark ? 'rgba(216, 200, 184, 0.12)' : 'rgba(54, 61, 57, 0.08)',
                        color: isDark ? '#F6F1EC' : '#222724',
                        border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.18)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '1rem',
              borderTop: isDark ? '1px solid rgba(216, 200, 184, 0.15)' : '1px solid rgba(54, 61, 57, 0.15)',
              marginTop: '1.25rem',
              gap: '0.5rem',
            }}
          >
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'transparent',
                color: hasPrev ? (isDark ? '#D8C8B8' : '#363D39') : (isDark ? '#5A635E' : '#A3ABA6'),
                border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.25)',
                padding: '0.5rem 0.85rem',
                borderRadius: '0.5rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: hasPrev ? 'pointer' : 'not-allowed',
                opacity: hasPrev ? 1 : 0.4,
                minHeight: '38px',
              }}
            >
              <ChevronLeft size={16} /> <span>Prev</span>
            </button>

            <span style={{ fontSize: '0.75rem', color: isDark ? '#C0B5AA' : '#4E5651', fontWeight: 700, textAlign: 'center' }}>
              DEVI FARLO PROFILE
            </span>

            <button
              onClick={onNext}
              disabled={!hasNext}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'transparent',
                color: hasNext ? (isDark ? '#D8C8B8' : '#363D39') : (isDark ? '#5A635E' : '#A3ABA6'),
                border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.25)',
                padding: '0.5rem 0.85rem',
                borderRadius: '0.5rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: hasNext ? 'pointer' : 'not-allowed',
                opacity: hasNext ? 1 : 0.4,
                minHeight: '38px',
              }}
            >
              <span>Next</span> <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .modal-banner {
          height: 140px;
          padding: 1.25rem 1.75rem;
        }
        .modal-body-wrap {
          padding: 0 1.75rem 1.75rem 1.75rem;
          margin-top: -45px;
        }
        .modal-avatar {
          width: 100px;
          height: 100px;
        }
        .modal-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
        }

        @media (max-width: 640px) {
          .modal-banner {
            height: 110px;
            padding: 1rem;
          }
          .modal-body-wrap {
            padding: 0 1.15rem 1.25rem 1.15rem;
            margin-top: -35px;
          }
          .modal-avatar {
            width: 78px;
            height: 78px;
          }
          .modal-details-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </Modal>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Modal, Input, Button, message } from 'antd';
import { Heart, Edit3, RotateCcw, Check, Crown, Zap } from 'lucide-react';
import { initialLeadershipMessages } from '../data/teamData';

const { TextArea } = Input;

export default function TeamMessage() {
  const [leadershipMessages, setLeadershipMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('devifarlo_leadership_messages');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.captain?.author === initialLeadershipMessages.captain.author) {
          return parsed;
        }
      }
    } catch (e) {
      // fallback
    }
    return initialLeadershipMessages;
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(leadershipMessages);

  useEffect(() => {
    setEditFormData(leadershipMessages);
  }, [leadershipMessages]);

  const handleSaveEdit = () => {
    setLeadershipMessages(editFormData);
    try {
      localStorage.setItem('devifarlo_leadership_messages', JSON.stringify(editFormData));
      message.success('Leadership messages updated successfully!');
    } catch (e) {
      // fallback
    }
    setIsEditModalOpen(false);
  };

  const handleResetDefault = () => {
    setEditFormData(initialLeadershipMessages);
    setLeadershipMessages(initialLeadershipMessages);
    try {
      localStorage.removeItem('devifarlo_leadership_messages');
      message.info('Reset to default leadership messages.');
    } catch (e) {
      // fallback
    }
    setIsEditModalOpen(false);
  };

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
              marginBottom: '3.5rem',
              padding: '0 0.5rem',
            }}
          >
            We are <span className="gradient-text-sage">DEVI FARLO</span>.
            <div style={{ color: '#4E5651', fontWeight: 600, fontSize: '0.82em', marginTop: '0.35rem' }}>
              And this is only the beginning of our story.
            </div>
          </div>
        </motion.div>

        {/* Optional Leadership Messages Container (Captain & Vice-Captain) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(54, 61, 57, 0.15)',
          }}
        >
          {/* Header of Leadership Messages with Edit Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
              flexWrap: 'wrap',
              gap: '0.85rem',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#363D39', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                DIRECT FROM OUR LEADERSHIP
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#222724' }}>
                Words of Encouragement
              </h3>
            </div>

            <button
              onClick={() => setIsEditModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: '#363D39',
                color: '#D8C8B8',
                border: 'none',
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                minHeight: '38px',
                boxShadow: '0 4px 12px rgba(54, 61, 57, 0.25)',
              }}
            >
              <Edit3 size={14} />
              <span>Edit Leadership Messages</span>
            </button>
          </div>

          {/* Cards for Captain and Vice-Captain messages */}
          <div className="leadership-msg-grid">
            {/* Captain's Message */}
            <div
              className="glass-panel leadership-msg-card"
              style={{
                borderRadius: '1.25rem',
                position: 'relative',
                borderTop: '3px solid #363D39',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(54, 61, 57, 0.14)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', color: '#363D39' }}>
                <Crown size={16} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {leadershipMessages.captain.author} • {leadershipMessages.captain.role}
                </span>
              </div>
              <p
                style={{
                  color: '#222724',
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                  fontWeight: 500,
                }}
              >
                "{leadershipMessages.captain.message}"
              </p>
              <div style={{ fontSize: '0.75rem', color: '#717B74' }}>
                {leadershipMessages.captain.date}
              </div>
            </div>

            {/* Vice-Captain's Message */}
            <div
              className="glass-panel leadership-msg-card"
              style={{
                borderRadius: '1.25rem',
                position: 'relative',
                borderTop: '3px solid #363D39',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(54, 61, 57, 0.14)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', color: '#363D39' }}>
                <Zap size={16} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {leadershipMessages.viceCaptain.author} • {leadershipMessages.viceCaptain.role}
                </span>
              </div>
              <p
                style={{
                  color: '#222724',
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                  fontWeight: 500,
                }}
              >
                "{leadershipMessages.viceCaptain.message}"
              </p>
              <div style={{ fontSize: '0.75rem', color: '#717B74' }}>
                {leadershipMessages.viceCaptain.date}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Edit Modal */}
      <Modal
        title={
          <div style={{ color: '#222724', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Edit3 size={17} color="#363D39" />
            <span>Customize Leadership Messages</span>
          </div>
        }
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={null}
        centered
        styles={{
          content: {
            backgroundColor: '#EAE1D7',
            border: '1px solid rgba(54, 61, 57, 0.25)',
            borderRadius: '1.25rem',
            boxShadow: '0 25px 60px rgba(54, 61, 57, 0.25)',
            maxWidth: '92vw',
            margin: '0 auto',
          },
          header: {
            backgroundColor: '#EAE1D7',
            borderBottom: '1px solid rgba(54, 61, 57, 0.15)',
            paddingBottom: '0.85rem',
          }
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
          {/* Captain Message Field */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#363D39', marginBottom: '0.4rem' }}>
              Message from Captain ({editFormData.captain.author})
            </label>
            <TextArea
              rows={3}
              value={editFormData.captain.message}
              onChange={(e) =>
                setEditFormData({
                  ...editFormData,
                  captain: { ...editFormData.captain, message: e.target.value },
                })
              }
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                borderColor: 'rgba(54, 61, 57, 0.2)',
                color: '#222724',
                borderRadius: '0.75rem',
              }}
            />
          </div>

          {/* Vice-Captain Message Field */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#363D39', marginBottom: '0.4rem' }}>
              Message from Vice-Captain ({editFormData.viceCaptain.author})
            </label>
            <TextArea
              rows={3}
              value={editFormData.viceCaptain.message}
              onChange={(e) =>
                setEditFormData({
                  ...editFormData,
                  viceCaptain: { ...editFormData.viceCaptain, message: e.target.value },
                })
              }
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                borderColor: 'rgba(54, 61, 57, 0.2)',
                color: '#222724',
                borderRadius: '0.75rem',
              }}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Button
              onClick={handleResetDefault}
              icon={<RotateCcw size={14} />}
              style={{
                backgroundColor: 'transparent',
                borderColor: 'rgba(54, 61, 57, 0.25)',
                color: '#4E5651',
              }}
            >
              Reset
            </Button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                onClick={() => setIsEditModalOpen(false)}
                style={{
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(54, 61, 57, 0.25)',
                  color: '#222724',
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                onClick={handleSaveEdit}
                icon={<Check size={14} />}
                style={{
                  backgroundColor: '#363D39',
                  borderColor: '#363D39',
                  color: '#D8C8B8',
                  fontWeight: 700,
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      <style>{`
        .team-message-section {
          padding: 6.5rem 0 5.5rem 0;
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
        .leadership-msg-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .leadership-msg-card {
          padding: 1.75rem 1.5rem;
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
          .leadership-msg-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .leadership-msg-card {
            padding: 1.25rem 1.15rem;
          }
        }
      `}</style>
    </section>
  );
}

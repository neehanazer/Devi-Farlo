import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function MemberCard({ member, onSelect, index }) {
  const { isDark } = useTheme();
  const isLeadership = member.role === 'Captain' || member.role === 'Vice-Captain';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="glass-panel glass-panel-gold-hover"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        backgroundColor: isDark ? 'rgba(43, 49, 46, 0.78)' : 'rgba(255, 255, 255, 0.65)',
        border: isDark ? '1px solid rgba(216, 200, 184, 0.2)' : '1px solid rgba(54, 61, 57, 0.14)',
        boxShadow: isDark ? '0 10px 30px rgba(0, 0, 0, 0.35)' : '0 10px 30px rgba(54, 61, 57, 0.08)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top Banner Tag */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.3rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          background: isDark ? '#D8C8B8' : '#363D39',
          color: isDark ? '#363D39' : '#D8C8B8',
          boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.4)' : '0 2px 8px rgba(54, 61, 57, 0.25)',
        }}
      >
        <span>{member.id}</span>
      </div>

      {isLeadership && (
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 2,
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: isDark ? 'rgba(216, 200, 184, 0.18)' : 'rgba(54, 61, 57, 0.1)',
            backdropFilter: 'blur(8px)',
            border: isDark ? '1px solid rgba(216, 200, 184, 0.35)' : '1px solid rgba(54, 61, 57, 0.25)',
            color: isDark ? '#F6F1EC' : '#363D39',
          }}
        >
          Leadership
        </div>
      )}

      {/* Image Container with Zoom effect */}
      <div
        style={{
          position: 'relative',
          height: '240px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: isDark ? '#262B28' : '#C5B5A5',
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="member-img"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: '1.25rem 1.4rem 1.5rem 1.4rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Role & Name */}
        <div style={{ marginBottom: '0.75rem' }}>
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: isDark ? '#D8C8B8' : '#363D39',
              marginBottom: '0.2rem',
            }}
          >
            {member.role}
          </div>
          <h3
            style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              color: isDark ? '#F6F1EC' : '#222724',
              lineHeight: 1.2,
            }}
          >
            {member.name}
          </h3>
        </div>

        {/* Superpower Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '0.5rem',
            background: isDark ? 'rgba(216, 200, 184, 0.12)' : 'rgba(54, 61, 57, 0.08)',
            border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.18)',
            marginBottom: '0.85rem',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: isDark ? '#F6F1EC' : '#222724',
          }}
        >
          <Sparkles size={14} color={isDark ? '#D8C8B8' : '#363D39'} />
          <span>{member.superpower}</span>
        </div>

        {/* Motto quote */}
        <p
          style={{
            fontSize: '0.85rem',
            fontStyle: 'italic',
            color: isDark ? '#C0B5AA' : '#4E5651',
            lineHeight: 1.5,
            marginBottom: '1rem',
            flex: 1,
            fontWeight: 500,
          }}
        >
          "{member.motto}"
        </p>

        {/* Primary Strength Tag */}
        <div
          style={{
            fontSize: '0.78rem',
            color: isDark ? '#C0B5AA' : '#4E5651',
            marginBottom: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span style={{ color: isDark ? '#948B82' : '#717B74' }}>Strength:</span>
          <strong style={{ color: isDark ? '#D8C8B8' : '#363D39' }}>{member.strength}</strong>
        </div>

        {/* Button to open profile dossier */}
        <button
          onClick={() => onSelect(member)}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.75rem',
            backgroundColor: isDark ? '#D8C8B8' : '#363D39',
            color: isDark ? '#363D39' : '#D8C8B8',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
            boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.35)' : '0 4px 12px rgba(54, 61, 57, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDark ? '#EDE4DB' : '#1E2320';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isDark ? '#D8C8B8' : '#363D39';
          }}
        >
          <Eye size={15} />
          <span>View Full Dossier</span>
        </button>
      </div>

      <style>{`
        .glass-panel:hover .member-img {
          transform: scale(1.08);
        }
      `}</style>
    </motion.div>
  );
}

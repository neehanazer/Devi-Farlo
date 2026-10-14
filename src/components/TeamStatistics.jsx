import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Eye, Fingerprint, Sparkles } from 'lucide-react';
import { teamStats } from '../data/teamData';
import { useTheme } from '../context/ThemeContext';

function AnimatedCounter({ endValue, inView, isDark }) {
  const [display, setDisplay] = useState('00');
  const [isInfinity, setIsInfinity] = useState(false);

  useEffect(() => {
    if (!inView) return;

    if (endValue === "∞") {
      const progression = [1, 2, 3, 4, 5, 6, 7, 8, 12, 18, 29, 45, 72, 99, 250, 600, 999];
      let idx = 0;

      const timer = setInterval(() => {
        if (idx < progression.length) {
          setDisplay(String(progression[idx]).padStart(2, '0'));
          idx++;
        } else {
          clearInterval(timer);
          setDisplay("∞");
          setIsInfinity(true);
        }
      }, 70);

      return () => clearInterval(timer);
    }

    const target = Number(endValue);
    let start = 0;
    const duration = 1400; // ms
    const stepTime = Math.max(Math.floor(duration / (target || 1)), 60);

    const timer = setInterval(() => {
      start += 1;
      if (start >= target) {
        setDisplay(String(target).padStart(2, '0'));
        clearInterval(timer);
      } else {
        setDisplay(String(start).padStart(2, '0'));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, endValue]);

  if (endValue === "∞") {
    return (
      <motion.span
        key={display}
        initial={{ opacity: 0.8, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          scale: isInfinity ? [1, 1.25, 1] : 1,
        }}
        transition={{ duration: isInfinity ? 0.6 : 0.08, ease: "easeOut" }}
        style={{
          display: 'inline-block',
          textShadow: isInfinity ? (isDark ? '0 0 25px rgba(216, 200, 184, 0.4)' : '0 0 25px rgba(54, 61, 57, 0.2)') : 'none',
          color: isInfinity ? (isDark ? '#F6F1EC' : '#363D39') : (isDark ? '#C0B5AA' : '#4E5651'),
        }}
      >
        {display}
      </motion.span>
    );
  }

  return <span>{display}</span>;
}

export default function TeamStatistics() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const iconColor = isDark ? '#D8C8B8' : '#363D39';

  const getIcon = (index) => {
    switch (index) {
      case 0: return <Users size={22} color={iconColor} />;
      case 1: return <Eye size={22} color={iconColor} />;
      case 2: return <Fingerprint size={22} color={iconColor} />;
      case 3: return <Sparkles size={22} color={iconColor} />;
      default: return <Users size={22} color={iconColor} />;
    }
  };

  return (
    <section
      id="stats"
      ref={ref}
      style={{
        padding: '3rem 0',
        position: 'relative',
        background: isDark 
          ? 'linear-gradient(180deg, #363D39 0%, #2A302D 50%, #363D39 100%)'
          : 'linear-gradient(180deg, #D8C8B8 0%, #E3D7CA 50%, #D8C8B8 100%)',
        borderTop: isDark ? '1px solid rgba(216, 200, 184, 0.15)' : '1px solid rgba(54, 61, 57, 0.12)',
        borderBottom: isDark ? '1px solid rgba(216, 200, 184, 0.15)' : '1px solid rgba(54, 61, 57, 0.12)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container-custom">
        <div className="stats-grid">
          {teamStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-gold-hover stats-card"
              style={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: isDark ? 'rgba(43, 49, 46, 0.75)' : 'rgba(255, 255, 255, 0.65)',
                border: isDark ? '1px solid rgba(216, 200, 184, 0.18)' : '1px solid rgba(54, 61, 57, 0.14)',
                boxShadow: isDark ? '0 10px 25px rgba(0, 0, 0, 0.3)' : '0 10px 25px rgba(54, 61, 57, 0.08)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                className="stats-icon-wrap"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  background: isDark ? 'rgba(216, 200, 184, 0.12)' : 'rgba(54, 61, 57, 0.08)',
                  border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.18)',
                  marginBottom: '0.85rem',
                }}
              >
                {getIcon(index)}
              </div>

              {/* Stat number with progressive counting animation */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: '0.45rem',
                  letterSpacing: '-0.02em',
                  color: isDark ? '#F6F1EC' : '#363D39',
                  minHeight: '1.1em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AnimatedCounter
                  endValue={item.value}
                  inView={isInView}
                  isDark={isDark}
                />
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.7rem, 2.2vw, 0.85rem)',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isDark ? '#D8C8B8' : '#222724',
                  marginBottom: '0.25rem',
                }}
              >
                {item.label}
              </div>

              {/* Sub description */}
              <div
                style={{
                  fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                  color: isDark ? '#C0B5AA' : '#4E5651',
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .stats-card {
          padding: 1.75rem 1.25rem;
        }
        .stats-icon-wrap {
          width: 48px;
          height: 48px;
        }
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .stats-card {
            padding: 1.25rem 0.85rem;
          }
          .stats-icon-wrap {
            width: 40px;
            height: 40px;
            margin-bottom: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'antd';
import { Camera } from 'lucide-react';
import { teamGalleryImages } from '../data/teamData';
import { useTheme } from '../context/ThemeContext';

export default function Gallery() {
  const { isDark } = useTheme();

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: isDark ? 'rgba(34, 39, 36, 0.7)' : 'rgba(234, 225, 215, 0.65)',
        borderTop: isDark ? '1px solid rgba(216, 200, 184, 0.1)' : '1px solid rgba(54, 61, 57, 0.1)',
        borderBottom: isDark ? '1px solid rgba(216, 200, 184, 0.1)' : '1px solid rgba(54, 61, 57, 0.1)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div
            className="section-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.35rem 0.95rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              background: isDark ? 'rgba(216, 200, 184, 0.12)' : 'rgba(54, 61, 57, 0.08)',
              color: isDark ? '#D8C8B8' : '#363D39',
              border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.18)',
            }}
          >
            <Camera size={14} />
            <span>PHOTO GALLERY</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              marginBottom: '0.8rem',
              lineHeight: 1.15,
              color: isDark ? '#F6F1EC' : '#222724',
            }}
          >
            Moments in <span className={isDark ? 'gradient-text-cream' : ''} style={!isDark ? { color: '#363D39' } : {}}>Motion</span>
          </h2>

          <p
            style={{
              color: isDark ? '#C0B5AA' : '#4E5651',
              fontSize: '1rem',
              lineHeight: 1.5,
              margin: '0 auto',
            }}
          >
            A visual showcase of DEVI FARLO — click any image to view in full resolution.
          </p>
        </div>

        {/* Pure Image Gallery (No writings or text on images) */}
        <Image.PreviewGroup>
          <div className="pure-gallery-grid">
            {teamGalleryImages.map((img, idx) => (
              <motion.div
                key={img.id || img.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.06 }}
                className="pure-gallery-card"
                style={{
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  backgroundColor: isDark ? 'rgba(54, 61, 57, 0.6)' : 'rgba(255, 255, 255, 0.7)',
                  border: isDark ? '1px solid rgba(216, 200, 184, 0.16)' : '1px solid rgba(54, 61, 57, 0.12)',
                  boxShadow: isDark
                    ? '0 8px 24px rgba(0, 0, 0, 0.35)'
                    : '0 8px 24px rgba(54, 61, 57, 0.08)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                }}
              >
                <Image
                  src={img.url}
                  alt="DEVI FARLO Gallery Photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  placeholder={
                    <div
                      style={{
                        width: '100%',
                        height: '320px',
                        backgroundColor: isDark ? '#2B312E' : '#EAE1D7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Camera size={26} color={isDark ? '#948B82' : '#717B74'} />
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </Image.PreviewGroup>
      </div>

      <style>{`
        .pure-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .pure-gallery-card {
          aspect-ratio: 3 / 4;
          display: flex;
        }

        .pure-gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3) !important;
          border-color: rgba(216, 200, 184, 0.4) !important;
        }

        .pure-gallery-card:hover img {
          transform: scale(1.06) !important;
        }

        /* Ant Design Image Wrapper */
        .ant-image {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
        }

        .ant-image-img {
          height: 100% !important;
          object-fit: cover !important;
          object-position: center top !important;
        }

        @media (max-width: 1200px) {
          .pure-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.15rem;
          }
        }

        @media (max-width: 768px) {
          .pure-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .pure-gallery-card {
            border-radius: 0.85rem !important;
          }
        }

        @media (max-width: 480px) {
          .pure-gallery-grid {
            grid-template-columns: 1fr;
            max-width: 360px;
            margin: 0 auto;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

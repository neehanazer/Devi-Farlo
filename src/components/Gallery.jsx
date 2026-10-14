import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'antd';
import { Camera, ZoomIn } from 'lucide-react';
import { teamGalleryImages } from '../data/teamData';

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding" style={{ position: 'relative', backgroundColor: 'rgba(43, 49, 46, 0.4)' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-badge">
            <Camera size={14} />
            <span>VISUAL CHRONICLES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Moments in <span className="gradient-text-cream">Motion</span>
          </h2>
          <p style={{ color: '#C0B5AA', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Glimpses of DEVI FARLO in our element: strategizing, coding, iterating, and celebrating breakthroughs as one.
          </p>
        </div>

        {/* Gallery Grid with Ant Design Image.PreviewGroup */}
        <Image.PreviewGroup>
          <div className="gallery-grid">
            {teamGalleryImages.map((img, idx) => (
              <motion.div
                key={img.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel gallery-card"
                style={{
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  backgroundColor: 'rgba(54, 61, 57, 0.65)',
                  border: '1px solid rgba(216, 200, 184, 0.15)',
                }}
              >
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                  <Image
                    src={img.url}
                    alt={img.title}
                    style={{
                      width: '100%',
                      height: '230px',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    placeholder={
                      <div
                        style={{
                          width: '100%',
                          height: '230px',
                          backgroundColor: '#2B312E',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Camera size={24} color="#948B82" />
                      </div>
                    }
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(34, 39, 36, 0.75)',
                      borderRadius: '50%',
                      padding: '6px',
                      color: '#D8C8B8',
                      pointerEvents: 'none',
                      border: '1px solid rgba(216, 200, 184, 0.25)',
                    }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>

                <div style={{ padding: '1.15rem 1.35rem', flex: 1, backgroundColor: 'rgba(43, 49, 46, 0.85)' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F6F1EC', marginBottom: '0.3rem' }}>
                    {img.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#C0B5AA', lineHeight: 1.5 }}>
                    {img.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Image.PreviewGroup>
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
            margin: 0 auto;
            gap: 1.25rem;
          }
          .gallery-card {
            border-radius: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}

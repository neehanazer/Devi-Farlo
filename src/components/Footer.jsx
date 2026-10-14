import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Stats", href: "#stats" },
    { name: "Meet Our Team", href: "#team" },
    { name: "Digital IDs", href: "#digital-ids" },
    { name: "Team Anthem", href: "#team-message" },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#C5B5A5',
        borderTop: '1px solid rgba(54, 61, 57, 0.15)',
        padding: '3.5rem 0 2.5rem 0',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Main Content Layout */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto',
          }}
        >
          {/* Brand Name */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 5vw, 2rem)',
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: '#222724',
              marginBottom: '0.5rem',
            }}
          >
            DEVI FARLO
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1rem, 3.5vw, 1.15rem)',
              fontWeight: 900,
              letterSpacing: '0.12em',
              color: '#363D39',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            "You can do it."
          </div>

          {/* Slogan */}
          <p
            style={{
              fontSize: '0.95rem',
              color: '#4E5651',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '520px',
              padding: '0 0.5rem',
              fontWeight: 500,
            }}
          >
            "Different individuals. One team. Endless possibilities."
          </p>

          {/* Navigation Links */}
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                style={{
                  color: '#4E5651',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                  padding: '0.25rem 0.5rem',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#181C1A')}
                onMouseLeave={(e) => (e.target.style.color = '#4E5651')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Bottom Copyright & Back to Top */}
          <div className="footer-bottom-row" style={{ color: '#4E5651', fontWeight: 500 }}>
            <div>
              © {currentYear} DEVI FARLO. All rights reserved.
            </div>

            <button
              onClick={() => scrollTo('#hero')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'transparent',
                border: 'none',
                color: '#363D39',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 700,
                transition: 'color 0.2s',
                padding: '0.4rem',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#181C1A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#363D39')}
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 2.25rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(216, 200, 184, 0.1);
          width: 100%;
        }
        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          alignItems: center;
          width: 100%;
          font-size: 0.82rem;
          color: #948B82;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        @media (max-width: 640px) {
          .footer-nav {
            gap: 0.85rem 0.5rem;
            margin-bottom: 1.75rem;
            padding-bottom: 1.5rem;
          }
          .footer-bottom-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
          }
        }
      `}</style>
    </footer>
  );
}

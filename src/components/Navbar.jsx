import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Users, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Stats", href: "#stats" },
    { name: "Meet Our Team", href: "#team" },
    { name: "Team Anthem", href: "#team-message" },
  ];

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '0.65rem 0' : '1rem 0',
          transition: 'all 0.3s ease',
          backgroundColor: isDark
            ? (isScrolled ? 'rgba(54, 61, 57, 0.96)' : 'rgba(54, 61, 57, 0.85)')
            : (isScrolled ? 'rgba(216, 200, 184, 0.96)' : 'rgba(216, 200, 184, 0.85)'),
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isDark
            ? (isScrolled ? '1px solid rgba(216, 200, 184, 0.15)' : '1px solid rgba(216, 200, 184, 0.08)')
            : (isScrolled ? '1px solid rgba(54, 61, 57, 0.15)' : '1px solid rgba(54, 61, 57, 0.08)'),
        }}
      >
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a
            href="#hero"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <img
              src="/images/logo.png"
              alt="DEVI FARLO Logo"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                objectFit: 'contain',
                flexShrink: 0,
                boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(54, 61, 57, 0.15)',
              }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '0.04em', color: isDark ? '#F6F1EC' : '#222724', lineHeight: 1.1 }}>
                DEVI FARLO
              </div>
              <div style={{ fontSize: '0.62rem', color: isDark ? '#D8C8B8' : '#363D39', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                You Have To Do It
              </div>
            </div>
          </a>

          {/* Desktop Nav Links + Theme Toggle */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.15rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                style={{
                  color: isDark ? '#C0B5AA' : '#4E5651',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                  position: 'relative',
                  padding: '0.25rem 0.2rem',
                }}
                onMouseEnter={(e) => (e.target.style.color = isDark ? '#D8C8B8' : '#181C1A')}
                onMouseLeave={(e) => (e.target.style.color = isDark ? '#C0B5AA' : '#4E5651')}
              >
                {link.name}
              </a>
            ))}

            {/* Desktop Theme Switcher */}
            <button
              onClick={toggleTheme}
              style={{
                background: isDark ? 'rgba(216, 200, 184, 0.15)' : 'rgba(54, 61, 57, 0.08)',
                border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.2)',
                borderRadius: '9999px',
                padding: '0.4rem 0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: isDark ? '#D8C8B8' : '#363D39',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 700,
                transition: 'all 0.2s ease',
                marginLeft: '0.35rem',
              }}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme mode"
            >
              {isDark ? (
                <>
                  <Sun size={14} color="#D8C8B8" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon size={14} color="#363D39" />
                  <span>Dark</span>
                </>
              )}
            </button>

            {/* Instagram Link */}
            <a
              href="https://instagram.com/devi_farloo?utm_source=qr&psln=MXc4aGlqaW05Mno4dg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: isDark ? 'rgba(216, 200, 184, 0.12)' : 'rgba(54, 61, 57, 0.08)',
                border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.2)',
                borderRadius: '9999px',
                padding: '0.4rem 0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: isDark ? '#D8C8B8' : '#363D39',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontWeight: 700,
                transition: 'all 0.2s ease',
              }}
              title="Follow DEVI FARLO on Instagram @devi_farloo"
              aria-label="Instagram Profile"
              className="nav-instagram-btn"
            >
              <InstagramIcon size={14} color={isDark ? '#D8C8B8' : '#363D39'} />
              <span>@devi_farloo</span>
            </a>
          </nav>

          {/* Mobile Right Controls: Theme Toggle & Menu Toggle */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }} className="mobile-controls">
            <button
              onClick={toggleTheme}
              style={{
                background: isDark ? 'rgba(216, 200, 184, 0.15)' : 'rgba(54, 61, 57, 0.08)',
                border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.2)',
                borderRadius: '0.5rem',
                color: isDark ? '#D8C8B8' : '#363D39',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px',
              }}
              aria-label="Toggle theme mode"
            >
              {isDark ? <Sun size={19} color="#D8C8B8" /> : <Moon size={19} color="#363D39" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: isDark ? 'rgba(216, 200, 184, 0.15)' : 'rgba(54, 61, 57, 0.08)',
                border: isDark ? '1px solid rgba(216, 200, 184, 0.3)' : '1px solid rgba(54, 61, 57, 0.2)',
                borderRadius: '0.5rem',
                color: isDark ? '#D8C8B8' : '#363D39',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px',
                minHeight: '40px',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={22} color={isDark ? '#D8C8B8' : '#363D39'} />
              ) : (
                <Menu size={22} color={isDark ? '#D8C8B8' : '#363D39'} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: isDark ? 'rgba(43, 49, 46, 0.98)' : 'rgba(216, 200, 184, 0.98)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
              zIndex: 1100,
              padding: '1.25rem 1.25rem 2rem 1.25rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Drawer Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  borderBottom: isDark ? '1px solid rgba(216, 200, 184, 0.15)' : '1px solid rgba(54, 61, 57, 0.15)',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <img
                    src="/images/logo.png"
                    alt="DEVI FARLO Logo"
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      objectFit: 'contain',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 800, color: isDark ? '#F6F1EC' : '#222724', fontSize: '1rem' }}>DEVI FARLO</div>
                    <div style={{ fontSize: '0.65rem', color: isDark ? '#D8C8B8' : '#363D39', fontWeight: 600 }}>"You have to do it."</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: isDark ? 'rgba(216, 200, 184, 0.1)' : 'rgba(54, 61, 57, 0.08)',
                    border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.2)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isDark ? '#D8C8B8' : '#363D39',
                    cursor: 'pointer',
                  }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Theme Toggle Tile inside mobile drawer */}
              <div
                onClick={toggleTheme}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.85rem',
                  backgroundColor: isDark ? 'rgba(54, 61, 57, 0.7)' : 'rgba(255, 255, 255, 0.65)',
                  border: isDark ? '1px solid rgba(216, 200, 184, 0.2)' : '1px solid rgba(54, 61, 57, 0.15)',
                  marginBottom: '1rem',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  {isDark ? <Sun size={18} color="#D8C8B8" /> : <Moon size={18} color="#363D39" />}
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: isDark ? '#F6F1EC' : '#222724' }}>
                    {isDark ? "Light Mode" : "Dark Mode"}
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: isDark ? '#D8C8B8' : '#363D39', textTransform: 'uppercase' }}>
                  Switch
                </span>
              </div>

              {/* Links list */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isDark ? '#F6F1EC' : '#222724',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      padding: '0.85rem 0.25rem',
                      borderBottom: isDark ? '1px solid rgba(216, 200, 184, 0.1)' : '1px solid rgba(54, 61, 57, 0.1)',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} color={isDark ? '#D8C8B8' : '#363D39'} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick action button inside drawer */}
            <div style={{ paddingTop: '1.5rem', marginTop: '1rem' }}>
              <button
                onClick={() => scrollTo('#team')}
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  borderRadius: '0.75rem',
                  backgroundColor: isDark ? '#D8C8B8' : '#363D39',
                  color: isDark ? '#363D39' : '#D8C8B8',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Users size={18} />
                <span>Meet All 8 Members</span>
              </button>

              <a
                href="https://instagram.com/devi_farloo?utm_source=qr&psln=MXc4aGlqaW05Mno4dg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  marginTop: '0.75rem',
                  padding: '0.85rem',
                  borderRadius: '0.75rem',
                  background: isDark ? 'rgba(216, 200, 184, 0.12)' : 'rgba(54, 61, 57, 0.08)',
                  border: isDark ? '1px solid rgba(216, 200, 184, 0.25)' : '1px solid rgba(54, 61, 57, 0.2)',
                  color: isDark ? '#F6F1EC' : '#222724',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxSizing: 'border-box',
                }}
              >
                <InstagramIcon size={17} color={isDark ? '#D8C8B8' : '#363D39'} />
                <span>Follow @devi_farloo</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-controls {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

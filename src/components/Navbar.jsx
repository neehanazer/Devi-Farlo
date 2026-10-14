import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Users } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "Digital IDs", href: "#digital-ids" },
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
          backgroundColor: isScrolled ? 'rgba(216, 200, 184, 0.95)' : 'rgba(216, 200, 184, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(54, 61, 57, 0.15)' : '1px solid rgba(54, 61, 57, 0.08)',
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
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '9px',
                background: '#363D39',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D8C8B8',
                boxShadow: '0 4px 12px rgba(54, 61, 57, 0.2)',
                fontWeight: 900,
                fontSize: '1rem',
                flexShrink: 0,
              }}
            >
              DF
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '0.04em', color: '#222724', lineHeight: 1.1 }}>
                DEVI FARLO
              </div>
              <div style={{ fontSize: '0.62rem', color: '#363D39', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                You Can Do It
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
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
                  color: '#4E5651',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                  position: 'relative',
                  padding: '0.25rem 0.2rem',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#181C1A')}
                onMouseLeave={(e) => (e.target.style.color = '#4E5651')}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'rgba(54, 61, 57, 0.08)',
              border: '1px solid rgba(54, 61, 57, 0.2)',
              borderRadius: '0.5rem',
              color: '#363D39',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '40px',
              minHeight: '40px',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} color="#363D39" /> : <Menu size={22} color="#363D39" />}
          </button>
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
              backgroundColor: 'rgba(216, 200, 184, 0.98)',
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
                  borderBottom: '1px solid rgba(54, 61, 57, 0.15)',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: '#363D39',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#D8C8B8',
                      fontWeight: 900,
                      fontSize: '0.9rem',
                    }}
                  >
                    DF
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#222724', fontSize: '1rem' }}>DEVI FARLO</div>
                    <div style={{ fontSize: '0.65rem', color: '#363D39', fontWeight: 600 }}>"You can do it."</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: 'rgba(54, 61, 57, 0.08)',
                    border: '1px solid rgba(54, 61, 57, 0.2)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#363D39',
                    cursor: 'pointer',
                  }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
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
                      color: '#222724',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      padding: '0.85rem 0.25rem',
                      borderBottom: '1px solid rgba(54, 61, 57, 0.1)',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} color="#363D39" />
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
                  backgroundColor: '#363D39',
                  color: '#D8C8B8',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(54, 61, 57, 0.25)',
                }}
              >
                <Users size={18} />
                <span>Meet All 8 Members</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

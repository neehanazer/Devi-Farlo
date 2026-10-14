import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Users } from 'lucide-react';
import { Input } from 'antd';
import { teamMembers } from '../data/teamData';
import { useTheme } from '../context/ThemeContext';
import MemberCard from './MemberCard';

export default function MeetTeam({ onSelectMember }) {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Members (08)' },
    { id: 'leadership', label: 'Leadership (02)' },
    { id: 'engineering', label: 'Tech & AI (03)' },
    { id: 'creative', label: 'Design & Strategy (03)' },
  ];

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      // Category filter
      let matchesCategory = true;
      if (activeCategory === 'leadership') {
        matchesCategory = member.role === 'Captain' || member.role === 'Vice-Captain';
      } else if (activeCategory === 'engineering') {
        matchesCategory = ['DF-03', 'DF-05', 'DF-07', 'DF-08'].includes(member.id);
      } else if (activeCategory === 'creative') {
        matchesCategory = ['DF-04', 'DF-06'].includes(member.id);
      }

      // Search query filter
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.strength.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.superpower.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.id.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="team" className="section-padding" style={{ position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
          <div className="section-badge">
            <Users size={14} />
            <span>THE EIGHT MINDS OF DEVI FARLO</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              marginBottom: '0.85rem',
            }}
          >
            Meet Our <span className="gradient-text-sage">Team</span>
          </h2>
          <p style={{ 
            color: isDark ? '#D8C8B8' : '#4E5651', 
            fontSize: 'clamp(0.92rem, 2.4vw, 1.05rem)', 
            lineHeight: 1.6, 
            padding: '0 0.5rem', 
            fontWeight: 500 
          }}>
            Eight unique perspectives forged into an inseparable alliance.
            Every member brings distinct mastery, boundless passion, and an unwavering commitment to the motto: <em>"You can do it."</em>
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="team-filter-bar">
          {/* Horizontal scrollable category tabs on mobile */}
          <div 
            className="team-tabs-scroll"
            style={{
              backgroundColor: isDark ? 'rgba(38, 43, 40, 0.85)' : 'rgba(54, 61, 57, 0.08)',
              border: isDark ? '1px solid rgba(216, 200, 184, 0.2)' : '1px solid rgba(54, 61, 57, 0.15)',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.5rem 1.1rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive 
                      ? (isDark ? '#D8C8B8' : '#363D39') 
                      : 'transparent',
                    color: isActive 
                      ? (isDark ? '#363D39' : '#D8C8B8') 
                      : (isDark ? '#C0B5AA' : '#4E5651'),
                    boxShadow: isActive ? '0 4px 15px rgba(0, 0, 0, 0.25)' : 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="team-search-wrap">
            <Input
              placeholder="Search by name, role, or superpower..."
              prefix={<Search size={16} color={isDark ? '#D8C8B8' : '#4E5651'} style={{ marginRight: '6px' }} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              allowClear
              style={{
                backgroundColor: isDark ? 'rgba(43, 49, 46, 0.85)' : 'rgba(255, 255, 255, 0.75)',
                borderColor: isDark ? 'rgba(216, 200, 184, 0.25)' : 'rgba(54, 61, 57, 0.2)',
                color: isDark ? '#F6F1EC' : '#222724',
                borderRadius: '9999px',
                padding: '0.55rem 1.1rem',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Member Cards Grid */}
        <div className="team-cards-grid">
          {filteredMembers.map((member, idx) => (
            <MemberCard
              key={member.id}
              member={member}
              index={idx}
              onSelect={onSelectMember}
            />
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: isDark ? '#C0B5AA' : '#4E5651',
              fontSize: '1rem',
            }}
          >
            No team members matched your search criteria.
          </div>
        )}
      </div>

      <style>{`
        .team-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .team-tabs-scroll {
          display: flex;
          gap: 0.4rem;
          background-color: rgba(54, 61, 57, 0.6);
          padding: 0.35rem;
          border-radius: 9999px;
          border: 1px solid rgba(216, 200, 184, 0.15);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .team-tabs-scroll::-webkit-scrollbar {
          display: none;
        }
        .team-search-wrap {
          min-width: 270px;
        }
        .team-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 1.75rem;
        }

        @media (max-width: 768px) {
          .team-filter-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
            margin-bottom: 1.75rem;
          }
          .team-tabs-scroll {
            width: 100%;
            justifyContent: flex-start;
          }
          .team-search-wrap {
            width: 100%;
            min-width: 100%;
          }
          .team-cards-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
            margin: 0 auto;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}

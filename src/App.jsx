import React, { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamStatistics from './components/TeamStatistics';
import MeetTeam from './components/MeetTeam';
import Gallery from './components/Gallery';
import TeamMessage from './components/TeamMessage';
import Footer from './components/Footer';
import ProfileModal from './components/ProfileModal';
import { teamMembers } from './data/teamData';

function MainApp() {
  const [selectedMember, setSelectedMember] = useState(null);
  const { isDark } = useTheme();

  // Modal navigation helpers
  const currentIndex = selectedMember
    ? teamMembers.findIndex((m) => m.id === selectedMember.id)
    : -1;

  const handlePrevMember = () => {
    if (currentIndex > 0) {
      setSelectedMember(teamMembers[currentIndex - 1]);
    }
  };

  const handleNextMember = () => {
    if (currentIndex < teamMembers.length - 1) {
      setSelectedMember(teamMembers[currentIndex + 1]);
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: isDark ? '#D8C8B8' : '#363D39',
          colorBgBase: isDark ? '#363D39' : '#D8C8B8',
          colorBgContainer: isDark ? '#2B312E' : '#EAE1D7',
          colorBorder: isDark ? 'rgba(216, 200, 184, 0.2)' : 'rgba(54, 61, 57, 0.2)',
          colorTextBase: isDark ? '#F6F1EC' : '#222724',
          colorTextSecondary: isDark ? '#C0B5AA' : '#4E5651',
          borderRadius: 12,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        },
      }}
    >
      <div
        className="app-container"
        style={{
          minHeight: '100vh',
          backgroundColor: isDark ? '#363D39' : '#D8C8B8',
          color: isDark ? '#F6F1EC' : '#222724',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        {/* Navigation Bar with Theme Toggle */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* 14. Team Statistics */}
        <TeamStatistics />

        {/* Meet Our Team (All 8 Members) */}
        <MeetTeam onSelectMember={setSelectedMember} />

        {/* Authentic Team Gallery & Live Archive */}
        <Gallery />

        {/* 13. Team Message (Emotional Highlight & Core Anthem) */}
        <TeamMessage />

        {/* 15. Minimal & Sophisticated Footer */}
        <Footer />

        {/* Interactive Member Profile Modal */}
        <ProfileModal
          member={selectedMember}
          visible={Boolean(selectedMember)}
          onClose={() => setSelectedMember(null)}
          onPrev={handlePrevMember}
          onNext={handleNextMember}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < teamMembers.length - 1}
        />
      </div>
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}


import React, { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamStatistics from './components/TeamStatistics';
import MeetTeam from './components/MeetTeam';
import DigitalIDCards from './components/DigitalIDCards';
import TeamMessage from './components/TeamMessage';
import Footer from './components/Footer';
import ProfileModal from './components/ProfileModal';
import { teamMembers } from './data/teamData';

export default function App() {
  const [selectedMember, setSelectedMember] = useState(null);

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
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#363D39',
          colorBgBase: '#D8C8B8',
          colorBgContainer: '#EAE1D7',
          colorBorder: 'rgba(54, 61, 57, 0.2)',
          colorTextBase: '#222724',
          colorTextSecondary: '#4E5651',
          borderRadius: 12,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        },
      }}
    >
      <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#D8C8B8', color: '#222724' }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* 14. Team Statistics */}
        <TeamStatistics />

        {/* Meet Our Team (All 8 Members) */}
        <MeetTeam onSelectMember={setSelectedMember} />

        {/* Collectible Digital ID Passes */}
        <DigitalIDCards />

        {/* 13. Team Message (Emotional Highlight & Editable Leadership Messages) */}
        <TeamMessage />

        {/* 15. Minimal & Sophisticated Footer */}
        <Footer />

        {/* Interactive Member Profile Dossier Modal */}
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

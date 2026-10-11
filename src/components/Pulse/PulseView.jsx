import React, { useState } from 'react';
import PulseHome from './PulseHome';
import PulseChannel from './PulseChannel';

export default function PulseView({ onStartCall }) {
  const [activeChannelId, setActiveChannelId] = useState('callcentre-agent');
  const [viewMode, setViewMode] = useState('channel'); // 'home' or 'channel'

  const handleSelectChannel = (channelId) => {
    setActiveChannelId(channelId);
    setViewMode('channel');
  };

  const handleBackToHome = () => {
    setViewMode('home');
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {viewMode === 'home' ? (
        <PulseHome onSelectChannel={handleSelectChannel} />
      ) : (
        <PulseChannel
          channelId={activeChannelId}
          onBack={handleBackToHome}
          onStartCall={onStartCall}
        />
      )}
    </div>
  );
}

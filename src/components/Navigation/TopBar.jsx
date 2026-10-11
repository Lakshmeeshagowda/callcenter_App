import React from 'react';
import { Menu, Bell, Trophy, Zap, ShieldCheck } from 'lucide-react';
import { AGENT_PROFILE } from '../../data/callCenterData';

export default function TopBar({
  onToggleMobileMenu,
  activeSectionTitle,
  onOpenNotifications,
  unreadCount = 2
}) {
  return (
    <header className="app-topbar">
      <div className="topbar-left">
        <button
          className="mobile-menu-btn"
          onClick={onToggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <Menu size={22} />
        </button>
        <span style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
          {activeSectionTitle}
        </span>
      </div>

      <div className="topbar-right">
        {/* OG Score */}
        <div className="og-score-badge" title="Daily On-Ground Quality and Adherence Score">
          <Zap size={14} color="#2dd4bf" />
          <span>{AGENT_PROFILE.ogScore} OG Score</span>
        </div>

        {/* Hub Rank */}
        <div className="rank-badge" title="Current standing across RT Nagar cluster">
          <Trophy size={14} color="#fbbf24" />
          <span>{AGENT_PROFILE.rank}</span>
        </div>

        {/* Notification Bell */}
        <button
          className="topbar-icon-btn"
          onClick={onOpenNotifications}
          aria-label="Notifications"
          title="Manager notifications & callbacks"
        >
          <Bell size={18} />
          {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
        </button>

        {/* Agent Profile Avatar */}
        <div className="avatar-badge" title={`${AGENT_PROFILE.name} (${AGENT_PROFILE.id})`}>
          {AGENT_PROFILE.initials}
        </div>
      </div>
    </header>
  );
}

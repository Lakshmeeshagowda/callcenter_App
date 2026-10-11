import React from 'react';
import { Home, Compass, Calendar, Radio, Shield, FileText, Phone, PhoneCall, History } from 'lucide-react';

export default function Sidebar({
  activeNav,
  onNavigate,
  activePlanSubTab,
  onPlanSubTabSelect,
  isMobileOpen,
  onCloseMobile,
  onOpenPrivacy,
  onOpenTerms
}) {
  return (
    <aside className={`app-sidebar ${isMobileOpen ? 'open' : ''}`}>
      {/* Brand Header */}
      <div className="sidebar-header">
        <div className="sidebar-brand-badge">OG</div>
        <div className="sidebar-brand-name">On-Ground.ai</div>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <button
          className={`nav-item ${activeNav === 'dashboard' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('dashboard');
            onCloseMobile();
          }}
        >
          <Home size={18} />
          <span>Dashboard</span>
        </button>

        <div>
          <button
            className={`nav-item ${activeNav === 'plan' ? 'active' : ''}`}
            onClick={() => {
              onNavigate('plan');
              onCloseMobile();
            }}
          >
            <Compass size={18} />
            <span>Plan</span>
          </button>

          {activeNav === 'plan' && (
            <div className="nav-sub-group">
              <button
                className={`nav-sub-item ${activePlanSubTab === 'calls_to_make' ? 'active' : ''}`}
                onClick={() => {
                  onPlanSubTabSelect('calls_to_make');
                  onCloseMobile();
                }}
              >
                <Phone size={14} />
                <span>Calls to make</span>
              </button>
              <button
                className={`nav-sub-item ${activePlanSubTab === 'incoming' ? 'active' : ''}`}
                onClick={() => {
                  onPlanSubTabSelect('incoming');
                  onCloseMobile();
                }}
              >
                <PhoneCall size={14} />
                <span>Incoming</span>
              </button>
              <button
                className={`nav-sub-item ${activePlanSubTab === 'recent' ? 'active' : ''}`}
                onClick={() => {
                  onPlanSubTabSelect('recent');
                  onCloseMobile();
                }}
              >
                <History size={14} />
                <span>Recent</span>
              </button>
            </div>
          )}
        </div>

        <button
          className={`nav-item ${activeNav === 'calendar' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('calendar');
            onCloseMobile();
          }}
        >
          <Calendar size={18} />
          <span>Calendar</span>
        </button>

        <button
          className={`nav-item ${activeNav === 'pulse' ? 'active' : ''}`}
          onClick={() => {
            onNavigate('pulse');
            onCloseMobile();
          }}
        >
          <Radio size={18} />
          <span>Pulse</span>
        </button>
      </nav>

      {/* Sidebar Footer with Compliance Links */}
      <div className="sidebar-footer">
        <div className="sidebar-legal-links">
          <button className="legal-link-btn" onClick={onOpenPrivacy}>
            Privacy Policy
          </button>
          <span>·</span>
          <button className="legal-link-btn" onClick={onOpenTerms}>
            Terms of Service
          </button>
        </div>
        <div style={{ fontSize: '10px', color: '#64748b', textAlign: 'center' }}>
          Production v2.4.0 · The Sleep Company Hub
        </div>
      </div>
    </aside>
  );
}

import React, { useState } from 'react';
import Sidebar from './components/Navigation/Sidebar';
import TopBar from './components/Navigation/TopBar';
import DashboardView from './components/Dashboard/DashboardView';
import PlanView from './components/Plan/PlanView';
import CalendarView from './components/Calendar/CalendarView';
import PulseView from './components/Pulse/PulseView';
import LeadsModal from './components/Modals/LeadsModal';
import CallSimulationModal from './components/Modals/CallSimulationModal';
import PrivacyPolicyModal from './components/Modals/PrivacyPolicyModal';
import TermsConditionsModal from './components/Modals/TermsConditionsModal';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [activePlanSubTab, setActivePlanSubTab] = useState('calls_to_make');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Modals state
  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [activeLeadForCall, setActiveLeadForCall] = useState(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // Success toast state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleStartCall = (lead) => {
    setActiveLeadForCall(lead);
    setIsCallModalOpen(true);
  };

  const handleCallCompleted = (log) => {
    showToast(`Call with ${log.leadName} ended (${log.duration}) · Outcome "${log.outcome}" saved to CRM.`);
  };

  const getSectionTitle = () => {
    switch (activeNav) {
      case 'dashboard':
        return 'Call Centre Overview';
      case 'plan':
        return 'Call Planner & Lead Queues';
      case 'calendar':
        return 'Shift & Meeting Calendar';
      case 'pulse':
        return 'Pulse Communication & Coaching';
      default:
        return 'Call Centre App';
    }
  };

  return (
    <div className="app-layout">
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 35
          }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <Sidebar
        activeNav={activeNav}
        onNavigate={(nav) => setActiveNav(nav)}
        activePlanSubTab={activePlanSubTab}
        onPlanSubTabSelect={(sub) => {
          setActiveNav('plan');
          setActivePlanSubTab(sub);
        }}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      {/* Main Content Area */}
      <div className="app-main">
        <TopBar
          onToggleMobileMenu={() => setIsMobileOpen(!isMobileOpen)}
          activeSectionTitle={getSectionTitle()}
          onOpenNotifications={() => {
            setActiveNav('pulse');
            showToast('Loaded latest manager directives and assigned callbacks.');
          }}
          unreadCount={2}
        />

        {/* Global Toast Banner */}
        {toastMessage && (
          <div
            style={{
              position: 'fixed',
              top: '72px',
              right: '24px',
              backgroundColor: '#0f231b',
              color: '#ffffff',
              border: '1px solid #1d9e75',
              padding: '12px 18px',
              borderRadius: '6px',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)',
              zIndex: 90,
              fontSize: '13px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2dd4bf' }} />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Primary View Routing */}
        <div style={{ flex: 1 }}>
          {activeNav === 'dashboard' && (
            <DashboardView
              onOpenLeadsModal={() => setIsLeadsModalOpen(true)}
              onOpenPlanner={() => {
                setActiveNav('plan');
                setActivePlanSubTab('calls_to_make');
              }}
              onStartCall={handleStartCall}
              onOpenOutcome={() => {
                setActiveNav('plan');
                setActivePlanSubTab('recent');
              }}
            />
          )}

          {activeNav === 'plan' && (
            <PlanView
              activeSubTab={activePlanSubTab}
              onSubTabChange={(sub) => setActivePlanSubTab(sub)}
              onStartCall={handleStartCall}
              onInspectLead={(lead) => {
                setIsLeadsModalOpen(true);
              }}
            />
          )}

          {activeNav === 'calendar' && <CalendarView />}

          {activeNav === 'pulse' && (
            <PulseView onStartCall={handleStartCall} />
          )}
        </div>
      </div>

      {/* Interactive Overlays and Modals */}
      <LeadsModal
        isOpen={isLeadsModalOpen}
        onClose={() => setIsLeadsModalOpen(false)}
        onStartCall={handleStartCall}
      />

      <CallSimulationModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        lead={activeLeadForCall}
        onCallCompleted={handleCallCompleted}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TermsConditionsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  );
}

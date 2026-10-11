import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { AGENT_PROFILE } from '../../data/callCenterData';
import KpiCards from './KpiCards';
import MyProgress from './MyProgress';
import WhosWaiting from './WhosWaiting';
import MyEarnings from './MyEarnings';
import MyTasks from './MyTasks';
import CallsChart from './CallsChart';
import CsatChart from './CsatChart';

export default function DashboardView({
  onOpenLeadsModal,
  onOpenPlanner,
  onStartCall,
  onOpenOutcome
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Top Hero Banner */}
      <section className="dashboard-hero">
        <div className="hero-header">
          <div>
            <div className="hero-greeting">Good afternoon</div>
            <h1 className="hero-agent-name">{AGENT_PROFILE.name}</h1>
            <div className="hero-context">
              <span>{AGENT_PROFILE.company}</span>
              <span>·</span>
              <span>{AGENT_PROFILE.unit}</span>
            </div>
          </div>

          <div className="hero-status-wrap">
            <div className="status-indicator">
              <span className="status-dot" />
              <span>{AGENT_PROFILE.status}</span>
            </div>

            <button className="date-select-btn">
              <Calendar size={13} />
              <span>This Week</span>
              <ChevronDown size={13} />
            </button>
          </div>
        </div>

        {/* 4 KPI Cards */}
        <KpiCards />
      </section>

      {/* Main Dashboard Grid */}
      <main className="dashboard-content">
        {/* Left Column: Progress, Waiting, Charts */}
        <div className="dashboard-col">
          <MyProgress />

          <WhosWaiting
            onOpenPlanner={onOpenPlanner}
            onSelectLead={(lead) => onStartCall && onStartCall(lead)}
          />

          <CallsChart />

          <CsatChart />
        </div>

        {/* Right Column: Earnings & Tasks */}
        <div className="dashboard-col">
          <MyEarnings />

          <MyTasks
            onOpenLeadsModal={onOpenLeadsModal}
            onOpenCallbacks={onOpenPlanner}
            onOpenOutcome={onOpenOutcome}
          />
        </div>
      </main>
    </div>
  );
}

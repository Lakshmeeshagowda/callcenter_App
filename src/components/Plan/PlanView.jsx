import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import CallsToMake from './CallsToMake';
import IncomingCalls from './IncomingCalls';
import RecentCalls from './RecentCalls';

export default function PlanView({
  activeSubTab = 'calls_to_make',
  onSubTabChange,
  onStartCall,
  onInspectLead
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Top Header */}
      <section className="planner-header">
        <div>
          <div className="planner-subtitle">Today's calling plan</div>
          <h1 className="planner-title">Planner</h1>
        </div>

        <div className="planner-date-badge">
          <span>Sun, 11 Oct</span>
        </div>
      </section>

      {/* Sub Tabs Selector */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '0 32px', display: 'flex', gap: '8px' }}>
        {[
          { id: 'calls_to_make', label: 'Calls to make' },
          { id: 'incoming', label: 'Incoming' },
          { id: 'recent', label: 'Recent' },
          { id: 'practise', label: 'Practise a call' }
        ].map((tab) => {
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              style={{
                padding: '14px 18px',
                background: 'transparent',
                border: 'none',
                borderBottom: isActive ? '3px solid #1d9e75' : '3px solid transparent',
                color: isActive ? '#0f172a' : '#64748b',
                fontWeight: isActive ? 700 : 500,
                fontSize: '14px',
                cursor: 'pointer'
              }}
              onClick={() => onSubTabChange(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content depending on subtab */}
      <main className="planner-content">
        {activeSubTab === 'calls_to_make' && (
          <CallsToMake
            onStartCall={onStartCall}
            onInspectLead={onInspectLead}
          />
        )}

        {activeSubTab === 'incoming' && (
          <IncomingCalls
            onStartCall={onStartCall}
          />
        )}

        {activeSubTab === 'recent' && (
          <RecentCalls />
        )}

        {activeSubTab === 'practise' && (
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
            <h2 className="section-h2" style={{ marginBottom: '8px' }}>
              Interactive SOP Call Simulator
            </h2>
            <p className="section-p" style={{ marginBottom: '20px' }}>
              Select a retail scenario below to launch a guided audio practice simulation with automated SOP scoring.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', background: '#f8fafc' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#0f5132', background: '#e1f5ee', padding: '2px 6px', borderRadius: '4px' }}>
                  SCENARIO 1 · WALK-OUT RECOVERY
                </span>
                <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '8px 0 4px', color: '#0f172a' }}>
                  Ritu S. - Indiranagar Express Delivery
                </h3>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>
                  Customer tested Smart Luxe mattress in store but left over delivery uncertainty before housewarming.
                </p>
                <button
                  className="btn-rect btn-primary"
                  onClick={() => onStartCall({
                    name: 'Ritu S. (Practice)',
                    phone: '+91 98450 33190',
                    product: 'Smart Luxe Mattress · ₹13,390',
                    expectedValueFormatted: '₹13,390'
                  })}
                >
                  Start Practice Call
                </button>
              </div>

              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', background: '#f8fafc' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#92400e', background: '#fef3c7', padding: '2px 6px', borderRadius: '4px' }}>
                  SCENARIO 2 · OBJECTION HANDLING
                </span>
                <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '8px 0 4px', color: '#0f172a' }}>
                  Mukunda - 12-Month EMI Pitch
                </h3>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>
                  Customer has doctor prescription for Ortho GRID but is price sensitive on upfront lumpsum.
                </p>
                <button
                  className="btn-rect btn-primary"
                  onClick={() => onStartCall({
                    name: 'Mukunda (Practice)',
                    phone: '+91 97401 22910',
                    product: 'Ortho GRID · ₹8,490',
                    expectedValueFormatted: '₹8,490'
                  })}
                >
                  Start Practice Call
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

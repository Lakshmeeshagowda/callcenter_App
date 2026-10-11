import React from 'react';
import { Bot, MessageSquare, Users, Sparkles, Award, ChevronRight, Hash } from 'lucide-react';
import { PULSE_DATA } from '../../data/callCenterData';

export default function PulseHome({ onSelectChannel }) {
  const roleAgents = PULSE_DATA.channels.filter((c) => c.isRoleAgent);
  const generalChannels = PULSE_DATA.channels.filter((c) => !c.isRoleAgent && c.id !== 'kudos');

  return (
    <div style={{ padding: '24px 32px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* AvaniBot Coach Hero Banner */}
      <div style={{ background: '#0f231b', borderRadius: '10px', padding: '24px', color: '#ffffff', marginBottom: '24px', border: '1px solid #16382b' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <div style={{ width: '40px', height: '40px', background: '#133a2b', border: '1px solid #1d9e75', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bot size={22} color="#2dd4bf" />
          </div>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>AvaniBot · AI Sales Coach</h2>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Real-time retail coaching, manager digests, and shift recommendations</p>
          </div>
        </div>

        <div style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#2dd4bf', marginBottom: '8px' }}>
            SUGGESTED ACTIONS FOR YOUR SHIFT
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              "What are my action items from Sunita?",
              "Review 2 hot leads before 24h SLA expires",
              "How to handle the Ortho GRID 12-month EMI objection"
            ].map((prompt, i) => (
              <button
                key={i}
                type="button"
                className="btn-rect"
                style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.16)', color: '#ffffff', fontSize: '12px' }}
                onClick={() => onSelectChannel('callcentre-agent')}
              >
                <span>{prompt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Agents and Channels */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        {/* Left Column: Role Agents & Channels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Role & Task Agents */}
          <div className="surface-card">
            <div className="surface-card-header">
              <span className="surface-card-title">
                <Users size={16} color="#1d9e75" />
                <span>ROLE & TASK AGENTS</span>
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {roleAgents.map((ch) => (
                <div
                  key={ch.id}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                  onClick={() => onSelectChannel(ch.id)}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Hash size={15} color="#0f172a" />
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{ch.name}</span>
                      <span style={{ fontSize: '10px', fontWeight: 700, background: '#1e3a8a', color: '#bfdbfe', padding: '1px 6px', borderRadius: '4px' }}>
                        {ch.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                      {ch.description}
                    </div>
                  </div>

                  <ChevronRight size={16} color="#94a3b8" />
                </div>
              ))}
            </div>
          </div>

          {/* Team Channels */}
          <div className="surface-card">
            <div className="surface-card-header">
              <span className="surface-card-title">
                <MessageSquare size={16} color="#475569" />
                <span>TEAM CHANNELS</span>
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {generalChannels.map((ch) => (
                <div
                  key={ch.id}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                  onClick={() => onSelectChannel(ch.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Hash size={15} color="#64748b" />
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{ch.name}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{ch.membersCount} members</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Kudos Wall */}
        <div className="surface-card">
          <div className="surface-card-header">
            <span className="surface-card-title">
              <Award size={16} color="#d97706" />
              <span>TEAM KUDOS WALL</span>
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '6px', background: '#fef3c7', border: '1px solid #fde68a' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', marginBottom: '2px' }}>
                Arvind Rajan · 100-Night Trial Close
              </div>
              <p style={{ fontSize: '12px', color: '#78350f', lineHeight: 1.4 }}>
                "Great work converting the Whitefield walk-in objection with the 12-month low-interest breakdown."
              </p>
              <div style={{ fontSize: '10px', color: '#b45309', marginTop: '4px' }}>From Mukunda Dwarkanath (ASM) · Today 11:30 AM</div>
            </div>

            <div style={{ padding: '12px', borderRadius: '6px', background: '#e1f5ee', border: '1px solid #a7f3d0' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f5132', marginBottom: '2px' }}>
                Sunita K. · 6 Store Visits Booked
              </div>
              <p style={{ fontSize: '12px', color: '#064e3b', lineHeight: 1.4 }}>
                "All 6 callbacks resulted in scheduled physical mattress consultations at Indiranagar Flagship."
              </p>
              <div style={{ fontSize: '10px', color: '#047857', marginTop: '4px' }}>From Rashmi Sehgal (CEO) · Yesterday</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

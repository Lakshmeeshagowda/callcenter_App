import React from 'react';
import { PhoneCall, PhoneForwarded } from 'lucide-react';
import { INCOMING_MISSED_CALLS } from '../../data/callCenterData';

export default function IncomingCalls({ onStartCall }) {
  const totalValue = INCOMING_MISSED_CALLS.reduce((acc, c) => acc + c.expectedValue, 0);

  return (
    <div>
      <div className="section-headline">
        <h2 className="section-h2">Missed calls</h2>
        <p className="section-p">
          Ranked by expected value - call the highest-value leads back first
        </p>
      </div>

      {/* Top Banner Stats */}
      <div className="incoming-stats-banner">
        <div className="incoming-stat-item">
          <div className="incoming-stat-value">{INCOMING_MISSED_CALLS.length}</div>
          <div className="incoming-stat-label">MISSED TODAY</div>
        </div>

        <div className="incoming-stat-item">
          <div className="incoming-stat-value" style={{ color: '#1d9e75' }}>
            ₹{totalValue.toLocaleString('en-IN')}
          </div>
          <div className="incoming-stat-label">EXPECTED VALUE AT STAKE</div>
        </div>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {INCOMING_MISSED_CALLS.map((item) => (
          <div key={item.id} className="missed-call-card">
            <div className="missed-call-left">
              <div className="missed-icon">
                <PhoneCall size={18} />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  {item.timeInfo}
                </div>
                <div style={{ fontSize: '11px', color: '#047857', marginTop: '2px', fontWeight: 500 }}>
                  {item.leadContext}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ textAlign: 'right' }}>
                <div className="call-value-text">{item.expectedValueFormatted}</div>
              </div>

              <button
                className="btn-rect btn-primary"
                onClick={() => onStartCall({
                  name: item.name,
                  phone: item.phone,
                  product: item.leadContext,
                  expectedValueFormatted: item.expectedValueFormatted
                })}
              >
                <PhoneForwarded size={14} />
                <span>Call back</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { PhoneOutgoing, PhoneIncoming, PhoneMissed, ChevronDown, ChevronUp, FileText, CheckCircle2 } from 'lucide-react';
import { RECENT_CALLS } from '../../data/callCenterData';

export default function RecentCalls() {
  const [selectedCallId, setSelectedCallId] = useState(null);

  const getCallIcon = (type) => {
    switch (type) {
      case 'outgoing':
        return (
          <div className="call-type-icon outgoing">
            <PhoneOutgoing size={18} />
          </div>
        );
      case 'incoming':
        return (
          <div className="call-type-icon incoming">
            <PhoneIncoming size={18} />
          </div>
        );
      case 'missed':
      default:
        return (
          <div className="call-type-icon missed">
            <PhoneMissed size={18} />
          </div>
        );
    }
  };

  const toggleSelect = (id) => {
    setSelectedCallId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="section-headline">
        <h2 className="section-h2">Recent calls</h2>
        <p className="section-p">Tap a call to review it against SOP</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {RECENT_CALLS.map((call) => {
          const isSelected = selectedCallId === call.id;

          return (
            <div
              key={call.id}
              className="recent-call-row"
              style={{ flexDirection: 'column', alignItems: 'stretch' }}
              onClick={() => toggleSelect(call.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {getCallIcon(call.type)}
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                      {call.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      {call.time} · {call.duration}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor:
                        call.outcomeColor === 'green' ? '#e1f5ee' :
                        call.outcomeColor === 'amber' ? '#fef3c7' :
                        call.outcomeColor === 'blue' ? '#dbeafe' : '#fee2e2',
                      color:
                        call.outcomeColor === 'green' ? '#0f5132' :
                        call.outcomeColor === 'amber' ? '#92400e' :
                        call.outcomeColor === 'blue' ? '#1e40af' : '#991b1b'
                    }}
                  >
                    {call.outcome}
                  </span>

                  {isSelected ? (
                    <ChevronUp size={16} color="#94a3b8" />
                  ) : (
                    <ChevronDown size={16} color="#94a3b8" />
                  )}
                </div>
              </div>

              {isSelected && (
                <div
                  style={{
                    marginTop: '14px',
                    paddingTop: '14px',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', color: '#64748b', textTransform: 'uppercase' }}>
                    CALL AUDIT NOTES & SOP COMPLIANCE
                  </div>
                  <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5 }}>
                    {call.notes}
                  </p>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#0f5132', background: '#e1f5ee', padding: '3px 8px', borderRadius: '4px' }}>
                      <CheckCircle2 size={12} />
                      <span>Greeting SLA Compliant (within 8s)</span>
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#1e40af', background: '#dbeafe', padding: '3px 8px', borderRadius: '4px' }}>
                      <FileText size={12} />
                      <span>CRM Logged</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

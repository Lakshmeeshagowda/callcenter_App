import React, { useState, useEffect } from 'react';
import { X, Phone, PhoneOff, Mic, MicOff, Volume2, CheckCircle2, AlertTriangle, Calendar, MessageSquare } from 'lucide-react';

export default function CallSimulationModal({ isOpen, onClose, lead, onCallCompleted }) {
  const [callStatus, setCallStatus] = useState('connecting'); // connecting, connected, ended
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOutcome, setSelectedOutcome] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    let timer;
    if (isOpen) {
      setCallStatus('connecting');
      setSeconds(0);
      setActiveStep(0);
      setSelectedOutcome('');
      setNotes('');

      const connectTimeout = setTimeout(() => {
        setCallStatus('connected');
      }, 2500);

      return () => clearTimeout(connectTimeout);
    }
  }, [isOpen]);

  useEffect(() => {
    let interval;
    if (callStatus === 'connected') {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callStatus]);

  if (!isOpen || !lead) return null;

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    setCallStatus('ended');
  };

  const handleSaveOutcome = () => {
    if (onCallCompleted) {
      onCallCompleted({
        leadName: lead.name,
        duration: formatTime(seconds),
        outcome: selectedOutcome || 'Call Logged',
        notes: notes || 'Standard tele-consultation completed according to retail SOP.'
      });
    }
    onClose();
  };

  const sopPrompts = [
    { title: "Opening Greeting", text: `Greet ${lead.name} and state: 'Calling from The Sleep Company RT Nagar hub regarding your visit.'` },
    { title: "Value Anchor", text: "Address delivery timeline and confirm 48-hour express dispatch availability." },
    { title: "Closing Pitch", text: "Offer 12-month zero-down financing and confirm mattress dimensions." }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={18} color="#2dd4bf" />
            <span className="modal-title">Live Telephony Session · {lead.name}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close call">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: '24px' }}>
          {/* Header Card */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>{lead.name}</div>
              <div style={{ fontSize: '13px', color: '#64748b' }}>{lead.phone || '+91 98860 14820'} · {lead.product || 'Retail Lead'}</div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em' }}>Status</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: callStatus === 'connected' ? '#1d9e75' : callStatus === 'connecting' ? '#d97706' : '#64748b' }}>
                {callStatus === 'connecting' && 'Dialing Outward...'}
                {callStatus === 'connected' && `Connected (${formatTime(seconds)})`}
                {callStatus === 'ended' && 'Call Concluded'}
              </div>
            </div>
          </div>

          {/* Connected Call State */}
          {callStatus === 'connected' && (
            <div>
              {/* Simulated Audio Wave */}
              <div style={{ background: '#0f231b', borderRadius: '8px', padding: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                {[14, 28, 42, 18, 35, 48, 20, 32, 45, 16, 38, 24].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: '4px',
                      height: `${isMuted ? 4 : h}px`,
                      background: '#2dd4bf',
                      borderRadius: '2px',
                      transition: 'height 0.2s ease'
                    }}
                  />
                ))}
                <span style={{ marginLeft: '14px', color: '#cbd5e1', fontSize: '12px', fontWeight: 600 }}>
                  {isMuted ? 'Microphone Muted' : 'Live Audio Active'}
                </span>
              </div>

              {/* Real-time SOP Assistant */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1d9e75', marginBottom: '10px' }}>
                  REAL-TIME SOP GUIDANCE
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {sopPrompts.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: activeStep === idx ? '#1d9e75' : '#e2e8f0',
                        background: activeStep === idx ? '#e1f5ee' : '#f8fafc',
                        cursor: 'pointer'
                      }}
                      onClick={() => setActiveStep(idx)}
                    >
                      <div style={{ fontSize: '12px', fontWeight: 700, color: activeStep === idx ? '#0f5132' : '#334155' }}>
                        Step {idx + 1}: {step.title}
                      </div>
                      <div style={{ fontSize: '12px', color: activeStep === idx ? '#064e3b' : '#64748b', marginTop: '2px' }}>
                        {step.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call Controls */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                <button
                  className="btn-rect btn-outline"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <MicOff size={16} color="#dc2626" /> : <Mic size={16} />}
                  <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
                <button
                  className="btn-rect"
                  style={{ background: '#dc2626', color: '#ffffff' }}
                  onClick={handleEndCall}
                >
                  <PhoneOff size={16} />
                  <span>End Call</span>
                </button>
              </div>
            </div>
          )}

          {/* Dialing State */}
          {callStatus === 'connecting' && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '6px', background: '#e1f5ee', color: '#1d9e75', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Phone size={28} />
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Connecting to customer telephone...</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>Routing through On-Ground Telephony Gateway</div>
            </div>
          )}

          {/* Call Outcome Logging State */}
          {callStatus === 'ended' && (
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Log Call Outcome (Required)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
                {[
                  { id: 'trial_booked', label: 'Store Trial Booked', color: '#1d9e75' },
                  { id: 'callback_req', label: 'Callback Requested', color: '#d97706' },
                  { id: 'quote_sent', label: 'Quote Sent via SMS', color: '#2563eb' },
                  { id: 'not_interested', label: 'Not Interested / Lost', color: '#dc2626' }
                ].map((out) => (
                  <button
                    key={out.id}
                    type="button"
                    style={{
                      padding: '12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: selectedOutcome === out.label ? out.color : '#e2e8f0',
                      background: selectedOutcome === out.label ? '#f8fafc' : '#ffffff',
                      fontWeight: selectedOutcome === out.label ? 700 : 500,
                      color: selectedOutcome === out.label ? out.color : '#334155',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '13px'
                    }}
                    onClick={() => setSelectedOutcome(out.label)}
                  >
                    {out.label}
                  </button>
                ))}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>
                  Call Notes / Customer Objections:
                </label>
                <textarea
                  rows={3}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px', fontFamily: 'inherit' }}
                  placeholder="Record key details discussed, pricing shared, or next steps..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button className="btn-rect btn-outline" onClick={onClose}>
                  Discard
                </button>
                <button
                  className="btn-rect btn-primary"
                  disabled={!selectedOutcome}
                  onClick={handleSaveOutcome}
                >
                  <CheckCircle2 size={16} />
                  <span>Save Outcome to CRM</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, ShieldCheck, CheckCircle2, AlertCircle, ShoppingBag, CreditCard, Clock } from 'lucide-react';
import { LEADS_MODAL_DATA } from '../../data/leadsModalData';

export default function LeadsModal({ isOpen, onClose, onStartCall }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedSignals, setExpandedSignals] = useState(true);

  if (!isOpen) return null;

  const lead = LEADS_MODAL_DATA[currentIndex];
  const totalLeads = LEADS_MODAL_DATA.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalLeads - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalLeads - 1 ? prev + 1 : 0));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', background: '#1d9e75', color: '#ffffff', padding: '2px 8px', borderRadius: '4px' }}>
              LEAD ANALYSIS OVERLAY
            </span>
            <span style={{ fontSize: '13px', color: '#94a3b8' }}>
              Lead {currentIndex + 1} of {totalLeads}
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: '24px' }}>
          {/* Lead Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #e2e8f0', paddingBottom: '18px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#0f231b', color: '#2dd4bf', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 800 }}>
                {lead.initials}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>{lead.name}</h3>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: lead.badgeBg, color: lead.badgeColor }}>
                    {lead.badge}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                  {lead.phone} · {lead.city}
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>
                EXPECTED VALUE
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#1d9e75' }}>
                {lead.expectedValueFormatted}
              </div>
            </div>
          </div>

          {/* Scores Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  ICP Profile Score
                </span>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#1d9e75' }}>
                  {lead.icpScore}/100
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginTop: '12px' }}>
                {lead.subscores.map((sub, idx) => (
                  <div key={idx} style={{ fontSize: '11px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', marginBottom: '2px' }}>
                      <span>{sub.label}</span>
                      <span style={{ fontWeight: 700, color: '#0f172a' }}>{sub.score}%</span>
                    </div>
                    <div style={{ height: '4px', background: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${sub.score}%`, background: sub.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Lead Intent Score
                </span>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#0369a1' }}>
                  {lead.leadIntentScore}/100
                </span>
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5, marginTop: '10px' }}>
                Calculated from floor visit dwell time, online catalog interaction, and immediate purchase timeframe markers.
              </p>
            </div>
          </div>

          {/* Collapsible Buying Signals */}
          <div style={{ marginBottom: '20px', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
            <div
              style={{ padding: '12px 16px', background: '#f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setExpandedSignals(!expandedSignals)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                <ShieldCheck size={16} color="#1d9e75" />
                <span>Detected Buying Signals ({lead.buyingSignals.length})</span>
              </div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>
                {expandedSignals ? 'Collapse ▲' : 'Expand ▼'}
              </span>
            </div>

            {expandedSignals && (
              <div style={{ padding: '14px 16px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {lead.buyingSignals.map((signal) => (
                  <div key={signal.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px' }}>
                    <span style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '4px', fontWeight: 700, color: signal.badgeColor, minWidth: '120px' }}>
                      {signal.category}
                    </span>
                    <span style={{ color: '#334155', flex: 1 }}>{signal.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Story & Context */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                STORY SO FAR
              </div>
              <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.6 }}>
                {lead.storySoFar}
              </p>

              <div style={{ marginTop: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  COACHING MOVES
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {lead.coachingTips.map((tip, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#0f5132', background: '#e1f5ee', padding: '6px 10px', borderRadius: '4px' }}>
                      <CheckCircle2 size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShoppingBag size={13} />
                  <span>RECOMMENDED PRODUCT</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                  {lead.preferredProduct}
                </div>
              </div>

              {lead.crossSell && (
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    CROSS-SELL ATTACHMENT
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#2563eb' }}>
                    {lead.crossSell}
                  </div>
                </div>
              )}

              {lead.financing && (
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CreditCard size={13} />
                    <span>FINANCING STRUCTURE</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#334155' }}>
                    {lead.financing}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer with Paging and Action */}
        <div className="modal-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button className="btn-rect btn-outline" onClick={handlePrev} title="Previous lead">
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>
            <button className="btn-rect btn-outline" onClick={handleNext} title="Next lead">
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-rect btn-outline" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn-rect btn-primary"
              onClick={() => {
                onClose();
                onStartCall(lead);
              }}
            >
              <Phone size={15} />
              <span>Initiate Call to {lead.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

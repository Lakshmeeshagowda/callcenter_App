import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CALLS_TO_MAKE } from '../../data/callCenterData';

export default function CallsToMake({ onStartCall, onInspectLead }) {
  const [expandedId, setExpandedId] = useState('lead_ritu');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(CALLS_TO_MAKE.length / itemsPerPage);
  const paginatedLeads = CALLS_TO_MAKE.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="section-headline">
        <h2 className="section-h2">Planned outgoing calls</h2>
        <p className="section-p">
          Ranked by lead attractiveness score - tap a lead for the full picture
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {paginatedLeads.map((lead) => {
          const isExpanded = expandedId === lead.id;

          return (
            <div key={lead.id} className="lead-row-card">
              <div
                className="lead-summary-bar"
                onClick={() => toggleExpand(lead.id)}
              >
                <div className="lead-left-info">
                  <div
                    className="avatar-circle"
                    style={{
                      backgroundColor: lead.score >= 90 ? '#e1f5ee' : '#f1f5f9',
                      color: lead.score >= 90 ? '#0f5132' : '#334155'
                    }}
                  >
                    {lead.initials}
                  </div>
                  <div>
                    <div className="lead-name-text">{lead.name}</div>
                    <div className="lead-product-text">
                      Interested: {lead.interested}
                    </div>
                  </div>
                </div>

                <div className="lead-right-info">
                  <div className="lead-score-box">
                    <div className="score-num">{lead.score}</div>
                    <div className="score-lbl">SCORE</div>
                  </div>

                  {isExpanded ? (
                    <ChevronUp size={18} color="#94a3b8" />
                  ) : (
                    <ChevronDown size={18} color="#94a3b8" />
                  )}
                </div>
              </div>

              {isExpanded && (
                <div className="lead-expanded-drawer">
                  <div>
                    <div className="drawer-section-title">STORY SO FAR</div>
                    <p className="drawer-text">{lead.storySoFar}</p>

                    <div className="drawer-section-title">PREFERRED PRODUCT</div>
                    <p className="drawer-text" style={{ fontWeight: 600, color: '#0f172a' }}>
                      {lead.preferredProduct}
                    </p>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                      <button
                        className="btn-rect btn-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartCall(lead);
                        }}
                      >
                        <Phone size={14} />
                        <span>Call {lead.name}</span>
                      </button>

                      <button
                        className="btn-rect btn-outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onInspectLead) onInspectLead(lead);
                        }}
                      >
                        <ShieldCheck size={14} color="#1d9e75" />
                        <span>Inspect ICP Score</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="drawer-section-title">CROSS-SELL ATTACHMENT</div>
                    <p className="drawer-text">{lead.crossSell}</p>

                    <div className="drawer-section-title">EMI / FINANCING</div>
                    <p className="drawer-text">{lead.financing}</p>

                    <div className="drawer-section-title">DETECTED SIGNALS</div>
                    <div className="signals-list">
                      {lead.buyingSignals.map((sig, i) => (
                        <div key={i} className="signal-pill">
                          <strong>{sig.category}:</strong> {sig.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Paging */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
        <button
          className="btn-rect btn-outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          style={{ opacity: currentPage === 1 ? 0.5 : 1, padding: '6px 12px' }}
        >
          <ChevronLeft size={16} />
        </button>

        <span style={{ fontSize: '13px', fontWeight: 600, color: '#475569' }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn-rect btn-outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          style={{ opacity: currentPage === totalPages ? 0.5 : 1, padding: '6px 12px' }}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

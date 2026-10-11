import React from 'react';
import { Headphones, ArrowRight } from 'lucide-react';
import { WHOS_WAITING } from '../../data/callCenterData';

export default function WhosWaiting({ onOpenPlanner, onSelectLead }) {
  return (
    <div className="surface-card">
      <div className="surface-card-header">
        <span className="surface-card-title">
          <Headphones size={15} color="#475569" />
          <span>WHO'S WAITING</span>
        </span>
        <button className="surface-link-btn" onClick={onOpenPlanner}>
          <span>Open planner</span>
          <ArrowRight size={13} />
        </button>
      </div>

      <div className="waiting-list">
        {WHOS_WAITING.map((item) => (
          <div
            key={item.id}
            className="waiting-row"
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectLead && onSelectLead(item)}
          >
            <div className="waiting-left">
              <div className="waiting-icon">
                <Headphones size={16} />
              </div>
              <div>
                <div className="waiting-name">{item.name}</div>
                <div className="waiting-detail">{item.detail}</div>
              </div>
            </div>

            <div>
              <span className={`timer-badge ${item.severity}`}>
                {item.waitTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

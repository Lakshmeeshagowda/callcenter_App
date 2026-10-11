import React from 'react';
import { ArrowUp } from 'lucide-react';
import { MY_PROGRESS } from '../../data/callCenterData';

export default function MyProgress() {
  return (
    <div className="progress-card">
      <div className="progress-header">
        <span className="status-dot" style={{ backgroundColor: '#34d399' }} />
        <span>MY PROGRESS · TODAY</span>
      </div>

      <div className="progress-grid">
        <div className="progress-subcard">
          <div className="progress-number">{MY_PROGRESS.leadsCreated}</div>
          <div className="progress-pill">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
              <ArrowUp size={10} />
              <span>{MY_PROGRESS.leadsCreatedChange}</span>
            </span>
          </div>
          <div className="progress-label">Leads Created</div>
        </div>

        <div className="progress-subcard">
          <div className="progress-number">{MY_PROGRESS.leadsCalled}</div>
          <div className="progress-pill">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
              <ArrowUp size={10} />
              <span>{MY_PROGRESS.leadsCalledChange}</span>
            </span>
          </div>
          <div className="progress-label">Leads Called</div>
        </div>
      </div>
    </div>
  );
}

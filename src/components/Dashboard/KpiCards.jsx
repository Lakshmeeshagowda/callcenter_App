import React from 'react';
import { ArrowUp, ArrowDown, Activity } from 'lucide-react';
import { KPI_METRICS } from '../../data/callCenterData';

export default function KpiCards() {
  return (
    <div className="kpi-cards-grid">
      {KPI_METRICS.map((kpi) => {
        const isUp = kpi.changeType === 'up';
        const isGoodDown = kpi.changeType === 'good_down';
        const isLive = kpi.change === 'live';

        return (
          <div key={kpi.id} className="kpi-card">
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-label">{kpi.label}</div>
            <div>
              <span className={`kpi-badge ${kpi.changeType}`}>
                {isUp && <ArrowUp size={11} />}
                {isGoodDown && <ArrowDown size={11} />}
                {isLive && <span className="status-dot" style={{ width: '6px', height: '6px' }} />}
                <span>{kpi.change}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

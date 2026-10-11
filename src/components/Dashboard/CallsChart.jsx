import React from 'react';
import { BarChart3 } from 'lucide-react';
import { CALLS_HANDLED_7_DAYS } from '../../data/callCenterData';

export default function CallsChart() {
  const maxCalls = Math.max(...CALLS_HANDLED_7_DAYS.map((d) => d.calls));

  return (
    <div className="surface-card">
      <div className="surface-card-header">
        <span className="surface-card-title">
          <BarChart3 size={15} color="#475569" />
          <span>CALLS HANDLED · LAST 7 DAYS</span>
        </span>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#1d9e75' }}>
          Avg 18.0 / day
        </span>
      </div>

      <div className="chart-container">
        <div className="chart-bars-wrap">
          {CALLS_HANDLED_7_DAYS.map((item, idx) => {
            const heightPercent = Math.round((item.calls / maxCalls) * 100);

            return (
              <div key={idx} className="chart-bar-col">
                <span className="bar-val">{item.calls}</span>
                <div
                  className={`bar-pill ${item.isCurrent ? 'current' : ''}`}
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: item.isCurrent ? '#0f5132' : '#34d399'
                  }}
                  title={`${item.day}: ${item.calls} calls handled`}
                />
                <span className="bar-label">{item.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

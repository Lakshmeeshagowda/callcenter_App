import React from 'react';
import { Activity } from 'lucide-react';
import { CSAT_TREND_7_DAYS } from '../../data/callCenterData';

export default function CsatChart() {
  const points = CSAT_TREND_7_DAYS;
  const width = 500;
  const height = 90;
  const paddingX = 30;
  const paddingY = 15;

  const minScore = 85;
  const maxScore = 100;

  const getCoordinates = (score, index) => {
    const x = paddingX + (index * (width - 2 * paddingX)) / (points.length - 1);
    const y = height - paddingY - ((score - minScore) / (maxScore - minScore)) * (height - 2 * paddingY);
    return { x, y };
  };

  const pathD = points.reduce((acc, curr, idx) => {
    const { x, y } = getCoordinates(curr.score, idx);
    return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  return (
    <div className="surface-card">
      <div className="surface-card-header">
        <span className="surface-card-title">
          <Activity size={15} color="#475569" />
          <span>CSAT TREND · LAST 7 DAYS</span>
        </span>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#1d9e75' }}>
          Weekly Mean 92.8%
        </span>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '110px' }}>
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '80px', overflow: 'visible' }}>
          {/* Subtle grid lines */}
          <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1={paddingX} y1={height / 2} x2={width - paddingX} y2={height / 2} stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="#e2e8f0" />

          {/* Trend line */}
          <path d={pathD} fill="none" stroke="#1d9e75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Dots */}
          {points.map((pt, idx) => {
            const { x, y } = getCoordinates(pt.score, idx);
            return (
              <g key={idx}>
                <circle cx={x} cy={y} r="4" fill="#ffffff" stroke="#1d9e75" strokeWidth="2.5" />
                <text x={x} y={y - 8} fontSize="10" fontWeight="700" fill="#0f172a" textAnchor="middle">
                  {pt.score}%
                </text>
              </g>
            );
          })}
        </svg>

        <div style={{ display: 'flex', justifyContent: 'space-between', padding: `0 ${paddingX}px`, marginTop: '4px' }}>
          {points.map((pt, idx) => (
            <span key={idx} style={{ fontSize: '11px', fontWeight: pt.isCurrent ? 700 : 500, color: pt.isCurrent ? '#0f5132' : '#64748b' }}>
              {pt.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

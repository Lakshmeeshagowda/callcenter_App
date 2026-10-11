import React from 'react';
import { TrendingUp } from 'lucide-react';
import { MY_EARNINGS } from '../../data/callCenterData';

export default function MyEarnings() {
  return (
    <div className="earnings-card">
      <div className="earnings-top">
        <div className="earnings-title-group">
          <TrendingUp size={16} color="#1d9e75" />
          <span>My earnings this month</span>
        </div>
        <span className="earnings-slab-tag">{MY_EARNINGS.slabRange}</span>
      </div>

      <div className="earnings-amount">{MY_EARNINGS.currentFormatted}</div>
      <div className="earnings-subtext">
        {MY_EARNINGS.coachedMovesAmount} from coached moves
      </div>

      <div className="earnings-progress-bar-bg">
        <div
          className="earnings-progress-bar-fill"
          style={{ width: `${MY_EARNINGS.progressPercentage}%` }}
        />
      </div>

      <div className="earnings-breakdown">
        {MY_EARNINGS.breakdown.map((item, idx) => (
          <div key={idx} className="breakdown-row">
            <span className="breakdown-label">{item.label}</span>
            <span className="breakdown-val">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Phone, Users, FileCheck, ChevronRight, CheckSquare } from 'lucide-react';
import { MY_TASKS } from '../../data/callCenterData';

export default function MyTasks({ onOpenLeadsModal, onOpenCallbacks, onOpenOutcome }) {
  const handleTaskClick = (task) => {
    if (task.actionType === 'open_leads_modal') {
      if (onOpenLeadsModal) onOpenLeadsModal();
    } else if (task.actionType === 'callbacks') {
      if (onOpenCallbacks) onOpenCallbacks();
    } else if (task.actionType === 'log_outcome') {
      if (onOpenOutcome) onOpenOutcome();
    }
  };

  const getTaskIcon = (type) => {
    switch (type) {
      case 'callbacks':
        return <Phone size={15} color="#2563eb" />;
      case 'open_leads_modal':
        return <Users size={15} color="#d97706" />;
      case 'log_outcome':
        return <FileCheck size={15} color="#dc2626" />;
      default:
        return <CheckSquare size={15} color="#1d9e75" />;
    }
  };

  return (
    <div className="tasks-card">
      <div className="tasks-card-header">
        <div className="tasks-card-title">
          <CheckSquare size={17} color="#fbbf24" />
          <span>My Tasks</span>
          <span className="tasks-count-badge">3</span>
        </div>
      </div>

      <div className="tasks-list">
        {MY_TASKS.map((task) => (
          <button
            key={task.id}
            type="button"
            className="task-item-btn"
            onClick={() => handleTaskClick(task)}
          >
            <div className="task-left">
              <div className="task-icon-box">
                {getTaskIcon(task.actionType)}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span className="task-title">{task.title}</span>
                <span className="task-subtitle">{task.subtitle}</span>
              </div>
            </div>

            <ChevronRight size={16} color="#94a3b8" />
          </button>
        ))}
      </div>
    </div>
  );
}

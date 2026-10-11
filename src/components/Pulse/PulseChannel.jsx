import React, { useState } from 'react';
import { ArrowLeft, Users, Send, CheckCircle2, Bot, CornerDownRight, Check, AlertCircle } from 'lucide-react';
import { PULSE_DATA } from '../../data/callCenterData';

export default function PulseChannel({ channelId, onBack, onStartCall }) {
  const [messages, setMessages] = useState(PULSE_DATA.initialMessages);
  const [inputVal, setInputVal] = useState('');
  const [acknowledged, setAcknowledged] = useState(false);
  const [priyaStatus, setPriyaStatus] = useState(null); // 'done', 'not_yet', 'need_help'
  const [hotLeadsAction, setHotLeadsAction] = useState(null); // 'calling_now', 'reassigned'

  const channel = PULSE_DATA.channels.find((c) => c.id === channelId) || PULSE_DATA.channels[0];
  const stats = PULSE_DATA.channelStats;
  const pinned = PULSE_DATA.pinnedInputCard;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg = {
      id: `msg_${Date.now()}`,
      sender: 'Arvind Rajan (You)',
      time: 'Just now',
      text: inputVal.trim(),
      badge: null,
      isAgent: true
    };

    setMessages((prev) => [...prev, newMsg]);
    const userQuery = inputVal.toLowerCase();
    setInputVal('');

    // AvaniBot intelligent feedback reply
    setTimeout(() => {
      let botResponse = "Noted Arvind. Your response has been updated in the retail coaching digest.";
      if (userQuery.includes('priya') || userQuery.includes('billing')) {
        botResponse = "Understood. The Indiranagar billing manager has been notified. Keep the call notes concise in the outcome log.";
      } else if (userQuery.includes('lead') || userQuery.includes('hot')) {
        botResponse = "The 2 hot leads are Ritu S. and Mukunda. Both have doctor recommendations and express delivery requirements.";
      } else if (userQuery.includes('help')) {
        botResponse = "Mukunda Dwarkanath (ASM) is available in Booth 2 if you need a quick coached call walkthrough.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot_${Date.now()}`,
          sender: 'AvaniBot',
          time: 'Just now',
          text: botResponse,
          badge: 'Coach',
          isAgent: false
        }
      ]);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Channel Header Banner */}
      <section className="pulse-header">
        <div className="channel-title-row">
          <div className="channel-name-group">
            <button
              className="btn-rect btn-outline"
              style={{ padding: '6px 10px', background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'transparent' }}
              onClick={onBack}
              title="Back to Pulse Home"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>#{channel.name}</h1>
                <span className="channel-badge">{channel.badge}</span>
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                {channel.description}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '13px', fontWeight: 600 }}>
            <Users size={16} />
            <span>{channel.membersCount}</span>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="channel-metrics-bar">
          <span style={{ color: '#cbd5e1' }}>{stats.period}</span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div className="metric-pill-item">
              <span style={{ color: '#94a3b8', fontWeight: 700 }}>REVENUE:</span>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>{stats.revenue.current} / {stats.revenue.target}</span>
              <div className="progress-mini-bar">
                <div className="progress-mini-fill" style={{ width: `${stats.revenue.percentage}%` }} />
              </div>
              <span style={{ color: '#fbbf24', fontWeight: 700 }}>{stats.revenue.percentage}%</span>
            </div>

            <div className="metric-pill-item">
              <span style={{ color: '#94a3b8', fontWeight: 700 }}>ATV:</span>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>{stats.atv.current} / {stats.atv.target}</span>
              <div className="progress-mini-bar">
                <div className="progress-mini-fill" style={{ width: `${stats.atv.percentage}%` }} />
              </div>
              <span style={{ color: '#fbbf24', fontWeight: 700 }}>{stats.atv.percentage}%</span>
            </div>

            <div className="metric-pill-item">
              <span style={{ color: '#94a3b8', fontWeight: 700 }}>CONVERSATIONS:</span>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>{stats.conversations.current} / {stats.conversations.target}</span>
              <div className="progress-mini-bar">
                <div className="progress-mini-fill" style={{ width: `${stats.conversations.percentage}%` }} />
              </div>
              <span style={{ color: '#fbbf24', fontWeight: 700 }}>{stats.conversations.percentage}%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned 'Needs Your Input' Card */}
      <section className="input-card-wrap">
        <div className="input-card-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>{pinned.title}</span>
            <span style={{ fontSize: '10px', background: '#065f46', color: '#ffffff', padding: '2px 6px', borderRadius: '4px' }}>
              {pinned.forYouBadge}
            </span>
            <span style={{ fontSize: '10px', background: '#e11d48', color: '#ffffff', padding: '2px 6px', borderRadius: '4px' }}>
              {pinned.taskCount}
            </span>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#047857' }}>
            {pinned.subtext}
          </span>
        </div>

        <div className="input-card-body">
          <div className="context-row">
            <div className="context-title">INCOMING CONTEXT</div>
            <div style={{ fontSize: '12px', color: '#065f46', marginBottom: '8px' }}>
              {pinned.incomingContext.timestamp}
            </div>
            <div className="context-bullet">
              <Check size={14} color="#059669" />
              <span>Did well: {pinned.incomingContext.didWell}</span>
            </div>
            <div className="context-bullet">
              <CornerDownRight size={14} color="#d97706" />
              <span>Improve: {pinned.incomingContext.improve}</span>
            </div>
          </div>

          <div>
            <div className="context-title">MY TASKS TODAY</div>

            {/* Acknowledge Action */}
            <div className="task-action-box" style={{ background: acknowledged ? '#f0fdf4' : '#ffffff' }}>
              <div className="task-action-left">
                <span className="task-action-title">Acknowledge today's shift guidelines</span>
                <span className="task-action-sub">Confirms you have reviewed greeting targets and callback queue</span>
              </div>
              <button
                className={`btn-rect ${acknowledged ? 'btn-outline' : 'btn-primary'}`}
                onClick={() => setAcknowledged(!acknowledged)}
              >
                {acknowledged && <CheckCircle2 size={14} color="#1d9e75" />}
                <span>{acknowledged ? 'Acknowledged' : 'Got it'}</span>
              </button>
            </div>

            {/* Task 1: Priya Iyer */}
            <div className="task-action-box">
              <div className="task-action-left">
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#0284c7' }}>
                  {pinned.task1.type}
                </span>
                <span className="task-action-title">{pinned.task1.leadName}</span>
                <span className="task-action-sub">{pinned.task1.issue}</span>
              </div>
              <div className="task-buttons-row">
                <button
                  className={`btn-rect ${priyaStatus === 'done' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setPriyaStatus('done')}
                >
                  Done
                </button>
                <button
                  className={`btn-rect ${priyaStatus === 'not_yet' ? 'btn-amber' : 'btn-outline'}`}
                  onClick={() => setPriyaStatus('not_yet')}
                >
                  Not yet
                </button>
                <button
                  className={`btn-rect ${priyaStatus === 'need_help' ? 'btn-dark' : 'btn-outline'}`}
                  onClick={() => setPriyaStatus('need_help')}
                >
                  Need help
                </button>
              </div>
            </div>

            {/* Task 2: Hot leads */}
            <div className="task-action-box">
              <div className="task-action-left">
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#d97706' }}>
                  {pinned.task2.type}
                </span>
                <span className="task-action-title">{pinned.task2.leadName}</span>
                <span className="task-action-sub">{pinned.task2.issue}</span>
              </div>
              <div className="task-buttons-row">
                <button
                  className={`btn-rect ${hotLeadsAction === 'calling_now' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => {
                    setHotLeadsAction('calling_now');
                    if (onStartCall) {
                      onStartCall({
                        name: 'Ritu S.',
                        phone: '+91 98450 33190',
                        product: 'Smart Luxe Mattress · ₹13,390',
                        expectedValueFormatted: '₹13,390'
                      });
                    }
                  }}
                >
                  Calling now
                </button>
                <button
                  className={`btn-rect ${hotLeadsAction === 'reassigned' ? 'btn-amber' : 'btn-outline'}`}
                  onClick={() => setHotLeadsAction('reassigned')}
                >
                  Reassign
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Messages */}
      <div className="chat-messages-container" style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ textAlign: 'center', margin: '8px 0' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, background: '#e2e8f0', color: '#64748b', padding: '2px 10px', borderRadius: '4px' }}>
            Today
          </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-bubble ${msg.isAgent ? 'agent' : 'bot'}`}
          >
            <div className="chat-sender-row">
              {!msg.isAgent && <Bot size={14} color="#1d9e75" />}
              <span>{msg.sender}</span>
              <span className="chat-time">{msg.time}</span>
              {msg.badge && (
                <span style={{ fontSize: '10px', fontWeight: 700, background: '#fee2e2', color: '#991b1b', padding: '1px 5px', borderRadius: '3px' }}>
                  {msg.badge}
                </span>
              )}
            </div>
            <div>{msg.text}</div>
          </div>
        ))}
      </div>

      {/* Message Input Box */}
      <form onSubmit={handleSendMessage} className="chat-input-bar">
        <input
          type="text"
          className="chat-input-field"
          placeholder={`Message #${channel.name}...`}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" className="btn-rect btn-primary" style={{ padding: '0 20px' }}>
          <Send size={15} />
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import { Mail, ChevronLeft, ChevronRight, Clock, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { CALENDAR_EVENTS } from '../../data/callCenterData';

export default function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState('October 2026');
  const [selectedDay, setSelectedDay] = useState(11);

  // October 2026 starts on Thursday (index 4 in 0-indexed Sunday-first system)
  // S M T W T F S
  //         1 2 3
  const daysInMonth = 31;
  const startDayOffset = 4; // Thursday

  const dayCells = [];
  for (let i = 0; i < startDayOffset; i++) {
    dayCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    dayCells.push(d);
  }

  // Find events for selected day
  const formattedSelectedDate = `2026-10-${selectedDay.toString().padStart(2, '0')}`;
  const dayEvents = CALENDAR_EVENTS.filter((ev) => ev.date === formattedSelectedDate);

  const getEventsForDay = (dayNum) => {
    if (!dayNum) return [];
    const dateStr = `2026-10-${dayNum.toString().padStart(2, '0')}`;
    return CALENDAR_EVENTS.filter((ev) => ev.date === dateStr);
  };

  return (
    <div className="calendar-wrap">
      {/* Top Mailbox Banner */}
      <div className="calendar-top-bar">
        <Mail size={16} color="#1d9e75" />
        <span>
          Store visits, coaching sessions, and meeting invites all show up here - and in your mailbox.
        </span>
      </div>

      <div className="calendar-card">
        {/* Month Navigation Row */}
        <div className="calendar-nav-row">
          <button
            className="btn-rect btn-outline"
            style={{ padding: '6px 12px' }}
            onClick={() => setCurrentMonth('September 2026')}
            title="Previous month"
          >
            <ChevronLeft size={16} />
          </button>

          <h2 className="calendar-month-title">{currentMonth}</h2>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn-rect btn-outline"
              onClick={() => {
                setCurrentMonth('October 2026');
                setSelectedDay(11);
              }}
            >
              Today
            </button>
            <button
              className="btn-rect btn-outline"
              style={{ padding: '6px 12px' }}
              onClick={() => setCurrentMonth('November 2026')}
              title="Next month"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="calendar-grid-header">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
            <div key={idx}>{day}</div>
          ))}
        </div>

        {/* Month Days Grid */}
        <div className="calendar-days-grid">
          {dayCells.map((day, idx) => {
            if (day === null) {
              return <div key={idx} style={{ height: '70px', background: 'transparent' }} />;
            }

            const events = getEventsForDay(day);
            const isToday = day === 11 && currentMonth === 'October 2026';
            const isSelected = selectedDay === day;

            return (
              <div
                key={idx}
                className={`calendar-day-cell ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                onClick={() => setSelectedDay(day)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="day-number" style={{ color: isToday ? '#0f5132' : '#0f172a' }}>
                    {day}
                  </span>
                  {isToday && (
                    <span style={{ fontSize: '9px', fontWeight: 800, background: '#1d9e75', color: '#ffffff', padding: '1px 4px', borderRadius: '2px' }}>
                      NOW
                    </span>
                  )}
                </div>

                {events.length > 0 && (
                  <div className="day-events-dots">
                    {events.map((ev, i) => (
                      <span
                        key={i}
                        className={`event-dot ${ev.type === 'callback' ? 'urgent' : ev.type === 'coaching' ? 'review' : ''}`}
                        title={ev.title}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Day Agenda Drawer */}
        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CalendarIcon size={16} color="#1d9e75" />
              <span>Agenda for {selectedDay} October 2026</span>
            </h3>
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              {dayEvents.length} scheduled item{dayEvents.length !== 1 ? 's' : ''}
            </span>
          </div>

          {dayEvents.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#64748b', fontSize: '13px', background: '#f8fafc', borderRadius: '6px' }}>
              No meetings or callbacks scheduled for this date.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {dayEvents.map((ev, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>
                      {ev.title}
                    </div>
                    <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} />
                        <span>{ev.time}</span>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={12} />
                        <span>{ev.location}</span>
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: ev.type === 'callback' ? '#fee2e2' : '#e1f5ee',
                      color: ev.type === 'callback' ? '#991b1b' : '#0f5132'
                    }}
                  >
                    {ev.type.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

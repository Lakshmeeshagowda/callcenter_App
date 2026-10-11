import React from 'react';
import { X, FileText } from 'lucide-react';

export default function TermsConditionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={18} color="#2dd4bf" />
            <span className="modal-title">Terms & Conditions of Service · On-Ground.ai</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close terms and conditions">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ fontSize: '13px', lineHeight: '1.7', color: '#334155' }}>
          <p style={{ marginBottom: '14px' }}>
            <strong>Last Updated:</strong> 11 October 2026
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            1. Acceptance of Terms
          </h4>
          <p style={{ marginBottom: '14px' }}>
            By accessing or operating the On-Ground.ai Call Centre Workspace, authorized enterprise agents, store managers, and call supervisors agree to comply with these terms, tenant-specific acceptable use policies, and applicable telecommunication standards.
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            2. Permitted Workspace Use
          </h4>
          <p style={{ marginBottom: '14px' }}>
            This application is configured strictly for authorized customer contact, lead qualification, walk-out recovery calls, and performance logging. Agents must conduct telephone sessions according to designated store Standard Operating Procedures (SOP).
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            3. Telecommunication and Compliance Regulations
          </h4>
          <p style={{ marginBottom: '14px' }}>
            All outbound calls and customer touchpoints must adhere to local commercial communication guidelines, National Do Not Call (NDNC) registers, and authorized calling windows (typically 09:00 to 20:00 local time).
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            4. Service Availability and SLA
          </h4>
          <p style={{ marginBottom: '14px' }}>
            On-Ground.ai maintains enterprise telephony and dispatch availability targets of 99.9% uptime during retail trading hours, excluding scheduled system maintenance.
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            5. Inquiries and Support
          </h4>
          <p>
            For legal notices, platform terms clarification, or SLA agreements, contact: <strong>legal@on-ground.ai</strong>.
          </p>
        </div>

        <div className="modal-footer" style={{ justifyContent: 'flex-end' }}>
          <button className="btn-rect btn-primary" onClick={onClose}>
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}

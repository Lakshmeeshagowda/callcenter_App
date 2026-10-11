import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={18} color="#2dd4bf" />
            <span className="modal-title">Privacy Policy · On-Ground.ai Enterprise</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close privacy policy">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ fontSize: '13px', lineHeight: '1.7', color: '#334155' }}>
          <p style={{ marginBottom: '14px' }}>
            <strong>Effective Date:</strong> 11 October 2026
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            1. Overview and Enterprise Commitment
          </h4>
          <p style={{ marginBottom: '14px' }}>
            On-Ground.ai operates conversational voice and tele-consultation intelligence infrastructure for offline retail enterprises and call centers. This privacy document sets forth how customer contact numbers, store floor consultation notes, and telephony transcripts are ingested, processed, and safeguarded within the platform.
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            2. Customer Contact and Floor Data Processing
          </h4>
          <p style={{ marginBottom: '14px' }}>
            Customer lead details (including shopper names, telephone identifiers, product inquiries, and store trial notes) are processed solely on behalf of the subscribed retail partner (e.g., The Sleep Company). All telephony data and call outcomes are encrypted in transit using TLS 1.3 and at rest with AES-256 encryption.
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            3. Tele-Consultation Voice Quality and Analytics
          </h4>
          <p style={{ marginBottom: '14px' }}>
            Call recordings and agent guidance logs are used exclusively to calculate standard operational metrics such as Average Handle Time (AHT), Customer Satisfaction (CSAT), and SOP adherence. We do not sell, rent, or cross-monetize customer communications across disparate tenant brands.
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            4. Access Control and Role Separation
          </h4>
          <p style={{ marginBottom: '14px' }}>
            Access to lead information is strictly partitioned by hub, cluster, and authorized call-center role tokens. Audit trails record every lead inspection, phone call initiation, and task acknowledgement.
          </p>

          <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginTop: '16px', marginBottom: '8px' }}>
            5. Contact and Data Protection Inquiries
          </h4>
          <p>
            For compliance, data deletion requests, or information security audits, enterprise administrators may contact our security team at: <strong>privacy@on-ground.ai</strong>.
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

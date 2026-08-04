import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <div style={{ position: 'fixed', top: '130px', left: '2rem', zIndex: 50 }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.6rem 1.25rem',
          background: 'white',
          color: 'var(--primary)',
          border: '1.5px solid var(--border-color)',
          borderRadius: '2rem',
          fontWeight: 700,
          fontSize: '0.82rem',
          letterSpacing: '0.04em',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,31,63,0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          textTransform: 'uppercase',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--primary)';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.borderColor = 'var(--primary)';
          e.currentTarget.style.transform = 'translateX(-4px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,31,63,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'white';
          e.currentTarget.style.color = 'var(--primary)';
          e.currentTarget.style.borderColor = 'var(--border-color)';
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,31,63,0.1)';
        }}
      >
        <ArrowLeft size={16} />
        Back
      </button>
    </div>
  );
}

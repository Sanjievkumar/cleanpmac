import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <div className="back-btn-wrapper">
      <button
        onClick={() => navigate(-1)}
        className="back-btn"
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
        <span>Back</span>
      </button>

      <style>{`
        .back-btn-wrapper {
          position: fixed;
          top: 120px;
          left: 2rem;
          z-index: 50;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          background: white;
          color: var(--primary);
          border: 1.5px solid var(--border-color);
          border-radius: 2rem;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,31,63,0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .back-btn-wrapper {
            top: 80px;
            left: 1rem;
          }
          .back-btn {
            padding: 0.45rem 0.9rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}

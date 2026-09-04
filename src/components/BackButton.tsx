import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const isTruvoxDetail = location.pathname.startsWith('/brands/truvox/') && location.pathname !== '/brands/truvox';
  const isKlencoDetail = location.pathname.startsWith('/brands/klenco/') && location.pathname.split('/').filter(Boolean).length > 2;

  if (!isTruvoxDetail && !isKlencoDetail) return null;

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
          top: 86px;
          left: 1.25rem;
          z-index: 50;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 1rem;
          background: white;
          color: var(--primary);
          border: 1.5px solid var(--border-color);
          border-radius: 2rem;
          font-weight: 700;
          font-size: 0.76rem;
          letter-spacing: 0.04em;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0,31,63,0.12);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .back-btn-wrapper {
            top: 76px;
            left: 0.75rem;
          }
          .back-btn {
            padding: 0.38rem 0.75rem;
            font-size: 0.72rem;
          }
        }
      `}</style>
    </div>
  );
}

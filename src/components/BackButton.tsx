import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const isTruvoxDetail = location.pathname.startsWith('/brands/truvox/') && location.pathname !== '/brands/truvox';
  const isKlencoDetail = location.pathname.startsWith('/brands/klenco/') && location.pathname.split('/').filter(Boolean).length > 2;

  if (!isTruvoxDetail && !isKlencoDetail) return null;

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else if (isTruvoxDetail) {
      navigate('/brands/truvox');
    } else {
      navigate('/brands/klenco');
    }
  };

  return (
    <div className="back-btn-wrapper">
      <button
        onClick={handleBack}
        className="back-btn"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--primary)';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.borderColor = 'var(--primary)';
          e.currentTarget.style.transform = 'translateX(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,31,63,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'white';
          e.currentTarget.style.color = 'var(--primary)';
          e.currentTarget.style.borderColor = 'var(--border-color)';
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,31,63,0.12)';
        }}
      >
        <ArrowLeft size={15} />
        <span>Back</span>
      </button>

      <style>{`
        .back-btn-wrapper {
          position: fixed;
          top: 116px;
          left: 1.5rem;
          z-index: 900;
          transition: top 0.3s ease;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 1.05rem;
          background: white;
          color: var(--primary);
          border: 1.5px solid var(--border-color);
          border-radius: 2rem;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,31,63,0.12);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .back-btn-wrapper {
            top: 84px;
            left: 0.85rem;
          }
          .back-btn {
            padding: 0.38rem 0.85rem;
            font-size: 0.72rem;
          }
        }
      `}</style>
    </div>
  );
}

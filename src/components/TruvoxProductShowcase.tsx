import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import TruvoxProductName from './TruvoxProductName';

interface MachineItem {
  id: string;
  tabLabel: string;
  fullName: string;
  category: string;
  highlight: string;
  badge: string;
  image: string;
  link: string;
}

const featuredMachines: MachineItem[] = [
  {
    id: 'multiwash-pro-340',
    tabLabel: 'Multiwash PRO',
    fullName: 'Multiwash™ PRO 340',
    category: 'Scrubber Dryer',
    highlight: 'Wash, scrub and dry all floor types in a single pass',
    badge: 'Flagship Multi-Surface',
    image: '/content_images/multiwash-pro-340.png',
    link: '/brands/truvox/multiwash-pro-340'
  },
  {
    id: 'orbis-200-43',
    tabLabel: 'Orbis Rotary',
    fullName: 'Orbis 200 (43cm)',
    category: 'Single Disc Rotary',
    highlight: 'High-torque scrubbing, stripping & polishing performance',
    badge: 'Heavy-Duty Heritage',
    image: '/content_images/orbis-200-43.png',
    link: '/brands/truvox/orbis-200-43'
  },
  {
    id: 'hydromist-compact',
    tabLabel: 'Hydromist Carpet',
    fullName: 'Hydromist Compact',
    category: 'Carpet Extractor',
    highlight: 'Powerful spray injection & deep fibre extraction',
    badge: 'Deep Fibre Care',
    image: '/content_images/hydromist-compact.png',
    link: '/brands/truvox/hydromist-compact'
  },
  {
    id: 'valet-backpack-pro-battery',
    tabLabel: 'Valet Vacuums',
    fullName: 'Valet Backpack PRO Battery',
    category: 'Commercial Vacuum',
    highlight: 'Cordless ergonomic design with multi-stage HEPA filtration',
    badge: 'Cordless Freedom',
    image: '/content_images/valet-backpack-pro-battery.png',
    link: '/brands/truvox/valet-backpack-pro-battery'
  },
  {
    id: 'cimex-cyclone',
    tabLabel: 'Cimex 3-Brush',
    fullName: 'Cimex Cyclone 38',
    category: 'Three-Brush Technology',
    highlight: 'Patented planetary contra-rotation for maximum scrubbing power',
    badge: 'Patented 3-Brush',
    image: '/content_images/cimex-cyclone.png',
    link: '/brands/truvox/cimex-cyclone'
  },
  {
    id: 'trusweep-460',
    tabLabel: 'TruSweep',
    fullName: 'TruSweep 460',
    category: 'Escalator & Sweeper',
    highlight: 'Fast, dust-free manual sweeping for large open facilities',
    badge: 'High-Speed Sweeper',
    image: '/content_images/trusweep-460.png',
    link: '/brands/truvox/trusweep-460'
  }
];

export default function TruvoxProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto cycle every 5 seconds if user is not hovering
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredMachines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentMachine = featuredMachines[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredMachines.length) % featuredMachines.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredMachines.length);
  };

  return (
    <div 
      className="truvox-showcase-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        borderRadius: '1.5rem',
        background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 250, 252, 0.9) 100%)',
        border: '1px solid rgba(0, 168, 176, 0.28)',
        boxShadow: '0 20px 50px rgba(0, 43, 73, 0.09)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(10px)',
        overflow: 'hidden'
      }}
    >
      {/* Top Ambient Glow Accent */}
      <div 
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 168, 176, 0.15) 0%, rgba(0, 168, 176, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Header Category Pills */}
      <div 
        style={{
          display: 'flex',
          gap: '0.4rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          marginBottom: '1rem',
          position: 'relative',
          zIndex: 2,
          scrollbarWidth: 'none'
        }}
        className="no-scrollbar"
      >
        {featuredMachines.map((m, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={m.id}
              onClick={() => setActiveIndex(idx)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '50px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                border: isActive ? '1px solid #00A8B0' : '1px solid rgba(0, 168, 176, 0.15)',
                backgroundColor: isActive ? '#00A8B0' : 'white',
                color: isActive ? 'white' : '#475569',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? '0 4px 12px rgba(0, 168, 176, 0.25)' : 'none'
              }}
            >
              {m.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Stage: Product Visual Showcase Area */}
      <div 
        style={{
          position: 'relative',
          height: '330px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          borderRadius: '1.25rem',
          background: 'radial-gradient(ellipse at 50% 75%, rgba(0, 168, 176, 0.12) 0%, rgba(240, 249, 250, 0.4) 50%, rgba(255, 255, 255, 0) 80%)',
          overflow: 'hidden'
        }}
      >
        {/* Floating Category Badge */}
        <div 
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: 'white',
            padding: '0.3rem 0.75rem',
            borderRadius: '2rem',
            fontSize: '0.68rem',
            fontWeight: 800,
            color: '#00A8B0',
            border: '1px solid rgba(0, 168, 176, 0.25)',
            boxShadow: '0 2px 8px rgba(0, 168, 176, 0.1)',
            zIndex: 3
          }}
        >
          <Sparkles size={12} color="#00A8B0" />
          <span>{currentMachine.badge}</span>
        </div>

        {/* Floating Model Category */}
        <div 
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            fontSize: '0.68rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#64748b',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: '0.3rem 0.65rem',
            borderRadius: '0.4rem',
            border: '1px solid #e2e8f0',
            zIndex: 3
          }}
        >
          {currentMachine.category}
        </div>

        {/* Product Machine Image with Dynamic Lighting & Shadow */}
        <div 
          key={currentMachine.id}
          className="truvox-showcase-img-wrap"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.5rem 1rem 1rem'
          }}
        >
          <img 
            src={currentMachine.image} 
            alt={currentMachine.fullName}
            style={{
              maxHeight: '260px',
              maxWidth: '85%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 18px 24px rgba(0, 31, 63, 0.16)) drop-shadow(0 4px 8px rgba(0, 168, 176, 0.12))',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              animation: 'truvoxPopIn 0.4s ease-out'
            }}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous machine"
          style={{
            position: 'absolute',
            left: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(0, 168, 176, 0.3)',
            color: '#00A8B0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            zIndex: 4
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00A8B0';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#00A8B0';
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next machine"
          style={{
            position: 'absolute',
            right: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(0, 168, 176, 0.3)',
            color: '#00A8B0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            zIndex: 4
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00A8B0';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = '#00A8B0';
          }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Floor Horizon Glow Ring */}
        <div 
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '24px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0, 168, 176, 0.35) 0%, rgba(0, 168, 176, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      </div>

      {/* Machine Details & Interactive Action */}
      <div 
        style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(0, 168, 176, 0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '0.2rem' }}>
            <TruvoxProductName name={currentMachine.fullName} layout="inline" color="#00A8B0" style={{ fontSize: '1.05rem' }} />
          </div>
          <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4, margin: 0, fontWeight: 500 }}>
            {currentMachine.highlight}
          </p>
        </div>

        <Link
          to={currentMachine.link}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: '#00A8B0',
            color: 'white',
            padding: '0.55rem 1.15rem',
            borderRadius: '0.5rem',
            fontSize: '0.78rem',
            fontWeight: 800,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 14px rgba(0, 168, 176, 0.3)',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#008b94';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 168, 176, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#00A8B0';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 168, 176, 0.3)';
          }}
        >
          <span>Explore</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <style>{`
        @keyframes truvoxPopIn {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

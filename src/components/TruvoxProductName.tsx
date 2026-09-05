import React from 'react';

interface TruvoxProductNameProps {
  name: string;
  layout?: 'stacked' | 'inline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function parseTruvoxName(rawName: string): { thin: string; bold: string; hasTM: boolean } {
  if (!rawName) return { thin: '', bold: '', hasTM: false };

  let clean = rawName.trim();
  const hasTM = /\u2122/i.test(clean) || /multiwash/i.test(clean);
  
  // Remove existing TM symbol for uniform processing
  clean = clean.replace(/\u2122/g, '').replace(/\s+/g, ' ').trim();

  // Known Truvox family prefixes
  const families = [
    'Multiwash',
    'Orbis',
    'Hydromist',
    'Cimex',
    'Valet',
    'TruSweep',
    'VTVe',
    'i-scrub',
    'imop',
    'AM'
  ];

  for (const family of families) {
    const regex = new RegExp(`^${family}(?:\\s*-\\s*|\\s+|$)(.*)$`, 'i');
    const match = clean.match(regex);
    if (match) {
      return {
        thin: family.toUpperCase(),
        bold: match[1]?.trim().toUpperCase() || '',
        hasTM: hasTM || family.toLowerCase() === 'multiwash'
      };
    }
  }

  // Fallback: split on first space
  const spaceIdx = clean.indexOf(' ');
  if (spaceIdx !== -1) {
    return {
      thin: clean.slice(0, spaceIdx).toUpperCase(),
      bold: clean.slice(spaceIdx + 1).toUpperCase(),
      hasTM
    };
  }

  return {
    thin: clean.toUpperCase(),
    bold: '',
    hasTM
  };
}

export default function TruvoxProductName({
  name,
  layout = 'inline',
  size = 'md',
  color = 'inherit',
  className = '',
  style = {}
}: TruvoxProductNameProps) {
  const { thin, bold, hasTM } = parseTruvoxName(name);

  // Stacked layout (used for Product Detail Header matching reference design)
  if (layout === 'stacked') {
    return (
      <div className={`truvox-product-name-stacked ${className}`} style={{ color, ...style }}>
        <div 
          style={{ 
            fontWeight: 300, 
            fontSize: size === 'xl' ? 'clamp(1.75rem, 3.5vw, 2.75rem)' : 'clamp(1.1rem, 2vw, 1.5rem)', 
            letterSpacing: '0.06em', 
            lineHeight: 1.1,
            textTransform: 'uppercase'
          }}
        >
          {thin}
          {hasTM && (
            <sup style={{ fontSize: '0.5em', fontWeight: 600, marginLeft: '3px', top: '-0.5em', position: 'relative' }}>
              {'\u2122'}
            </sup>
          )}
        </div>
        {bold && (
          <div 
            style={{ 
              fontWeight: 900, 
              fontSize: size === 'xl' ? 'clamp(2.5rem, 5.2vw, 4rem)' : 'clamp(1.5rem, 3vw, 2.2rem)', 
              letterSpacing: '-0.02em', 
              lineHeight: 1.05,
              marginTop: '0.2rem',
              textTransform: 'uppercase'
            }}
          >
            {bold}
          </div>
        )}
      </div>
    );
  }

  // Inline layout (used in category lists, cards, breadcrumbs)
  return (
    <span className={`truvox-product-name-inline ${className}`} style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.35rem', color: 'inherit', ...style }}>
      <span style={{ fontWeight: 300, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        {thin}
        {hasTM && (
          <sup style={{ fontSize: '0.65em', fontWeight: 600, marginLeft: '1px', verticalAlign: 'super' }}>
            {'\u2122'}
          </sup>
        )}
      </span>
      {bold && (
        <span style={{ fontWeight: 800, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
          {bold}
        </span>
      )}
    </span>
  );
}

import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { floorCleaningData } from '../data/klenco-floor-cleaning';
import type { Product } from '../data/klenco-floor-cleaning';
import { vacuumData } from '../data/klenco-vacuum-cleaners';
import { highPressureData } from '../data/klenco-high-pressure';
import { chemicalsData } from '../data/klenco-chemicals';

// ─── MASTER CATALOG ─────────────────────────────────────────────────────────

export const klencoCatalog = {
  'floor-cleaning': {
    bannerImage: '/content_images/klenco_floor_banner_edited.jpg',
    label: 'Floor Cleaning',
    hasSubCategories: true,
    subCategories: [
      {
        id: 'single-disc',
        label: 'Single Disc Machines',
        products: floorCleaningData.singleDisc,
      },
      {
        id: 'carpet-extractors',
        label: 'Carpet Extractors',
        products: floorCleaningData.extractors,
      },
      {
        id: 'scrubber-dryers',
        label: 'Scrubber Dryers',
        products: floorCleaningData.scrubbers,
      },
      {
        id: 'sweepers',
        label: 'Sweepers',
        products: floorCleaningData.sweepers,
      },
      {
        id: 'steam-cleaners',
        label: 'Steam Cleaners',
        products: floorCleaningData.steam,
      },
    ],
    allProducts: [
      ...floorCleaningData.singleDisc,
      ...floorCleaningData.extractors,
      ...floorCleaningData.scrubbers,
      ...floorCleaningData.sweepers,
      ...floorCleaningData.steam,
    ],
  },
  'vacuum-cleaners': {
    bannerImage: '/content_images/klenco_vacuum_banner_edited.jpg',
    label: 'Vacuum Cleaners',
    hasSubCategories: false,
    subCategories: [],
    allProducts: vacuumData.vacuums as Product[],
  },
  'high-pressure-cleaners': {
    bannerImage: '/content_images/klenco_pressure_banner_edited.jpg',
    label: 'High Pressure Cleaners',
    hasSubCategories: false,
    subCategories: [],
    allProducts: highPressureData.highPressure as Product[],
  },
  'chemicals': {
    bannerImage: '/content_images/klenco_chemicals_banner_edited.jpg',
    label: 'Professional Cleaning Chemicals',
    hasSubCategories: false,
    subCategories: [],
    allProducts: chemicalsData.chemicals as Product[],
  },
};

type CatalogKey = keyof typeof klencoCatalog;

// ─── CATEGORY LISTING PAGE ───────────────────────────────────────────────────

function KlencoCategoryPage({ categoryId }: { categoryId: string }) {
  const navigate = useNavigate();
  const cat = klencoCatalog[categoryId as CatalogKey];
  if (!cat) return <div className="pt-32 text-center"><h1>Category not found</h1></div>;

  return (
    <div className="fade-in">
      {/* Hero */}
      {'bannerImage' in cat && cat.bannerImage ? (
        <section style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ width: '100%', height: 'clamp(320px, 48vh, 560px)', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 0' }}>
            <img src={cat.bannerImage} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} />
          </div>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
            <button
              onClick={() => navigate('/brands/klenco')}
              style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              &larr; Back to Klenco
            </button>
            <div style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Klenco Product Range</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', color: 'var(--primary)' }}>{cat.label}</h1>
          </div>
        </section>
      ) : (
        <section style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #1a3050 100%)', padding: '5rem 0', color: 'white' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
            <button
              onClick={() => navigate('/brands/klenco')}
              style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              &larr; Back to Klenco
            </button>
            <div style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Klenco Product Range</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', color: 'white' }}>{cat.label}</h1>
          </div>
        </section>
      )}

      <section style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
        <div className="container max-w-7xl mx-auto px-4">

          {/* Has sub-categories (Floor Cleaning) */}
          {cat.hasSubCategories && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <div style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  The Klenco Floorcare Range
                </div>
                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
                  PRODUCT CATEGORIES
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                alignItems: 'stretch'
              }}>
                {cat.subCategories.map((sub) => (
                  <div key={sub.id} style={{ 
                    background: 'white', 
                    borderRadius: '1rem', 
                    padding: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 style={{ 
                      fontSize: '1rem', 
                      fontWeight: 800, 
                      color: 'var(--primary)', 
                      marginBottom: '1.5rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid var(--border-color)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em'
                    }}>
                      {sub.label}
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                      {sub.products.map((product) => (
                        <Link 
                          key={product.id} 
                          to={`/brands/klenco/${categoryId}/${product.id}`}
                          style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.65rem 0.85rem',
                            border: '1px solid var(--border-color)',
                            borderRadius: '0.4rem',
                            color: 'var(--text-dark)',
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            transition: 'all 0.2s ease',
                            backgroundColor: 'white',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--accent)';
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(227,30,36,0.15)';
                            const icon = e.currentTarget.querySelector('svg');
                            if (icon) icon.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.color = 'var(--text-dark)';
                            e.currentTarget.style.boxShadow = 'none';
                            const icon = e.currentTarget.querySelector('svg');
                            if (icon) icon.style.color = 'var(--text-muted)';
                          }}
                        >
                          <span>{product.name}</span>
                          <ArrowRight size={16} style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', flexShrink: 0 }} />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Flat product list (Vacuums, High Pressure, Chemicals) */}
          {!cat.hasSubCategories && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {cat.allProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => navigate(`/brands/klenco/${categoryId}/${product.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: 'white',
        border: '1px solid var(--border-color)',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
        e.currentTarget.style.borderColor = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      <div style={{ height: '180px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ maxHeight: '150px', maxWidth: '100%', objectFit: 'contain' }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div style={{ padding: '1.25rem', flex: 1 }}>
        <h3 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{product.name}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5 }}>{product.subtitle}</p>
      </div>
      <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem' }}>
        View Details <span>→</span>
      </div>
    </div>
  );
}

// ─── PRODUCT DETAIL PAGE ─────────────────────────────────────────────────────

function KlencoProductDetailPage({ categoryId, productId }: { categoryId: string; productId: string }) {
  const navigate = useNavigate();
  const cat = klencoCatalog[categoryId as CatalogKey];
  if (!cat) return <div className="pt-32 text-center"><h1>Category not found</h1></div>;

  const product = cat.allProducts.find((p) => p.id === productId);
  if (!product) return <div className="pt-32 text-center"><h1>Product not found</h1></div>;

  return (
    <div className="fade-in">
      {/* Breadcrumb hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #1a3050 100%)', padding: '5rem 0', color: 'white' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/brands/klenco')} style={{ color: 'rgba(255,255,255,0.65)', background: 'none', border: 'none', cursor: 'pointer' }}>Klenco</button>
            <span>/</span>
            <button onClick={() => navigate(`/brands/klenco/${categoryId}`)} style={{ color: 'rgba(255,255,255,0.65)', background: 'none', border: 'none', cursor: 'pointer' }}>{cat.label}</button>
            <span>/</span>
            <span style={{ color: 'white' }}>{product.name}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>{product.name}</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: '0.5rem', fontSize: '1.1rem' }}>{product.subtitle}</p>
        </div>
      </section>

      {/* Product body */}
      <section style={{ backgroundColor: '#f5f7f9', padding: '3.5rem 0 5rem' }}>
        <div className="container max-w-6xl mx-auto px-4">
          
          {/* Top Row: Left (Product Image Showcase) & Right (Product Overview / Summary Card) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
            
            {/* Product Image Box */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '1rem', 
              padding: '2.5rem', 
              border: '1px solid var(--border-color)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              minHeight: '360px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)' 
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: '100%', maxHeight: '340px', objectFit: 'contain' }}
                onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
              />
            </div>

            {/* Product Summary / Overview Card */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '1rem', 
              padding: '2.5rem', 
              border: '1px solid var(--border-color)', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                backgroundColor: 'rgba(227, 30, 36, 0.08)', 
                color: 'var(--accent)', 
                padding: '0.35rem 0.85rem', 
                borderRadius: '2rem', 
                fontSize: '0.78rem', 
                fontWeight: 800, 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase', 
                marginBottom: '1rem', 
                alignSelf: 'flex-start' 
              }}>
                Product Overview
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: 1.25 }}>
                {product.name}
              </h2>
              {product.subtitle && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                  {product.subtitle}
                </p>
              )}
              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#334155', fontWeight: 450, margin: 0 }}>
                  {product.description}
                </p>
              </div>
            </div>

          </div>

          {/* Middle Row: Key Features & Ideal Applications Side-by-Side (Aligned at exact same top baseline) */}
          <div style={{ 
            marginTop: '2.5rem', 
            display: 'grid', 
            gridTemplateColumns: product.applications && product.applications.length > 0 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr', 
            gap: '2.5rem', 
            alignItems: 'stretch' 
          }}>
            
            {/* Key Features Card */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '1rem', 
              padding: '2.25rem', 
              border: '1px solid var(--border-color)', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <h3 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.15rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ display: 'inline-block', width: '4px', height: '20px', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                Key Features
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', flexGrow: 1 }}>
                {product.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: '#334155', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 900, flexShrink: 0, marginTop: '2px', fontSize: '1rem' }}>✓</span>
                    <span style={{ fontWeight: 500 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal Applications Card */}
            {product.applications && product.applications.length > 0 && (
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '1rem', 
                padding: '2.25rem', 
                border: '1px solid var(--border-color)', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <h3 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.15rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ display: 'inline-block', width: '4px', height: '20px', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                  Ideal Applications
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                  {product.applications.map((a, i) => (
                    <div key={i} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem', 
                      fontSize: '0.9rem', 
                      color: '#334155', 
                      fontWeight: 500, 
                      padding: '0.75rem 1rem', 
                      backgroundColor: '#f8fafc', 
                      borderRadius: '0.5rem', 
                      border: '1px solid var(--border-color)' 
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)', flexShrink: 0 }} />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Section: Product Brochures & Centered Action Buttons */}
          <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            
            {/* Product Brochures & Downloads */}
            {product.brochures && product.brochures.length > 0 && (
              <div style={{ width: '100%', maxWidth: '780px', backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid var(--border-color)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <span style={{ display: 'inline-block', width: '4px', height: '18px', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                  Product Brochures & Downloads
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {product.brochures.map((b, i) => (
                    <a
                      key={i}
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 1.25rem',
                        backgroundColor: '#f8fafc',
                        border: '1px solid var(--border-color)',
                        borderRadius: '0.6rem',
                        textDecoration: 'none',
                        color: 'var(--text-dark)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.color = 'var(--accent)';
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(227,30,36,0.1)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-dark)';
                        e.currentTarget.style.backgroundColor = '#f8fafc';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <FileText size={19} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                        <span>{b.title}</span>
                      </div>
                      <Download size={19} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons Centered */}
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate(`/brands/klenco/${categoryId}`)}
                style={{ padding: '0.85rem 2rem', borderRadius: '0.5rem', border: '2px solid var(--primary)', color: 'var(--primary)', fontWeight: 700, backgroundColor: 'white', cursor: 'pointer', fontSize: '0.92rem', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'var(--primary)'; }}
              >
                ← Back to {cat.label}
              </button>
              <button 
                onClick={() => navigate('/contact')}
                style={{ padding: '0.85rem 2.25rem', borderRadius: '0.5rem', border: 'none', color: 'white', fontWeight: 700, backgroundColor: 'var(--accent)', cursor: 'pointer', fontSize: '0.92rem', boxShadow: '0 4px 15px rgba(227,30,36,0.2)', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(227,30,36,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(227,30,36,0.2)'; }}
              >
                Enquire Now
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

// ─── ROUTER ──────────────────────────────────────────────────────────────────

export default function KlencoPage() {
  const { categoryId, productId } = useParams<{ categoryId?: string; productId?: string }>();

  if (productId && categoryId) {
    return <KlencoProductDetailPage categoryId={categoryId} productId={productId} />;
  }
  if (categoryId) {
    return <KlencoCategoryPage categoryId={categoryId} />;
  }
  return null;
}






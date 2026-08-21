import { useParams, useNavigate } from 'react-router-dom';
import { floorCleaningData } from '../data/klenco-floor-cleaning';
import type { Product } from '../data/klenco-floor-cleaning';
import { vacuumData } from '../data/klenco-vacuum-cleaners';
import { highPressureData } from '../data/klenco-high-pressure';
import { chemicalsData } from '../data/klenco-chemicals';

// ─── MASTER CATALOG ─────────────────────────────────────────────────────────

export const klencoCatalog = {
  'floor-cleaning': {
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
    label: 'Vacuum Cleaners',
    hasSubCategories: false,
    subCategories: [],
    allProducts: vacuumData.vacuums as Product[],
  },
  'high-pressure-cleaners': {
    label: 'High Pressure Cleaners',
    hasSubCategories: false,
    subCategories: [],
    allProducts: highPressureData.highPressure as Product[],
  },
  'chemicals': {
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
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, #1a3050 100%)',
        padding: '7rem 0',
        color: 'white',
      }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <button
            onClick={() => navigate('/brands/klenco')}
            style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            ← Back to Klenco
          </button>
          <div style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Klenco Product Range</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em', color: 'white' }}>{cat.label}</h1>
        </div>
      </section>

      <section style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Has sub-categories (Floor Cleaning) */}
          {cat.hasSubCategories && cat.subCategories.map((sub) => (
            <div key={sub.id} style={{ marginBottom: '4rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem',
                paddingBottom: '1rem', borderBottom: '2px solid var(--border-color)',
              }}>
                <div style={{ width: '4px', height: '28px', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)' }}>{sub.label}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {sub.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => navigate(`/brands/klenco/${categoryId}/${product.id}`)}
                  />
                ))}
              </div>
            </div>
          ))}

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
      <section style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left: image */}
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2.5rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: '100%', maxHeight: '350px', objectFit: 'contain' }}
                onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
              />
            </div>

            {/* Right: info */}
            <div>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-dark)', marginBottom: '2.5rem' }}>{product.description}</p>

              <h3 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: '4px', height: '18px', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                Key Features
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {product.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-dark)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 900, flexShrink: 0, marginTop: '2px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {product.applications && product.applications.length > 0 && (
                <>
                  <h3 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ display: 'inline-block', width: '4px', height: '18px', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
                    Ideal Applications
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '2.5rem' }}>
                    {product.applications.map((a, i) => (
                      <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', padding: '0.4rem 0.75rem', backgroundColor: 'white', borderRadius: '0.35rem', border: '1px solid var(--border-color)' }}>
                        {a}
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => navigate(`/brands/klenco/${categoryId}`)}
                  style={{ padding: '0.8rem 1.75rem', borderRadius: '0.5rem', border: '2px solid var(--primary)', color: 'var(--primary)', fontWeight: 700, backgroundColor: 'white', cursor: 'pointer', fontSize: '0.9rem' }}
                >
                  ← Back to {cat.label}
                </button>
                <button style={{ padding: '0.8rem 1.75rem', borderRadius: '0.5rem', border: 'none', color: 'white', fontWeight: 700, backgroundColor: 'var(--accent)', cursor: 'pointer', fontSize: '0.9rem' }}>
                  Enquire Now
                </button>
              </div>
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

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { truvoxProductDetails } from '../data/truvox-details';

export default function TruvoxProduct() {
  const { productId } = useParams();
  const [activeTab, setActiveTab] = useState('FEATURES');

  // Fetch the real product data based on the URL parameter
  const productData = productId && productId in truvoxProductDetails 
    ? truvoxProductDetails[productId as keyof typeof truvoxProductDetails]
    : null;

  if (!productData) {
    return (
      <div className="fade-in" style={{ backgroundColor: 'var(--bg-light)', minHeight: '50vh', padding: '8rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Product Not Found</h2>
        <Link to="/brands/truvox" className="btn btn-primary">Return to Truvox Products</Link>
      </div>
    );
  }

  const tabs = ['FEATURES', 'SPECIFICATIONS', 'ACCESSORIES', 'DOWNLOADS'];

  return (
    <div className="fade-in" style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container max-w-7xl mx-auto px-4">
        
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/brands/truvox" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontWeight: 600, transition: 'color 0.2s ease' }} className="hover:text-[var(--primary)]">
            <ArrowLeft size={18} /> Back to Truvox Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12" style={{ background: 'white', borderRadius: '1.5rem', padding: 'clamp(2rem, 5vw, 4rem)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid var(--border-color)' }}>
          
          {/* Product Images Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ height: '500px', background: 'white', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: '2rem', border: '1px solid var(--border-color)' }}>
              <img 
                src={productData.heroImage} 
                alt={productData.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onError={(e) => {
                  // Fallback to removing the WordPress resize suffix if it fails
                  if (e.currentTarget.src.includes('-768x1024')) {
                    e.currentTarget.src = e.currentTarget.src.replace('-768x1024', '');
                  }
                }}
              />
            </div>
            
            {productData.galleryImages && productData.galleryImages.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {productData.galleryImages.map((img, i) => (
                  <div key={i} style={{ aspectRatio: '1', background: 'white', border: '1px solid var(--border-color)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', cursor: 'pointer' }} className="hover:border-[var(--accent)] transition-colors">
                    <img 
                      src={img} 
                      alt={`${productData.name} view ${i+1}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                      onError={(e) => {
                        if (e.currentTarget.src.includes('-768x1024')) {
                          e.currentTarget.src = e.currentTarget.src.replace('-768x1024', '');
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Area */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(0, 75, 135, 0.1)', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                {productData.brand}
              </div>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                {productData.name}
              </h1>
              
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                {productData.description}
              </p>
            </div>

            {/* Key Features (Quick look) */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem' }}>Quick Overview</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {productData.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <CheckCircle size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 'auto' }}>
              <Link to="/contact" className="btn-3d" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', width: '100%', textAlign: 'center', display: 'block' }}>
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>

        {/* Tabbed Content Area */}
        <div style={{ marginTop: '3rem', background: 'white', borderRadius: '1.5rem', padding: 'clamp(2rem, 5vw, 4rem)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid var(--border-color)' }}>
           
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '3rem' }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: activeTab === tab ? 'var(--accent)' : 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderBottom: activeTab === tab ? '3px solid var(--accent)' : 'none',
                    paddingBottom: activeTab === tab ? '1.5rem' : '0',
                    marginBottom: activeTab === tab ? '-1.5rem' : '0',
                    background: 'none',
                    border: 'none',
                    borderBottomWidth: activeTab === tab ? '3px' : '0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover:text-[var(--primary)]"
                >
                  {tab}
                </button>
              ))}
           </div>

           <div>
              {activeTab === 'FEATURES' && (
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem' }}>All Features</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
                    {productData.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <CheckCircle size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'SPECIFICATIONS' && (
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                  {Object.entries(productData.specifications).map(([key, value], index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: '1px solid var(--bg-gray)' }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-muted)', fontSize: '1.1rem' }}>{key}</span>
                        <span style={{ fontWeight: 700, color: 'var(--text-dark)', textAlign: 'right', fontSize: '1.1rem' }}>{value as React.ReactNode}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'ACCESSORIES' && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  <p style={{ fontSize: '1.2rem' }}>Accessories detailed catalog is currently being updated for {productData.name}. Please contact us for a full list of compatible pads and brushes.</p>
                </div>
              )}

              {activeTab === 'DOWNLOADS' && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  <p style={{ fontSize: '1.2rem' }}>Brochures and operating manuals for {productData.name} will be available for download shortly.</p>
                </div>
              )}
           </div>
        </div>

      </div>
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { useState } from 'react';
import { truvoxProductDetails } from '../data/truvox-details';

export default function TruvoxProduct() {
  const { productId } = useParams();
  const [activeTab, setActiveTab] = useState('FEATURES');
  const [activeImage, setActiveImage] = useState(0);

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

  const tabs = [];
  if (productData.features && productData.features.length > 0) tabs.push('FEATURES');
  if (productData.floorTypes && productData.floorTypes.length > 0) tabs.push('FLOOR TYPES');
  if (Object.keys(productData.specifications).length > 0) tabs.push('SPECIFICATIONS');
  if (productData.accessories && productData.accessories.length > 0) tabs.push('ACCESSORIES');
  if (productData.downloads && productData.downloads.length > 0) tabs.push('DOWNLOADS');

  // If initial activeTab isn't in tabs, set it
  if (tabs.length > 0 && !tabs.includes(activeTab)) {
      setActiveTab(tabs[0]);
  }

  const allImages = [productData.heroImage, ...(productData.galleryImages || [])];

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
                src={allImages[activeImage]} 
                alt={productData.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {allImages.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveImage(i)}
                    style={{ aspectRatio: '1', background: 'white', border: activeImage === i ? '2px solid var(--accent)' : '1px solid var(--border-color)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', cursor: 'pointer' }} 
                    className="hover:border-[var(--accent)] transition-colors"
                  >
                    <img src={img} alt={`${productData.name} view ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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

            {/* CTA */}
            <div style={{ marginTop: 'auto' }}>
              <Link to="/contact" className="btn-3d" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', width: '100%', textAlign: 'center', display: 'block' }}>
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>

        {/* Tabbed Content Area */}
        {tabs.length > 0 && (
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productData.features.map((feature: any, idx: number) => (
                        <div key={idx} style={{ background: 'var(--bg-light)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--border-color)' }}>
                            {feature.image && (
                                <div style={{ height: '200px', marginBottom: '1.5rem', background: 'white', borderRadius: '0.5rem', padding: '1rem' }}>
                                    <img src={feature.image} alt={feature.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            )}
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>{feature.title}</h4>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feature.text}</p>
                        </div>
                        ))}
                    </div>
                )}

                {activeTab === 'FLOOR TYPES' && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {productData.floorTypes.map((floor: any, idx: number) => (
                        <div key={idx} style={{ textAlign: 'center' }}>
                            <div style={{ aspectRatio: '1', borderRadius: '50%', overflow: 'hidden', marginBottom: '1rem', border: '3px solid white', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                <img src={floor.image} alt={floor.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>{floor.title}</span>
                        </div>
                        ))}
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
                    <div className="grid md:grid-cols-3 gap-6">
                        {productData.accessories.map((acc: any, idx: number) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-light)', padding: '1rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                            {acc.image && (
                                <div style={{ width: '80px', height: '80px', flexShrink: 0, background: 'white', borderRadius: '0.5rem', padding: '0.5rem' }}>
                                    <img src={acc.image} alt={acc.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            )}
                            <div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 800, marginBottom: '0.25rem' }}>{acc.title}</div>
                                <div style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: 600, lineHeight: 1.4 }}>{acc.text}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                )}

                {activeTab === 'DOWNLOADS' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productData.downloads.map((cat: any, idx: number) => (
                            <div key={idx}>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--bg-gray)' }}>
                                    {cat.category}
                                </h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {cat.links.map((link: any, lIdx: number) => (
                                        <li key={lIdx}>
                                            <a href={link.url} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)', fontWeight: 500 }} className="hover:text-[var(--accent)] transition-colors">
                                                <Download size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <span style={{ lineHeight: 1.4 }}>{link.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            </div>
        )}

      </div>
    </div>
  );
}

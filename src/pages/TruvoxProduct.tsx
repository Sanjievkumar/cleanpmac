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

  const allImages = Array.from(new Set([productData.heroImage, ...(productData.galleryImages || [])]));

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
                onError={(e) => (e.currentTarget.style.display = 'none')}
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
                    <img src={img} alt={`${productData.name} view ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => (e.currentTarget.parentElement!.style.display = 'none')} />
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
            <div style={{ marginTop: '4rem' }}>
            
            <style>{`
              .tab-btn { padding: 0.85rem 1.75rem; border-radius: 50px; font-weight: 700; transition: all 0.3s ease; border: 2px solid transparent; font-size: 0.95rem; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; }
              .tab-btn:hover { background-color: rgba(0,75,135,0.05); color: var(--primary); }
              .tab-btn.active { background-color: var(--primary); color: white; box-shadow: 0 4px 15px rgba(0,75,135,0.25); border-color: var(--primary); }
              .tab-btn.inactive { background-color: white; color: var(--text-muted); border-color: var(--border-color); }
              
              .feature-card { background: white; border-radius: 1rem; padding: 2rem; border: 1px solid var(--border-color); transition: transform 0.3s, box-shadow 0.3s; height: 100%; display: flex; flex-direction: column; }
              .feature-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); border-color: rgba(0,75,135,0.2); }
              
              .floor-card { position: relative; border-radius: 1rem; overflow: hidden; aspect-ratio: 1; transition: transform 0.3s, box-shadow 0.3s; background: white; border: 1px solid var(--border-color); }
              .floor-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.12); border-color: var(--accent); }
              .floor-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
              .floor-card:hover img { transform: scale(1.08); }
              .floor-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 3rem 1rem 1rem; background: linear-gradient(to top, rgba(0,0,0,0.85), transparent); color: white; text-align: center; font-weight: 800; font-size: 0.95rem; letter-spacing: 0.05em; pointer-events: none; }
              
              .spec-container { max-width: 900px; margin: 0 auto; background: white; border-radius: 1rem; overflow: hidden; border: 1px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
              .spec-row { display: flex; justify-content: space-between; padding: 1.25rem 2rem; border-bottom: 1px solid var(--border-color); transition: background-color 0.2s; }
              .spec-row:last-child { border-bottom: none; }
              .spec-row:nth-child(even) { background-color: #f8fafc; }
              .spec-row:hover { background-color: rgba(0,75,135,0.03); }
              .spec-label { font-weight: 600; color: var(--text-muted); width: 50%; padding-right: 1rem; }
              .spec-value { font-weight: 700; color: var(--primary); text-align: right; width: 50%; padding-left: 1rem; }
              
              .acc-card { background: white; border-radius: 1rem; border: 1px solid var(--border-color); overflow: hidden; display: flex; flex-direction: column; transition: transform 0.3s, box-shadow 0.3s; height: 100%; }
              .acc-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); border-color: rgba(0,75,135,0.2); }
              .acc-img-wrap { padding: 2rem; background: #f8fafc; display: flex; justify-content: center; align-items: center; aspect-ratio: 1; border-bottom: 1px solid var(--border-color); }
              .acc-img-wrap img { width: 100%; height: 100%; object-fit: contain; transition: transform 0.3s; }
              .acc-card:hover .acc-img-wrap img { transform: scale(1.05); }
              .acc-content { padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; }
              .acc-sku { display: inline-block; background: rgba(0, 75, 135, 0.08); color: var(--primary); padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 800; margin-bottom: 1rem; align-self: flex-start; }
              .acc-title { font-size: 1.05rem; font-weight: 700; color: var(--text-dark); line-height: 1.4; }
              
              .dl-cat-title { font-size: 1.35rem; font-weight: 900; color: var(--primary); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem; padding-bottom: 0.75rem; border-bottom: 2px solid var(--border-color); }
              .dl-link { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; background: white; border: 1px solid var(--border-color); border-radius: 0.75rem; margin-bottom: 0.75rem; transition: all 0.2s; color: var(--text-dark); font-weight: 600; text-decoration: none; }
              .dl-link:hover { border-color: var(--accent); color: var(--accent); box-shadow: 0 8px 20px rgba(227, 38, 54, 0.08); transform: translateX(6px); background: #fffcfc; }
              .dl-icon { color: var(--accent); transition: transform 0.2s; }
              .dl-link:hover .dl-icon { transform: translateY(2px); }
            `}</style>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`tab-btn ${activeTab === tab ? 'active' : 'inactive'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="fade-in" style={{ animationDuration: '0.4s' }}>
                {activeTab === 'FEATURES' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {productData.features.map((feature: any, idx: number) => (
                        <div key={idx} className="feature-card">
                            {feature.image && (
                                <div style={{ height: '180px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={feature.image} alt={feature.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
                                </div>
                            )}
                            <h4 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{feature.title}</h4>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem', margin: 0 }}>{feature.text}</p>
                        </div>
                        ))}
                    </div>
                )}

                {activeTab === 'FLOOR TYPES' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1.5rem', justifyContent: 'center' }}>
                        {productData.floorTypes.map((floor: any, idx: number) => (
                        <div key={idx} className="floor-card">
                            <img src={floor.image} alt={floor.title} />
                            <div className="floor-overlay">{floor.title}</div>
                        </div>
                        ))}
                    </div>
                )}

                {activeTab === 'SPECIFICATIONS' && (
                    <div className="spec-container">
                        {Object.entries(productData.specifications).map(([key, value], index) => (
                            <div key={index} className="spec-row">
                                <span className="spec-label">{key}</span>
                                <span className="spec-value">{value as React.ReactNode}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'ACCESSORIES' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {productData.accessories.map((acc: any, idx: number) => (
                        <div key={idx} className="acc-card">
                            {acc.image && (
                                <div className="acc-img-wrap">
                                    <img src={acc.image} alt={acc.title} />
                                </div>
                            )}
                            <div className="acc-content">
                                <span className="acc-sku">{acc.title}</span>
                                <span className="acc-title">{acc.text}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                )}

                {activeTab === 'DOWNLOADS' && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {productData.downloads.map((cat: any, idx: number) => (
                            <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '1.25rem', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                <h4 className="dl-cat-title">
                                    {cat.category}
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {cat.links.map((link: any, lIdx: number) => (
                                        <a key={lIdx} href={link.url} target="_blank" rel="noreferrer" className="dl-link">
                                            <span style={{ paddingRight: '1rem' }}>{link.title}</span>
                                            <Download size={20} className="dl-icon" />
                                        </a>
                                    ))}
                                </div>
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

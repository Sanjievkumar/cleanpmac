import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// import { truvoxCategories } from '../data/truvox-products'; // Will be used when real data is available

export default function TruvoxBrand() {
  // Placeholder data - you will provide this content later
  const categories = [
    { id: 'multiwash', name: 'Multiwash Scrubber Dryers', description: 'Multi-purpose floor cleaning machines' },
    { id: 'vacuums', name: 'Commercial Vacuums', description: 'High-performance tub and upright vacuums' },
    { id: 'carpet', name: 'Carpet Extractors', description: 'Deep cleaning for carpets and upholstery' }
  ];

  const placeholderProducts = {
    'multiwash': [
      { id: 'mw340', name: 'Multiwash 340', desc: 'Standard 34cm width' },
      { id: 'mwpro', name: 'Multiwash PRO', desc: 'Advanced scrubber dryer' },
    ],
    'vacuums': [
      { id: 'vtve', name: 'Valet Tub Vac', desc: '11.5L tub vacuum' }
    ],
    'carpet': [
      { id: 'hm10', name: 'Hydromist 10', desc: '10L carpet extractor' }
    ]
  };

  return (
    <div className="fade-in">
      {/* ═══════════ TRUVOX HERO ═══════════ */}
      <section className="section" style={{
        background: 'linear-gradient(rgba(0, 75, 135, 0.85), rgba(0, 75, 135, 0.95)), url("/content_images/image_8.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '8rem 0'
      }}>
        <div className="container text-center slide-up">
          <div className="flex justify-center bg-white rounded-lg p-6 mb-8 mx-auto shadow-lg" style={{ maxWidth: '300px' }}>
             <img src="/content_images/truvox-logo.png" alt="Truvox International" style={{ width: '100%', objectFit: 'contain' }} />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Truvox International
          </h1>
          <p className="text-lead" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.8 }}>
            Since 1960 – Global name in commercial and industrial floorcare equipment.
            {/* Note for User: You can provide expanded hero content here */}
          </p>
        </div>
      </section>

      {/* ═══════════ PRODUCT CATEGORIES ═══════════ */}
      <section className="section" style={{ backgroundColor: 'var(--bg-gray)' }}>
        <div className="container max-w-6xl mx-auto">
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>Our Product Range</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto', borderRadius: '2px' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {categories.map((category) => (
              <div key={category.id} className="category-section">
                <div style={{ marginBottom: '2rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '1rem' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>{category.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {placeholderProducts[category.id as keyof typeof placeholderProducts].map((product) => (
                    <Link 
                      key={product.id} 
                      to={`/brands/truvox/${product.id}`}
                      className="product-card hover-scale"
                      style={{ 
                        background: 'white', 
                        borderRadius: '1rem', 
                        overflow: 'hidden', 
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      {/* Product Image Placeholder */}
                      <div style={{ height: '250px', background: 'var(--bg-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Image placeholder</span>
                      </div>
                      
                      {/* Product Details Placeholder */}
                      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{product.name}</h4>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>{product.desc}</p>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent)', fontWeight: 600, gap: '0.5rem' }}>
                          View Details <ArrowRight size={18} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function TruvoxProduct() {
  const { productId } = useParams();

  // Placeholder logic - this will be replaced with real data fetch based on productId
  const productName = productId ? productId.toUpperCase() : 'Product Details';

  return (
    <div className="fade-in" style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container max-w-6xl mx-auto">
        
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/brands/truvox" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            <ArrowLeft size={18} /> Back to Truvox Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12" style={{ background: 'white', borderRadius: '1.5rem', padding: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
          
          {/* Product Images Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ height: '400px', background: 'var(--bg-gray)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Main Image ({productId})</span>
            </div>
            {/* Thumbnails placeholder */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ aspectRatio: '1', background: 'var(--bg-gray)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Img {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Area */}
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(0, 75, 135, 0.1)', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
              TRUVOX INTERNATIONAL
            </div>
            
            <h1 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem', lineHeight: 1.1 }}>
              {productName}
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              This is a placeholder description for {productName}. Detailed product overview, features, and benefits will be inserted here based on the content you provide.
            </p>

            {/* Key Features Placeholder */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>Key Features</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Exceptional cleaning performance',
                  'Easy to operate and maneuver',
                  'Durable industrial construction',
                  'Cost-effective maintenance'
                ].map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CheckCircle size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn-3d" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', width: '100%', textAlign: 'center' }}>
                REQUEST A QUOTE
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

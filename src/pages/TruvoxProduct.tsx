import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { truvoxProductDetails } from '../data/truvox-details';

export default function TruvoxProduct() {
  const { productId } = useParams();

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
              />
            </div>
            
            {productData.galleryImages && productData.galleryImages.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {productData.galleryImages.map((img, i) => (
                  <div key={i} style={{ aspectRatio: '1', background: 'white', border: '1px solid var(--border-color)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', cursor: 'pointer' }} className="hover:border-[var(--accent)] transition-colors">
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

            {/* Key Features */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem' }}>Key Features</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {productData.features.map((feature, idx) => (
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

        {/* Specifications Tab (Matching screenshot structure) */}
        <div style={{ marginTop: '3rem', background: 'white', borderRadius: '1.5rem', padding: 'clamp(2rem, 5vw, 4rem)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid var(--border-color)' }}>
           
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FEATURES</h2>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '3px solid var(--accent)', paddingBottom: '1.5rem', marginBottom: '-1.5rem' }}>SPECIFICATIONS</h2>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ACCESSORIES</h2>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DOWNLOADS</h2>
           </div>

           <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
              {Object.entries(productData.specifications).map(([key, value], index) => (
                 <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--bg-gray)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>{key}</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-dark)', textAlign: 'right' }}>{value as React.ReactNode}</span>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}

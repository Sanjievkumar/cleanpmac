import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Product } from '../data/klenco-floor-cleaning';
import { floorCleaningData } from '../data/klenco-floor-cleaning';
import { vacuumData } from '../data/klenco-vacuum-cleaners';
import { highPressureData } from '../data/klenco-high-pressure';
import { chemicalsData } from '../data/klenco-chemicals';

export default function Brands() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [klencoTab, setKlencoTab] = useState('FLOOR CLEANING');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Reset sub-category and product when main tab changes
    setSelectedSubCategory(null);
    setSelectedProduct(null);
  }, [klencoTab]);

  if (id === 'klenco') {
    return (
      <div className="fade-in">
        <section className="section" style={{
          background: 'linear-gradient(rgba(227, 24, 55, 0.8), rgba(227, 24, 55, 0.8)), url("/content_images/image_9.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '8rem 0'
        }}>
          <div className="container text-center slide-up">
            <h1 className="heading-xl mb-4">KLENCO SINGAPORE</h1>
            <p className="text-lead" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Since 1971 – A Legacy of Cleaning Excellence.
            </p>
          </div>
        </section>

        <section className="section bg-white border-b">
          <div className="container grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">One Brand: A Complete Cleaning Solution</h2>
              <p className="text-muted mb-4">
                From professional cleaning machines and specialty chemicals to maintenance equipment and accessories, Klenco offers a comprehensive portfolio designed to meet every cleaning requirement. Engineered for performance and backed by decades of expertise, Klenco helps businesses achieve superior hygiene, operational efficiency, and long-term value.
              </p>
            </div>
            <div>
               <img src="/content_images/image_10.png" alt="Klenco Solutions" style={{ width: '100%', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
          </div>
        </section>

        {/* Nilfisk Style Horizontal Tab Navigation */}
        <section className="pt-12">
          <div className="container">
            <div className="flex border-b border-gray-300">
              {['FLOOR CLEANING', 'VACUUM CLEANERS', 'HIGH PRESSURE CLEANERS', 'CHEMICALS'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setKlencoTab(tab)}
                  style={{
                    padding: '1rem 2rem',
                    fontWeight: 700,
                    color: klencoTab === tab ? '#e31837' : 'var(--text-dark)',
                    borderBottom: klencoTab === tab ? '3px solid #e31837' : '3px solid transparent',
                    backgroundColor: klencoTab === tab ? '#fff' : 'transparent',
                    transition: 'all 0.2s ease',
                    marginBottom: '-1px'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="py-12">
              {selectedProduct ? (
                <div className="fade-in max-w-5xl mx-auto">
                  <button onClick={() => setSelectedProduct(null)} className="mb-6 font-bold flex items-center gap-2 hover:text-[#e31837] transition-colors">
                    &larr; Back to {selectedSubCategory || klencoTab}
                  </button>
                  <div className="grid grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-sm border flex items-center justify-center">
                      <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }} onError={(e) => e.currentTarget.style.display = 'none'} />
                    </div>
                    <div>
                      <h2 className="heading-lg mb-2" style={{ color: '#e31837' }}>{selectedProduct.name}</h2>
                      <h3 className="text-xl font-bold mb-6">{selectedProduct.subtitle}</h3>
                      <p className="text-muted mb-8">{selectedProduct.description}</p>
                      
                      <h4 className="font-bold mb-4">Key Features</h4>
                      <ul className="list-disc pl-5 mb-8 text-muted space-y-2">
                        {selectedProduct.features.map((feature, i) => <li key={i}>{feature}</li>)}
                      </ul>
                      
                      {selectedProduct.applications && (
                        <>
                          <h4 className="font-bold mb-4">Ideal Applications</h4>
                          <ul className="list-disc pl-5 mb-8 text-muted space-y-2">
                            {selectedProduct.applications.map((app, i) => <li key={i}>{app}</li>)}
                          </ul>
                        </>
                      )}
                      
                      {selectedProduct.brochureAvailable && (
                        <button className="btn btn-primary" style={{ backgroundColor: '#e31837' }}>Download Brochure</button>
                      )}
                    </div>
                  </div>
                </div>
              ) : selectedSubCategory ? (
                <div className="fade-in">
                  <button onClick={() => setSelectedSubCategory(null)} className="mb-6 font-bold flex items-center gap-2 hover:text-[#e31837] transition-colors">
                    &larr; Back to Categories
                  </button>
                  <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#e31837' }}>{selectedSubCategory}</h3>
                  <div className="grid grid-cols-3 gap-8">
                    {klencoTab === 'FLOOR CLEANING' && (() => {
                      let data: Product[] = [];
                      if (selectedSubCategory === 'Single Disc Machines' || selectedSubCategory === 'SINGLE DISC') data = floorCleaningData.singleDisc;
                      if (selectedSubCategory === 'Carpet Extractors' || selectedSubCategory === 'EXTRACTORS') data = floorCleaningData.extractors;
                      if (selectedSubCategory === 'Scrubber Dryers' || selectedSubCategory === 'SCRUBBERS') data = floorCleaningData.scrubbers;
                      if (selectedSubCategory === 'Sweepers' || selectedSubCategory === 'SWEEPERS') data = floorCleaningData.sweepers;
                      if (selectedSubCategory === 'Steam Cleaners' || selectedSubCategory === 'STEAM') data = floorCleaningData.steam;
                      
                      return data.map(product => (
                         <div key={product.id} className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedProduct(product)}>
                            <img src={product.image} style={{ height: '200px', objectFit: 'contain', marginBottom: '1.5rem' }} alt={product.name} onError={(e) => e.currentTarget.style.display = 'none'} />
                            <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                            <p className="text-sm text-muted text-center">{product.subtitle}</p>
                         </div>
                      ));
                    })()}
                  </div>
                </div>
              ) : (
                <>
                  {klencoTab === 'FLOOR CLEANING' && (
                    <div className="fade-in text-center">
                       <h3 className="text-2xl font-bold mb-4" style={{ color: '#e31837' }}>I. FLOOR CLEANING MACHINES</h3>
                       <p className="mb-12 max-w-3xl mx-auto text-muted">Achieve exceptional floor cleaning performance with Klenco's range of scrubber dryers, sweepers, single disc machines, burnishers, carpet extractors, and steam cleaners.</p>
                       <div className="grid grid-cols-5 gap-8">
                         <div className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedSubCategory('Single Disc Machines')}>
                            <img src="/content_images/image_20.jpeg" style={{ height: '150px', objectFit: 'contain', marginBottom: '1rem' }} alt="Single Disc" />
                            <h4 className="font-bold">SINGLE DISC</h4>
                         </div>
                         <div className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedSubCategory('Carpet Extractors')}>
                            <img src="/content_images/image_26.jpeg" style={{ height: '150px', objectFit: 'contain', marginBottom: '1rem' }} alt="Carpet Extractors" onError={(e) => e.currentTarget.style.display = 'none'} />
                            <h4 className="font-bold">EXTRACTORS</h4>
                         </div>
                         <div className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedSubCategory('Scrubber Dryers')}>
                            <img src="/content_images/image_31.png" style={{ height: '150px', objectFit: 'contain', marginBottom: '1rem' }} alt="Scrubber Dryers" onError={(e) => e.currentTarget.style.display = 'none'} />
                            <h4 className="font-bold">SCRUBBERS</h4>
                         </div>
                         <div className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedSubCategory('Sweepers')}>
                            <img src="/content_images/image_33.png" style={{ height: '150px', objectFit: 'contain', marginBottom: '1rem' }} alt="Sweepers" onError={(e) => e.currentTarget.style.display = 'none'} />
                            <h4 className="font-bold">SWEEPERS</h4>
                         </div>
                         <div className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedSubCategory('Steam Cleaners')}>
                            <img src="/content_images/image_34.jpeg" style={{ height: '150px', objectFit: 'contain', marginBottom: '1rem' }} alt="Steam Cleaners" onError={(e) => e.currentTarget.style.display = 'none'} />
                            <h4 className="font-bold">STEAM</h4>
                         </div>
                       </div>
                    </div>
                  )}
                  {klencoTab === 'VACUUM CLEANERS' && (
                    <div className="fade-in text-center">
                       <h3 className="text-2xl font-bold mb-4" style={{ color: '#e31837' }}>II. VACUUM CLEANERS</h3>
                       <p className="mb-12 max-w-3xl mx-auto text-muted">From compact commercial vacuum cleaners to powerful industrial vacuum systems, Klenco provides reliable solutions for removing dust, debris, liquids, and fine particles.</p>
                       <div className="grid grid-cols-4 gap-8">
                         {vacuumData.vacuums.map(product => (
                           <div key={product.id} className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedProduct(product)}>
                              <img src={product.image} style={{ height: '150px', objectFit: 'contain', marginBottom: '1rem' }} alt={product.name} onError={(e) => e.currentTarget.style.display = 'none'} />
                              <h4 className="font-bold">{product.name}</h4>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}
                  {klencoTab === 'HIGH PRESSURE CLEANERS' && (
                    <div className="fade-in text-center">
                       <h3 className="text-2xl font-bold mb-4" style={{ color: '#e31837' }}>HIGH PRESSURE CLEANERS</h3>
                       <p className="mb-12 max-w-3xl mx-auto text-muted">Klenco High Pressure Cleaners are engineered to deliver exceptional cleaning power for removing stubborn dirt, grease, oil, mud, and grime from a wide range of surfaces.</p>
                       <div className="grid grid-cols-3 gap-8">
                         {highPressureData.highPressure.map(product => (
                           <div key={product.id} className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedProduct(product)}>
                              <img src={product.image} style={{ height: '150px', objectFit: 'contain', marginBottom: '1rem' }} alt={product.name} onError={(e) => e.currentTarget.style.display = 'none'} />
                              <h4 className="font-bold">{product.name}</h4>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}
                  {klencoTab === 'CHEMICALS' && (
                    <div className="fade-in text-center">
                       <h3 className="text-2xl font-bold mb-4" style={{ color: '#e31837' }}>CLEANING CHEMICALS</h3>
                       <p className="mb-12 max-w-3xl mx-auto text-muted">Klenco Cleaning Chemicals are scientifically formulated to deliver outstanding cleaning performance while protecting surfaces, equipment, and the environment.</p>
                       <div className="grid grid-cols-4 gap-8">
                         {chemicalsData.chemicals.map(product => (
                           <div key={product.id} className="card p-6 flex flex-col items-center cursor-pointer hover-scale" onClick={() => setSelectedProduct(product)}>
                              <img src={product.image} style={{ height: '150px', objectFit: 'contain', marginBottom: '1rem' }} alt={product.name} onError={(e) => e.currentTarget.style.display = 'none'} />
                              <h4 className="font-bold">{product.name}</h4>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // General Brands Overview
  return (
    <div className="fade-in">
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6rem 0' }}>
        <div className="container text-center slide-up">
          <h1 className="heading-xl mb-4">Our Brands</h1>
          <p className="text-lead" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto' }}>
            We represent globally recognized brands and provide application-focused cleaning solutions.
          </p>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container grid grid-cols-2 gap-12">
          <div className="card card-dark p-6 cursor-pointer hover:shadow-lg transition-all" onClick={() => navigate('/brands/truvox')} style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="bg-white rounded-lg flex items-center justify-center p-4 mb-6 w-full max-w-[250px]">
              <img src="/content_images/truvox-logo.png" alt="Truvox" style={{ height: '80px', objectFit: 'contain' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: 'white' }}>TRUVOX</h2>
            <p className="text-muted mb-8" style={{ color: '#cbd5e1' }}>UK - Since 1960. Commercial and industrial floorcare equipment.</p>
            <span className="btn btn-primary">Explore Products</span>
          </div>
          <div className="card card-dark p-6 cursor-pointer hover:shadow-lg transition-all" onClick={() => navigate('/brands/klenco')} style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="bg-white rounded-lg flex items-center justify-center p-4 mb-6 w-full max-w-[250px]">
              <img src="/content_images/klenco-logo.png" alt="Klenco" style={{ height: '80px', objectFit: 'contain' }} />
            </div>
            <h2 className="heading-lg mb-4" style={{ color: 'white' }}>KLENCO</h2>
            <p className="text-muted mb-8" style={{ color: '#cbd5e1' }}>Singapore - Since 1971. Professional cleaning machines and chemicals.</p>
            <span className="btn btn-primary" style={{ backgroundColor: '#e31837' }}>Explore Products</span>
          </div>
        </div>
      </section>
    </div>
  );
}

const fs = require('fs');

const path = 'src/pages/Brands.tsx';
const content = fs.readFileSync(path, 'utf8');

const startStr = "  if (id === 'klenco') {";
const endStr = "  // General Brands Overview";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find blocks");
  process.exit(1);
}

const newKlencoBlock = `  if (id === 'klenco') {
    return (
      <div className="fade-in" style={{ backgroundColor: '#f8f9fa' }}>
        {/* HERO SECTION - No red overlay, clear image */}
        <section className="section" style={{
          backgroundImage: 'url("/content_images/image_9.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '12rem 0',
          position: 'relative'
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
          <div className="container text-center slide-up" style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>KLENCO</h1>
            <p style={{ fontSize: '1.5rem', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Singapore - Since 1971</p>
          </div>
        </section>

        {/* CONTENT 1: Legacy */}
        <section className="section" style={{ backgroundColor: 'white', padding: '5rem 0' }}>
          <div className="container max-w-4xl mx-auto text-center">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem' }}>A Legacy of Cleaning Excellence</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '1rem' }}>
              Established in 1971 in Singapore, Klenco has grown into one of Asia's leading providers of professional cleaning solutions. What began with a small range of cleaning machines and chemicals has evolved into a comprehensive portfolio serving customers in more than 20 countries across Asia, the Middle East, Australia and Europe.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)' }}>
              Today, Klenco offers an extensive range of commercial cleaning equipment, professional chemicals, janitorial tools and industrial maintenance solutions, supported by expert technical consultation and reliable after-sales service.
            </p>
          </div>
        </section>

        {/* CONTENT 2: One Brand */}
        <section className="section" style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
          <div className="container max-w-6xl mx-auto">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>ONE BRAND: A COMPLETE CLEANING SOLUTIONS</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '2rem' }}>
                  From professional cleaning machines and specialty chemicals to maintenance equipment and accessories, Klenco offers a comprehensive portfolio designed to meet every cleaning requirement. Engineered for performance and backed by decades of expertise, Klenco helps businesses achieve superior hygiene, operational efficiency, and long-term value.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Professional Cleaning Machines:</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Scrubber dryers, vacuum cleaners, sweepers, carpet extractors, high-pressure cleaners, steam cleaners and more.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Professional Cleaning Chemicals:</h4>
                    <p style={{ color: 'var(--text-muted)' }}>A complete range of specialty chemicals for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and surface disinfection, formulated for effective and reliable cleaning performance.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Industrial Cleaning Solutions:</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Heavy-duty cleaning equipment and solutions designed for manufacturing plants, warehouses, logistics centres, food processing facilities, and other industrial environments where performance and durability are essential.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>Municipal Cleaning Solutions:</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Comprehensive solutions for urban cleaning and public infrastructure, including road sweepers, high-pressure cleaning systems, litter collection equipment, and specialized machines designed to maintain clean streets, parks, public spaces, transport terminals, and municipal facilities.</p>
                  </div>
                </div>
              </div>
              <div>
                <img src="/content_images/image_10.png" alt="Klenco Complete Solutions" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT 3: Solutions Across Every Industry */}
        <section className="section" style={{ backgroundColor: 'white', padding: '5rem 0' }}>
          <div className="container max-w-6xl mx-auto">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>Solutions Across Every Industry</h2>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {[
                { icon: '🏨', label: 'Hotels & Hospitality' },
                { icon: '🏥', label: 'Hospitals & Healthcare' },
                { icon: '🏢', label: 'Commercial Buildings' },
                { icon: '🏭', label: 'Manufacturing Facilities' },
                { icon: '🛍️', label: 'Retail & Shopping Malls' },
                { icon: '🎓', label: 'Educational Institutions' },
                { icon: '✈️', label: 'Airports' },
                { icon: '🏛️', label: 'Government & Public Infrastructure' }
              ].map((industry, i) => (
                <div key={i} style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '0.5rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{industry.icon}</div>
                  <h4 style={{ fontWeight: 700, color: 'var(--text-dark)' }}>{industry.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT 4: PRODUCTS category */}
        <section className="section" style={{ backgroundColor: '#f5f7f9', padding: '5rem 0' }}>
          <div className="container max-w-6xl mx-auto">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
              <div style={{ color: '#e31837', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Products Category
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                Klenco offers a comprehensive portfolio of professional cleaning solutions designed to meet the diverse requirements of commercial, industrial, institutional, and municipal environments. From advanced floor cleaning machines and high-performance vacuum cleaners to specialty cleaning chemicals, high-pressure cleaning systems, municipal equipment, and industrial cleaning solutions, every product is engineered to deliver superior cleaning performance, enhanced productivity, and long-term reliability.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                Whether maintaining commercial facilities, manufacturing plants, healthcare institutions, hospitality venues, or public infrastructure, Klenco provides the right solution for every cleaning challenge.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* FLOOR CLEANING */}
              <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>FLOOR CLEANING</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                  Achieve exceptional floor cleaning performance with Klenco's range of scrubber dryers, sweepers, single disc machines, burnishers, carpet extractors, and steam cleaners. Designed to improve productivity while delivering spotless results across every floor type.
                </p>
                <button onClick={() => { setKlencoTab('FLOOR CLEANING'); window.scrollTo({ top: document.getElementById('klenco-products-view')?.offsetTop || 0, behavior: 'smooth' }); }} style={{ color: '#e31837', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Explore Floor Cleaning &rarr;
                </button>
              </div>

              {/* VACUUM CLEANING */}
              <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>VACUUM CLEANING</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                  From compact commercial vacuum cleaners to powerful industrial vacuum systems, Klenco provides reliable solutions for removing dust, debris, liquids, and fine particles across diverse working environments.
                </p>
                <button onClick={() => { setKlencoTab('VACUUM CLEANERS'); window.scrollTo({ top: document.getElementById('klenco-products-view')?.offsetTop || 0, behavior: 'smooth' }); }} style={{ color: '#e31837', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Explore Vacuum Cleaning &rarr;
                </button>
              </div>

              {/* HIGH PRESSURE CLEANER */}
              <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>HIGH PRESSURE CLEANER</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                  A complete range of high-performance cleaning chemicals formulated for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and specialized cleaning applications, ensuring superior hygiene and consistent results.
                </p>
                <button onClick={() => { setKlencoTab('HIGH PRESSURE CLEANERS'); window.scrollTo({ top: document.getElementById('klenco-products-view')?.offsetTop || 0, behavior: 'smooth' }); }} style={{ color: '#e31837', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Explore High Pressure Cleaner &rarr;
                </button>
              </div>

              {/* PROFESSIONAL CLEANING CHEMICALS */}
              <div style={{ background: 'white', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>PROFESSIONAL CLEANING CHEMICALS</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                  A complete range of high-performance cleaning chemicals formulated for floor care, housekeeping, washrooms, kitchens, industrial maintenance, and specialized cleaning applications, ensuring superior hygiene and consistent results.
                </p>
                <button onClick={() => { setKlencoTab('CHEMICALS'); window.scrollTo({ top: document.getElementById('klenco-products-view')?.offsetTop || 0, behavior: 'smooth' }); }} style={{ color: '#e31837', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Explore Cleaning Chemicals &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Existing interactive product catalog section */}
        <section id="klenco-products-view" className="pt-12 pb-24" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <div className="flex border-b border-gray-300 justify-center">
              {['FLOOR CLEANING', 'VACUUM CLEANERS', 'HIGH PRESSURE CLEANERS', 'CHEMICALS'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setKlencoTab(tab)}
                  style={{
                    padding: '1rem 2rem',
                    fontWeight: 700,
                    color: klencoTab === tab ? '#e31837' : 'var(--text-dark)',
                    borderBottom: klencoTab === tab ? '3px solid #e31837' : '3px solid transparent',
                    backgroundColor: klencoTab === tab ? '#f8f9fa' : 'transparent',
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
                  <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#e31837' }}>{selectedSubCategory.toUpperCase()}</h3>
                  <div className="grid grid-cols-3 gap-8">
                    {klencoTab === 'FLOOR CLEANING' && (() => {
                      let data = [];
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
                       <h3 className="text-2xl font-bold mb-4" style={{ color: '#e31837' }}>FLOOR CLEANING MACHINES</h3>
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
                       <h3 className="text-2xl font-bold mb-4" style={{ color: '#e31837' }}>VACUUM CLEANERS</h3>
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
`;

const newContent = content.substring(0, startIndex) + newKlencoBlock + "\n" + content.substring(endIndex);
fs.writeFileSync(path, newContent, 'utf8');
console.log("Rewrote klenco section");

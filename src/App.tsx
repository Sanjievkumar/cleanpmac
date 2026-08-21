import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import TruvoxBrand from './pages/TruvoxBrand';
import TruvoxProduct from './pages/TruvoxProduct';
import Support from './pages/Support';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Header />
      <BackButton />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          {/* Dedicated Brand Pages */}
          <Route path="/brands/truvox" element={<TruvoxBrand />} />
          <Route path="/brands/truvox/:productId" element={<TruvoxProduct />} />
          
          {/* Legacy generic brand page (for klenco currently) */}
          <Route path="/brands/:id" element={<Brands />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import Support from './pages/Support';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <BackButton />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          {/* We will add specific brand pages later */}
          <Route path="/brands/:id" element={<Brands />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

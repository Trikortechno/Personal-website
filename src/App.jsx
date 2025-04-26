import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
          <Header 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home menuOpen={menuOpen} />} />
              <Route path="/about" element={<About menuOpen={menuOpen} />} />
              <Route path="/services" element={<Services menuOpen={menuOpen} />} />
              <Route path="/portfolio" element={<Portfolio menuOpen={menuOpen} />} />
              <Route path="/contact" element={<Contact menuOpen={menuOpen} />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
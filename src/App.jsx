import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { AnimatePresence } from 'framer-motion';

// --- COMPONENTS ---
import IntroSequence from './components/IntroSequence';
import NavBar from './components/NavBar';
import CyberUniverse from './components/CyberUniverse';

// --- PAGES ---
import Home from './pages/Home';
import About from './pages/About';
import Deobfusca from './pages/Deobfusca';
import ChadChat from './pages/ChadChat';
import Interpreter from './pages/Interpreter';

const AppContent = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deobfusca" element={<Deobfusca />} />
        <Route path="/chadchat" element={<ChadChat />} />
        <Route path="/interpreter" element={<Interpreter />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <Router>
      <div className="crt min-h-screen w-full relative text-2xl bg-[#02040a]">
        
        <AnimatePresence>
          {!introDone && <IntroSequence onComplete={() => setIntroDone(true)} />}
        </AnimatePresence>

        {/* FIXED 3D BACKGROUND */}
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 15] }}>
            <CyberUniverse />
            <EffectComposer>
              <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} opacity={1} />
            </EffectComposer>
          </Canvas>
        </div>

        {introDone && (
          <>
            <NavBar />
            <AppContent />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;

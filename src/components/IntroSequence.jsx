import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroSequence = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const greetings = [
    'HELLO', 'HOLA', 'BONJOUR', 'HALLO', 'CIAO', 'こんにちは', 
    '안녕하세요', 'ПРИВЕТ', 'NAMASTE', 'SYSTEM.INIT_COMPLETE'
  ];

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timeout = setTimeout(() => setIndex(index + 1), 150);
      return () => clearTimeout(timeout);
    } else {
      const finishTimeout = setTimeout(() => onComplete(), 800);
      return () => clearTimeout(finishTimeout);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#02040a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-5xl md:text-8xl font-black text-white tracking-widest relative">
        <span className="relative z-10">{greetings[index]}</span>
        <span className="absolute top-0 left-[-4px] text-[#00ffcc] z-0 opacity-70" style={{ clipPath: 'inset(10% 0 50% 0)' }}>
          {greetings[index]}
        </span>
        <span className="absolute top-0 left-[4px] text-[#aa00ff] z-0 opacity-70" style={{ clipPath: 'inset(50% 0 10% 0)' }}>
          {greetings[index]}
        </span>
      </div>
    </motion.div>
  );
};

export default IntroSequence;

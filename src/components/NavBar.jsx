import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavBar = () => (
  <motion.nav 
    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}
    className="fixed top-0 w-full p-4 z-40 flex justify-between items-center bg-[#02040a]/90 backdrop-blur-md border-b border-[#00ffcc]/20"
  >
    <div className="flex items-center gap-8">
      <Link to="/" className="text-xl font-bold tracking-widest text-white hover:text-[#00ffcc] transition-colors drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]">
        CHAYAN.SYS
      </Link>
      <div className="hidden md:flex gap-6 text-sm tracking-widest">
        <Link to="/about" className="text-gray-400 hover:text-white transition-colors">[ WHOAMI ]</Link>
        <Link to="/deobfusca" className="text-gray-400 hover:text-[#aa00ff] transition-colors">[ DEOBFUSCA ]</Link>
        <Link to="/chadchat" className="text-gray-400 hover:text-[#00ffcc] transition-colors">[ CHADCHAT ]</Link>
      </div>
    </div>

    {/* Social Links Added Here */}
    <div className="flex gap-4 text-gray-400">
      <a href="https://github.com/chayan-bit" target="_blank" rel="noreferrer" className="hover:text-[#00ffcc] transition-colors"><FaGithub size={20} /></a>
      <a href="https://linkedin.com/in/chayan-aggarwal-b64a4b261/" target="_blank" rel="noreferrer" className="hover:text-[#00ffcc] transition-colors"><FaLinkedin size={20} /></a>
      <a href="mailto:bromanaggarwal60@gmail.com" className="hover:text-[#00ffcc] transition-colors"><Mail size={20} /></a>
    </div>
  </motion.nav>
);

export default NavBar;

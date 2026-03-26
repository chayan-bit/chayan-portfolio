import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, GraduationCap, Award } from 'lucide-react';

const TerminalLog = ({ children }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
    className="space-y-4"
  >
    {React.Children.map(children, (child) => (
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.3 } } }}>
        {child}
      </motion.div>
    ))}
  </motion.div>
);

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 px-6 md:px-20 pb-20 relative z-10 font-mono">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-sm text-gray-500 hover:text-[#00ffcc] mb-12 inline-flex items-center gap-2 transition-colors">
          &lt;&lt; SYS.ROOT // NAVIGATE_BACK
        </Link>

        {/* SECTION 1: PROFILE INIT */}
        <div className="min-h-[80vh] flex flex-col justify-center">
          <TerminalLog>
            <p className="text-gray-500 text-sm mb-4">Fetching user profile data...</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-widest">USER_PROFILE_DATA</h1>
            <p className="text-lg text-[#00ffcc] mb-8 animate-pulse">STATUS: OMNIPRESENT</p>
            
            <div className="border-l-2 border-[#00ffcc] pl-6 mt-8">
              <h2 className="text-xl text-white mb-4 flex items-center gap-2"><Terminal size={18}/> OPERATIONAL BACKGROUND</h2>
              <p className="text-base text-gray-400 leading-relaxed mb-4">
                Operating at the intersection of low-level systems architecture, advanced cryptography, and machine learning. My primary focus lies in dismantling and understanding complex systems—whether reverse-engineering obfuscated binaries or architecting decentralized communication protocols immune to modern cryptanalysis.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Currently executing a BS-MS in Mathematics and Computing at the Indian Institute of Technology (IIT) Roorkee. The rigorous mathematical foundation provides the basis for cryptographic algorithm design, while the computational aspect fuels the engineering of neural networks and compilers.
              </p>
            </div>
          </TerminalLog>
        </div>

        {/* SECTION 2: ACADEMICS & MILESTONES */}
        <div className="min-h-[80vh] flex flex-col justify-center border-t border-gray-800 pt-20">
          <TerminalLog>
            <h2 className="text-xl text-white mb-8 flex items-center gap-2"><Award className="text-[#aa00ff]"/> ACADEMIC & SECURITY MILESTONES</h2>
            
            <div className="relative pl-6 border-l-2 border-[#aa00ff] mb-8">
              <div className="absolute -left-[13px] top-0 bg-[#02040a] p-1"><Shield size={16} className="text-[#aa00ff]"/></div>
              <h3 className="text-lg text-white font-bold mb-1">Backdoor CTF - Top 100 Global</h3>
              <p className="text-sm text-gray-400">Secured a Top 100 global ranking in the Backdoor CTF organized by InfoSec IITR. Competed in a highly restricted team of 2 (against standard 4-person teams), specializing in binary exploitation (pwn) and cryptographic vectors.</p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-[#00ffcc] mb-12">
              <div className="absolute -left-[13px] top-0 bg-[#02040a] p-1"><GraduationCap size={16} className="text-[#00ffcc]"/></div>
              <h3 className="text-lg text-white font-bold mb-1">JEE Advanced - AIR 1408</h3>
              <p className="text-sm text-gray-400">Cleared the Joint Entrance Examination (Advanced) with an All India Rank of 1408, demonstrating top-percentile analytical and mathematical problem-solving capabilities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border border-gray-800 p-6 bg-[#050505]/50">
                <h3 className="text-sm text-gray-500 mb-4">AFFILIATIONS // IIT_ROORKEE</h3>
                <p className="text-sm text-white mb-2"><span className="text-[#00ffcc] mr-2">&gt;</span>Data Science Group (Core)</p>
                <p className="text-sm text-white"><span className="text-[#aa00ff] mr-2">&gt;</span>MDG Space (Core)</p>
              </div>
              <div className="border border-red-900/30 p-6 bg-red-950/10">
                <h3 className="text-sm text-red-500/70 mb-4 flex items-center gap-2"><Cpu size={14}/> TECH STACK</h3>
                <p className="text-sm text-gray-400 mb-2">LANGS: C/C++, Rust, Assembly, Python, Java, Solidity</p>
                <p className="text-sm text-gray-400 mb-2">LIBS: PyTorch, NumPy, React, Node, PyCryptodome, pwntools</p>
                <p className="text-sm text-gray-400">DOMAINS: Reverse Eng, Binary Exploitation (pwn), Crypto, OS</p>
              </div>
            </div>
          </TerminalLog>
        </div>

      </div>
    </motion.div>
  );
};

export default About;

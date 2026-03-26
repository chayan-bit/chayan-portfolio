import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Lock, Eye, EyeOff, Shield } from 'lucide-react';

const TerminalLog = ({ children }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
    className="space-y-4"
  >
    {React.Children.map(children, (child) => (
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.3 } } }}>{child}</motion.div>
    ))}
  </motion.div>
);

const ChadChat = () => {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 px-6 md:px-20 pb-20 relative z-10 font-mono">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-sm text-gray-500 hover:text-[#00ffcc] mb-12 inline-flex items-center gap-2 transition-colors">
          &lt;&lt; SYS.ROOT // NAVIGATE_BACK
        </Link>

        {/* SECTION 1 */}
        <div className="min-h-[70vh] flex flex-col justify-center">
          <TerminalLog>
            <p className="text-gray-500 text-sm mb-4">Initializing decentralized nodes...</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-widest">CHADCHAT</h1>
            <p className="text-lg text-[#00ffcc] mb-8 animate-pulse">STATUS: DECENTRALIZED // ENCRYPTED</p>
            
            <div className="border-l-2 border-[#00ffcc] pl-6 mt-8">
              <h2 className="text-xl text-white mb-4 flex items-center gap-2"><Database size={18}/> ON-CHAIN ARCHITECTURE</h2>
              <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
                Engineered a fully decentralized messaging protocol. The backend entirely bypasses traditional server structures, utilizing IPFS and Lighthouse for secure, immutable storage. Coupled with a responsive dual-mode frontend tailored for intuitive steganographic communication.
              </p>
            </div>
          </TerminalLog>
        </div>

        {/* SECTION 2 */}
        <div className="min-h-[70vh] flex flex-col justify-center border-t border-gray-800 pt-20">
          <TerminalLog>
            <h2 className="text-xl text-white mb-4 flex items-center gap-2"><Shield className="text-[#00ffcc]" size={18}/> POST-QUANTUM VECTORS</h2>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
              Hardened the entire steganographic pipeline by integrating robust public-key cryptography. This architecture is specifically designed to mitigate brute-force and complex algebraic cryptanalysis from both classical and post-quantum threat vectors.
            </p>
            <p className="text-sm text-[#00ffcc] font-bold">&gt; RSA/ECC WRAPPERS INITIALIZED.</p>
          </TerminalLog>
        </div>

        {/* SECTION 3 */}
        <div className="min-h-[80vh] flex flex-col justify-center border-t border-gray-800 pt-20">
          <TerminalLog>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
               <h2 className="text-xl text-white flex items-center gap-2"><Lock className="text-[#00ffcc]" size={18}/> ADVERSARIAL GAN STEGANOGRAPHY</h2>
               <button onClick={() => setRevealed(!revealed)} className="flex items-center gap-2 px-3 py-1 text-xs border border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc] hover:text-black transition-colors font-bold">
                 {revealed ? <EyeOff size={14}/> : <Eye size={14}/>} {revealed ? "CONCEAL" : "EXTRACT PAYLOAD"}
               </button>
             </div>
             
             <p className="text-sm text-gray-400 mb-8 max-w-2xl">
               Developed an on-device AI steganography model trained within a Generative Adversarial Network (GAN) framework. Benchmarked against standard attack models, it demonstrates superior statistical steganalysis evasion.
             </p>

             <div className="w-full h-48 bg-[#050505] border border-gray-700 rounded relative overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 transition-all duration-1000 ${revealed ? 'opacity-20 blur-md bg-black' : 'opacity-100 bg-[url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")] opacity-30'}`}></div>
                <div className={`relative z-10 transition-all duration-1000 transform ${revealed ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                  <p className="text-[#00ffcc] text-sm font-bold border border-[#00ffcc] p-4 bg-black/80">
                    &gt; DECRYPTED: "Meet at node 0x4A."
                  </p>
                </div>
             </div>
          </TerminalLog>
        </div>

      </div>
    </motion.div>
  );
};

export default ChadChat;

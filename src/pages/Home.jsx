import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Shield, Database, Code, ChevronRight, User } from 'lucide-react';

// --- CUSTOM SCROLL ANIMATION COMPONENT ---
// This reveals text line-by-line as the user scrolls, forcing them to spend time scrolling
const TerminalLog = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
      className="space-y-2"
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.3 } }
        }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="pt-24 px-6 md:px-20 pb-20 relative z-10 font-mono"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* SECTION 1: INIT LOG (Forces 80vh scroll) */}
        <div className="min-h-[80vh] flex flex-col justify-center">
          <TerminalLog>
            <p className="text-gray-500 text-sm mb-4">Starting secure shell environment...</p>
            <p className="text-[#00ffcc] text-sm mb-4">Connected to IIT_ROORKEE_NODE_01</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-wider mt-4">CHAYAN AGGARWAL</h1>
            <h2 className="text-lg md:text-xl text-[#00ffcc] mb-8 flex items-center gap-2">
              <Terminal size={18}/> ROOT_ACCESS_GRANTED
            </h2>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl mb-2">
              <span className="text-[#00ffcc] mr-2">&gt;</span> Executing profile load...
            </p>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl mb-2">
              <span className="text-[#00ffcc] mr-2">&gt;</span> Specialization: Reverse-Engineering, Cryptography, ML Pipelines.
            </p>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl mb-8">
              <span className="text-[#00ffcc] mr-2">&gt;</span> Academic Status: BS-MS Mathematics and Computing.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 px-4 py-2 border border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc] hover:text-black transition-all font-bold text-sm w-fit mt-4">
              <User size={16}/> FETCH_FULL_PROFILE
            </Link>
          </TerminalLog>
        </div>

        {/* SECTION 2: SYSTEM ARCHIVES (Forces another 100vh scroll) */}
        <div className="min-h-[100vh] flex flex-col justify-center border-t border-gray-800 pt-20">
          <TerminalLog>
            <h3 className="text-2xl text-white mb-8 flex items-center gap-3"><Code size={24}/> QUERY_SYSTEM_ARCHIVES</h3>
            <p className="text-gray-500 text-sm mb-12">Fetching 3 highly classified project files...</p>
            
            <div className="flex flex-col gap-16">
              
              {/* DeObfusca Log */}
              <div className="border-l-2 border-[#aa00ff] pl-6 relative group">
                <Link to="/deobfusca" className="block cursor-pointer">
                  <div className="absolute -left-[18px] top-0 bg-[#02040a] p-1"><Shield size={24} className="text-[#aa00ff]" /></div>
                  <h2 className="text-2xl text-white mb-2 group-hover:text-[#aa00ff] transition-colors">DEOBFUSCA-AI</h2>
                  <p className="text-base text-gray-400 mb-4 max-w-2xl">Neuro-symbolic AI & Graph Neural Networks mapped against Execution Trace Graphs to strip control-flow obfuscation from compiled binaries.</p>
                  <div className="text-sm text-[#aa00ff] flex items-center gap-1 font-bold opacity-70 group-hover:opacity-100 transition-opacity">ACCESS_LOG <ChevronRight size={14}/></div>
                </Link>
              </div>

              {/* CHADChat Log */}
              <div className="border-l-2 border-[#00ffcc] pl-6 relative group">
                <Link to="/chadchat" className="block cursor-pointer">
                  <div className="absolute -left-[18px] top-0 bg-[#02040a] p-1"><Database size={24} className="text-[#00ffcc]" /></div>
                  <h2 className="text-2xl text-white mb-2 group-hover:text-[#00ffcc] transition-colors">CHADCHAT_PROTOCOL</h2>
                  <p className="text-base text-gray-400 mb-4 max-w-2xl">Post-quantum secure decentralized IPFS messaging. Payload hidden via adversarial GAN steganography models.</p>
                  <div className="text-sm text-[#00ffcc] flex items-center gap-1 font-bold opacity-70 group-hover:opacity-100 transition-opacity">ACCESS_LOG <ChevronRight size={14}/></div>
                </Link>
              </div>

              {/* Interpreter Log */}
              <div className="border-l-2 border-green-500 pl-6 relative group mb-20">
                <Link to="/interpreter" className="block cursor-pointer">
                  <div className="absolute -left-[18px] top-0 bg-[#02040a] p-1"><Code size={24} className="text-green-500" /></div>
                  <h2 className="text-2xl text-white mb-2 group-hover:text-green-400 transition-colors">JAVA_AST_INTERPRETER</h2>
                  <p className="text-base text-gray-400 mb-4 max-w-2xl">Custom dynamically typed language interpreter built from scratch. Features robust tree-walk evaluation, lexical scoping, and native OS bindings.</p>
                  <div className="text-sm text-green-400 flex items-center gap-1 font-bold opacity-70 group-hover:opacity-100 transition-opacity">ACCESS_LOG <ChevronRight size={14}/></div>
                </Link>
              </div>

            </div>
          </TerminalLog>
        </div>

      </div>
    </motion.div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Network, Cpu, ShieldAlert, GitBranch } from 'lucide-react';

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

const Deobfusca = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 px-6 md:px-20 pb-20 relative z-10 font-mono">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-sm text-gray-500 hover:text-[#aa00ff] mb-12 inline-flex items-center gap-2 transition-colors">
          &lt;&lt; SYS.ROOT // NAVIGATE_BACK
        </Link>

        {/* SECTION 1: INIT */}
        <div className="min-h-[70vh] flex flex-col justify-center">
          <TerminalLog>
            <p className="text-gray-500 text-sm mb-4">Establishing ML pipeline connection...</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-widest">DEOBFUSCA-AI</h1>
            <p className="text-lg text-[#aa00ff] mb-8 animate-pulse">STATUS: DEPLOYED // ML PIPELINE</p>
            
            <div className="border-l-2 border-[#aa00ff] pl-6 mt-8">
              <h2 className="text-xl text-white mb-4 flex items-center gap-2"><Network size={18}/> PIPELINE ARCHITECTURE</h2>
              <p className="text-base text-gray-400 leading-relaxed">
                Engineered a comprehensive machine learning pipeline dedicated to reverse-engineering control-flow obfuscated binaries. By leveraging Graph Neural Networks (GNNs) and Transformers, the system parses complex assembly structures to identify and strip away adversarial junk code.
              </p>
            </div>
          </TerminalLog>
        </div>

        {/* SECTION 2: NEURO-SYMBOLIC */}
        <div className="min-h-[70vh] flex flex-col justify-center border-t border-gray-800 pt-20">
          <TerminalLog>
            <h2 className="text-xl text-white mb-4 flex items-center gap-2"><Cpu className="text-[#aa00ff]" size={18}/> NEURO-SYMBOLIC INTEGRATION</h2>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
              Pure deep learning models often hallucinate in rigid binary environments. Integrated advanced neuro-symbolic AI to bind the neural network's pattern recognition to strict symbolic logic solvers, drastically enhancing the mathematical accuracy of the reconstructed code.
            </p>
            <p className="text-sm text-[#aa00ff] font-bold">&gt; LOGICAL BOUNDS ENFORCED SUCCESSFULLY.</p>
          </TerminalLog>
        </div>

        {/* SECTION 3: VISUALIZER */}
        <div className="min-h-[80vh] flex flex-col justify-center border-t border-gray-800 pt-20">
          <TerminalLog>
            <h2 className="text-xl text-white mb-4 flex items-center gap-2"><GitBranch className="text-[#aa00ff]" size={18}/> ETG TRANSITION VISUALIZER</h2>
            <p className="text-sm text-gray-400 mb-8 max-w-2xl">
              Static Control Flow Graphs (CFGs) fail against VM-obfuscation. The architecture was upgraded to parse dynamic Execution Trace Graphs (ETGs). <span className="text-white">Hover below to execute deobfuscation.</span>
            </p>

            <div className="w-full h-48 bg-[#050505] border border-[#aa00ff]/30 rounded text-sm overflow-hidden relative cursor-crosshair group">
              {/* Obfuscated */}
              <div className="absolute inset-0 p-6 text-red-500 opacity-100 group-hover:opacity-0 transition-opacity duration-700">
                 <div className="flex items-center justify-between border-b border-red-500/30 pb-2 mb-2">
                   <span className="flex items-center gap-2"><ShieldAlert size={14}/> VM_OBFUSCATION_DETECTED</span>
                   <span className="text-xs animate-pulse">ETG_RECORDING...</span>
                 </div>
                 <p>[0x08048414] push ebp</p>
                 <p>[0x08048417] xor eax, 0x55</p>
                 <p>[0x0804841A] jmp loc_junk_4012</p>
                 <p className="opacity-50 blur-[1px]">[0x0804841C] ... (junk instructions)</p>
              </div>
              {/* Clean */}
              <div className="absolute inset-0 bg-[#02040a] p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 border border-[#00ffcc]">
                 <p className="text-[#00ffcc] font-bold mb-4 border-b border-[#00ffcc]/30 pb-2">NEURO-SYMBOLIC PASS: COMPLETE</p>
                 <pre className="text-white">
{`int main() {
  int result = initialize();
  return result ^ 0x55;
}`}
                 </pre>
              </div>
            </div>
          </TerminalLog>
        </div>

      </div>
    </motion.div>
  );
};

export default Deobfusca;

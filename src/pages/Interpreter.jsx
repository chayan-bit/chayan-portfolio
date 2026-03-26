import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Code, Layers, Zap } from 'lucide-react';

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

const Interpreter = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(['> Java Custom Interpreter v1.0', '> Loaded native File I/O & Math bindings.']);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleCommand = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      let output = '';
      try { output = new Function('return ' + input)(); } 
      catch (err) { output = 'CompileError: Syntax exception.'; }
      setHistory((prev) => [...prev, `> ${input}`, `  ${output}`]);
      setInput('');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 px-6 md:px-20 pb-20 relative z-10 font-mono">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-sm text-gray-500 hover:text-green-500 mb-12 inline-flex items-center gap-2 transition-colors">
          &lt;&lt; SYS.ROOT // NAVIGATE_BACK
        </Link>

        {/* SECTION 1 */}
        <div className="min-h-[70vh] flex flex-col justify-center">
          <TerminalLog>
            <p className="text-gray-500 text-sm mb-4">Compiling AST environment...</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-widest">JAVA_INTERPRETER</h1>
            <p className="text-lg text-green-500 mb-8 animate-pulse">STATUS: COMPILED // REPL ACTIVE</p>
            
            <div className="border-l-2 border-green-500 pl-6 mt-8">
              <h2 className="text-xl text-white mb-4 flex items-center gap-2"><Layers size={18}/> AST & EVALUATION</h2>
              <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
                Engineered a fully functional, dynamically typed programming language interpreter from scratch in Java. Implemented a robust tree-walk evaluation mechanism supporting complex language features including lexical scoping, closures, and object-oriented paradigms.
              </p>
            </div>
          </TerminalLog>
        </div>

        {/* SECTION 2 */}
        <div className="min-h-[70vh] flex flex-col justify-center border-t border-gray-800 pt-20">
          <TerminalLog>
            <h2 className="text-xl text-white mb-4 flex items-center gap-2"><Zap className="text-green-500" size={18}/> NATIVE BINDINGS & ANALYSIS</h2>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-4">
              Architected a native binding interface to seamlessly inject standard Java methods into the evaluation environment, constructing a standard library with mathematical operations and File I/O capabilities.
            </p>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
              Designed static analysis passes for precise variable resolution and environment management to ensure correct binding of local and global scopes.
            </p>
            <p className="text-sm text-green-500 font-bold">&gt; STATIC PASS VERIFIED.</p>
          </TerminalLog>
        </div>

        {/* SECTION 3: REPL */}
        <div className="min-h-[80vh] flex flex-col justify-center border-t border-gray-800 pt-20">
          <TerminalLog>
            <h2 className="text-xl text-white mb-4 flex items-center gap-2"><Terminal className="text-green-500" size={18}/> REPL ENVIRONMENT</h2>
            <p className="text-sm text-gray-400 mb-8 max-w-2xl">Execute expressions to simulate evaluation loop.</p>
            
            <div className="w-full h-48 bg-[#050505] border border-gray-700 p-4 rounded text-sm overflow-y-auto flex flex-col">
              <div className="flex-grow overflow-y-auto mb-2 space-y-1">
                {history.map((line, i) => (
                  <div key={i} className={line.toString().startsWith('>') ? 'text-gray-500' : 'text-green-500'}>{line}</div>
                ))}
              </div>
              <div className="flex items-center border-t border-gray-800 pt-2 mt-auto">
                <span className="text-green-500 mr-2">&gt;</span>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleCommand}
                  className="bg-transparent outline-none text-white w-full placeholder-gray-800" placeholder="2048 * 2" spellCheck="false"
                />
              </div>
            </div>
          </TerminalLog>
        </div>

      </div>
    </motion.div>
  );
};

export default Interpreter;

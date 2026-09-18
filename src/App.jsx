import { useEffect, useState } from 'react'
import { motion as Motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Mail, MoveRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]
const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

const topics = [
  { index: '01', name: 'Computer Vision', note: 'Learning useful structure from pixels and video.', tone: 'apricot' },
  { index: '02', name: 'Vision–Language Models', note: 'Grounding language in what machines can see.', tone: 'ice' },
  { index: '03', name: 'World Models', note: 'Internal simulators for prediction and planning.', tone: 'ink' },
  { index: '04', name: 'Agent Theory', note: 'What capable, bounded agency should look like.', tone: 'lavender' },
  { index: '05', name: 'Reinforcement Learning', note: 'Learning decisions from interaction and feedback.', tone: 'acid' },
  { index: '06', name: 'Interpretability', note: 'Making learned computation legible and testable.', tone: 'rose' },
  { index: '07', name: 'Agentic Systems', note: 'Reliable agents that act through real tools.', tone: 'blue' },
]

const projects = [
  {
    number: '01', category: 'LOW-LEVEL SYSTEMS', title: 'MirrorScope', visual: 'mirror', className: 'project-wide project-mirror',
    copy: 'A time-travel debugger for C, Rust, and Go that reconstructs the logical concurrency structure hidden behind async tasks and goroutines.',
    stack: ['Rust', 'ptrace', 'DAP', 'async runtimes'], href: 'https://github.com/chayan-bit/Mirrorscope',
  },
  {
    number: '02', category: 'AGENT INFRASTRUCTURE', title: 'Everett', visual: 'everett', className: 'project-tall project-everett',
    copy: 'Fork an agent’s world, explore multiple trajectories, then commit one—without pretending side effects are free or reversible.',
    stack: ['Rust', 'MCP', 'effect systems'], href: 'https://github.com/chayan-bit/everett',
  },
  {
    number: '03', category: 'ML × COMPILERS', title: 'Neural Yul', visual: 'yul', className: 'project-tall project-yul',
    copy: 'An ML-guided Yul pass orchestrator and bytecode superoptimizer for Solidity, with differential and formal correctness gates.',
    stack: ['RL', 'compilers', 'EVM', 'Z3'], href: 'https://github.com/mdgspace/Neural-Yul',
  },
  {
    number: '04', category: 'TYPED AGENTS', title: 'Jev-Frame', visual: 'jev', className: 'project-standard project-jev',
    copy: 'A framework direction for specialist agents built around typed judgments, evidence, tools, and explicit unresolved outcomes.',
    stack: ['Python', 'typed decisions', 'evidence'],
  },
  {
    number: '05', category: 'AGENTIC PRODUCT', title: 'Orbit', visual: 'orbit', className: 'project-wide project-orbit',
    copy: 'A local-first assistant across web and Apple clients, built for durable work, configurable agents, group collaboration, approvals, and artifacts.',
    stack: ['agents', 'SwiftUI', 'durable workflows'],
  },
]

function Mark() {
  return <a className="mark" href="#top" aria-label="Back to top"><span>c</span><span>a</span></a>
}

function HeroSystem() {
  return (
    <div className="hero-system" aria-label="Animated intelligence stack">
      <div className="system-bar"><span>INTELLIGENCE STACK</span><span>LIVE / 04 LAYERS</span></div>
      <div className="system-stage">
        <svg className="system-paths" viewBox="0 0 540 520" aria-hidden="true">
          <defs>
            <linearGradient id="signal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ff714b" /><stop offset=".5" stopColor="#6f7bf7" /><stop offset="1" stopColor="#151515" /></linearGradient>
          </defs>
          <g className="system-grid">{[60, 140, 220, 300, 380, 460].map((x) => <line key={x} x1={x} y1="16" x2={x} y2="504" />)}{[70, 150, 230, 310, 390, 470].map((y) => <line key={y} x1="22" y1={y} x2="518" y2={y} />)}</g>
          <Motion.path d="M75 95 C170 95 145 235 270 235 C400 235 356 410 470 410" fill="none" stroke="url(#signal)" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease }} />
          <Motion.path d="M465 92 C370 92 392 235 270 235 C150 235 176 410 70 410" fill="none" stroke="#151515" strokeOpacity=".18" strokeDasharray="5 8" animate={{ strokeDashoffset: [0, -52] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
          <Motion.circle cx="75" cy="95" r="6" animate={{ cx: [75, 155, 270, 360, 470], cy: [95, 115, 235, 315, 410] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }} />
          <Motion.circle className="signal-pulse" cx="465" cy="92" r="7" animate={{ r: [5, 12, 5], opacity: [1, .3, 1] }} transition={{ duration: 2.4, repeat: Infinity }} />
        </svg>
        <Motion.div className="system-node node-perception" animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><small>01 / INPUT</small><strong>perception</strong><span>vision · language</span></Motion.div>
        <Motion.div className="system-node node-model" animate={{ rotate: [0, 1.5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><small>02 / INTERNAL</small><strong>world model</strong><span>predict · represent</span></Motion.div>
        <Motion.div className="system-node node-agent" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}><small>03 / POLICY</small><strong>agent</strong><span>plan · decide</span></Motion.div>
        <Motion.div className="system-node node-runtime" animate={{ x: [0, 7, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}><small>04 / REALITY</small><strong>runtime</strong><span>tools · systems</span></Motion.div>
        <div className="system-core"><Motion.i animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} /><span>AI</span></div>
      </div>
      <div className="system-footer"><span>MODELS</span><span>↔</span><span>MACHINES</span></div>
    </div>
  )
}

function ResearchMap() {
  return (
    <div className="topic-map">
      <svg className="topic-thread" viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true">
        <Motion.path d="M90 130 C250 20 420 260 575 160 S850 30 1090 145 C980 290 1055 435 865 505 S560 420 430 580 S170 690 92 580" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="7 10" animate={{ strokeDashoffset: [0, -68] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }} />
      </svg>
      {topics.map((topic, index) => (
        <Motion.article className={`topic topic-${index + 1} topic-${topic.tone}`} key={topic.name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .4 }} variants={reveal} whileHover={{ scale: .985 }}>
          <span>{topic.index}</span><h3>{topic.name}</h3><p>{topic.note}</p>
        </Motion.article>
      ))}
    </div>
  )
}

function MirrorVisual() {
  const lanes = [
    ['task 041', 'poll', 'wake', 'await'],
    ['task 082', 'read', 'yield', 'resume'],
    ['goroutine 7', 'recv', 'block', 'send'],
  ]
  return (
    <div className="project-visual mirror-visual">
      <div className="debug-toolbar"><span>mirror://session-117</span><span>REPLAYING <i /></span></div>
      <div className="debug-scale"><span>00:12.4</span><span>00:12.8</span><span>00:13.2</span><span>00:13.6</span></div>
      <div className="debug-lanes">
        {lanes.map((lane, laneIndex) => <div className="debug-lane" key={lane[0]}><strong>{lane[0]}</strong><div>{lane.slice(1).map((event, index) => <Motion.span key={event} initial={{ opacity: .2 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: laneIndex * .12 + index * .18 }}>{event}</Motion.span>)}</div></div>)}
        <Motion.i className="debug-scrubber" animate={{ left: ['23%', '82%', '23%'] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <div className="debug-inspector"><span>LOGICAL STACK</span><code>async fn reconcile_world()</code><code>↳ await effect.commit()</code><b>retroactive watchpoint hit · 3</b></div>
    </div>
  )
}

function EverettVisual() {
  return (
    <div className="project-visual everett-visual">
      <div className="everett-origin"><span>W</span><small>world</small></div>
      <svg viewBox="0 0 520 410" aria-hidden="true">
        <Motion.path d="M80 205 C170 205 170 68 270 68 M80 205 H270 M80 205 C170 205 170 342 270 342" fill="none" stroke="currentColor" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease }} />
        <Motion.path d="M270 205 C355 205 365 205 450 205" fill="none" stroke="#ff714b" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.2 }} />
      </svg>
      {['A / abandon', 'B / commit', 'C / abandon'].map((label, index) => <Motion.div className={`world-pill world-pill-${index + 1}`} key={label} animate={index === 1 ? { boxShadow: ['0 0 0 0 rgba(255,113,75,.25)', '0 0 0 16px rgba(255,113,75,0)'] } : { opacity: [1, .48, 1] }} transition={{ duration: 2.8, repeat: Infinity, delay: index * .3 }}>{label}</Motion.div>)}
      <div className="everett-commit"><span>W′</span><small>one reality</small></div>
      <div className="effect-ledger"><span>read / replay</span><span>write / buffer</span><span>send / gate</span></div>
    </div>
  )
}

function YulVisual() {
  const passes = ['ssa', 'dce', 'cse', 'inline', 'fold', 'stack']
  return (
    <div className="project-visual yul-visual">
      <div className="yul-header"><span>YUL / OPTIMIZER</span><b>−18.7% GAS</b></div>
      <div className="bytecode"><code>PUSH1</code><code>DUP2</code><code>MSTORE</code><code>JUMPI</code><code>SSTORE</code><code>STOP</code></div>
      <div className="pass-grid">{passes.map((pass, index) => <Motion.span key={pass} animate={{ backgroundColor: index < 4 ? ['#f3efe6', '#d9f36b', '#f3efe6'] : '#f3efe6' }} transition={{ duration: 3, delay: index * .32, repeat: Infinity }}>{pass}</Motion.span>)}</div>
      <div className="gas-chart">{[82, 61, 73, 48, 38, 26].map((height, index) => <Motion.i key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: .8, delay: index * .1, ease }} />)}</div>
      <div className="correctness-gate"><span>DIFF FUZZ</span><span>Z3 EQUIVALENT</span><strong>✓</strong></div>
    </div>
  )
}

function JevVisual() {
  return (
    <div className="project-visual jev-visual">
      <div className="jev-question"><small>JUDGMENT / 012</small><p>Is the evidence sufficient to act?</p></div>
      <div className="jev-options">
        {[['accept', '0.74'], ['inspect', '0.21'], ['escalate', '0.05']].map(([label, value], index) => <Motion.div key={label} animate={index === 0 ? { borderColor: ['#222222', '#6f7bf7', '#222222'] } : {}} transition={{ duration: 2.6, repeat: Infinity }}><span>{label}</span><b>{value}</b><i style={{ width: value.replace('0.', '') + '%' }} /></Motion.div>)}
      </div>
      <div className="jev-flow"><span>evidence</span><i>→</i><span>decision</span><i>→</i><span>tool</span></div>
    </div>
  )
}

function OrbitVisual() {
  return (
    <div className="project-visual orbit-product">
      <div className="orbit-window">
        <aside><div className="orbit-logo">O</div><span className="active">Today</span><span>Agents</span><span>Artifacts</span><span>Approvals</span><i /></aside>
        <div className="orbit-main">
          <div className="orbit-top"><span>Product research / private group</span><b>3 agents</b></div>
          <div className="orbit-message"><small>YOU · NOW</small><p>Compare the approaches, preserve the evidence, and bring me one decision.</p></div>
          <div className="agent-run">
            <Motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.8, repeat: Infinity }}><span>R</span><p><b>Researcher</b><small>Collecting source evidence</small></p><i /></Motion.div>
            <Motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.8, delay: .4, repeat: Infinity }}><span>C</span><p><b>Critic</b><small>Testing weak assumptions</small></p><i /></Motion.div>
            <Motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.8, delay: .8, repeat: Infinity }}><span>W</span><p><b>Writer</b><small>Waiting for both results</small></p><i /></Motion.div>
          </div>
          <div className="orbit-output"><span>artifact.md</span><span>approval required</span><strong>Ready</strong></div>
        </div>
      </div>
      <Motion.div className="orbit-halo halo-one" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} /><Motion.div className="orbit-halo halo-two" animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} />
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'mirror') return <MirrorVisual />
  if (type === 'everett') return <EverettVisual />
  if (type === 'yul') return <YulVisual />
  if (type === 'jev') return <JevVisual />
  return <OrbitVisual />
}

function ProjectCard({ project }) {
  const card = (
    <Motion.article className={`project-card ${project.className}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .12 }} variants={reveal}>
      <div className="project-top"><span>{project.number} / {project.category}</span>{project.href && <ArrowUpRight aria-hidden="true" />}</div>
      <ProjectVisual type={project.visual} />
      <div className="project-info"><h3>{project.title}</h3><p>{project.copy}</p><div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
    </Motion.article>
  )
  return project.href ? <a className={`project-link ${project.className}`} href={project.href} target="_blank" rel="noreferrer">{card}</a> : card
}

function App() {
  const [time, setTime] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: .001 })
  const heroY = useTransform(scrollYProgress, [0, .22], [0, -70])

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()))
    update()
    const id = window.setInterval(update, 30000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <>
      <Motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header"><Mark /><nav aria-label="Primary navigation"><a href="#research">Research</a><a href="#projects">Projects</a><a href="#about">About</a></nav><a className="header-contact" href="mailto:bromanaggarwal60@gmail.com">Let’s talk <ArrowUpRight size={15} /></a></header>
      <main id="top">
        <section className="hero-section">
          <Motion.div className="hero-copy" style={{ y: heroY }}>
            <div className="hero-kicker"><span className="status-dot" />CORE AI/ML · AGENTIC AI · LOW-LEVEL SYSTEMS</div>
            <h1><Motion.span initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, ease }}>Between</Motion.span><Motion.span initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: .08, ease }}><em>models</em> and</Motion.span><Motion.span initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: .16, ease }}>machines.</Motion.span></h1>
            <p className="hero-intro">I build learning systems, agent infrastructure, and low-level tools—moving from how intelligence forms representations to how it acts safely in a real runtime.</p>
            <a className="hero-cta" href="#projects">See selected systems <ArrowDownRight size={18} /></a>
          </Motion.div>
          <HeroSystem />
          <div className="hero-coordinate hero-coordinate-left">CHAYAN AGGARWAL · IIT ROORKEE</div><div className="hero-coordinate hero-coordinate-right">{time} IST</div>
        </section>

        <section className="marquee" aria-label="Areas of work"><Motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>{[0, 1].map((copy) => <span key={copy}>CORE AI / ML <i>●</i> AGENTIC SYSTEMS <i>●</i> LOW-LEVEL ENGINEERING <i>●</i> COMPILERS <i>●</i> </span>)}</Motion.div></section>

        <section className="research-section" id="research">
          <div className="section-index">01 / RESEARCH TERRITORY</div>
          <Motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><h2>Questions before<br /><em>projects.</em></h2><p>I work across the ideas underneath intelligent systems. The focus shifts; the recurring question is how machines build internal structure, make decisions, and remain understandable.</p></Motion.div>
          <ResearchMap />
        </section>

        <section className="projects-section" id="projects">
          <div className="section-index">02 / SELECTED SYSTEMS</div>
          <Motion.div className="section-heading projects-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal}><h2>Built across<br /><em>the stack.</em></h2><p>From compilers and debuggers to agent runtimes and end-user products. Each project gets its own visual language because each solves a different class of problem.</p></Motion.div>
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </section>

        <section className="about-section" id="about">
          <div className="about-visual" aria-hidden="true"><div className="about-core">CA</div>{['vision', 'agents', 'runtime', 'theory'].map((item, index) => <Motion.span className={`about-label about-label-${index + 1}`} key={item} animate={{ y: [0, index % 2 ? 8 : -8, 0] }} transition={{ duration: 3.5 + index * .4, repeat: Infinity, ease: 'easeInOut' }}>{item}</Motion.span>)}<Motion.i animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} /></div>
          <Motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={reveal}><div className="section-index">03 / ABOUT</div><h2>Mathematics for the structure.<br /><em>Engineering for the proof.</em></h2><p>I’m pursuing a BS–MS in Mathematics & Computing at IIT Roorkee. I like work that refuses the false choice between theory and implementation: understand the mechanism, then build the system that tests it.</p><div className="about-details"><div><span>Main interests</span><strong>Core AI/ML · Agentic AI · Low-level systems</strong></div><div><span>Research</span><strong>Vision · world models · agents · RL · VLMs · interpretability</strong></div><div><span>Community</span><strong>Data Science Group · MDG Space</strong></div></div></Motion.div>
        </section>

        <section className="contact-section"><p>Interesting systems start<br />with a better question.</p><a href="mailto:bromanaggarwal60@gmail.com">Let’s build one <MoveRight aria-hidden="true" /></a></section>
      </main>
      <footer><Mark /><span>Chayan Aggarwal · 2026</span><div className="socials"><a href="https://github.com/chayan-bit" target="_blank" rel="noreferrer">GH</a><a href="https://linkedin.com/in/chayan-aggarwal-b64a4b261/" target="_blank" rel="noreferrer">IN</a><a href="mailto:bromanaggarwal60@gmail.com" aria-label="Email"><Mail /></a></div></footer>
    </>
  )
}

export default App

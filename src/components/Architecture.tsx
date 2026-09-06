import { motion } from 'framer-motion';

const archNodes = [
  'Client',
  'REST API',
  'Spring Boot',
  'Security',
  'Services',
  'Redis / Kafka',
  'Database',
];

const devopsNodes = [
  'Git',
  'CI/CD',
  'Build / Test',
  'Docker',
  'Server',
  'Nginx',
  'Production',
];

function FlowDiagram({
  nodes,
  accentColor = '#5B7CFF',
  containerId,
}: {
  nodes: string[];
  accentColor?: string;
  containerId: string;
}) {
  return (
    <div id={containerId} className="w-full overflow-x-auto horizontal-scroll py-6 px-2">
      <div className="flex items-center justify-between min-w-[780px] max-w-6xl mx-auto">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center flex-1 last:flex-none">
            {/* Flow node card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flow-node relative bg-[#0d1222] border border-[#202638] hover:border-brand-blue/60 
                         rounded-xl px-4 py-3.5 flex flex-col items-center justify-center 
                         min-w-[105px] sm:min-w-[115px] shadow-card hover:shadow-glow-blue 
                         transition-all duration-300 group cursor-pointer"
            >
              <span className="ic text-[11px] font-mono font-bold text-brand-blue mb-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="lbl text-xs sm:text-[13px] font-semibold text-text-primary text-center whitespace-nowrap group-hover:text-white transition-colors">
                {node}
              </span>
            </motion.div>

            {/* Animated Flow connector line */}
            {i < nodes.length - 1 && (
              <div className="flow-connector flex-1 min-w-[28px] sm:min-w-[44px] h-6 flex items-center mx-1">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <line
                    x1="0"
                    y1="10"
                    x2="100"
                    y2="10"
                    stroke="#202638"
                    strokeWidth="2"
                  />
                  <circle r="3.5" fill={accentColor}>
                    <animateMotion
                      dur="2.4s"
                      repeatCount="indefinite"
                      path="M0,10 L100,10"
                      begin={`${i * 0.3}s`}
                    />
                  </circle>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Text summary breadcrumb below flow */}
      <div className="text-center font-mono text-xs text-text-muted mt-8 tracking-wide overflow-x-auto whitespace-nowrap">
        {nodes.map((n, idx) => (
          <span key={n}>
            <span className="text-brand-blue font-medium">{n}</span>
            {idx < nodes.length - 1 && <span className="mx-2 text-text-muted/60">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

const architectureItems = [
  { label: 'Microservices', color: '#5B7CFF' },
  { label: 'Kafka', color: '#8B5CF6' },
  { label: 'Load Balancing', color: '#22D3EE' },
  { label: 'Kubernetes', color: '#326CE5' },
  { label: 'Docker', color: '#2496ED' },
  { label: 'CI/CD Pipelines', color: '#22C55E' },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 bg-bg-primary relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* FIRST: System Architecture Flow */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3"
            >
              System &amp; Backend Design
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
            >
              System Architecture <span className="text-gradient-blue">Flow.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-text-muted text-[15px] leading-relaxed"
            >
              High-performance microservices architecture with Spring Boot, Security, Caching, and Message Queues.
            </motion.p>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
            <FlowDiagram containerId="archFlow" nodes={archNodes} accentColor="#5B7CFF" />
          </div>
        </div>

        {/* SECOND: DevOps & Deployment Flow */}
        <div id="devops" className="pt-10 border-t border-border/40 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3"
            >
              Automation &amp; CI/CD Pipeline
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading mb-4"
            >
              How code reaches <span className="text-gradient-cyan">production.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-text-muted text-[15px] leading-relaxed"
            >
              The CI/CD flow Girjesh built and automated at Scriza — cutting deployment time by 40%.
            </motion.p>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
            <FlowDiagram containerId="devopsFlow" nodes={devopsNodes} accentColor="#22D3EE" />
          </div>
        </div>

        {/* Core Architecture & Infra Badges */}
        <div className="pt-8 border-t border-border/40">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-text-muted mb-6">
            Core Distributed Systems &amp; Infrastructure Tools
          </p>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {architectureItems.map((item) => (
              <span
                key={item.label}
                className="px-4 py-2 rounded-xl bg-bg-secondary border border-border text-xs font-medium text-text-primary flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



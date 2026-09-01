import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

// Project mock UI visuals
function ProjectMockup({ project }: { project: typeof projects[0] }): React.ReactElement {
  const visuals: Record<number, React.ReactElement> = {
    1: (
      // Treat24 - Food ordering dashboard
      <div className="w-full h-full bg-[#0a0f1e] rounded-t-lg overflow-hidden">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-14 bg-[#080B14] border-r border-border flex flex-col items-center py-3 gap-3">
            <div className="w-6 h-6 rounded-lg bg-orange-500/20 border border-orange-500/30" />
            {['🏠', '🍕', '🛒', '📋', '⭐'].map((icon, i) => (
              <div key={i} className="w-7 h-7 rounded-lg bg-border/20 flex items-center justify-center text-[10px]">
                {icon}
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="flex-1 p-3">
            <div className="text-[8px] font-bold text-text-muted mb-2">RESTAURANTS NEARBY</div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {['🍔 Burger Hub', '🍕 Pizza Palace', '🍜 Noodle Box', '🌮 Taco Town'].map((r, i) => (
                <div key={i} className="bg-border/20 rounded-lg p-1.5">
                  <div className="text-[8px] font-medium text-text-primary">{r}</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="h-0.5 flex-1 bg-orange-500/40 rounded" />
                    <span className="text-[6px] text-orange-400">4.2 ★</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-2">
              <div className="text-[8px] font-semibold text-orange-400 mb-1">Active Orders</div>
              <div className="flex gap-1.5">
                {['Preparing', 'Out for delivery', 'Delivered'].map((s, i) => (
                  <div key={i} className="flex-1 bg-border/20 rounded p-1 text-center text-[6px] text-text-muted">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    2: (
      // AI School ERP
      <div className="w-full h-full bg-[#0a0d1a] rounded-t-lg overflow-hidden">
        <div className="flex h-full">
          {/* Nav */}
          <div className="w-14 bg-[#080A12] border-r border-border flex flex-col items-center py-3 gap-2">
            <div className="w-6 h-6 rounded bg-brand-blue/20 border border-brand-blue/30" />
            {['👨‍🎓', '📚', '👨‍💼', '🚌', '💰', '📦', '📝'].map((icon, i) => (
              <div key={i} className="w-7 h-6 rounded flex items-center justify-center text-[10px] hover:bg-brand-blue/10">
                {icon}
              </div>
            ))}
          </div>
          {/* Dashboard */}
          <div className="flex-1 p-2.5">
            <div className="grid grid-cols-3 gap-1.5 mb-2">
              {[
                { label: 'Students', val: '1,240', color: 'blue' },
                { label: 'Teachers', val: '86', color: 'green' },
                { label: 'Pending', val: '12', color: 'orange' },
              ].map((s, i) => (
                <div key={i} className="bg-border/20 rounded p-1.5">
                  <div className="text-[6px] text-text-muted">{s.label}</div>
                  <div className="text-[10px] font-bold text-text-primary">{s.val}</div>
                </div>
              ))}
            </div>
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-2 mb-2">
              <div className="text-[8px] font-semibold text-brand-blue mb-1">🤖 AI Assistant</div>
              <div className="text-[7px] text-text-muted">How can I help you today?</div>
              <div className="mt-1 bg-border/20 rounded px-2 py-0.5 text-[7px] text-text-muted">Ask anything...</div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {['Exam Results', 'Transport', 'Inventory', 'Finance'].map((m, i) => (
                <div key={i} className="bg-border/20 rounded p-1.5 text-[7px] text-text-muted">{m}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    3: (
      // Rental Application
      <div className="w-full h-full bg-[#080c14] rounded-t-lg overflow-hidden p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[9px] font-bold text-text-primary">RentEasy</div>
          <div className="flex gap-1">
            <div className="w-5 h-3 bg-green-500/20 rounded-sm" />
            <div className="w-8 h-3 bg-border/40 rounded-sm" />
          </div>
        </div>
        <div className="bg-border/20 rounded-lg p-1.5 mb-2 flex gap-1">
          <div className="flex-1 bg-bg-primary rounded px-2 py-0.5 text-[7px] text-text-muted">Search items...</div>
          <div className="w-5 h-4 bg-green-500/20 rounded flex items-center justify-center text-[7px]">🔍</div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { name: '📸 Camera', price: '₹200/day', avail: true },
            { name: '🚲 Bicycle', price: '₹50/day', avail: true },
            { name: '💻 Laptop', price: '₹500/day', avail: false },
            { name: '⛺ Tent', price: '₹150/day', avail: true },
          ].map((item, i) => (
            <div key={i} className="bg-border/20 rounded-lg p-2">
              <div className="text-[10px] mb-1">{item.name}</div>
              <div className="text-[8px] text-green-400 font-medium">{item.price}</div>
              <div className={`text-[6px] mt-0.5 ${item.avail ? 'text-green-400' : 'text-red-400'}`}>
                {item.avail ? '● Available' : '● Booked'}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return visuals[project.id] || <div className="w-full h-full bg-bg-card rounded-t-lg" />;
}

// 3D tilt card
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 400, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 400, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d' }}
      className="group bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-blue/40 
                 hover:shadow-card-hover transition-colors duration-300 cursor-pointer"
    >
      {/* Project number */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-xs font-bold text-text-muted bg-bg-primary/80 border border-border px-2 py-0.5 rounded-md">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* External link icon */}
      <div className="absolute top-4 right-4 z-10">
        <div className="w-7 h-7 rounded-lg bg-bg-primary/80 border border-border flex items-center justify-center 
                        group-hover:border-brand-blue/40 group-hover:bg-brand-blue/10 transition-all">
          <ArrowUpRight size={13} className="text-text-muted group-hover:text-brand-blue transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Mockup visual */}
      <div className="relative h-44 overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
        <ProjectMockup project={project} />
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bg-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="text-base font-bold text-text-primary">{project.title}</h3>
          <span className="text-[10px] text-text-muted border border-border px-1.5 py-0.5 rounded font-mono">
            {project.architecture}
          </span>
        </div>
        <p className="text-text-muted text-xs mb-3 leading-relaxed">{project.subtitle}</p>
        <p className="text-text-muted text-[12px] leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="section-heading">
            Things I've <span className="text-gradient-blue">Built</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

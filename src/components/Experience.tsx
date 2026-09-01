import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="section-heading">
            My Professional <span className="text-gradient-blue">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 flex items-center justify-center">
                  {exp.type === 'current' ? (
                    <div className="relative w-9 h-9 rounded-full bg-brand-blue/20 border border-brand-blue flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-brand-blue animate-pulse" />
                      <div className="absolute inset-0 rounded-full border border-brand-blue/40 animate-ping" />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-bg-card border border-border flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border border-text-muted" />
                    </div>
                  )}
                </div>

                {/* Content card */}
                <div className="bg-bg-card border border-border rounded-xl p-6 hover:border-brand-blue/30 hover:shadow-card-hover transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                      <p className="text-brand-blue text-sm font-medium">{exp.company}</p>
                      <p className="text-text-muted text-xs mt-0.5">{exp.location}</p>
                    </div>
                    <span className="self-start text-xs font-medium text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-text-muted text-[14px] leading-relaxed">
                        <CheckCircle2 size={14} className="text-brand-blue mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

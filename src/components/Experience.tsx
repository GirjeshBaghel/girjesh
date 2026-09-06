import { motion } from 'framer-motion';
import { experience, education, certifications } from '../data/portfolioData';
import { CheckCircle2, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Work Experience */}
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

        <div className="relative max-w-4xl mb-20">
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

        {/* Education & Academic Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Education</h3>
                <p className="text-xs text-text-muted">Academic background & qualifications</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-bg-card border border-border rounded-xl p-5 hover:border-brand-blue/40 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-base font-bold text-text-primary">{edu.degree}</h4>
                      <p className="text-xs font-medium text-brand-blue">{edu.institution}</p>
                    </div>
                    <span className="text-[11px] font-medium text-brand-purple bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-1 rounded-md whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Certifications</h3>
                <p className="text-xs text-text-muted">Professional credentials & achievements</p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-bg-card border border-border rounded-xl p-5 hover:border-brand-purple/40 transition-all duration-300 flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-text-primary mb-1">{cert.title}</h4>
                    <p className="text-xs text-text-muted">Issued by <span className="text-brand-cyan">{cert.issuer}</span></p>
                  </div>
                  <span className="text-xs font-mono text-text-muted bg-border/40 px-2.5 py-1 rounded-md">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


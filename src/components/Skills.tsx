import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { experience } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Languages: '#E76F00',
  Backend: '#6DB33F',
  Databases: '#336791',
  Messaging: '#8B5CF6',
  DevOps: '#2496ED',
  Tools: '#F05032',
  Security: '#DC382D',
  Architecture: '#5B7CFF',
  'AI / ML': '#8B5CF6',
};

// Tech icons mapping for the right side skill display
const skillIcons: Record<string, string> = {
  'Spring Boot': '🍃',
  Hibernate: '🔗',
  JPA: '📦',
  PostgreSQL: '🐘',
  Redis: '⚡',
  Kafka: '📨',
  RabbitMQ: '🐇',
  Docker: '🐳',
  Jenkins: '🔧',
  AWS: '☁️',
  'GitLab CI/CD': '🔄',
  Nginx: '🌐',
  Git: '🌿',
  Postman: '📮',
  Linux: '🐧',
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-2"
        >
          Core Skills
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {/* Left — Experience timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Timeline connector */}
                  <div
                    className={`absolute left-[7px] top-6 w-0.5 h-full ${
                      idx === 0 ? 'bg-gradient-to-b from-brand-blue to-transparent' : 'bg-border'
                    }`}
                  />

                  {/* Dot */}
                  <div className="absolute left-0 top-1">
                    {exp.type === 'current' ? (
                      <div className="w-4 h-4 rounded-full bg-brand-blue border-2 border-bg-primary shadow-glow-blue animate-pulse" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-border bg-bg-card" />
                    )}
                  </div>

                  <div className="bg-bg-card border border-border rounded-xl p-5 hover:border-brand-blue/30 transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-bold text-text-primary text-[15px]">{exp.role}</h3>
                        <p className="text-text-muted text-sm">{exp.company} — {exp.location}</p>
                      </div>
                      <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-muted text-[13px] leading-relaxed">
                          <CheckCircle2 size={13} className="text-brand-blue mt-0.5 shrink-0" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Tech Stack & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-lg font-bold text-text-primary mb-6">Tech Stack &amp; Tools</h3>
            <div className="space-y-5">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: categoryColors[group.category] || '#5B7CFF' }}
                    />
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                      {group.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-bg-card border border-border rounded-md text-text-muted hover:border-brand-blue/40 hover:text-text-primary transition-colors cursor-default"
                      >
                        {skillIcons[skill] && (
                          <span className="text-[10px]">{skillIcons[skill]}</span>
                        )}
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

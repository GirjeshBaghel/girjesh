import { motion } from 'framer-motion';

const architectureItems = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="10" r="3" fill="#5B7CFF" opacity="0.9"/>
        <circle cx="24" cy="10" r="3" fill="#5B7CFF" opacity="0.9"/>
        <circle cx="16" cy="22" r="3" fill="#5B7CFF" opacity="0.9"/>
        <line x1="8" y1="10" x2="24" y2="10" stroke="#5B7CFF" strokeWidth="1.5" opacity="0.5"/>
        <line x1="8" y1="10" x2="16" y2="22" stroke="#5B7CFF" strokeWidth="1.5" opacity="0.5"/>
        <line x1="24" y1="10" x2="16" y2="22" stroke="#5B7CFF" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="8" cy="10" r="5" stroke="#5B7CFF" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <circle cx="24" cy="10" r="5" stroke="#5B7CFF" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <circle cx="16" cy="22" r="5" stroke="#5B7CFF" strokeWidth="0.5" fill="none" opacity="0.3"/>
      </svg>
    ),
    label: 'Microservices',
    color: '#5B7CFF',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="12" width="8" height="8" rx="1.5" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1"/>
        <rect x="20" y="12" width="8" height="8" rx="1.5" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" strokeWidth="1"/>
        <rect x="12" y="5" width="8" height="6" rx="1.5" fill="#8B5CF6" opacity="0.4" stroke="#8B5CF6" strokeWidth="1"/>
        <path d="M12 11 L8 16M20 16 L20 11" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.6"/>
        <path d="M12 8 L12 12M20 8 L20 12" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.6"/>
        <circle cx="16" cy="21" r="3" fill="#8B5CF6" opacity="0.6"/>
        <path d="M12 16 L16 20M20 16 L16 20" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.5"/>
      </svg>
    ),
    label: 'Kafka',
    color: '#8B5CF6',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="10" width="22" height="12" rx="2" fill="#22D3EE" opacity="0.15" stroke="#22D3EE" strokeWidth="1"/>
        <circle cx="16" cy="16" r="4" fill="#22D3EE" opacity="0.3" stroke="#22D3EE" strokeWidth="1.5"/>
        <path d="M5 14 L9 14M23 14 L27 14M5 18 L9 18M23 18 L27 18" stroke="#22D3EE" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="16" cy="16" r="1.5" fill="#22D3EE"/>
      </svg>
    ),
    label: 'Load Balancing',
    color: '#22D3EE',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="8" stroke="#326CE5" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="16" cy="16" r="3" fill="#326CE5" opacity="0.8"/>
        <line x1="16" y1="6" x2="16" y2="10" stroke="#326CE5" strokeWidth="1.5"/>
        <line x1="16" y1="22" x2="16" y2="26" stroke="#326CE5" strokeWidth="1.5"/>
        <line x1="6" y1="16" x2="10" y2="16" stroke="#326CE5" strokeWidth="1.5"/>
        <line x1="22" y1="16" x2="26" y2="16" stroke="#326CE5" strokeWidth="1.5"/>
        <line x1="9.1" y1="9.1" x2="12" y2="12" stroke="#326CE5" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="22.9" y2="22.9" stroke="#326CE5" strokeWidth="1.5"/>
        <line x1="22.9" y1="9.1" x2="20" y2="12" stroke="#326CE5" strokeWidth="1.5"/>
        <line x1="12" y1="20" x2="9.1" y2="22.9" stroke="#326CE5" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Kubernetes',
    color: '#326CE5',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="11" width="5" height="4" rx="0.5" fill="#2496ED" opacity="0.9"/>
        <rect x="14" y="11" width="5" height="4" rx="0.5" fill="#2496ED" opacity="0.9"/>
        <rect x="14" y="6" width="5" height="4" rx="0.5" fill="#2496ED" opacity="0.7"/>
        <rect x="20" y="11" width="5" height="4" rx="0.5" fill="#2496ED" opacity="0.9"/>
        <path d="M6 15 Q10 20 24 19" stroke="#2496ED" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <circle cx="26" cy="18" r="2.5" fill="#2496ED" opacity="0.9"/>
      </svg>
    ),
    label: 'Docker',
    color: '#2496ED',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="8" r="3" fill="#22C55E" opacity="0.8"/>
        <circle cx="8" cy="24" r="3" fill="#22C55E" opacity="0.8"/>
        <circle cx="24" cy="24" r="3" fill="#22C55E" opacity="0.8"/>
        <path d="M16 11 L8 21" stroke="#22C55E" strokeWidth="1.5" opacity="0.6"/>
        <path d="M16 11 L24 21" stroke="#22C55E" strokeWidth="1.5" opacity="0.6"/>
        <path d="M11 24 L21 24" stroke="#22C55E" strokeWidth="1.5" opacity="0.6"/>
        <path d="M13 16 L19 16" stroke="#22C55E" strokeWidth="1" strokeDasharray="1,2" opacity="0.5"/>
      </svg>
    ),
    label: 'CI/CD Pipelines',
    color: '#22C55E',
  },
];

// Animated connection line between items
function ConnectionLine({ color }: { color: string }) {
  return (
    <div className="hidden lg:flex items-center flex-1 mx-2">
      <div className="flex-1 relative h-px overflow-hidden">
        <div className="absolute inset-0 bg-border" />
        <motion.div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to right, transparent, ${color}60, transparent)` }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="py-16 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-10 text-center"
        >
          I Work With Modern Architectures &amp; DevOps
        </motion.p>

        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-4 lg:gap-0">
          {architectureItems.map((item, i) => (
            <div key={item.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="w-16 h-16 rounded-2xl bg-bg-card border border-border flex items-center justify-center
                             group-hover:border-opacity-50 group-hover:shadow-glow-blue transition-all duration-300"
                  style={{
                    borderColor: 'rgba(32,38,56,0.8)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = item.color + '60';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${item.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(32,38,56,0.8)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                  }}
                >
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-text-muted group-hover:text-text-primary transition-colors text-center">
                  {item.label}
                </span>
              </motion.div>

              {i < architectureItems.length - 1 && (
                <ConnectionLine color={item.color} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

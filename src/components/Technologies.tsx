import React from 'react';
import { motion } from 'framer-motion';
import { coreTechnologies } from '../data/portfolioData';

// SVG tech icons as inline components
const TechIcon = ({ name, color }: { name: string; color: string }) => {
  const iconStyle = "w-10 h-10 object-contain flex items-center justify-center";

  const icons: Record<string, React.ReactElement> = {
    java: (
      <svg viewBox="0 0 32 32" className={iconStyle} fill="none">
        <circle cx="16" cy="16" r="16" fill="#E76F00" opacity="0.1" />
        <text x="50%" y="65%" textAnchor="middle" fontSize="14" fontWeight="bold" fill={color} fontFamily="serif">J</text>
      </svg>
    ),
    spring: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#6DB33F" opacity="0.1" />
        <text x="50%" y="65%" textAnchor="middle" fontSize="11" fontWeight="bold" fill={color} fontFamily="sans-serif">SB</text>
      </svg>
    ),
    microservices: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#5B7CFF" opacity="0.1" />
        <circle cx="10" cy="12" r="3" fill={color} opacity="0.8" />
        <circle cx="22" cy="12" r="3" fill={color} opacity="0.8" />
        <circle cx="16" cy="22" r="3" fill={color} opacity="0.8" />
        <line x1="10" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <line x1="10" y1="12" x2="16" y2="22" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <line x1="22" y1="12" x2="16" y2="22" stroke={color} strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    kafka: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#231F20" opacity="0.3" />
        <text x="50%" y="65%" textAnchor="middle" fontSize="10" fontWeight="bold" fill={color || '#fff'} fontFamily="sans-serif">KF</text>
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#2496ED" opacity="0.1" />
        <rect x="10" y="13" width="4" height="3" rx="0.5" fill={color} />
        <rect x="15" y="13" width="4" height="3" rx="0.5" fill={color} />
        <rect x="15" y="9" width="4" height="3" rx="0.5" fill={color} />
        <rect x="20" y="13" width="4" height="3" rx="0.5" fill={color} />
        <path d="M8 16 Q12 20 22 19" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
      </svg>
    ),
    kubernetes: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#326CE5" opacity="0.1" />
        <circle cx="16" cy="16" r="6" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="2" fill={color} />
        <line x1="16" y1="8" x2="16" y2="11" stroke={color} strokeWidth="1.5" />
        <line x1="16" y1="21" x2="16" y2="24" stroke={color} strokeWidth="1.5" />
        <line x1="8" y1="16" x2="11" y2="16" stroke={color} strokeWidth="1.5" />
        <line x1="21" y1="16" x2="24" y2="16" stroke={color} strokeWidth="1.5" />
      </svg>
    ),
    redis: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#DC382D" opacity="0.1" />
        <ellipse cx="16" cy="14" rx="7" ry="3" fill={color} opacity="0.9" />
        <ellipse cx="16" cy="14" rx="7" ry="3" stroke={color} strokeWidth="0.5" fill="none" />
        <rect x="9" y="14" width="14" height="4" fill={color} opacity="0.7" />
        <ellipse cx="16" cy="18" rx="7" ry="3" fill={color} opacity="0.8" />
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#336791" opacity="0.1" />
        <text x="50%" y="65%" textAnchor="middle" fontSize="10" fontWeight="bold" fill={color} fontFamily="sans-serif">PG</text>
      </svg>
    ),
    aws: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#FF9900" opacity="0.1" />
        <text x="50%" y="65%" textAnchor="middle" fontSize="9" fontWeight="bold" fill={color} fontFamily="sans-serif">AWS</text>
      </svg>
    ),
    nginx: (
      <svg viewBox="0 0 32 32" className={iconStyle}>
        <circle cx="16" cy="16" r="16" fill="#009639" opacity="0.1" />
        <text x="50%" y="65%" textAnchor="middle" fontSize="9" fontWeight="bold" fill={color} fontFamily="sans-serif">NGX</text>
      </svg>
    ),
  };

  return icons[name] || (
    <div className={`${iconStyle} bg-bg-card rounded-full flex items-center justify-center`}>
      <span className="text-xs font-bold text-text-muted">{name[0].toUpperCase()}</span>
    </div>
  );
};

export default function Technologies() {
  return (
    <section className="py-12 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-8 text-center"
        >
          Core Technologies
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {coreTechnologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.12, y: -4 }}
              className="flex flex-col items-center gap-2 cursor-default group"
            >
              <div
                className="w-14 h-14 rounded-xl bg-bg-card border border-border flex items-center justify-center 
                           group-hover:border-brand-blue/40 group-hover:shadow-glow-blue transition-all duration-300"
              >
                <TechIcon name={tech.icon} color={tech.color} />
              </div>
              <span className="text-[11px] font-medium text-text-muted group-hover:text-text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

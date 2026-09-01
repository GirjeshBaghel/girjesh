import { motion } from 'framer-motion';
import { User, Code2, TrendingUp, Zap, Users } from 'lucide-react';
import { stats } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  user: <User size={18} className="text-brand-blue" />,
  code2: <Code2 size={18} className="text-brand-purple" />,
  'trending-up': <TrendingUp size={18} className="text-brand-green" />,
  zap: <Zap size={18} className="text-brand-cyan" />,
  users: <Users size={18} className="text-brand-blue" />,
};

export default function Stats() {
  return (
    <section className="border-y border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center py-6 px-4 gap-2 text-center relative group"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-bg-card border border-border flex items-center justify-center mb-1 group-hover:border-brand-blue/40 transition-colors">
                {iconMap[stat.icon]}
              </div>

              {/* Value */}
              <span className="text-2xl md:text-3xl font-extrabold text-text-primary">
                {stat.value}
              </span>

              {/* Label */}
              <span className="text-xs text-text-muted font-medium text-center leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

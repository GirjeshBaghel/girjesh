import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-3">Achievements</p>
          <h2 className="section-heading">
            Milestones &amp; <span className="text-gradient-blue">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-bg-card border border-border rounded-xl p-5 flex flex-col gap-3
                         hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top left, ${ach.color}10, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: `${ach.color}15`,
                  border: `1px solid ${ach.color}30`,
                }}
              >
                {ach.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-[14px] text-text-primary leading-tight"
              >
                {ach.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-[12px] leading-relaxed flex-1">
                {ach.description}
              </p>

              {/* Color accent bottom */}
              <div
                className="h-0.5 w-full rounded-full mt-auto"
                style={{ background: `linear-gradient(to right, ${ach.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

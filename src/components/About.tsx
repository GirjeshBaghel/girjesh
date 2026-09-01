import { motion } from 'framer-motion';

// Simplified developer illustration using CSS/SVG
function DeveloperVisual() {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-end justify-center">
      {/* Desk setup illustration */}
      <div className="relative w-72 h-56">
        {/* Monitor glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-28 bg-brand-blue/20 rounded-lg blur-xl" />

        {/* Monitor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-28 bg-bg-card border border-border/80 rounded-lg overflow-hidden">
          {/* Screen content */}
          <div className="w-full h-full bg-bg-primary p-2 font-mono text-[7px]">
            <div className="text-brand-green">{'// Server Controller'}</div>
            <div className="text-brand-blue mt-0.5">{'@RestController'}</div>
            <div className="text-text-muted">{'@RequestMapping("/api")'}</div>
            <div className="text-brand-cyan mt-0.5">{'public class Api {'}</div>
            <div className="text-brand-purple ml-3">{'  @GetMapping'}</div>
            <div className="text-text-primary ml-3">{'  List<Data> getAll()'}</div>
            <div className="text-text-muted ml-4">{'{ return service.get(); }'}</div>
            <div className="text-brand-cyan">{'}'}</div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-1.5 h-3 bg-brand-blue animate-pulse" />
            </div>
          </div>
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent pointer-events-none" />
        </div>

        {/* Monitor stand */}
        <div className="absolute top-[6.8rem] left-1/2 -translate-x-1/2 w-3 h-5 bg-border" />
        <div className="absolute top-[8.6rem] left-1/2 -translate-x-1/2 w-14 h-1.5 bg-border rounded" />

        {/* Keyboard */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-8 bg-bg-card border border-border rounded-md grid grid-cols-12 gap-0.5 p-1">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="bg-border/60 rounded-sm h-full" />
          ))}
        </div>

        {/* Mouse */}
        <div className="absolute bottom-8 right-12 w-5 h-7 bg-bg-card border border-border rounded-full" />

        {/* Floating icons */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-4 right-2 bg-bg-card border border-border rounded-lg p-1.5 text-xs font-mono text-brand-green shadow-card"
        >
          ✓ Build OK
        </motion.div>
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-8 -left-4 bg-bg-card border border-border rounded-lg p-1.5 text-xs font-mono text-brand-blue shadow-card"
        >
          ⚡ Redis
        </motion.div>
        <motion.div
          animate={{ y: [-2, 6, -2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -right-6 top-20 bg-bg-card border border-border rounded-lg p-1.5 text-xs text-brand-purple shadow-card"
        >
          🐳 Docker
        </motion.div>

        {/* Decorative gears */}
        <div className="absolute top-0 right-0 text-border text-4xl opacity-30 font-bold">⚙</div>
        <div className="absolute bottom-14 left-0 text-border text-2xl opacity-20 font-bold">⚙</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">About Me</p>
            <h2 className="section-heading mb-6">
              Backend Developer Who Loves Building{' '}
              <span className="text-gradient-blue">Scalable Systems.</span>
            </h2>
            <div className="space-y-4 text-text-muted text-[15px] leading-relaxed">
              <p>
                Backend-focused Java Developer with 2+ years of experience in building scalable
                microservices using Spring Boot. Experienced in designing high-performance REST
                APIs, implementing secure authentication systems, and optimizing applications
                using Redis and Kafka.
              </p>
              <p>
                Proven track record of improving system performance, leading development teams,
                and handling production deployments in real-world environments.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: 'Current Role', value: 'Backend Developer' },
                { label: 'Company', value: 'Scriza Pvt Ltd' },
                { label: 'Location', value: 'Noida, India' },
                { label: 'Focus', value: 'Microservices & APIs' },
              ].map((item) => (
                <div key={item.label} className="bg-bg-card border border-border rounded-lg p-3">
                  <p className="text-xs text-text-muted mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-text-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Developer visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <DeveloperVisual />
              {/* Background glow */}
              <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

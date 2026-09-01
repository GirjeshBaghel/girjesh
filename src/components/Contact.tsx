import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Rocket 3D component
function Rocket() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, -0.3]}>
      {/* Rocket body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 2, 8]} />
        <meshStandardMaterial color="#1a2040" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Nose cone */}
      <mesh position={[0, 1.3, 0]}>
        <coneGeometry args={[0.3, 0.8, 8]} />
        <meshStandardMaterial color="#5B7CFF" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Fins */}
      {[0, 120, 240].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.sin((angle * Math.PI) / 180) * 0.4,
            -0.7,
            Math.cos((angle * Math.PI) / 180) * 0.4,
          ]}
          rotation={[0, (angle * Math.PI) / 180, 0]}
        >
          <boxGeometry args={[0.1, 0.6, 0.4]} />
          <meshStandardMaterial color="#8B5CF6" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Exhaust flame */}
      <mesh position={[0, -1.4, 0]}>
        <coneGeometry args={[0.2, 0.8, 8]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.8} />
      </mesh>

      {/* Window */}
      <mesh position={[0, 0.3, 0.45]}>
        <circleGeometry args={[0.15, 16]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

// Star particles
function Stars() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 80;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
  }

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.02;
    }
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial color="#ffffff" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-blue/8 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Let's Build Something Great</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary leading-tight mb-4">
              Have an idea?{' '}
              <span className="text-gradient-blue">Let's turn it into something amazing.</span>
            </h2>
            <p className="text-text-muted text-[15px] leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be
              part of your vision.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(91,124,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                Let's Connect <ArrowRight size={14} />
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary flex items-center gap-2"
              >
                View My Work <ArrowRight size={14} />
              </motion.a>
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap gap-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-text-muted text-sm hover:text-brand-blue transition-colors"
              >
                <Mail size={15} className="text-brand-blue" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-text-muted text-sm hover:text-brand-blue transition-colors"
              >
                <Phone size={15} className="text-brand-blue" />
                {personalInfo.phone}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-muted text-sm hover:text-brand-blue transition-colors"
              >
                <svg className="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — 3D Rocket */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-64 md:h-80"
          >
            {!prefersReducedMotion ? (
              <Suspense fallback={null}>
                <Canvas
                  camera={{ position: [0, 0, 6], fov: 45 }}
                  style={{ width: '100%', height: '100%' }}
                  dpr={[1, 1.5]}
                  gl={{ antialias: true, alpha: true }}
                >
                  <ambientLight intensity={0.5} />
                  <pointLight position={[2, 3, 3]} intensity={2} color="#5B7CFF" />
                  <pointLight position={[-2, -2, 2]} intensity={1} color="#8B5CF6" />
                  <spotLight position={[0, 5, 3]} intensity={1.5} color="#22D3EE" />
                  <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
                    <Rocket />
                  </Float>
                  <Stars />
                </Canvas>
              </Suspense>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-8xl">🚀</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

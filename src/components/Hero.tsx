import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

// Individual server cube layer
function ServerLayer({
  y,
  scale = 1,
  color = '#1a2040',
  glowColor = '#5B7CFF',
  delay = 0,
}: {
  y: number;
  scale?: number;
  color?: string;
  glowColor?: string;
  delay?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3 + delay) * 0.1;
    }
  });

  const geometry = useMemo(() => new THREE.BoxGeometry(2.2 * scale, 0.35, 2.2 * scale), [scale]);
  const edgeGeometry = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  return (
    <group position={[0, y, 0]}>
      <mesh ref={meshRef} geometry={geometry} castShadow>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edgeGeometry}>
        <lineBasicMaterial color={glowColor} linewidth={1} />
      </lineSegments>
      {/* LED strips on top */}
      <mesh position={[0, 0.19, 0]}>
        <planeGeometry args={[2.0 * scale, 0.05]} />
        <meshBasicMaterial color={glowColor} opacity={0.8} transparent />
      </mesh>
    </group>
  );
}

// Glowing platform
function Platform() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.elapsedTime * 0.5;
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.3 + Math.sin(clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group position={[0, -1.1, 0]}>
      {/* Base disc */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.05, 64]} />
        <meshStandardMaterial color="#0a0f1e" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Glow ring */}
      <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.0, 2.5, 64]} />
        <meshBasicMaterial color="#5B7CFF" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      {/* Inner glow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 2.0, 64]} />
        <meshBasicMaterial color="#080A12" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

// Floating particles
function Particles() {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.05;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial color="#5B7CFF" size={0.04} transparent opacity={0.6} />
    </points>
  );
}

// Server stack group
function ServerStack() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.15;
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
      // Subtle mouse parallax
      groupRef.current.rotation.x = pointer.y * -0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Platform />
      <ServerLayer y={-0.7} scale={1.1} color="#0D1225" glowColor="#22D3EE" delay={0} />
      <ServerLayer y={-0.3} scale={1.0} color="#111830" glowColor="#5B7CFF" delay={0.5} />
      <ServerLayer y={0.1} scale={0.95} color="#0e152a" glowColor="#8B5CF6" delay={1} />
      <ServerLayer y={0.45} scale={0.88} color="#0D1225" glowColor="#5B7CFF" delay={1.5} />
      <ServerLayer y={0.78} scale={0.8} color="#111830" glowColor="#22D3EE" delay={2} />
      <Particles />
    </group>
  );
}

// Floating label badges around the 3D
function FloatingBadge({
  label,
  style,
  delay,
}: {
  label: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      style={style}
      className="absolute px-3 py-1.5 bg-bg-card/90 border border-border rounded-lg text-xs font-semibold text-text-primary backdrop-blur-sm shadow-card flex items-center gap-2 whitespace-nowrap"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
      {label}
    </motion.div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-[11px] font-bold tracking-[0.15em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                Backend Java Developer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl xl:text-[3.25rem] font-extrabold text-text-primary leading-[1.15] tracking-tight"
            >
              Building Scalable Microservices That Drive Business{' '}
              <span className="text-gradient-blue">Forward.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-text-muted text-[15px] leading-relaxed max-w-lg"
            >
              Backend-focused Java Developer with 2+ years of experience building scalable
              microservices using Spring Boot, designing high-performance REST APIs, implementing
              secure authentication systems, and optimizing applications using Redis and Kafka.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 relative z-30">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('projects');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.location.hash = 'projects';
                  }
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(91,124,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex items-center gap-2 relative z-30 cursor-pointer"
              >
                View My Work <span className="text-base">→</span>
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(personalInfo.resumeUrl, '_blank', 'noopener,noreferrer');
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary flex items-center gap-2 relative z-30 cursor-pointer"
              >
                Download Resume <span>↓</span>
              </motion.a>
            </motion.div>

            {/* Contact info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-text-muted text-sm hover:text-brand-blue transition-colors"
              >
                <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.email}
              </a>
              <a
                href="tel:+918802612236"
                className="flex items-center gap-2 text-text-muted text-sm hover:text-brand-blue transition-colors"
              >
                <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8800302316
              </a>
              <a
                href="https://www.linkedin.com/in/girjesh-baghel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-muted text-sm hover:text-brand-blue transition-colors"
              >
                <svg className="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right — 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 h-[420px] lg:h-[520px] flex items-center justify-center"
          >
            {/* Floating labels */}
            <FloatingBadge label="Java" style={{ top: '8%', left: '5%' }} delay={0.6} />
            <FloatingBadge label="Microservices" style={{ top: '8%', right: '2%' }} delay={0.7} />
            <FloatingBadge label="Kafka" style={{ top: '38%', left: '0%' }} delay={0.8} />
            <FloatingBadge label="DevOps" style={{ top: '38%', right: '0%' }} delay={0.9} />
            <FloatingBadge label="Load Balancing" style={{ bottom: '25%', left: '2%' }} delay={1.0} />
            <FloatingBadge label="Kubernetes" style={{ bottom: '15%', right: '2%' }} delay={1.1} />

            {/* 3D Canvas */}
            {!prefersReducedMotion ? (
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-bg-card border border-border animate-pulse" />
                  </div>
                }
              >
                <Canvas
                  camera={{ position: [0, 1.5, 5.5], fov: 45 }}
                  style={{ width: '100%', height: '100%' }}
                  dpr={[1, 1.5]}
                  gl={{ antialias: true, alpha: true }}
                >
                  <ambientLight intensity={0.3} />
                  <pointLight position={[-3, 3, 3]} intensity={1.5} color="#5B7CFF" />
                  <pointLight position={[3, -2, 3]} intensity={1} color="#8B5CF6" />
                  <pointLight position={[0, 5, 0]} intensity={0.8} color="#22D3EE" />
                  <spotLight
                    position={[0, 6, 2]}
                    angle={0.4}
                    penumbra={0.5}
                    intensity={2}
                    color="#5B7CFF"
                    castShadow
                  />
                  <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
                    <ServerStack />
                  </Float>
                  <Environment preset="city" />
                </Canvas>
              </Suspense>
            ) : (
              /* CSS fallback for reduced motion */
              <div className="w-48 h-48 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-2xl border border-brand-blue/30 flex items-center justify-center">
                <span className="text-5xl">⚙️</span>
              </div>
            )}

            {/* Glow effect behind 3D */}
            <div className="absolute inset-0 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-text-muted text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-6 bg-gradient-to-b from-brand-blue to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}

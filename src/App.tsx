import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import About from './components/About';
import Technologies from './components/Technologies';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

// Lazy-load 3D-heavy sections for better initial page performance
const Hero = lazy(() => import('./components/Hero'));
const Contact = lazy(() => import('./components/Contact'));

// Simple skeleton loader used as Suspense fallback
function SectionSkeleton({ className = 'min-h-screen' }: { className?: string }) {
  return (
    <div className={`${className} bg-bg-primary flex items-center justify-center`}>
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-brand-blue animate-bounce [animation-delay:0ms]" />
        <div className="w-2 h-2 rounded-full bg-brand-purple animate-bounce [animation-delay:150ms]" />
        <div className="w-2 h-2 rounded-full bg-brand-cyan animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans">
      <Header />
      <main>
        <Suspense fallback={<SectionSkeleton />}>
          <Hero />
        </Suspense>
        <Stats />
        <About />
        <Technologies />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Achievements />
        <Suspense fallback={<SectionSkeleton className="min-h-[400px]" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

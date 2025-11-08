import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="border-t border-white/10 bg-black py-8 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} LevelUp Learning — Built for playful education.
        </p>
      </footer>
    </div>
  );
}

export default App;

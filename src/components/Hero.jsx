import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16 text-center sm:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm text-white/90">A playful way to learn — Mario-inspired</span>
        </div>

        <h1 className="mt-6 font-bold tracking-tight text-4xl sm:text-6xl md:text-7xl">
          Level Up Your Learning
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          An educational game that turns lessons into quests, challenges, and power-ups. Explore worlds,
          collect stars, and master new skills as you play.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#play"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
          >
            <Rocket className="h-5 w-5" />
            Start Playing
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

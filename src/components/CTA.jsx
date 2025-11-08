import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="play" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 p-1">
          <div className="relative rounded-[22px] bg-neutral-900 p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                  <Sparkles className="h-4 w-4 text-yellow-200" />
                  New worlds unlock every week
                </div>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">Ready to power-up your class?</h3>
                <p className="mt-2 max-w-xl text-white/80">
                  Try the first world free. Set up a class, invite learners, and track progress in one place.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-neutral-900 shadow transition hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

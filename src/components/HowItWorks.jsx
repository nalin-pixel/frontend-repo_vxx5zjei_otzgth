import React from 'react';
import { ListChecks, BookOpenCheck, Crown } from 'lucide-react';

const steps = [
  {
    icon: BookOpenCheck,
    title: 'Choose a World',
    text: 'Pick a subject or theme. Each world is a campaign with a clear learning path.',
  },
  {
    icon: ListChecks,
    title: 'Complete Quests',
    text: 'Short, focused challenges make practice fun and help concepts stick.',
  },
  {
    icon: Crown,
    title: 'Beat the Boss',
    text: 'Finish with a boss challenge to prove mastery and earn rare rewards.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">Ready in minutes — fun for hours.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

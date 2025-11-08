import React from 'react';
import { Gamepad2, Sparkles, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Play-first Learning',
    desc: 'Mini-games and quests that teach core concepts through interaction and feedback.',
  },
  {
    icon: Sparkles,
    title: 'Power-ups & Rewards',
    desc: 'Earn stars, badges, and boosters as you master skills and beat levels.',
  },
  {
    icon: Users,
    title: 'Classroom Friendly',
    desc: 'Create groups, assign challenges, and track progress at a glance.',
  },
  {
    icon: Trophy,
    title: 'Boss Challenges',
    desc: 'Capstone missions that put knowledge to the test in a fun way.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">What makes it awesome</h2>
          <p className="mt-3 text-white/70">
            Built for curious learners and creative teachers. Everything is designed to keep attention and make
            concepts click.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

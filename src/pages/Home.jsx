import React from 'react';

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section id="hero" className="text-center bg-gradient-to-b from-sky-50 to-white px-4 pt-20 pb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Smarter Prep, Smarter Success</h1>
        <p className="max-w-3xl mx-auto mt-3 text-slate-600">AI-powered platform generating guess papers for government exams, helping students focus on what matters most.</p>
        <div className="flex justify-center gap-3 mt-5">
          <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold">Get Guess Paper →</button>
          <button className="px-5 py-3 rounded-xl border border-slate-300">See Pricing</button>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-72 h-40 md:w-[420px] md:h-48 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400 animate-pulse opacity-80"></div>
        </div>
      </section>

      {/* Why GuessMasters */}
      <section id="why" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Why GuessMasters?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-semibold">AI prediction</h3>
            <p className="text-slate-600">Identify patterns and likely topics using past paper trends.</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-semibold">Time saving</h3>
            <p className="text-slate-600">Practice what matters most and skip the noise.</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-semibold">Smart prep</h3>
            <p className="text-slate-600">Focused papers designed for efficient revision.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white grid place-items-center font-bold mb-2">1</div>
            <h3 className="font-semibold">Analyze</h3>
            <p className="text-slate-600">Past papers studied to spot question trends and hot topics.</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white grid place-items-center font-bold mb-2">2</div>
            <h3 className="font-semibold">Predict</h3>
            <p className="text-slate-600">Likely topics prioritized for upcoming exams.</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white grid place-items-center font-bold mb-2">3</div>
            <h3 className="font-semibold">Generate</h3>
            <p className="text-slate-600">High-quality mock papers for focused practice.</p>
          </div>
        </div>
      </section>

      {/* Popular Exams */}
      <section id="popular-exams" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">Popular Exams Covered</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {['SSC','UPSC','IBPS','Railways','State','Teaching'].map((e) => (
            <div key={e} className="border border-slate-200 rounded-xl p-4 text-center">{e}</div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-4">What students say</h2>
        <div className="border border-dashed border-slate-300 rounded-xl p-5 bg-slate-50 text-slate-600">
          "Coming soon — success stories from students who practiced smarter with Guess Master."
        </div>
      </section>
    </main>
  );
};

export default Home;

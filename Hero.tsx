
import React from 'react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery, t }) => {
  return (
    <section className="relative pt-64 pb-32 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-12 bg-red-600/5 border border-red-600/20 px-6 py-2 rounded-full animate-float">
          <span className="text-[10px] mono text-red-500 font-black uppercase tracking-[0.5em]">
            {t.hero_badge}
          </span>
        </div>
        
        <h2 className="text-8xl md:text-[12rem] font-black text-white mb-10 uppercase tracking-[-0.05em] leading-none select-none">
          deva<span className="text-red-600 glow-text">{t.hero_title_red}</span>
        </h2>
        
        <p className="text-zinc-400 mb-16 text-xl md:text-2xl font-light max-w-3xl mx-auto tracking-wide border-y border-zinc-900/50 py-10 leading-relaxed">
          {t.hero_desc}
        </p>

        <div className="relative max-w-3xl mx-auto group">
          <div className="relative glass-panel rounded-3xl p-3 border border-white/5 group-focus-within:border-red-600/40 transition-all">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search_placeholder}
              className="w-full bg-zinc-950/80 py-8 px-12 text-white text-xl focus:outline-none placeholder:text-zinc-800 rounded-2xl font-light tracking-wide uppercase border border-white/5"
            />
            <div className="absolute ltr:right-10 rtl:left-10 top-1/2 -translate-y-1/2 flex items-center gap-6">
               <div className="w-px h-10 bg-zinc-800"></div>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zinc-700 group-hover:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

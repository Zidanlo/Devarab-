
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Language } from '../types';

interface HeaderProps {
  onTerminalToggle: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({ onTerminalToggle, lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-7xl ${
      scrolled ? 'top-4' : 'top-8'
    }`}>
      <div className={`glass-panel border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'shadow-[0_0_50px_rgba(0,0,0,0.8)] py-3' : ''
      }`}>
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative">
            <Logo className="w-10 h-10 transition-transform group-hover:scale-110 duration-500" />
            <div className="absolute -inset-2 bg-red-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-[-0.05em] text-white leading-none uppercase">
              {t.brand}<span className="text-red-600">.</span>
            </h1>
            <span className="text-[8px] mono text-red-600 font-bold uppercase tracking-[0.2em] mt-1">
              {t.dev_name} // MAIN_ARCHITECT
            </span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-12">
          <a href="#مساحة العمل" className="relative text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] hover:text-white transition-all group">
            {t.nav_workspace}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#الأدوات" className="relative text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] hover:text-white transition-all group">
            {t.nav_tools}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#المكتبة" className="relative text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] hover:text-white transition-all group">
            {t.nav_library}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-zinc-950 p-1 border border-zinc-800 rounded-lg">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-[9px] font-black uppercase transition-all rounded ${lang === 'en' ? 'bg-red-600 text-white' : 'text-zinc-600 hover:text-zinc-300'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ar')}
              className={`px-3 py-1 text-[9px] font-black uppercase transition-all rounded ${lang === 'ar' ? 'bg-red-600 text-white' : 'text-zinc-600 hover:text-zinc-300'}`}
            >
              AR
            </button>
          </div>

          <button 
            onClick={onTerminalToggle}
            title="Open Console"
            className="relative group p-3 bg-zinc-950/50 border border-white/5 rounded-xl hover:border-red-600/50 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-400 group-hover:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

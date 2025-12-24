
import React from 'react';
import { Language } from '../types';

interface FooterProps {
  t: any;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-6 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)]"></div>
              <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">DEV_ARAB_CENTRAL</h4>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-md mono uppercase tracking-wider">
              {t.footer_desc}
            </p>
          </div>
          <div className="flex gap-16 flex-wrap">
             <div className="flex flex-col gap-3 min-w-[200px]">
                <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.4em]">Architect Info</span>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-white font-black mono uppercase tracking-widest italic">{t.dev_name}</span>
                  <div className="flex flex-col gap-3 mt-2">
                    <a 
                      href={`mailto:${t.dev_email}`} 
                      className="flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors text-[11px] mono"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {t.dev_email}
                    </a>
                    <a 
                      href={t.dev_github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors text-[11px] mono"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      GitHub Profile
                    </a>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-white text-[10px] font-black uppercase tracking-[0.4em] mono">
              {t.developed_by} <span className="text-red-600 font-black">{t.dev_name}</span>
            </div>
            <div className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.2em] mt-1">
              &copy; 2025 DEV ARAB HUB. {t.rights}
            </div>
          </div>
          <div className="flex gap-6">
             <div className="w-1.5 h-1.5 bg-red-900 rounded-full animate-pulse"></div>
             <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

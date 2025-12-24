
import React, { useState } from 'react';
import { Tool, Language } from '../types';

interface ToolCardProps {
  tool: Tool;
  lang: Language;
  t: any;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, lang, t }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'install' | null>(null);

  return (
    <div className="group relative glass-panel glass-border-red p-6 hover:scale-[1.02] transition-all duration-500 flex flex-col h-full overflow-hidden">
      <div className="absolute top-0 ltr:right-0 rtl:left-0 w-8 h-8 border-t-2 ltr:border-r-2 rtl:border-l-2 border-red-600/30 group-hover:border-red-600 transition-colors"></div>
      
      <div className="absolute top-4 ltr:left-4 rtl:right-4">
        <div className="text-[8px] mono text-zinc-500 font-bold uppercase tracking-tighter bg-zinc-900/50 px-2 py-0.5 border border-zinc-800">
          INTEL: {tool.popularity}%
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6 mt-2">
        <div className="text-3xl w-14 h-14 flex items-center justify-center bg-zinc-900/50 border border-zinc-800/50 rounded-xl group-hover:border-red-600/50 transition-all">
          {tool.icon}
        </div>
        <div>
          <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">
            {tool.name}
          </h3>
          <span className="text-[9px] text-zinc-500 font-black uppercase tracking-[0.2em] mono block">
            {tool.category}
          </span>
        </div>
      </div>

      <p className="text-zinc-400 text-sm mb-8 leading-relaxed line-clamp-2 h-10 font-medium">
        {tool.description[lang]}
      </p>

      <div className="mt-auto space-y-4">
        <div className="flex gap-2">
            <button 
                onClick={() => setActiveTab(activeTab === 'details' ? null : 'details')}
                className={`flex-1 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all rounded-lg border ${
                  activeTab === 'details' 
                  ? 'bg-red-600 text-white border-red-500 shadow-lg' 
                  : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:border-zinc-700'
                }`}
            >
                {t.features}
            </button>
            <button 
                onClick={() => setActiveTab(activeTab === 'install' ? null : 'install')}
                className={`flex-1 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all rounded-lg border ${
                  activeTab === 'install' 
                  ? 'bg-red-600 text-white border-red-500 shadow-lg' 
                  : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:border-zinc-700'
                }`}
            >
                {t.install}
            </button>
        </div>

        {activeTab && (
            <div className="absolute inset-0 bg-zinc-950/98 backdrop-blur-xl p-6 z-20 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center mb-6 border-b border-zinc-900 pb-3">
                    <span className="text-[10px] text-red-500 font-black uppercase tracking-[0.3em] mono">
                        {activeTab === 'details' ? 'CORE_FEATURES' : 'INSTALL_LOGS'}
                    </span>
                    <button onClick={() => setActiveTab(null)} className="text-zinc-600 hover:text-white transition-colors">✕</button>
                </div>
                <div className="max-h-72 overflow-y-auto text-sm">
                    {activeTab === 'details' ? (
                        <ul className="space-y-3">
                            {tool.features[lang].map((f, i) => (
                                <li key={i} className="text-zinc-300 flex items-center gap-3 bg-zinc-900/30 p-2 rounded-md border border-zinc-900">
                                    <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                                    <span className="text-xs font-bold">{f}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="space-y-2">
                            {tool.installationSteps.map((step, idx) => (
                                <div key={idx} className="bg-black/40 p-3 border-r-2 border-red-600/50 text-[10px] text-zinc-400 font-mono leading-relaxed">
                                    <span className="text-zinc-700 mr-2">#</span>{step}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )}

        <div className="bg-black/50 p-3 rounded-lg border border-zinc-900">
          <code className="text-[9px] text-zinc-500 font-mono flex items-center gap-2">
            <span className="text-red-600 font-bold">$</span> {tool.commandExample}
          </code>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;

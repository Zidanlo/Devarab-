
import React, { useState } from 'react';
import { PAYLOADS_DATA } from '../constants';
import { Language } from '../types';

interface PayloadProps {
  t: any;
  lang: Language;
}

const PayloadLibrary: React.FC<PayloadProps> = ({ t, lang }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id={lang === 'ar' ? 'المكتبة' : 'Library'} className="max-w-7xl mx-auto px-6 mb-40">
      <div className="flex items-center gap-6 mb-16">
        <div className="h-10 w-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
        <h3 className="text-4xl font-black text-white mono uppercase italic tracking-tighter">
          Payload_Library <span className="text-red-600 text-sm ml-4">[QUICK_ACCESS]</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PAYLOADS_DATA.map((payload) => (
          <div key={payload.id} className="bg-zinc-950 border border-red-900/20 p-6 group hover:border-red-600 transition-all">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] text-zinc-600 mono font-black uppercase tracking-widest">{payload.type} // {payload.id}</span>
              <button 
                onClick={() => handleCopy(payload.id, payload.code)}
                className="text-red-600 hover:text-white mono text-[10px] font-black uppercase tracking-widest bg-red-600/10 px-3 py-1 border border-red-600/20"
              >
                {copiedId === payload.id ? t.copied : t.extract}
              </button>
            </div>
            <h4 className="text-white mono text-sm mb-4 font-bold">{payload.title}</h4>
            <div className="bg-black p-4 border-l-2 border-red-900 group-hover:border-red-600 transition-colors">
              <code className="text-red-500/80 text-xs mono break-all">{payload.code}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PayloadLibrary;

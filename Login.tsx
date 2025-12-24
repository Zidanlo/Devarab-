
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (name: string) => void;
  t: any;
}

const Login: React.FC<LoginProps> = ({ onLogin, t }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center p-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.1] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(220,38,38,0.25)_50%)] bg-[length:100%_4px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)]"></div>

      <div className="w-full max-w-md relative animate-in zoom-in-95 fade-in duration-1000">
        {/* Terminal Header Decoration */}
        <div className="flex items-center justify-between bg-zinc-950 border-x border-t border-red-900/30 p-4">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-900"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          </div>
          <span className="text-[9px] mono text-red-600 font-black tracking-[0.3em] uppercase">ACCESS_DENIED_BY_DEFAULT</span>
        </div>

        <div className="glass-panel border border-red-900/30 p-10 shadow-[0_0_100px_rgba(220,38,38,0.1)]">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter glow-text mb-2">
              {t.login_title}
            </h1>
            <p className="text-[10px] mono text-zinc-500 font-bold uppercase tracking-[0.3em]">
              {t.login_subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-red-600 group-focus-within:h-full transition-all duration-500"></div>
              <input
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.login_placeholder}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600/50 p-6 text-white mono uppercase tracking-widest outline-none transition-all placeholder:text-zinc-800"
              />
            </div>

            <button
              disabled={!name.trim()}
              className={`w-full py-6 font-black uppercase tracking-[0.4em] transition-all border ${
                name.trim() 
                ? 'bg-red-600 text-white border-red-500 hover:bg-red-500 shadow-[0_0_30px_rgba(220,38,38,0.3)]' 
                : 'bg-zinc-900 text-zinc-700 border-zinc-800 cursor-not-allowed'
              }`}
            >
              {t.login_button}
            </button>
          </form>

          <div className="mt-12 text-center">
            <div className="text-[8px] mono text-zinc-700 font-black uppercase tracking-[0.4em] mb-4">
              Authorized Architect: ANIS ZIDANE
            </div>
            <div className="flex justify-center gap-4 opacity-30">
              <div className="h-1 w-8 bg-red-600"></div>
              <div className="h-1 w-8 bg-zinc-800"></div>
              <div className="h-1 w-8 bg-zinc-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


import React, { useState, useEffect, useRef } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage, Language } from '../types';

interface WorkspaceProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  lang: Language;
  t: any;
  userName: string;
}

const Workspace: React.FC<WorkspaceProps> = ({ isOpen: propIsOpen, setIsOpen: propSetIsOpen, lang, t, userName }) => {
  const [glitch, setGlitch] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isMinimized = propIsOpen !== undefined ? !propIsOpen : true;

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { role: 'assistant', content: `[SYSTEM] DEVARAB_OS v5.0.4 - WELCOME OPERATOR: ${userName.toUpperCase()}\n[SYSTEM] NEURAL_UPLINK: ACTIVE\n[SYSTEM] KERNEL: STABLE\n[SYSTEM] READY FOR YOUR COMMANDS...` }
      ]);
    }
  }, [userName]);

  useEffect(() => {
    if (!isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isMinimized, isLoading]);

  const handleCommand = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setGlitch(true);
    setTimeout(() => setGlitch(false), 150);

    setMessages(prev => [...prev, { role: 'user', content: `${userName.toLowerCase()}@devarab:~# ${userMsg}` }]);

    const cmd = userMsg.toLowerCase();
    if (cmd === 'clear') {
      setMessages([{ role: 'assistant', content: '[SYSTEM] CONSOLE_BUFFER_CLEARED' }]);
      return;
    }
    
    if (cmd === 'help') {
        setMessages(prev => [...prev, { role: 'assistant', content: `[HELP] OPERATOR: ${userName}\nAVAILABLE COMMANDS:\n- clear: Purge terminal logs\n- tools: Identify available modules\n- status: Connectivity diagnostic\n- [query]: Execute neural search via Strike_AI` }]);
        return;
    }

    setIsLoading(true);
    try {
      const aiResponse = await getAIResponse(userMsg, lang, userName);
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: '>>> [CRITICAL] UPLINK_TIMEOUT: NEURAL_CORE_UNREACHABLE' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 ltr:right-6 rtl:left-6 z-[110]">
        <button 
          onClick={() => propSetIsOpen?.(true)}
          className="group relative bg-black hover:bg-red-950 py-4 px-10 border border-red-600/50 text-red-600 font-mono font-black text-xs uppercase tracking-[0.4em] transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)]"
        >
          <div className="absolute inset-0 bg-red-600/5 animate-pulse"></div>
          <span className="relative z-10 flex items-center gap-3">
             <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
             CONSOLE_ACCESS: {userName.toUpperCase()}
          </span>
        </button>
      </div>
    );
  }

  return (
    <section className={`max-w-7xl mx-auto px-6 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-500 ${glitch ? 'contrast-150' : ''}`}>
      <div className="flex items-end justify-between mb-8 border-b border-zinc-900 pb-4">
        <div className="flex items-center gap-5">
          <div className="w-1.5 h-14 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)]"></div>
          <div>
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter glow-text">{t.terminal_title}</h2>
            <div className="flex gap-4 mt-1">
              <span className="text-[9px] mono text-red-500 font-black uppercase tracking-widest bg-red-600/5 px-2 py-0.5 border border-red-900/30 italic">Target: Strike_AI</span>
              <span className="text-[9px] mono text-emerald-500 font-black uppercase tracking-widest bg-emerald-600/5 px-2 py-0.5 border border-emerald-900/30">OPERATOR: {userName.toUpperCase()}</span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => propSetIsOpen?.(false)} 
          className="text-zinc-600 hover:text-red-500 transition-colors mono text-[10px] font-black tracking-widest"
        >
          [ TERMINATE_SESSION ]
        </button>
      </div>

      <div className="w-full bg-zinc-950 border border-red-900/40 rounded-sm flex flex-col h-[650px] relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(220,38,38,0.25)_50%)] bg-[length:100%_4px]"></div>
        
        <div className="flex-1 overflow-y-auto p-10 font-mono custom-scrollbar relative">
          <div className="space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`animate-in fade-in slide-in-from-left-2 duration-300 ${msg.role === 'user' ? 'bg-white/5 border-l-2 border-red-600 p-4' : 'pl-4 border-l border-emerald-950/50'}`}>
                <div className={`text-[13px] leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'text-white' : 'text-emerald-500/90'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-4 text-red-600 animate-pulse text-[11px] font-black uppercase tracking-[0.3em] pl-4">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                DECODING_DATA_LINK_STREAM...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>

        <div className="p-8 bg-black/90 border-t border-red-900/20">
          <div className="max-w-5xl mx-auto flex items-center gap-5">
            <div className="flex-1 flex items-center gap-4 bg-zinc-950 px-6 py-4 border border-zinc-900 focus-within:border-red-600/50 transition-all rounded-sm shadow-inner">
              <span className="text-red-600 font-mono font-black text-sm tracking-tighter select-none">{userName.toLowerCase()}@devarab:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder="EXECUTE_NEURAL_COMMAND..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder:text-zinc-800 uppercase tracking-widest"
              />
            </div>
            
            <button
              onClick={handleCommand}
              disabled={!input.trim() || isLoading}
              className={`h-[54px] px-8 font-mono font-black text-xs uppercase tracking-[0.3em] transition-all border ${
                input.trim() && !isLoading
                ? 'bg-red-600 text-white border-red-500 hover:bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                : 'bg-zinc-900 text-zinc-700 border-zinc-800 cursor-not-allowed'
              }`}
            >
              [ {isLoading ? 'BUSY' : 'RUN_CMD'} ]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workspace;

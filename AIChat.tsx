
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Connection Secured. BLACKARAB intelligence online. Input your technical query.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[380px] md:w-[450px] h-[550px] bg-black border border-red-900/40 rounded-none shadow-[0_0_60px_rgba(0,0,0,1)] flex flex-col mb-6 overflow-hidden animate-in zoom-in-95 duration-300">
          <div className="bg-red-600 p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center text-xl shadow-lg border border-red-500/30">
                💀
              </div>
              <div>
                <h4 className="text-white font-black text-xs mono uppercase tracking-widest italic">Blackarab_Sentinel</h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span className="text-[9px] text-white/70 font-black mono uppercase tracking-widest">Active_Uplink</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-black/20 p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 mono bg-zinc-950/50 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[90%] p-4 rounded-none text-[12px] leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-red-600/10 border border-red-600/30 text-red-500 font-bold' 
                    : 'bg-zinc-900 text-slate-300 border border-zinc-800'
                }`}>
                  {m.role === 'assistant' && <span className="text-red-600 mr-2 font-black">»</span>}
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-red-600/5 p-4 rounded-none text-[10px] text-red-600 flex gap-2 font-black mono uppercase tracking-widest border border-red-600/20">
                  Processing_Neural_Load <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-black border-t border-red-900/20">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="INPUT_INQUIRY..."
                className="flex-1 bg-zinc-950 border border-red-900/30 rounded-none px-5 py-3 text-xs text-red-500 mono focus:outline-none focus:border-red-600 placeholder:text-red-950 uppercase"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-red-600 hover:bg-red-500 text-white px-5 py-3 rounded-none transition-all disabled:opacity-50 flex items-center justify-center shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-none flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all duration-500 hover:scale-105 active:scale-95 skew-x-[-15deg] ${
          isOpen ? 'bg-zinc-900 text-red-600 border border-red-600' : 'bg-red-600 text-white'
        }`}
      >
        <span className="skew-x-[15deg]">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
};

export default AIChat;

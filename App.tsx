
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolCard from './components/ToolCard';
import Workspace from './components/Workspace';
import PayloadLibrary from './components/PayloadLibrary';
import Footer from './components/Footer';
import Login from './components/Login';
import { TOOLS_DATA, TRANSLATIONS } from './constants';
import { ToolCategory, Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'ALL'>('ALL');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(() => localStorage.getItem('operator_name'));

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleLogin = (name: string) => {
    setUserName(name);
    localStorage.setItem('operator_name', name);
  };

  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter(tool => {
      const nameMatch = tool.name.toLowerCase().includes(searchQuery.toLowerCase());
      const descMatch = tool.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSearch = nameMatch || descMatch;
      const matchesCategory = activeCategory === 'ALL' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, lang]);

  if (!userName) {
    return <Login onLogin={handleLogin} t={t} />;
  }

  return (
    <div className="min-h-screen bg-black flex flex-col selection:bg-red-600 selection:text-white font-sans">
      <Header 
        lang={lang} 
        setLang={setLang} 
        onTerminalToggle={() => setIsTerminalOpen(prev => !prev)} 
        t={t}
      />
      
      <main className="flex-grow">
        {/* Terminal Section */}
        <div className="pt-32">
          <Workspace 
            isOpen={isTerminalOpen} 
            setIsOpen={setIsTerminalOpen} 
            lang={lang} 
            t={t}
            userName={userName}
          />
        </div>

        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} t={t} />

        <section className="max-w-7xl mx-auto px-4 mb-24 -mt-12 relative z-20">
          <div className="bg-zinc-950 p-6 border border-zinc-800 flex flex-wrap gap-2 justify-center shadow-2xl">
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`px-6 py-3 text-[10px] font-bold transition-all border uppercase ${
                activeCategory === 'ALL' 
                  ? 'bg-red-600 text-white border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                  : 'bg-black text-zinc-500 border-zinc-800 hover:border-zinc-600'
              }`}
            >
              {t.cat_all}
            </button>
            {Object.values(ToolCategory).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-[10px] font-bold transition-all border uppercase whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-red-600 text-white border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                    : 'bg-black text-zinc-500 border-zinc-800 hover:border-zinc-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section id={lang === 'ar' ? 'الأدوات' : 'Tools'} className="max-w-7xl mx-auto px-6 mb-32">
          <div className="mb-12 flex items-end justify-between border-b border-zinc-900 pb-6">
            <div>
              <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">{t.tools_title}</h3>
              <p className="text-zinc-600 text-xs mt-2 mono uppercase tracking-widest">STATUS: {filteredTools.length} {t.tools_loaded}</p>
            </div>
            <div className="hidden md:block text-[10px] text-zinc-700 font-mono">
              DEVARAB // USER: {userName.toUpperCase()}
            </div>
          </div>

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} lang={lang} t={t} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border border-dashed border-zinc-800 bg-zinc-950/20">
              <h4 className="text-2xl font-bold text-zinc-800 uppercase italic">No_Results_Found</h4>
            </div>
          )}
        </section>

        <PayloadLibrary t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} />
    </div>
  );
};

export default App;

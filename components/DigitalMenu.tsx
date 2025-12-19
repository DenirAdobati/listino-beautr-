
import React, { useState } from 'react';
import { Gender } from '../types';

type SectionKey = 
  | 'visione' 
  | 'migliori-proposte' 
  | 'colorazioni' 
  | 'trattamenti-tricologici' 
  | 'spa' 
  | 'forma' 
  | 'schiariture' 
  | 'stilistico';

interface MenuSection {
  id: SectionKey;
  label: string;
  icon: string;
}

const SECTIONS: MenuSection[] = [
  { id: 'visione', label: 'VISIONE', icon: 'fa-eye' },
  { id: 'migliori-proposte', label: 'MIGLIORI PROPOSTE', icon: 'fa-star' },
  { id: 'colorazioni', label: 'COLORAZIONI', icon: 'fa-palette' },
  { id: 'trattamenti-tricologici', label: 'TRATTAMENTI TRICOLOGICI', icon: 'fa-microscope' },
  { id: 'spa', label: 'SPA', icon: 'fa-water' },
  { id: 'forma', label: 'FORMA', icon: 'fa-wand-magic-sparkles' },
  { id: 'schiariture', label: 'SCHIARITURE', icon: 'fa-sun' },
  { id: 'stilistico', label: 'STILISTICO', icon: 'fa-scissors' },
];

const DigitalMenu: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<Gender>(null);
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);

  if (!selectedGender) {
    return (
      <div className="h-full flex flex-col animate-in fade-in duration-700">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-black tracking-tight mb-2 uppercase">BEAUTRÍ</h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Percorsi di salute per i tuoi capelli</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full h-[500px]">
          <button 
            onClick={() => setSelectedGender('donna')}
            className="bg-black rounded-[3rem] p-12 text-left relative overflow-hidden group shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
          >
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-[#EAB308] rounded-full blur-[90px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 underline decoration-[#EAB308] decoration-2 underline-offset-8">Collezione 2024</span>
              <h2 className="text-6xl font-black text-white tracking-tighter mt-auto">DONNA</h2>
              <div className="w-12 h-1 bg-[#EAB308] mt-6"></div>
            </div>
          </button>

          <button 
            onClick={() => setSelectedGender('uomo')}
            className="bg-white rounded-[3rem] p-12 text-left relative overflow-hidden group shadow-sm border border-white/50 transition-all hover:scale-[1.02] active:scale-95"
          >
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-slate-200 rounded-full blur-[90px] opacity-60"></div>
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 underline decoration-black decoration-2 underline-offset-8">Essential Man</span>
              <h2 className="text-6xl font-black text-black tracking-tighter mt-auto">UOMO</h2>
              <div className="w-12 h-1 bg-black mt-6"></div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (!activeSection) {
    return (
      <div className="h-full animate-in fade-in duration-500">
        <header className="flex items-center justify-between mb-10">
          <button onClick={() => setSelectedGender(null)} className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:bg-black hover:text-white transition-all">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="text-center uppercase font-black text-black tracking-widest text-[11px] bg-white px-8 py-3 rounded-full shadow-sm border border-white/50">
            Percorso <span className="text-[#EAB308] ml-2">{selectedGender}</span>
          </div>
          <div className="w-14"></div>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTIONS.map((section) => (
            <button 
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className="bg-white p-8 rounded-[3rem] shadow-sm border border-transparent hover:border-[#EAB308]/30 transition-all group text-center flex flex-col items-center justify-center min-h-[220px]"
            >
              <div className="w-14 h-14 bg-slate-50 text-[#EAB308] rounded-2xl flex items-center justify-center text-xl mb-4 group-hover:bg-black group-hover:scale-110 transition-all">
                <i className={`fa-solid ${section.icon}`}></i>
              </div>
              <h3 className="text-[11px] font-black text-black tracking-[0.1em] uppercase leading-tight">{section.label}</h3>
              {section.id === 'colorazioni' && (
                <span className="mt-3 px-3 py-1 bg-[#EAB308]/10 text-[#EAB308] text-[8px] font-black rounded-full">COLOR PASS</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full animate-in zoom-in duration-300">
      <header className="flex items-center justify-between mb-10">
        <button onClick={() => setActiveSection(null)} className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-black hover:bg-black hover:text-white transition-all">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h2 className="text-sm font-black text-black uppercase tracking-widest bg-white px-8 py-3 rounded-full shadow-sm">
          {SECTIONS.find(s => s.id === activeSection)?.label}
        </h2>
        <div className="w-14"></div>
      </header>

      <div className="bg-white rounded-[4rem] p-20 flex flex-col items-center justify-center text-center shadow-sm border border-white/50">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-8">
           <i className="fa-solid fa-ellipsis text-[#EAB308] text-2xl"></i>
        </div>
        <h3 className="text-3xl font-black text-black uppercase tracking-tight mb-4 italic">In fase di creazione</h3>
        <p className="text-slate-400 max-w-xs text-sm font-medium leading-relaxed uppercase tracking-widest text-[10px]">
          Stiamo configurando l'eccellenza per la sezione <br/>
          <span className="text-black font-black">{SECTIONS.find(s => s.id === activeSection)?.label}</span>
        </p>
      </div>
    </div>
  );
};

export default DigitalMenu;

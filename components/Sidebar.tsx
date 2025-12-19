
import React, { useState, useEffect } from 'react';
import { Tab } from '../types';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onClose }) => {
  const [memo, setMemo] = useState<string>(() => {
    return localStorage.getItem('beautri_memo') || '';
  });

  useEffect(() => {
    localStorage.setItem('beautri_memo', memo);
  }, [memo]);

  return (
    <div className="w-[320px] bg-white h-screen flex flex-col p-8 shadow-2xl relative border-r border-white/20">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-black transition-colors"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* Logo Beautrì Parrucchieri Perfezionato */}
      <div className="mb-12 mt-4 flex flex-col items-center">
        <div className="w-24 h-24 mb-4">
          <svg viewBox="0 0 100 120" className="w-full h-auto drop-shadow-sm">
            {/* Goccia Dorata */}
            <path d="M50 5 C32 42 18 62 18 82 A32 32 0 0 0 82 82 C82 62 68 42 50 5 Z" fill="none" stroke="#EAB308" strokeWidth="2"/>
            {/* Fiore/Mandala Interno */}
            <g transform="translate(50, 82) scale(0.65)">
                <circle cx="0" cy="0" r="7" fill="#EAB308" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <path 
                        key={angle}
                        d="M0 -8 Q8 -20 0 -32 Q-8 -20 0 -8" 
                        fill="#EAB308" 
                        transform={`rotate(${angle})`}
                    />
                ))}
            </g>
          </svg>
        </div>
        <div className="text-center px-4">
            <h1 className="text-xl font-light tracking-[0.1em] text-slate-800 leading-tight">
                BEAUTRÍ <span className="font-thin">PARRUCCHIERI</span>
            </h1>
            <p className="text-[8px] text-slate-400 font-medium uppercase tracking-[0.18em] mt-2 whitespace-nowrap">
                Percorsi di salute per i tuoi capelli
            </p>
        </div>
      </div>

      <nav className="flex flex-col gap-3 mb-12">
        <button
          onClick={() => setActiveTab(Tab.Home)}
          className={`w-full py-4 rounded-2xl flex items-center gap-4 px-6 transition-all ${
            activeTab === Tab.Home
              ? 'bg-black text-[#EAB308] shadow-lg'
              : 'text-slate-400 hover:bg-slate-50 hover:text-black'
          }`}
        >
          <i className="fa-solid fa-house text-sm"></i>
          <span className="font-bold text-[11px] tracking-[0.2em] uppercase">Home</span>
        </button>
      </nav>

      {/* Sezione NOTE Persistente */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center gap-3 mb-4 px-2">
          <i className="fa-solid fa-pen-nib text-[#EAB308] text-xs"></i>
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">NOTE</span>
        </div>
        
        <div className="flex-1 bg-[#FBFBFB] rounded-3xl p-6 border border-slate-100 flex flex-col shadow-inner">
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Scrivi qui le tue note..."
            className="flex-1 bg-transparent resize-none focus:outline-none text-xs font-medium leading-relaxed text-slate-600 placeholder:text-slate-300 custom-scrollbar"
          />
          <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
            <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Salvataggio automatico</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-50 text-center">
        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Beautrí Parrucchieri</p>
      </div>
    </div>
  );
};

export default Sidebar;

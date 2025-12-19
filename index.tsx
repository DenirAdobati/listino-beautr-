
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Sidebar from './components/Sidebar';
import DigitalMenu from './components/DigitalMenu';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Home);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#F3F0EA] font-['Inter'] relative">
      {/* Tasto Menu Flottante */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-8 left-8 z-40 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-black hover:scale-110 transition-all border border-white/50 active:scale-95"
      >
        <i className="fa-solid fa-bars-staggered text-xl"></i>
      </button>

      {/* Sidebar stile "Amanda" con Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <div className={`fixed top-0 left-0 h-full z-50 transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsSidebarOpen(false);
          }} 
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar p-6">
        <div className="max-w-[1200px] mx-auto h-full pt-16">
          {activeTab === Tab.Home ? <DigitalMenu /> : (
            <div className="h-full flex flex-col items-center justify-center animate-in zoom-in duration-500">
               <div className="bg-white rounded-[3rem] p-12 shadow-sm w-full max-w-2xl text-center">
                  <i className="fa-solid fa-note-sticky text-4xl text-[#FDB90B] mb-6"></i>
                  <h2 className="text-2xl font-black uppercase tracking-widest mb-4">NOTE</h2>
                  <p className="text-slate-400 text-sm mb-8 uppercase tracking-widest font-bold">Usa la barra laterale per gestire le tue note</p>
               </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

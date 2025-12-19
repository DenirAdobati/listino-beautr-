
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 pb-10">
      {/* Header stile Amanda */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-black">Ciao, Operatore!</h1>
          <p className="text-slate-500 font-medium">Ecco la situazione del salone oggi.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Cerca cliente o servizio..."
              className="bg-white rounded-full pl-12 pr-6 py-3.5 w-72 focus:outline-none shadow-sm border border-transparent focus:border-[#FDB90B]/30"
            />
          </div>
          <button className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-xl hover:bg-[#FDB90B] hover:text-black transition-all">
            GESTIONE
          </button>
        </div>
      </header>

      {/* Grid Layout Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Main Results & Progress */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Big Treatment Card with Blobs */}
          <div className="bg-[#D2C8B8] rounded-[3rem] h-[400px] p-10 relative overflow-hidden shadow-sm group">
            {/* Blobs artistici */}
            <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-[#FDB90B] rounded-full blur-[80px] opacity-60"></div>
            <div className="absolute bottom-[5%] left-[30%] w-64 h-64 bg-[#FF6B6B] rounded-full blur-[70px] opacity-40"></div>
            <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-black rounded-full blur-[40px] opacity-30"></div>

            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-black/60 font-bold uppercase tracking-widest text-xs mb-2">Risultati Percorsi</h2>
              <h3 className="text-2xl font-black text-black mb-8">Efficacia Trattamenti Oggi</h3>
              
              <div className="mt-auto flex gap-12">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-black">88%</span>
                  <span className="text-[10px] font-bold text-black/50 uppercase tracking-tighter">Soddisfazione</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-black">2.1k</span>
                  <span className="text-[10px] font-bold text-black/50 uppercase tracking-tighter">Servizi Mese</span>
                </div>
              </div>

              <div className="mt-12 space-y-3 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 rounded-full bg-[#FDB90B]"></div>
                  <span className="text-[10px] font-bold text-black/60 uppercase">Tricologia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 rounded-full bg-[#FF6B6B]"></div>
                  <span className="text-[10px] font-bold text-black/60 uppercase">Colorazioni</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 rounded-full bg-black"></div>
                  <span className="text-[10px] font-bold text-black/60 uppercase">Stilistico</span>
                </div>
              </div>
            </div>
            
            <button className="absolute top-8 right-8 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Steps / Consultations Gauge Card */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
               <h3 className="text-lg font-extrabold mb-2">Consulenze Oggi</h3>
               <p className="text-slate-400 text-xs mb-8">Obiettivo salute capelli</p>
               
               <div className="flex items-center justify-center relative py-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="50" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                    <circle cx="64" cy="64" r="50" stroke="#FDB90B" strokeWidth="8" fill="transparent" 
                      strokeDasharray="314" strokeDashoffset="80" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black">12</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Su 15</span>
                  </div>
               </div>
               
               <button className="w-full mt-6 py-3 border border-slate-100 rounded-2xl flex items-center justify-center gap-3 group hover:bg-black transition-all">
                 <span className="text-xs font-bold text-slate-500 group-hover:text-white">Cambia Target</span>
                 <div className="w-6 h-6 bg-black text-[#FDB90B] rounded-full flex items-center justify-center text-[10px]">
                   <i className="fa-solid fa-pencil"></i>
                 </div>
               </button>
            </div>

            {/* Progress Bar Card */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-lg font-extrabold">Obiettivo Vendita</h3>
                 <span className="text-[#FDB90B] font-black">72%</span>
               </div>
               <p className="text-slate-400 text-xs mb-10">Prodotti domiciliari</p>
               
               <div className="relative h-4 w-full bg-slate-50 rounded-full overflow-hidden mb-4">
                  <div className="absolute top-0 left-0 h-full bg-black rounded-full" style={{ width: '72%' }}></div>
                  <div className="absolute top-0 left-0 h-full w-full flex justify-between px-2 items-center">
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white/20 rounded-full"></div>
                    ))}
                  </div>
               </div>
               
               <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                 <span>€ 0</span>
                 <span>€ 2500</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column - Calendar & Lists */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Dark Calendar Card */}
          <div className="bg-[#1E1E1E] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-extrabold uppercase tracking-widest text-xs">Agenda Salone</h3>
              <div className="flex items-center gap-2 text-[10px] font-bold">
                <span className="text-white/40 uppercase">Giugno</span>
                <i className="fa-solid fa-chevron-down text-[8px]"></i>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-4 text-center mb-8">
               {['L','M','M','G','V','S','D'].map(d => (
                 <span key={d} className="text-[10px] text-white/30 font-black">{d}</span>
               ))}
               {[...Array(30)].map((_, i) => {
                 const day = i + 1;
                 const isSelected = day === 15 || day === 21;
                 const isPast = day < 12;
                 return (
                   <div key={i} className="flex justify-center items-center h-8">
                      <span className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-all ${
                        isSelected ? 'bg-[#FDB90B] text-black scale-110' : 
                        isPast ? 'text-white/20' : 'text-white/70 hover:bg-white/10'
                      }`}>
                        {day}
                      </span>
                   </div>
                 );
               })}
            </div>

            <div className="flex gap-6 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FDB90B]"></div>
                <span className="text-[9px] font-bold text-white/40 uppercase">Oggi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                <span className="text-[9px] font-bold text-white/40 uppercase">Programmati</span>
              </div>
            </div>
          </div>

          {/* Activity List Card */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-extrabold">Ultimi Percorsi</h3>
              <button className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                <i className="fa-solid fa-plus text-xs"></i>
              </button>
            </div>

            <div className="space-y-6">
              {[
                { name: 'Rituale SPA', client: 'M. Rossi', status: 4 },
                { name: 'Ossigeno Pro', client: 'G. Bianchi', status: 6 },
                { name: 'Color Pass', client: 'L. Verdi', status: 3 },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#FDB90B] group-hover:text-black transition-all">
                      <i className="fa-solid fa-user text-xs"></i>
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-black uppercase">{item.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold">{item.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, j) => (
                      <div key={j} className={`w-1 h-3 rounded-full ${j < item.status ? 'bg-[#FF6B6B]' : 'bg-slate-100'}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

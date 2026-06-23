"use client";

import Section from "./Section";

export default function ParadoxSection() {
  return (
    <Section className="bg-ink text-white relative overflow-hidden" id="paradoks">
      <div className="max-w-[700px]">
        <div className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red mb-6 before:content-[''] before:w-8 before:h-[2px] before:bg-red">
          Punkt wyjścia
        </div>
        <h2 className="text-4xl lg:text-[44px] font-black leading-[1.1] tracking-[-0.02em] mb-8">
          Polski sport klubowy nigdy nie miał się tak dobrze — i nigdy nie był tak blisko zapaści.
        </h2>
        
        <div className="text-lg text-muted2 leading-relaxed space-y-6">
          <p>
            Systematycznie bijemy rekordy. Z najnowszego raportu GUS (Kultura fizyczna 2024) 
            wynika, że mamy w Polsce <strong>16 612 klubów sportowych</strong>, w których trenuje 
            rekordowa liczba <strong>1 050 200 dzieci i młodzieży</strong>. Od dekady te liczby 
            rosną bez przerwy, maskując nadciągający kryzys.
          </p>
          <p>
            Dlaczego maskując? Bo te rekordy bijemy w czasie, gdy w 2024 roku urodziło się zaledwie 
            <strong>252 tysiące dzieci</strong>. To niemal dokładnie <strong>trzy razy mniej</strong> 
            niż w szczycie boomu demograficznego lat 80. (ponad 720 tys. rocznie).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="text-4xl font-black mb-2">16 612</div>
          <div className="text-sm font-bold text-muted2 uppercase tracking-wide">Klubów sportowych</div>
          <div className="text-sm text-muted2 mt-2">Historyczne maksimum liczby podmiotów szkolących.</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="text-4xl font-black mb-2">1 050 200</div>
          <div className="text-sm font-bold text-muted2 uppercase tracking-wide">Trenujących do 18 lat</div>
          <div className="text-sm text-muted2 mt-2">Rekordowy udział dzieci w sporcie zorganizowanym.</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-red/30 rounded-2xl p-8 shadow-[inset_0_0_40px_rgba(217,4,41,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red"></div>
          <div className="text-4xl font-black text-red mb-2">252 tys.</div>
          <div className="text-sm font-bold text-white uppercase tracking-wide">Urodzeń w 2024</div>
          <div className="text-sm text-red-light mt-2 opacity-90">Baza, z której kluby będą rekrutować za kilka lat.</div>
        </div>
      </div>
      
      <div className="mt-16 text-2xl md:text-3xl font-extrabold text-center max-w-[800px] mx-auto leading-tight">
        Rekord 2024 roku to <span className="text-red">ostatni szczyt przed zjazdem</span>, a nie nowa norma.
      </div>
    </Section>
  );
}

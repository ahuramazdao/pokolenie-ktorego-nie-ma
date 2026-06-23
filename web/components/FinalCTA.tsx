"use client";

import Section from "./Section";

export default function FinalCTA() {
  return (
    <Section className="bg-ink-deep text-white text-center pb-32" id="cta">
      <div className="max-w-[700px] mx-auto">
        <div className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red mb-6 before:content-[''] before:w-8 before:h-[2px] before:bg-red after:content-[''] after:w-8 after:h-[2px] after:bg-red">
          Czas działać
        </div>
        <h2 className="text-4xl lg:text-[44px] font-black leading-[1.1] tracking-[-0.02em] mb-6 text-white">
          Demografia nie jest wyrokiem. <span className="text-[#ffd0d6]">Bezczynność — tak.</span>
        </h2>
        <p className="text-lg text-muted2 leading-relaxed mb-12">
          Masz przewagę, której nie ma większość klubów w Polsce – wiesz, co nadchodzi. 
          Pobierz raport, zrozum dane i przygotuj swoją organizację, zanim kryzys wymusi 
          nerwowe ruchy.
        </p>

        <div className="bg-white rounded-3xl p-8 lg:p-12 text-left text-ink shadow-[0_30px_80px_rgba(0,0,0,0.5)] mx-auto relative overflow-hidden mb-12 animate-[pop_0.8s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-[12.5px] font-bold tracking-[0.14em] uppercase text-red mb-3 before:content-[''] before:w-[26px] before:h-[2px] before:bg-red before:inline-block">
              Bezpłatny raport PDF
            </span>
            <h3 className="text-2xl font-extrabold text-ink tracking-tight m-0">Pokolenie, którego nie ma</h3>
          </div>
          
          <div id="easytools-inline" className="min-h-[140px] flex items-center justify-center border-2 border-dashed border-border rounded-xl text-muted text-[13px] text-center p-6 bg-bg">
            Tu widget formularza easy.tools (do podpięcia inline)
          </div>
          
          <div className="text-center text-[12px] text-muted/70 mt-6 font-medium">
            🔒 Twoje dane są bezpieczne. Zero spamu.
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[15px] font-bold">
          <div className="flex items-center gap-2">
            <span className="text-red text-lg">✓</span> PDF gotowy do czytania
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red text-lg">✓</span> 100% darmowy
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red text-lg">✓</span> Oparty na danych GUS
          </div>
        </div>
      </div>
    </Section>
  );
}

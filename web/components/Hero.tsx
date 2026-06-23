"use client";

import React from "react";
import ReportCover3D from "./ReportCover3D";
import PolandDotMap from "./PolandDotMap";

export default function Hero() {
  return (
    <header className="relative bg-[radial-gradient(120%_120%_at_80%_0%,#2a3878_0%,var(--color-navy)_38%,var(--color-ink)_78%,var(--color-ink-deep)_100%)] text-white overflow-hidden py-[104px] pb-[76px] min-h-[90vh] flex flex-col justify-center">
      <PolandDotMap />
      
      <div className="relative z-10 max-w-[1120px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff8a98] mb-6 before:content-[''] before:w-6 before:h-[2px] before:bg-[#ff8a98]">
            Pierwszy w Polsce raport: demografia i kluby sportowe
          </div>
          
          <h1 className="font-black text-[clamp(46px,8.4vw,104px)] leading-[0.95] tracking-[-0.035em] max-w-[14ch] mb-6 mx-auto lg:mx-0">
            Pokolenie, <span className="text-red">którego nie ma</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-[600px] mb-10 mx-auto lg:mx-0">
            Rodzi się dziś blisko trzy razy mniej dzieci niż w latach 80. Ten raport pokazuje,
            co spadek liczby dzieci zrobi z Twoim klubem lub akademią - i co możesz
            zrobić, zanim zabraknie ich na treningu.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 lg:mb-20 justify-center lg:justify-start">
            <button
              data-cart
              className="inline-flex items-center gap-2 font-bold text-[15px] bg-red text-white border-none rounded-lg px-8 py-4 cursor-pointer shadow-[0_8px_22px_rgba(217,4,41,0.32)] transition-all hover:bg-red-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(217,4,41,0.42)] w-full sm:w-auto justify-center"
              onClick={() => document.getElementById("cartModal")?.classList.add("open")}
            >
              Pobierz bezpłatny raport (PDF) →
            </button>
            <a href="#wartosc" className="text-sm font-bold text-white/70 hover:text-white transition-colors flex items-center gap-2">
              Zobacz, co znajdziesz w środku ↓
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-left">
            <div>
              <div className="text-2xl font-black mb-1">
                723,6 tys. <span className="text-red">→</span> 238 tys.
              </div>
              <div className="text-xs text-white/60">urodzeń rocznie (1983 → 2025)</div>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-6">
              <div className="text-2xl font-black mb-1">1,099</div>
              <div className="text-xs text-white/60">dzietność na historycznym minimum</div>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-6">
              <div className="text-2xl font-black mb-1 text-[#ff8a98]">-40%+</div>
              <div className="text-xs text-white/60">o tyle skurczy się rocznik 7-latków w 8 lat</div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <ReportCover3D />
        </div>
      </div>
    </header>
  );
}

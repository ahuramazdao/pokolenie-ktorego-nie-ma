import React from "react";

export default function TrustStrip() {
  return (
    <div className="bg-ink-deep text-white py-12 border-y border-white/5 relative z-10">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center text-[13px] md:text-[15px] font-medium tracking-wide text-muted2 mb-10 opacity-80">
          Raport powstał na twardych danych: <span className="text-white font-bold mx-1">GUS</span> · <span className="text-white font-bold mx-1">Eurostat</span> · <span className="text-white font-bold mx-1">OECD</span> · <span className="text-white font-bold mx-1">ONZ</span> · <span className="text-white font-bold mx-1">DOSB</span> · <span className="text-white font-bold mx-1">INSEE</span> · <span className="text-white font-bold mx-1">Rządowa Rada Ludnościowa</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-6 md:pt-0">
            <div className="text-3xl font-black mb-2 text-white">ponad <span className="text-red">700</span></div>
            <div className="text-[14px] text-muted2">klubów współpracujących z autorem</div>
          </div>
          <div className="pt-6 md:pt-0">
            <div className="text-3xl font-black mb-2 text-white">ponad <span className="text-red">29 mln zł</span></div>
            <div className="text-[14px] text-muted2">dotacji pozyskanych dla klubów</div>
          </div>
          <div className="pt-6 md:pt-0">
            <div className="text-3xl font-black mb-2 text-white"><span className="text-red">6</span> rozdziałów</div>
            <div className="text-[14px] text-muted2">twardej analizy zamiast lamentu</div>
          </div>
        </div>
      </div>
    </div>
  );
}

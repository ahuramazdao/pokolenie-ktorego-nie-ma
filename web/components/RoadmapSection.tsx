"use client";

import Section from "./Section";

export default function RoadmapSection() {
  return (
    <Section className="bg-white" id="mapa-drogowa">
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <div className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red mb-6 before:content-[''] before:w-8 before:h-[2px] before:bg-red after:content-[''] after:w-8 after:h-[2px] after:bg-red">
          Mapa drogowa
        </div>
        <h2 className="text-4xl lg:text-[44px] font-black text-ink leading-[1.1] tracking-[-0.02em] mb-6">
          Masz plan, nie tylko diagnozę. Trzy horyzonty, w których możesz działać.
        </h2>
        <p className="text-lg text-muted leading-relaxed">
          Zrozumienie trendu to połowa sukcesu. Druga to odpowiednie przygotowanie klubu. 
          W raporcie dzielimy adaptację na trzy etapy – od szybkich działań bezkosztowych, 
          aż po głęboką ewolucję modelu biznesowego.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div className="bg-white rounded-2xl p-8 border border-border shadow-[0_12px_24px_rgba(19,26,60,0.04)] relative overflow-hidden flex flex-col pt-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D90429] to-[#ff4d6d]"></div>
          <div className="text-xs font-bold uppercase tracking-widest text-red mb-3">Od jutra · 1-2 lata</div>
          <h3 className="text-xl font-bold text-ink mb-4 leading-snug">Stabilizacja i pierwszy ruch</h3>
          <p className="text-[15px] text-muted leading-relaxed flex-grow">
            Policzenie bazy w oparciu o demografię mikro-lokalną, uszczelnienie lejka 
            sprzedażowego i zmiana narracji w rekrutacji. Zrozumiesz, dlaczego dotychczasowe 
            metody naboru przestały działać.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-border shadow-[0_12px_24px_rgba(19,26,60,0.04)] relative overflow-hidden flex flex-col pt-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D90429] to-[#ff4d6d]"></div>
          <div className="text-xs font-bold uppercase tracking-widest text-red mb-3">Za 3-5 lat</div>
          <h3 className="text-xl font-bold text-ink mb-4 leading-snug">Dywersyfikacja</h3>
          <p className="text-[15px] text-muted leading-relaxed flex-grow">
            Wyjście poza wąską grupę docelową. Budowa 3-4 niezależnych strumieni finansowania. 
            Wdrożenie programów retencyjnych – bo utrzymanie zawodnika będzie 3x tańsze i 
            5x łatwiejsze niż pozyskanie nowego.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-border shadow-[0_12px_24px_rgba(19,26,60,0.04)] relative overflow-hidden flex flex-col pt-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D90429] to-[#ff4d6d]"></div>
          <div className="text-xs font-bold uppercase tracking-widest text-red mb-3">Po 2030 · 5+ lat</div>
          <h3 className="text-xl font-bold text-ink mb-4 leading-snug">Nowy model klubu</h3>
          <p className="text-[15px] text-muted leading-relaxed flex-grow">
            Klub wielopokoleniowy. Ewolucja od "akademii dziecięcej" w stronę centrum 
            aktywności lokalnej. Przejęcie luki po starzejącym się społeczeństwie (silver economy) 
            w strukturach sportowych.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg font-bold text-ink mb-8">
          Pierwszy ruch jest darmowy. Wymaga decyzji, nie pieniędzy.
        </p>
        <button
          data-cart
          className="inline-flex items-center justify-center gap-2 font-bold text-sm bg-red text-white border-none rounded-lg px-8 py-4 cursor-pointer shadow-[0_8px_22px_rgba(217,4,41,0.32)] transition-all hover:bg-red-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(217,4,41,0.42)] w-full sm:w-auto"
          onClick={() => document.getElementById("cartModal")?.classList.add("open")}
        >
          Pobierz raport i poznaj całą mapę drogową →
        </button>
      </div>
    </Section>
  );
}

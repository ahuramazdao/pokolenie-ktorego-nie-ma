"use client";

import Section from "./Section";

export default function ValueProposition() {
  const items = [
    "Dlaczego 1,05 mln trenujących w Polsce dzisiaj, to historyczne maksimum, którego już nigdy nie powtórzymy.",
    "Jak skurczy się wielkość roczników (i Twojej grupy docelowej) do 2033 roku — krok po kroku.",
    "Dlaczego rosnące wpisowe do akademii właśnie zderza się ze szklanym sufitem.",
    "Jakie 4 mity o demografii wciąż krążą w polskim sporcie (i dlaczego są niebezpieczne).",
    "Gdzie szukać finansowania, gdy liczba składek członkowskich zacznie systematycznie spadać.",
    "Dlaczego gminy zaczną ciąć dotacje na sport młodzieżowy na rzecz polityki senioralnej.",
    "Jak przeprowadzić audyt demograficzny własnego klubu na lokalnym rynku.",
    "Mapa drogowa: 3 horyzonty działań adaptacyjnych (co robić dzisiaj, za 3 i za 5 lat)."
  ];

  return (
    <Section className="bg-[#fcfdfe] relative border-y border-border" id="wartosc">
      <div className="absolute inset-0 bg-[radial-gradient(#d8e0e5_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      
      <div className="relative z-10 max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red mb-6 before:content-[''] before:w-8 before:h-[2px] before:bg-red after:content-[''] after:w-8 after:h-[2px] after:bg-red">
            Co dostajesz w środku
          </div>
          <h2 className="text-4xl lg:text-[44px] font-black text-ink leading-[1.1] tracking-[-0.02em]">
            38 stron, które zamieniają demografię w plan działania dla Twojego klubu.
          </h2>
        </div>

        <div className="bg-white rounded-[24px] p-8 md:p-12 border border-border shadow-[0_20px_40px_rgba(19,26,60,0.06)] mb-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 m-0 p-0 list-none">
            {items.map((text, i) => (
              <li key={i} className="flex gap-4 text-[15px] text-ink leading-relaxed">
                <span className="shrink-0 w-6 h-6 rounded-full bg-red text-white flex items-center justify-center font-bold text-sm mt-0.5 shadow-[0_4px_10px_rgba(217,4,41,0.3)]">
                  ✓
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["6 rozdziałów", "38 stron analizy", "8 wykresów", "Plik PDF zoptymalizowany pod mobile"].map((badge, i) => (
            <div key={i} className="px-5 py-2.5 bg-bg2 rounded-full text-sm font-bold text-ink tracking-wide">
              {badge}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            data-cart
            className="inline-flex items-center justify-center gap-2 font-bold text-sm bg-red text-white border-none rounded-lg px-8 py-4 cursor-pointer shadow-[0_8px_22px_rgba(217,4,41,0.32)] transition-all hover:bg-red-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(217,4,41,0.42)] w-full sm:w-auto text-[15px]"
            onClick={() => document.getElementById("cartModal")?.classList.add("open")}
          >
            Pobierz bezpłatny raport PDF →
          </button>
        </div>
      </div>
    </Section>
  );
}

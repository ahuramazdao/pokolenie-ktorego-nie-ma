"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqData = [
  {
    q: "Czy raport jest naprawdę darmowy?",
    a: "Tak. Pobranie jest bezpłatne. Podajesz tylko adres e-mail, na który wyślemy Ci link do pliku. Zostaniesz również zapisany do naszego newslettera, z którego możesz się wypisać w każdej chwili."
  },
  {
    q: "W jakim formacie dostanę raport?",
    a: "Raport otrzymasz w wygodnym formacie PDF, sformatowanym w formacie A4. Jest zoptymalizowany zarówno do czytania na ekranie komputera, jak i przeglądania na urządzeniach mobilnych."
  },
  {
    q: "Jak szybko dostanę plik?",
    a: "Od razu po zapisie otrzymasz e-mail z linkiem do pobrania. Jeśli wiadomość nie dotrze w ciągu kilku minut, sprawdź folder SPAM lub Oferty."
  },
  {
    q: "Dla kogo jest ten raport?",
    a: "Dla prezesów, działaczy i menedżerów klubów sportowych oraz akademii. Niezależnie od dyscypliny i wielkości ośrodka, trendy demograficzne uderzą we wszystkich."
  },
  {
    q: "Skąd pochodzą dane?",
    a: "Wyłącznie ze sprawdzonych źródeł publicznych: Głównego Urzędu Statystycznego (GUS), Eurostatu, OECD oraz raportów Rządowej Rady Ludnościowej. Prognozy opierają się na oficjalnych wariantach przewidywań demograficznych."
  },
  {
    q: "Czy mogę udostępniać raport dalej?",
    a: "Tak, zachęcamy do dzielenia się raportem w środowisku sportowym, pod warunkiem zachowania go w niezmienionej formie i podania źródła (ProgramyDlaKlubow.pl)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto space-y-3">
      {faqData.map((item, i) => (
        <div key={i} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-200">
          <button
            className="w-full flex items-center justify-between p-5 lg:p-6 text-left bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red"
            onClick={() => toggle(i)}
          >
            <span className="font-bold text-ink text-[17px] pr-4">{item.q}</span>
            <span className="shrink-0 w-8 h-8 rounded-full bg-bg2 text-muted flex items-center justify-center text-xl transition-colors duration-200 hover:bg-[#e4e9ed] hover:text-ink">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-5 lg:p-6 pt-0 text-[15px] text-muted leading-relaxed">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

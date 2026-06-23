import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b102c] text-muted py-16 lg:py-20 border-t border-white/10 mt-auto">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <div className="lg:col-span-2">
          <Image src="/logo.svg" alt="ProgramyDlaKlubow.pl" width={180} height={40} className="mb-6 opacity-90 brightness-0 invert" style={{ width: "auto", height: "auto" }} />
          <p className="text-[15px] leading-relaxed max-w-[400px]">
            Edukujemy, wyposażamy w narzędzia i wspieramy zarządzających polskim sportem. Tworzymy wiedzę, która pomaga klubom rosnąć niezależnie od warunków zewnętrznych.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Kontakt</h4>
          <ul className="space-y-3 text-[14px]">
            <li><a href="mailto:kontakt@programydlaklubow.pl" className="hover:text-white transition-colors">kontakt@programydlaklubow.pl</a></li>
            <li><a href="https://programydlaklubow.pl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">programydlaklubow.pl</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Nota</h4>
          <p className="text-[13px] leading-relaxed text-muted/80">
            Raport "Pokolenie, którego nie ma" z czerwca 2026 r.<br/><br/>
            Jak cytować:<br/>
            Bąk P. (2026), <em>Pokolenie, którego nie ma</em>, ProgramyDlaKlubow.pl
          </p>
        </div>

      </div>

      <div className="max-w-[1120px] mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-muted/70">
        <div>
          © 2026 ProgramyDlaKlubow.pl. Wszystkie prawa zastrzeżone.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Regulamin</a>
          <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
        </div>
      </div>
    </footer>
  );
}

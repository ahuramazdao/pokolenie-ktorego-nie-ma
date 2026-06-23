"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-[110] bg-ink-deep/95 backdrop-blur-md border-t border-white/10 transition-transform duration-300 ease-out ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 py-3 flex items-center justify-between gap-4 max-sm:justify-center">
        <div className="text-white font-semibold text-[15px] max-sm:hidden">
          Za 8 lat do akademii zapuka <span className="text-[#ffd0d6] font-extrabold">o ponad 40% mniej dzieci.</span>
        </div>
        <button
          data-cart
          className="inline-flex items-center gap-2 font-bold text-sm bg-red text-white border-none rounded-lg px-5 py-3 cursor-pointer shadow-[0_8px_22px_rgba(217,4,41,0.32)] transition-all hover:bg-red-dark hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(217,4,41,0.42)] group"
          onClick={() => document.getElementById("cartModal")?.classList.add("open")}
        >
          Pobierz bezpłatny raport <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
}

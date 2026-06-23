"use client";

import { useEffect } from "react";

export default function CartModal() {
  useEffect(() => {
    const modal = document.getElementById("cartModal");
    if (!modal) return;

    const openModal = () => {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    };

    // This makes sure buttons inside React component work if we use ID logic,
    // though typically we'd manage state inside React. We'll use a hybrid approach
    // here to match the HTML structure closely.
    const setupListeners = () => {
      document.querySelectorAll("[data-cart]").forEach((b) => {
        b.addEventListener("click", openModal);
      });
    };

    setupListeners();
    // Since React might re-render or add buttons later, a global state/context would be better,
    // but we can stick to this simpler model for now, ensuring all data-cart buttons are ready.
    // In React, we'll attach onClick directly to buttons instead.

    const closeBtn = document.getElementById("modalClose");
    closeBtn?.addEventListener("click", closeModal);

    const handleOutsideClick = (e: MouseEvent) => {
      if (e.target === modal) closeModal();
    };
    modal.addEventListener("click", handleOutsideClick);

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.querySelectorAll("[data-cart]").forEach((b) => {
        b.removeEventListener("click", openModal);
      });
      closeBtn?.removeEventListener("click", closeModal);
      modal.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div
      id="cartModal"
      className="fixed inset-0 z-[200] hidden items-center justify-center p-5 bg-[#0c1230]/70 backdrop-blur-sm [&.open]:flex"
    >
      <div className="bg-white rounded-3xl max-w-[500px] w-full p-8 relative shadow-[0_30px_80px_rgba(0,0,0,0.4)] animate-[pop_0.28s_cubic-bezier(0.2,0.8,0.2,1)]">
        <button
          id="modalClose"
          className="absolute right-5 top-4 bg-transparent border-none text-[26px] text-muted cursor-pointer leading-none hover:text-ink transition-colors"
          aria-label="Zamknij"
        >
          ×
        </button>
        <span className="inline-flex items-center gap-2 text-[12.5px] font-bold tracking-[0.14em] uppercase text-red mb-3.5 before:content-[''] before:w-[26px] before:h-[2px] before:bg-red before:inline-block">
          Bezpłatny raport PDF
        </span>
        <h3 className="text-2xl font-extrabold text-ink tracking-tight">
          Pokolenie, którego nie ma
        </h3>
        <p className="text-[15px] text-muted mt-2.5">
          Podaj e-mail, a raport trafi do Ciebie automatycznie. Pobranie obsługuje easy.tools.
        </p>

        {/* MIEJSCE NA POPUP EASY.TOOLS */}
        <div
          id="easytools-popup"
          className="mt-5 min-h-[90px] flex items-center justify-center border-2 border-dashed border-border rounded-xl text-muted text-[13px] text-center p-4"
        >
          Tu popup koszyka easy.tools (do podpięcia)
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pop {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: none; }
        }
      `}} />
    </div>
  );
}

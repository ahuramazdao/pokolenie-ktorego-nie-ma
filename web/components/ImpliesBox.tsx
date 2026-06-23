import React from "react";

interface ImpliesBoxProps {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}

export default function ImpliesBox({ title, children, dark = false }: ImpliesBoxProps) {
  return (
    <div
      className={`border-l-[5px] border-l-red rounded-r-xl p-6 lg:p-8 mt-10 transition-colors ${
        dark ? "bg-white/5" : "bg-red-light/50"
      }`}
    >
      <div className="font-bold text-[13px] tracking-[0.12em] uppercase text-red mb-3">
        {title}
      </div>
      <div className={`text-[17px] leading-relaxed font-medium ${dark ? "text-white" : "text-ink"}`}>
        {children}
      </div>
    </div>
  );
}

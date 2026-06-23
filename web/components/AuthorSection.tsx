"use client";

import Section from "./Section";

export default function AuthorSection() {
  return (
    <Section className="bg-white" id="autor">
      <div className="max-w-[900px] mx-auto">
        <div className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red mb-6 before:content-[''] before:w-8 before:h-[2px] before:bg-red">
          O autorze
        </div>
        <h2 className="text-4xl lg:text-[44px] font-black text-ink leading-[1.1] tracking-[-0.02em] mb-12">
          Kto napisał ten raport
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-[200px] h-[240px] shrink-0 rounded-2xl overflow-hidden bg-bg2 relative shadow-[0_15px_35px_rgba(19,26,60,0.1)] flex items-center justify-center">
            {/* W prawdziwym projekcie tu byłby Image src="/pb.jpg" */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 to-transparent"></div>
            <span className="text-5xl font-black text-muted opacity-30 absolute">PB</span>
          </div>
          
          <div className="flex-1">
            <h3 className="text-[28px] font-black text-ink mb-2">Piotr Bąk</h3>
            <div className="text-red font-bold text-[15px] mb-6">ProgramyDlaKlubow.pl</div>
            
            <div className="space-y-4 text-[15px] text-muted leading-relaxed">
              <p>
                Od ponad dekady doradza i szkoli zarządy polskich klubów sportowych w zakresie 
                zarządzania, finansowania i strategii. Autor największego w Polsce portalu z wiedzą 
                dla działaczy sportowych – ProgramyDlaKlubow.pl.
              </p>
              <p>
                Współpracował z ponad 700 organizacjami sportowymi. Systemy i procesy wdrożone z jego 
                udziałem pomogły klubom pozyskać łącznie ponad 29 mln złotych z zewnętrznych źródeł finansowania.
              </p>
            </div>
            
            <blockquote className="mt-8 pl-6 border-l-[3px] border-red text-ink font-bold text-lg leading-relaxed italic">
              "Kluby, które jako pierwsze zrozumieją demografię, przestaną ścigać się na wysokość składki. Zamiast tego, zbudują model odporny na kurczący się rynek."
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function PlatformContext() {
    const navModules = [
      { name: "Dialog Designer", active: false },
      { name: "Conversations", active: false },
      { name: "Bot Reactions", active: false },
      { name: "Revision Tool", active: true },
    ]
  
    const dataModules = [
      { name: "Dialog Designer", desc: "dialogue logic & flows" },
      { name: "Conversations", desc: "ML model improvements & conversation review" },
      { name: "Bot Reactions", desc: "bot response editing (NLG)" },
    ]
  
    return (
      <section className="py-24 border-t border-[#E0E0DC]">
        <div className="max-w-4xl mx-auto px-8">
          <p className="font-mono text-xs text-[#5A5A5A] tracking-widest uppercase mb-12">
            // context
          </p>
  
          <p className="font-[family-name:var(--font-sans)] text-lg text-[#0D0D0D] leading-relaxed mb-16 max-w-2xl">
            Revision Tool is one module within Lekta — an enterprise platform for
            building and managing voice and text bots used in banking and telco.
            Changes made across all platform modules flow into Revision Tool as a
            draft — visible to the user only after training is complete.
          </p>
  
          <p className="font-mono text-xs text-[#5A5A5A] mb-3">
            // platform navigation
          </p>
          <div className="flex flex-wrap gap-0 mb-16 border border-[#E0E0DC]">
            {navModules.map((module) => (
              <div
                key={module.name}
                className={`px-6 py-3 font-mono text-xs border-r border-[#E0E0DC] last:border-r-0 ${
                  module.active ? "bg-[#1B2B4B] text-white" : "text-[#5A5A5A]"
                }`}
              >
                {module.name}
              </div>
            ))}
          </div>
  
          <p className="font-mono text-xs text-[#5A5A5A] mb-6">
            // data flow
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col gap-3 flex-1 w-full">
              {dataModules.map((module) => (
                <div key={module.name} className="px-5 py-3 border border-[#E0E0DC]">
                  <p className="font-mono text-xs text-[#0D0D0D]">{module.name}</p>
                  <p className="font-mono text-xs text-[#5A5A5A] mt-0.5">{module.desc}</p>
                </div>
              ))}
            </div>
  
            <div className="flex flex-col items-center gap-1 px-6">
              <div className="w-px h-16 md:h-24 bg-[#1B2B4B] opacity-30 hidden md:block" />
              <span className="font-mono text-xs text-[#1B2B4B] rotate-90 md:rotate-0">→</span>
              <div className="w-px h-16 md:h-24 bg-[#1B2B4B] opacity-30 hidden md:block" />
            </div>
  
            <div className="flex-1 w-full">
              <div className="px-6 py-8 bg-[#1B2B4B] text-white h-full flex flex-col justify-center">
                <p className="font-mono text-xs text-[#A0B0C8] mb-2">// destination</p>
                <p className="font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                  Revision Tool
                </p>
                <p className="font-mono text-xs text-[#A0B0C8] leading-relaxed">
                  All changes flow here as a draft revision — visible to the user only after training is complete.
                </p>
              </div>
            </div>
          </div>
  
          <p className="font-mono text-xs text-[#5A5A5A] mt-8">
            // built from scratch · previously: manual developer intervention
          </p>
        </div>
      </section>
    )
  }
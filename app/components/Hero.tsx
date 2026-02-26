export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-8 w-full">
        <p className="font-mono text-xs text-[#5A5A5A] tracking-widest uppercase mb-6">
          // case study · lekta ai platform
        </p>

        <h1 className="font-[family-name:var(--font-syne)] text-6xl md:text-8xl font-bold text-[#0D0D0D] leading-none mb-4">
          REVISION<br />TOOL
        </h1>

        <p className="font-mono text-sm text-[#5A5A5A] mb-10">
          Grzegorz Ciemięga · Senior Product Designer
        </p>

        <p className="font-[family-name:var(--font-sans)] text-xl md:text-2xl text-[#0D0D0D] max-w-xl leading-relaxed mb-12" style={{ fontStyle: 'italic' }}>
          "I spent years designing the AI.<br />
          This is how I learned to design with it."
        </p>

        <div className="flex gap-3">
          <span className="font-mono text-xs border border-[#1B2B4B] text-[#1B2B4B] px-3 py-1.5">
            [AI-augmented design]
          </span>
          <span className="font-mono text-xs border border-[#C0C0BC] text-[#5A5A5A] px-3 py-1.5">
            [Lekta AI Platform]
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-[#5A5A5A]">scroll</span>
        <div className="w-px h-12 bg-[#1B2B4B] opacity-30 animate-pulse" />
      </div>
    </section>
  )
}
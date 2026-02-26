import Lightbox from "./Lightbox"

export default function KeyInsight() {
  return (
    <section className="bg-[#1B2B4B] py-24">
      <div className="max-w-4xl mx-auto px-8">
        <p className="font-mono text-xs text-[#A0B0C8] tracking-widest uppercase mb-12">
          // key insight
        </p>

        <blockquote className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl text-white leading-tight mb-20 max-w-3xl">
          "The more I understood the backend,
          <br />
          the less I showed of it."
        </blockquote>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-mono text-xs text-[#A0B0C8] mb-4">// before</p>
            <Lightbox
              images={[
                { src: '/rev_tool_flow.png', alt: 'Early flow diagram', label: '// flow diagram' },
                { src: '/rev_tool_insights.png', alt: 'Insights mapping', label: '// insights mapping' },
              ]}
            />
            <p className="font-mono text-xs text-[#A0B0C8] mt-3 opacity-60">
              Flow diagram · insights · early logic breakdown
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-[#A0B0C8] mb-4">// after</p>
            <Lightbox
              images={[
                { src: '/rev_tool_light.png', alt: 'Final UI — Revision Tool', label: '// final UI' },
              ]}
            />
            <p className="font-mono text-xs text-[#A0B0C8] mt-3 opacity-60">
              One action · clear status · minimal cognitive load
            </p>
          </div>
        </div>

        <p className="font-mono text-xs text-[#A0B0C8] mt-12 opacity-40">
          // same logic. different cognitive load.
        </p>
      </div>
    </section>
  )
}
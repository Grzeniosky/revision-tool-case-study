import ThinkingLayer from "./ThinkingLayer";

export default function Reflections() {
  return (
    <section className="py-24 border-t border-[#E0E0DC]">
      <div className="max-w-4xl mx-auto px-8">
        <p className="font-mono text-xs text-[#5A5A5A] tracking-widest uppercase mb-12">
          // reflections
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-[family-name:var(--font-syne)] text-xl text-[#0D0D0D] mb-6">
              Limitations of AI in this process
            </p>
            <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed mb-4">
              AI was a thinking partner, not a shortcut. It couldn&apos;t replace
              the hours of technical conversation with developers — it could only
              help verify whether I had understood those conversations correctly.
            </p>
            <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed mb-6">
              The risk of using AI as domain expert is over-trusting outputs.
              Every hypothesis still needed human validation — AI accelerated
              my thinking, it didn&apos;t replace it.
            </p>
            <p className="font-mono text-xs text-[#1B2B4B] border-t border-[#E0E0DC] pt-4 leading-relaxed">
              // what took weeks of back-and-forth with devs took hours to verify.
              the speed was in validation, not in replacing the conversations.
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-syne)] text-xl text-[#0D0D0D] mb-6">
              What{" "}
              <ThinkingLayer label="post-MVP" model="Post-MVP">
                Removed from v1 to ensure stability: · Revision diff view —
                what changed between versions in NLU / NLG / Dialog · Configurable
                environments per client (v1: hardcoded Dev / Staging / Production)
                · Floating freeze trigger accessible from anywhere in the platform.
                These were conscious cuts, not oversights.
              </ThinkingLayer>{" "}
              could look like
            </p>
            <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed mb-4">
              The MVP was intentionally constrained. Revision diff analysis —
              showing exactly what changed between NLU, NLG, and Dialog versions
              — was the most requested next feature.
            </p>
            <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed mb-6">
              Environments were hardcoded per client in v1. Making them
              configurable was the clear next step — both were conscious cuts
              to ship a stable first version.
            </p>
            <p className="font-mono text-xs text-[#1B2B4B] border-t border-[#E0E0DC] pt-4 leading-relaxed">
              // a stable v1 that ships is worth more than a perfect v1 that doesn&apos;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
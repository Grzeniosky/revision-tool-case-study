import ThinkingLayer from "./ThinkingLayer";
import IaDiagram from "./IaDiagram";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Understanding the system",
      content: (
        <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed">
          I spent many hours in technical conversations with fullstack
          developers to understand how the revision system worked under the
          hood — what triggered a freeze, how training connected to model
          versions, how environments mapped to clients. Then I used{" "}
          <ThinkingLayer label="AI as Domain Expert" model="Domain Expert">
            I wasn&apos;t replacing developer conversations — I was adding a
            second verification layer. Prompt approach: &quot;I understood X
            this way. Does this mental model hold for a system where Y and Z
            are true?&quot; Every hypothesis still needed human validation.
          </ThinkingLayer>{" "}
          to validate whether I had correctly translated that backend logic
          into design thinking.
        </p>
      ),
    },
    {
      number: "02",
      title: "Mapping dependencies",
      content: (
        <>
          <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed mb-6">
            Using{" "}
            <ThinkingLayer label="AI as System Thinker" model="System Thinker">
              Asked AI to map states, dependencies, edge cases, and failure
              modes across the full freeze → save → train → assign flow.
              Output used as hypothesis — validated with the dev team, not
              taken as truth.
            </ThinkingLayer>{" "}
            I mapped the full state diagram: what triggers freeze, what happens
            during training, what blocks assignment, what the user sees if
            training fails.
          </p>
          <IaDiagram />
        </>
      ),
    },
    {
      number: "03",
      title: "Eliminating complexity",
      content: (
        <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed">
          I sketched early UI in v0 with all backend steps visible — progress
          indicators, state labels, multi-step flows. The result was
          immediately clear: exposing backend states created cognitive
          overload. I then used{" "}
          <ThinkingLayer label="AI — Explain Like I'm 10" model="Simplification Mode">
            Test: &quot;Explain what this button does to someone who has
            never seen a machine learning pipeline.&quot; If the answer
            required more than one sentence — the label needed to change.
            This shaped every status message and button copy in the final UI.
          </ThinkingLayer>{" "}
          to stress-test every label, button, and status message.
        </p>
      ),
    },
    {
      number: "04",
      title: "Stress-testing before handoff",
      content: (
        <p className="font-[family-name:var(--font-sans)] text-base text-[#5A5A5A] leading-relaxed">
          Before handing off to developers, I used{" "}
          <ThinkingLayer label="AI as Critic / Red Team" model="Red Team">
            Key edge cases surfaced: · Failed training → block assignment or
            warn? · Revision already assigned → what changes? · No real-time
            progress → what does the user see? These directly shaped the
            status feedback design.
          </ThinkingLayer>{" "}
          to surface edge cases: what if training fails? Can a failed
          revision be assigned to production? What does the user see during
          a long training process with no real-time backend progress?
        </p>
      ),
    },
  ]

  return (
    <section className="py-24 border-t border-[#E0E0DC]">
      <div className="max-w-4xl mx-auto px-8">
        <p className="font-mono text-xs text-[#5A5A5A] tracking-widest uppercase mb-12">
          // process
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-4 bottom-4 w-px bg-[#E0E0DC]" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-8 relative">
                {/* Number marker */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 bg-[#1B2B4B] font-mono text-xs text-white flex items-center justify-center">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 pb-16 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                  <div className="bg-[#F8F8F6] border border-[#E0E0DC] p-6 mb-0">
                    <p className="font-[family-name:var(--font-syne)] text-lg text-[#0D0D0D] mb-4">
                      {step.title}
                    </p>
                    {step.content}
                  </div>

                  {/* Connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="flex items-center gap-2 py-3 pl-6">
                      <div className="w-px h-6 bg-[#1B2B4B] opacity-30" />
                      <span className="font-mono text-xs text-[#C0C0BC]">↓</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
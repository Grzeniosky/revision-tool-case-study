export default function Problem() {
    return (
      <section className="py-24 border-t border-[#E0E0DC]">
        <div className="max-w-4xl mx-auto px-8">
          <p className="font-mono text-xs text-[#5A5A5A] tracking-widest uppercase mb-12">
            // problem
          </p>
  
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-[family-name:var(--font-sans)] text-lg text-[#0D0D0D] leading-relaxed mb-6">
                Teams responsible for implementing bots had no way to independently
                test and publish new model versions. Every change required developer
                support — creating delays, version mismatches, and bottlenecks.
              </p>
              <p className="font-[family-name:var(--font-sans)] text-lg text-[#0D0D0D] leading-relaxed">
                The core challenge: a multi-step ML process had to become something
                a non-technical conversation designer could operate without
                documentation or developer involvement.
              </p>
            </div>
  
            <div className="border-l-4 border-[#1B2B4B] bg-[#F0F2F7] px-8 py-8">
              <p className="font-mono text-xs text-[#5A5A5A] mb-4">
                // core tension
              </p>
              <p className="font-[family-name:var(--font-syne)] text-2xl text-[#1B2B4B] leading-snug mb-6">
                The backend had 12+ states.
              </p>
              <p className="font-[family-name:var(--font-syne)] text-2xl text-[#0D0D0D] leading-snug">
                The user needed to see 1 action.
              </p>
  
              <div className="mt-8 flex items-center gap-2 flex-wrap">
                {["freeze", "save", "train", "assign"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="font-mono text-xs border border-[#1B2B4B] text-[#1B2B4B] px-3 py-1.5">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="font-mono text-xs text-[#C0C0BC]">→</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="font-mono text-xs text-[#5A5A5A] mt-3">
                // what happens under the hood
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
export default function Outcome() {
  const cards = [
    {
      number: "01",
      title: "Ownership without dev dependency",
      body: "Each client had a designated person responsible for releases. Depending on the project phase — more frequent at the start, down to once per sprint in mature projects. All without developer involvement.",
      impact: "Releases shifted from a developer task to a product ritual.",
    },
    {
      number: "02",
      title: "Honest UI under ML constraints",
      body: "Training time was unpredictable and grew with model complexity — a progress bar would have lied. Instead: no false indicator, a simple end-state message, and a new revision appearing in the list as the confirmation.",
      impact: "Users stopped asking 'is it done?' — the list answered for them.",
    },
    {
      number: "03",
      title: "Consistent system, unique module",
      body: "Revision Tool was the only module with custom components driven by its unique data model. Typography, color, and information patterns stayed consistent with the platform — but the layout and interaction logic were built from scratch.",
      impact: "A new interaction pattern that didn't break the system it lived in.",
    },
  ]

  return (
    <section className="py-24 border-t border-[#E0E0DC]">
      <div className="max-w-4xl mx-auto px-8">
        <p className="font-mono text-xs text-[#5A5A5A] tracking-widest uppercase mb-12">
          // outcome
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.number} className="border border-[#E0E0DC] p-8 flex flex-col">
              <p className="font-mono text-xs text-[#C0C0BC] mb-6">
                {card.number}
              </p>
              <p className="font-[family-name:var(--font-syne)] text-lg text-[#0D0D0D] mb-4">
                {card.title}
              </p>
              <p className="font-[family-name:var(--font-sans)] text-sm text-[#5A5A5A] leading-relaxed mb-6 flex-1">
                {card.body}
              </p>
              <p className="font-mono text-xs text-[#1B2B4B] border-t border-[#E0E0DC] pt-4 leading-relaxed">
                // {card.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
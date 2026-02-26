export default function Toolstack() {
  const tools = [
    {
      name: "Figma",
      role: "High-fi designs · design system · handoff documentation",
      tag: "delivery",
      tagColor: "#22C55E",
      tagBg: "#F0FDF4",
    },
    {
      name: "FigJam",
      role: "Information architecture mapping · flow diagrams",
      tag: "discovery",
      tagColor: "#1B2B4B",
      tagBg: "#F0F2F7",
    },
    {
      name: "Notion",
      role: "Dev conversation notes · AI-enhanced summaries",
      tag: "documentation",
      tagColor: "#5A5A5A",
      tagBg: "#F4F4F2",
    },
    {
      name: "v0",
      role: "Layout sketching · rapid UI validation · edge case detection",
      tag: "ideation",
      tagColor: "#9333EA",
      tagBg: "#FAF0FF",
    },
    {
      name: "GPT",
      role: "Domain Expert · System Thinker · Simplification · Red Team",
      tag: "AI augmentation",
      tagColor: "#E8632A",
      tagBg: "#FFF0E8",
    },
  ]

  return (
    <section className="py-24 border-t border-[#E0E0DC]">
      <div className="max-w-4xl mx-auto px-8">
        <p className="font-mono text-xs text-[#5A5A5A] tracking-widest uppercase mb-12">
          // toolstack
        </p>

        <div className="flex flex-col gap-0">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_auto] items-center gap-4 md:gap-8 py-5 ${
                i < tools.length - 1 ? "border-b border-[#E0E0DC]" : ""
              }`}
            >
              <span className="font-mono text-sm text-[#0D0D0D] font-medium">
                {tool.name}
              </span>
              <span className="font-[family-name:var(--font-sans)] text-sm text-[#5A5A5A]">
                {tool.role}
              </span>
              <span
                className="font-mono text-xs px-2 py-0.5 whitespace-nowrap"
                style={{
                  color: tool.tagColor,
                  backgroundColor: tool.tagBg,
                }}
              >
                {tool.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
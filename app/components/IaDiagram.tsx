export default function IaDiagram() {
    const box = {
      border: "1px solid #E0E0DC",
      padding: "8px 12px",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "#0D0D0D",
      backgroundColor: "#FFFFFF",
    }
  
    const label = {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "#5A5A5A",
      marginBottom: 6,
    }
  
    const arrow = {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "#C0C0BC",
      textAlign: "center" as const,
      padding: "4px 0",
    }
  
    const pill = (color: string) => ({
      display: "inline-block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: color,
      marginRight: 6,
    })
  
    return (
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>
        <p style={label}>// data flow</p>
  
        {/* Sources */}
        <div style={{ display: "flex", gap: 8, marginBottom: 4, flexWrap: "wrap" as const }}>
          {["Dialog Designer", "Conversations", "Bot Reactions"].map((s) => (
            <div key={s} style={{ ...box, color: "#5A5A5A", fontSize: 10 }}>{s}</div>
          ))}
        </div>
  
        <div style={arrow}>↓ changes flow into</div>
  
        {/* Freeze */}
        <div style={{ ...box, backgroundColor: "#1B2B4B", color: "#FFFFFF", border: "none", display: "inline-block", marginBottom: 4 }}>
          Freeze Changes
        </div>
  
        <div style={arrow}>↓ creates</div>
  
        {/* Revision */}
        <div style={{ ...box, borderColor: "#1B2B4B", marginBottom: 4 }}>
          <div style={{ marginBottom: 6 }}>Draft Revision</div>
          <div style={{ fontSize: 10, color: "#5A5A5A" }}>training starts automatically</div>
        </div>
  
        <div style={arrow}>↓ training result</div>
  
        {/* States */}
        <div style={{ display: "flex", gap: 8, marginBottom: 4, flexWrap: "wrap" as const }}>
          <div style={{ ...box, borderColor: "#22C55E" }}>
            <span style={pill("#22C55E")} />
            success — revision ID copyable
          </div>
          <div style={{ ...box, borderColor: "#E8632A" }}>
            <span style={pill("#E8632A")} />
            error — check backend logs
          </div>
        </div>
  
        <div style={arrow}>↓ assign to app</div>
  
        {/* Apps */}
        <div style={{ ...box, borderColor: "#1B2B4B", marginBottom: 4 }}>
          <div style={{ marginBottom: 8 }}>App</div>
          <div style={{ fontSize: 10, color: "#5A5A5A", marginBottom: 6 }}>
            current revision: <span style={{ color: "#22C55E" }}>rev_20240312_143A</span>
          </div>
          <div style={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" as const }}>
            <div style={{ ...box, padding: "4px 8px", borderColor: "#1B2B4B", color: "#1B2B4B", fontSize: 10 }}>Change</div>
            <div style={{ ...box, padding: "4px 8px", color: "#C0C0BC", fontSize: 10 }}>revision id…</div>
            <div style={{ ...box, padding: "4px 8px", backgroundColor: "#1B2B4B", color: "#FFFFFF", border: "none", fontSize: 10 }}>Save</div>
          </div>
        </div>
  
        <div style={arrow}>↓ deployed to</div>
  
        {/* Environments */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
          {["Production", "Staging", "Development"].map((env) => (
            <div key={env} style={{ ...box, fontSize: 10 }}>
              <div style={{ color: "#1B2B4B", fontWeight: "bold", marginBottom: 2 }}>{env}</div>
              <div style={{ color: "#5A5A5A" }}>app_telco_{env.toLowerCase().slice(0, 4)}_01</div>
            </div>
          ))}
        </div>
  
        <p style={{ ...label, marginTop: 16, fontStyle: "italic", color: "#1B2B4B" }}>
          // one button. all backend complexity hidden.
        </p>
      </div>
    )
  }
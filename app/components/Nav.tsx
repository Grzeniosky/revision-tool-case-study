"use client";
import React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const sections = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "process", label: "Process" },
  { id: "insight", label: "Key Insight" },
  { id: "outcome", label: "Outcome" },
  { id: "reflections", label: "Reflections" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
      const current = sections.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {    const el = document.getElementById(id);
    if (!el) return;
    const top = window.scrollY + el.getBoundingClientRect().top - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setSheetOpen(false);
  };

  const activeLabel = sections.find((s) => s.id === active)?.label ?? "Menu";

  const pillStyle = { position: "fixed", bottom: 24, right: 24, zIndex: 50, backgroundColor: "#1B2B4B", color: "#F8F8F6", fontFamily: "var(--font-mono)", fontSize: 11, border: "none", cursor: "pointer", height: 36, padding: "0 14px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.25)", whiteSpace: "nowrap" };
  const overlayStyle = { position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 55 };
  const sheetStyle = { position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60, backgroundColor: "#F8F8F6", borderTop: "1px solid #E0E0DC", padding: "24px 32px 40px" };
  const sheetHeaderStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 };
  const titleStyle = { fontFamily: "var(--font-mono)", fontSize: 12, color: "#1B2B4B", fontWeight: 500 };
  const closeBtnStyle = { background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 20, color: "#5A5A5A", lineHeight: 1, padding: 4 };

  const mobileUI = visible && isMobile ? createPortal(
    React.createElement(React.Fragment, null,
      React.createElement("button", { onClick: () => setSheetOpen(true), style: pillStyle },
        React.createElement("span", { style: { color: "#E8632A" } }, "\u25C8"),
        React.createElement("span", null, activeLabel),
        React.createElement("span", { style: { opacity: 0.4, fontSize: 16 } }, "\u22EE")
      ),
      sheetOpen && React.createElement("div", { onClick: () => setSheetOpen(false), style: overlayStyle }),
      sheetOpen && React.createElement("div", { style: sheetStyle },
        React.createElement("div", { style: sheetHeaderStyle },
          React.createElement("span", { style: titleStyle }, "Revision Tool"),
          React.createElement("button", { onClick: () => setSheetOpen(false), style: closeBtnStyle }, "\xD7")
        ),
        React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
          sections.map(({ id, label }) =>
            React.createElement("button", {
              key: id,
              onClick: () => scrollTo(id),
              style: { background: "none", border: "none", borderBottom: "1px solid #E0E0DC", cursor: "pointer", textAlign: "left", padding: "14px 0", fontFamily: "var(--font-mono)", fontSize: 14, color: active === id ? "#E8632A" : "#0D0D0D", fontWeight: active === id ? 500 : 400, display: "flex", justifyContent: "space-between", alignItems: "center" }
            }, label, active === id && React.createElement("span", { style: { color: "#E8632A", fontSize: 10 } }, "\u25C8"))
          )
        )
      )
    ), document.body
  ) : null;

  const desktopHeaderStyle = { position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-100%)", pointerEvents: visible ? "auto" : "none", transition: "opacity 300ms, transform 300ms", backgroundColor: "rgba(248,248,246,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E0E0DC" };
  const innerStyle = { maxWidth: "896px", margin: "0 auto", padding: "0 32px" };
  const rowStyle = { display: "flex", alignItems: "center", overflowX: "auto", scrollbarWidth: "none" };
  const logoStyle = { fontFamily: "var(--font-mono)", fontSize: "12px", color: "#1B2B4B", fontWeight: "500", whiteSpace: "nowrap", padding: "16px 24px 16px 0", borderRight: "1px solid #E0E0DC", marginRight: "24px", flexShrink: 0, textDecoration: "none" };

  return React.createElement(React.Fragment, null,
    !isMobile && React.createElement("header", { style: desktopHeaderStyle },
      React.createElement("div", { style: innerStyle },
        React.createElement("div", { style: rowStyle },
          React.createElement("a", { href: "#", style: logoStyle }, "Revision Tool"),
          sections.map(({ id, label }) =>
            React.createElement("a", {
              key: id,
              href: "#" + id,
              style: { fontFamily: "var(--font-mono)", fontSize: "12px", whiteSpace: "nowrap", padding: "16px", flexShrink: 0, textDecoration: "none", borderBottom: active === id ? "2px solid #E8632A" : "2px solid transparent", color: active === id ? "#E8632A" : "#5A5A5A", transition: "color 200ms" }
            }, label)
          )
        )
      )
    ),
    mobileUI
  );
}

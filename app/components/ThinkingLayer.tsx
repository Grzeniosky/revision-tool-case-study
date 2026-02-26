"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ThinkingLayerProps {
  label: string;
  model: string;
  children: React.ReactNode;
}

export default function ThinkingLayer({ label, model, children }: ThinkingLayerProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [leftOffset, setLeftOffset] = useState(0);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!open || isMobile || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const overflow = rect.left + 300 - (window.innerWidth - 16);
    setLeftOffset(overflow > 0 ? -overflow : 0);
  }, [open, isMobile]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (triggerRef.current?.contains(e.target as Node)) return;
      if (popoverRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const triggerStyle = {
    display: "inline-flex" as const,
    alignItems: "center" as const,
    gap: 4,
    cursor: "pointer",
    background: "transparent",
    border: "none",
    borderBottom: "2px solid #E8632A",
    color: "#E8632A",
    fontWeight: 500,
    padding: 0,
    font: "inherit",
  };

  const popoverStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E0E0DC",
    padding: 16,
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  };

  const desktopStyle = {
    ...popoverStyle,
    position: "absolute" as const,
    top: "100%",
    left: leftOffset,
    marginTop: 8,
    width: 300,
    zIndex: 60,
  };

  const mobileStyle = {
    ...popoverStyle,
    position: "fixed" as const,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 60,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 40,
  };

  const header = { display: "block" as const, fontFamily: "var(--font-mono)", fontSize: 12, color: "#5A5A5A", marginBottom: 8 };
  const body = { display: "block" as const, fontSize: 14, color: "#0D0D0D", lineHeight: 1.6, marginBottom: 12 };
  const pill = { fontFamily: "var(--font-mono)", fontSize: 12, backgroundColor: "#FFF0E8", color: "#E8632A", padding: "2px 8px" };
  const closeBtn = { position: "absolute" as const, top: 8, right: 8, background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#5A5A5A", lineHeight: 1, padding: 4 };

  const content = (
    <>
      <button onClick={() => setOpen(false)} style={closeBtn}>×</button>
      <span style={header}>// AI model: {model}</span>
      <span style={body}>{children}</span>
      <span style={pill}>[{model}]</span>
    </>
  );

  return (
    <>
      <span style={{ position: "relative", display: "inline-block" }}>
        <button ref={triggerRef} type="button" onClick={() => setOpen(p => !p)} style={triggerStyle}>
          {label}
          <span style={{ color: "#E8632A", fontSize: 12, marginLeft: 2 }}>◈</span>
        </button>
        {open && !isMobile && (
          <span ref={popoverRef} style={desktopStyle}>{content}</span>
        )}
      </span>
      {open && isMobile && createPortal(
  <span onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 55, display: "block" }} />,
  document.body
)}
      {open && isMobile && createPortal(
        <span ref={popoverRef} style={mobileStyle}>{content}</span>,
        document.body
      )}
    </>
  );
}
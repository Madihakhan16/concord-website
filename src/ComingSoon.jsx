import { useState } from "react";
import { Link } from "react-router-dom";

// ── Logo mark ─────────────────────────────────────────────────────────────────
const IMG_CG_LOGO_REAL = "data:image/png;base64,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";
function ConcordLogo({ size = "nav" }) {
  const h = size === "footer" ? 44 : 36;
  return <img src={IMG_CG_LOGO_REAL} alt="Concord Group" style={{ height: h, width: "auto", display: "block" }} />;
}

const ArrowRight = ({ color = "#fff", size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ComingSoon({ page = "This Page" }) {
  return (
    <div style={{
      background: "#000", color: "#fff",
      fontFamily: "'Arial','Helvetica Neue',sans-serif",
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background subtle grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(227,30,36,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(227,30,36,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Red glow blob */}
      <div style={{
        position: "absolute", top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(227,30,36,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "40px 24px" }}>
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <img src={IMG_CG_LOGO_REAL} alt="Concord Group" style={{ height: 60, width: "auto" }} />
        </div>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(227,30,36,0.1)", border: "1px solid rgba(227,30,36,0.3)",
          borderRadius: 999, padding: "6px 16px", marginBottom: 32,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E31E24" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#E31E24", letterSpacing: 2, textTransform: "uppercase" }}>Coming Soon</span>
        </div>

        <h1 style={{
          fontSize: 72, fontWeight: 800, color: "#fff",
          letterSpacing: "-2px", lineHeight: 1.05, marginBottom: 24,
        }}>
          {page}
        </h1>
        <p style={{
          fontSize: 18, color: "#6B7280", lineHeight: 1.7,
          maxWidth: 480, margin: "0 auto 48px",
        }}>
          We're working hard to bring you something great. This page will be available soon.
        </p>

        <Link to="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#E31E24", color: "#fff",
            padding: "14px 28px", borderRadius: 7,
            fontSize: 15, fontWeight: 700, textDecoration: "none",
            transition: "background 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#c41920"}
          onMouseLeave={e => e.currentTarget.style.background = "#E31E24"}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

import React from "react";

export function ProjectGlassCard({ children, className = "" }) {
  return (
    <div
      className={`relative glass-card p-6 mb-8 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 ${className}`}
      style={{
        boxShadow:
          "0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.08)",
        border: "1.5px solid rgba(255,255,255,0.18)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(0,212,255,0.10) 100%)",
      }}
    >
      {children}
      <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/10 blur-2xl opacity-60 pointer-events-none" />
    </div>
  );
}

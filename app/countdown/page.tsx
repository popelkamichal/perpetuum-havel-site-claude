"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const DEADLINE = new Date(2026, 8, 7, 0, 0, 0);
const START    = new Date(2026, 7, 1, 0, 0, 0);

function pad(n: number) { return String(Math.max(0, n)).padStart(2, "0"); }

export default function CountdownPage() {
  const [time, setTime] = useState({ d: "--", h: "--", m: "--", s: "--", pct: 0, expired: false });
  const [sirenActive, setSirenActive] = useState(false);
  const [activated, setActivated] = useState(false);
  const [flashOn, setFlashOn] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef      = useRef<OscillatorNode | null>(null);
  const gainRef     = useRef<GainNode | null>(null);
  const sweepRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const flashRef    = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    function tick() {
      const now  = new Date();
      const diff = DEADLINE.getTime() - now.getTime();
      if (diff <= 0) {
        setTime({ d: "00", h: "00", m: "00", s: "00", pct: 100, expired: true });
        return;
      }
      const s = Math.floor(diff / 1000);
      const pct = Math.min(100, Math.round((Math.max(0, now.getTime() - START.getTime()) / (DEADLINE.getTime() - START.getTime())) * 100));
      setTime({ d: pad(Math.floor(s / 86400)), h: pad(Math.floor((s % 86400) / 3600)), m: pad(Math.floor((s % 3600) / 60)), s: pad(s % 60), pct, expired: false });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const stopSiren = useCallback(() => {
    if (sweepRef.current) clearInterval(sweepRef.current);
    if (flashRef.current) clearInterval(flashRef.current);
    if (gainRef.current && audioCtxRef.current)
      gainRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.15);
    if (oscRef.current && audioCtxRef.current)
      oscRef.current.stop(audioCtxRef.current.currentTime + 0.4);
    setTimeout(() => { audioCtxRef.current?.close(); audioCtxRef.current = null; }, 500);
    setSirenActive(false);
    setFlashOn(false);
  }, []);

  const startSiren = useCallback(() => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;
    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    const gain = ctx.createGain();
    gain.gain.value = 0.16;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    oscRef.current = osc;
    gainRef.current = gain;
    function sweep() {
      const t = ctx.currentTime;
      osc.frequency.cancelScheduledValues(t);
      osc.frequency.setValueAtTime(380, t);
      osc.frequency.linearRampToValueAtTime(920, t + 0.65);
      osc.frequency.linearRampToValueAtTime(380, t + 1.3);
    }
    sweep();
    sweepRef.current = setInterval(sweep, 1300);
    let on = false;
    flashRef.current = setInterval(() => { on = !on; setFlashOn(on); }, 650);
    setSirenActive(true);
  }, []);

  const activate = useCallback(() => {
    setActivated(true);
    startSiren();
  }, [startSiren]);

  const B = "'Bebas Neue', sans-serif";
  const I = "'Inter', system-ui, sans-serif";

  return (
    <div style={{ background: "#080808", minHeight: "100vh", position: "relative", overflow: "hidden", fontFamily: I }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        @keyframes blink { 50%{opacity:0} }
        .stop-btn:hover { color:#cc2200 !important; border-color:#441010 !important; }
        .ov-btn:hover { background:rgba(180,20,0,0.12) !important; color:#ff4422 !important; }
      `}</style>

      {/* Scanlines */}
      <div style={{ position:"fixed", inset:0, backgroundImage:"repeating-linear-gradient(0deg,transparent 0,transparent 3px,rgba(0,0,0,0.07) 3px,rgba(0,0,0,0.07) 4px)", pointerEvents:"none", zIndex:5 }} />
      {/* Flash */}
      <div style={{ position:"fixed", inset:0, background:"rgba(180,20,0,0.15)", pointerEvents:"none", zIndex:4, opacity:flashOn?1:0, transition:"opacity 0.05s" }} />

      {/* Activation overlay */}
      {!activated && (
        <div onClick={activate} style={{ position:"fixed", inset:0, background:"#040404", zIndex:100, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", cursor:"pointer", gap:"1.5rem" }}>
          <div style={{ width:8, height:8, borderRadius:"50%", background:"#cc2200", animation:"blink 0.9s step-start infinite" }} />
          <p style={{ fontSize:9, fontWeight:700, letterSpacing:"0.35em", textTransform:"uppercase", color:"#3a1a1a" }}>Perpetuum Havel · Stav: Kritický</p>
          <div className="ov-btn" style={{ fontFamily:B, fontSize:"clamp(3.5rem,12vw,7rem)", color:"#cc2200", letterSpacing:"0.05em", lineHeight:1, textAlign:"center", border:"2px solid #cc2200", padding:"1rem 2.5rem 0.8rem", transition:"background 0.15s,color 0.15s" }}>
            Aktivovat<br />poplach
          </div>
          <p style={{ fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:"#2a1515" }}>Klikněte pro vstup</p>
        </div>
      )}

      <main style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:"100vh", padding:"2.5rem 1.25rem", position:"relative", zIndex:1 }}>
        <div style={{ width:"100%", maxWidth:620, display:"flex", flexDirection:"column", alignItems:"center" }}>

          {/* Badge */}
          <div style={{ display:"flex", alignItems:"center", gap:8, fontSize:9, fontWeight:700, letterSpacing:"0.32em", textTransform:"uppercase", color:"#cc2200", marginBottom:"2.25rem" }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"#ff3311", animation:"blink 0.9s step-start infinite" }} />
            Kritický stav · Perpetuum Havel
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily:B, fontSize:"clamp(3rem,10vw,5.75rem)", lineHeight:1, letterSpacing:"0.04em", textAlign:"center", color:"#f0ece0", marginBottom:"0.4rem" }}>
            {time.expired ? <>Čas<br />vypršel</> : <>Podklady<br />nebo tma</>}
          </h1>
          <p style={{ fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", color:"#4a3535", textAlign:"center", marginBottom:"2.75rem" }}>
            {time.expired ? "7. září 2026 · Deadline minul" : "Do 7. září 2026 zbývá"}
          </p>

          {/* Countdown */}
          {!time.expired && (
            <div style={{ display:"flex", alignItems:"flex-start", marginBottom:"2.75rem" }}>
              {[{val:time.d,label:"Dní"},{val:time.h,label:"Hodin"},{val:time.m,label:"Minut"},{val:time.s,label:"Sekund"}].map((u,i) => (
                <div key={u.label} style={{ display:"flex", alignItems:"flex-start" }}>
                  {i>0 && <span style={{ fontFamily:B, fontSize:"clamp(4rem,14vw,8.5rem)", lineHeight:0.88, color:"#251515", padding:"0 3px" }}>:</span>}
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <span style={{ fontFamily:B, fontSize:"clamp(5rem,17vw,10.5rem)", lineHeight:0.88, color:flashOn?"#ff6644":"#ff3311", textShadow:flashOn?"0 0 80px rgba(255,51,17,0.85)":"0 0 55px rgba(255,51,17,0.32)", fontVariantNumeric:"tabular-nums", minWidth:"2ch", textAlign:"center" }}>{u.val}</span>
                    <span style={{ fontSize:8, fontWeight:600, letterSpacing:"0.24em", textTransform:"uppercase", color:"#3a2626", marginTop:8 }}>{u.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Warning */}
          <div style={{ width:"100%", background:"rgba(15,4,4,0.6)", border:"1px solid #2a1010", borderTop:"2px solid #cc2200", padding:"1.25rem 1.75rem 1.4rem", textAlign:"center", marginBottom:"1.5rem" }}>
            <p style={{ fontSize:13.5, lineHeight:1.78, color:"#7a6060" }}>
              {time.expired
                ? <><br /><strong style={{ color:"#e8dfd8" }}>Premiéra je ohrožena.</strong><br /><br /><em style={{ fontSize:11, color:"#3a2828" }}>(Jen si dělám srandu. Nebo ne?)</em></>
                : <>Pokud <strong style={{ color:"#e8dfd8" }}>Martina a Zdeněk nedodají podklady do 7. září</strong>,<br />Perpetuum Havel se nespustí.<br /><br /><strong style={{ color:"#e8dfd8" }}>Toto není cvičný poplach.</strong></>
              }
            </p>
          </div>

          {/* Wanted */}
          {!time.expired && (
            <div style={{ width:"100%", display:"flex", gap:12, marginBottom:"1.5rem" }}>
              {[{label:"Hledána",name:"Martina",crime:"Nepředala podklady"},{label:"Hledán",name:"Zdeněk",crime:"Nepředal podklady"}].map(p => (
                <div key={p.name} style={{ flex:1, border:"1px solid #3a1010", borderTop:"2px solid #cc2200", background:"rgba(15,4,4,0.5)", padding:"0.85rem 1rem", textAlign:"center" }}>
                  <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"#cc2200", marginBottom:4 }}>{p.label}</div>
                  <div style={{ fontFamily:B, fontSize:"clamp(2rem,6vw,3rem)", color:"#f0ece0", letterSpacing:"0.05em", lineHeight:1, marginBottom:4 }}>{p.name}</div>
                  <div style={{ fontSize:9, letterSpacing:"0.12em", textTransform:"uppercase", color:"#4a2828" }}>{p.crime}</div>
                </div>
              ))}
            </div>
          )}

          {/* Siren button */}
          {activated && (
            <button className="stop-btn" onClick={sirenActive ? stopSiren : startSiren}
              style={{ width:"100%", padding:"0.75rem 1.5rem", marginBottom:"1.75rem", background:"transparent", border:"1px solid #2a1010", color:"#4a2828", fontFamily:I, fontSize:9, fontWeight:700, letterSpacing:"0.28em", textTransform:"uppercase", cursor:"pointer", transition:"color 0.15s,border-color 0.15s" }}>
              {sirenActive ? "⬛ Ztlumit sirénu" : "🚨 Spustit sirénu"}
            </button>
          )}

          {/* Progress */}
          <div style={{ width:"100%", marginBottom:"2.5rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:8, letterSpacing:"0.2em", textTransform:"uppercase", color:"#3a2828", marginBottom:7 }}>
              <span>Urgence</span><span>{time.pct}%</span>
            </div>
            <div style={{ height:3, background:"#150c0c" }}>
              <div style={{ height:"100%", width:`${time.pct}%`, background:"linear-gradient(90deg,#771a00,#ff3311)", transition:"width 1s linear" }} />
            </div>
          </div>

          <p style={{ fontSize:10, letterSpacing:"0.14em", color:"#2e1e1e", textAlign:"center", textTransform:"uppercase" }}>
            Deadline: neděle 7. 9. 2026 · 00:00 hod.
          </p>
        </div>
      </main>
    </div>
  );
}

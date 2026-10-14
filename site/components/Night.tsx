"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IMG, PLINTH, NIGHT_SLOTS } from "../content";
import { usePinProgress, tick, isStatic, seg, lenisVelocity, watchVisible } from "../lib/motion";

const N = NIGHT_SLOTS.length, STEP = 360 / N, R = 640;

/** GL17 curved carousel, M33 ring: seven two-sided cards on a cylinder. Scroll rotates it (both ways), an idle drift
 *  keeps it turning when you stop; a card that turns away shows its real back still (cap / socks: inside colour).
 *  At the end the hoodie lifts off the kerb plinth. */
export default function Night() {
  const outer = useRef<HTMLElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const clouds = useRef<HTMLDivElement>(null);
  const peaks = useRef<HTMLDivElement>(null);
  const red = useRef<HTMLDivElement>(null);
  const finale = useRef<HTMLDivElement>(null);
  const hood = useRef<HTMLDivElement>(null);
  const st = useRef({ p: 0, idle: 0, vis: false, vel: 0 });
  const slots = useRef<(HTMLElement | null)[]>([]);

  const layout = () => {
    const s = st.current, p = s.p;
    const rot = p * 360 * 0.92 + s.idle;
    if (ring.current) {
      ring.current.style.transform = `translateZ(${-R}px) rotateY(${-rot}deg)`;
      ring.current.style.opacity = String(1 - seg(p, 0.8, 0.92));
    }
    slots.current.forEach((el, i) => {
      if (!el) return;
      const a = Math.abs((((i * STEP - rot) % 360) + 540) % 360 - 180);
      el.style.opacity = String(Math.max(0, Math.min(1, 1 - (a - 118) / 45)));
    });
    const lift = seg(p, 0.8, 1);
    if (title.current) { title.current.style.transform = `translateX(${(-p * 40).toFixed(1)}px)`; }
    if (clouds.current) clouds.current.style.transform = `translateX(${(-p * 260 + s.idle * 2).toFixed(1)}px)`;
    if (peaks.current) peaks.current.style.transform = `translateX(${(-p * 90).toFixed(1)}px)`;
    if (red.current) red.current.style.transform = `translateX(${(p * 200).toFixed(1)}px)`;
    if (finale.current) { finale.current.style.opacity = String(seg(p, 0.76, 0.86)); finale.current.style.transform = `translateY(${(1 - seg(p, 0.76, 0.9)) * 220}px)`; }
    if (hood.current) hood.current.style.transform = `translateY(${(-lift * 70).toFixed(1)}px) rotate(${(Math.sin(lift * 5) * 1.2).toFixed(2)}deg)`;
  };

  usePinProgress(outer, (p) => { st.current.p = p; layout(); }, 0);

  useEffect(() => {
    if (isStatic()) return;
    const off = watchVisible(outer.current!, (v) => (st.current.vis = v));
    const t = tick((dt) => {
      if (!st.current.vis) return;
      st.current.idle += dt * 4 + Math.abs(lenisVelocity()) * 0.01 * dt * 30;
      layout();
    });
    return () => { off(); t(); };
  }, []);

  // tilt toward the pointer
  const tilt = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--tx", `${(-y * 14).toFixed(1)}deg`);
    e.currentTarget.style.setProperty("--ty", `${(x * 18).toFixed(1)}deg`);
  };
  const untilt = (e: React.PointerEvent<HTMLElement>) => { e.currentTarget.style.setProperty("--tx", "0deg"); e.currentTarget.style.setProperty("--ty", "0deg"); };

  return (
    <section ref={outer} id="night" data-nav="dark" className="pin night" style={{ ["--pin" as string]: "460vh" }}>
      <div className="pin-in">
        <div className="nt-sky" aria-hidden />
        <div ref={clouds} className="nt-clouds" aria-hidden>
          <svg viewBox="0 0 2400 300" preserveAspectRatio="none">
            {[[160, 90, 1], [620, 180, 0.7], [1080, 70, 1.2], [1560, 150, 0.8], [2040, 100, 1]].map(([x, y, s], i) => (
              <g key={i} transform={`translate(${x} ${y}) scale(${s})`} fill="#fff" opacity=".13"><ellipse rx="140" ry="34" /><ellipse cx="-70" cy="-18" rx="70" ry="30" /><ellipse cx="50" cy="-26" rx="86" ry="36" /></g>
            ))}
          </svg>
        </div>
        <div ref={peaks} className="nt-peaks" aria-hidden>
          <svg viewBox="0 0 1800 320" preserveAspectRatio="none"><path d="M0 320V210L170 90 300 180 470 40 680 200 860 110 1040 220 1220 70 1420 190 1600 100 1800 200V320Z" fill="#0A2733" /><path d="M0 320V260L220 170 420 250 640 150 900 260 1130 160 1360 250 1580 180 1800 250V320Z" fill="#06151C" /></svg>
        </div>
        <div ref={red} className="nt-red" aria-hidden>ORIGINALS</div>
        <div ref={title} className="nt-title">
          <h2 className="k-h2">NIGHT<br />DROP</h2>
          <span className="nt-pill" data-cursor="New">New Arrival</span>
        </div>
        <div className="nt-stage">
          <div ref={ring} className="nt-ring">
            {NIGHT_SLOTS.map((s, i) => (
              <article key={i} ref={(n) => { slots.current[i] = n; }} className="nt-slot" style={{ transform: `rotateY(${i * STEP}deg) translateZ(${R}px)` }}>
                <div className="nt-card" onPointerMove={tilt} onPointerLeave={untilt} {...(i === 0 ? { "data-hover-demo": true } : {})}>
                  <div className="nt-face nt-front"><img src={IMG(s.front)} alt={s.name} /><span className="nt-tag">{s.name}</span></div>
                  <div className="nt-face nt-back" style={!s.back ? { background: s.flat } : undefined}>{s.back && <img src={IMG(s.back)} alt={`${s.name}, back`} />}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div ref={finale} className="nt-finale">
          <div ref={hood} className="nt-hood"><img src={IMG("hoodie-front")} alt="Drop 07 hoodie lifting off a kerb" /></div>
          <img className="nt-plinth" src={PLINTH} alt="" aria-hidden />
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { IMG, PIECES, inrNote } from "../content";
import { usePinProgress, isStatic, pad2 } from "../lib/motion";

const SL = 7, SW = 520, SH = 650;

/** M213 seven slices: the still is cut into 7 vertical slices that retract upward and re-form with the next piece.
 *  Scroll steps one piece at a time (both ways); idle: auto-advances every ~3 s. */
export default function Lineup() {
  const outer = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const cur = useRef(0), front = useRef(0), lastScroll = useRef({ idx: 0, at: 0 }), vis = useRef(false);
  const ghost = useRef<HTMLDivElement>(null);

  const show = (i: number) => {
    if (i === cur.current) return;
    cur.current = i; setIdx(i);
    if (isStatic()) { stage.current!.querySelectorAll<HTMLElement>(".ls-a").forEach((n) => (n.style.backgroundImage = `url(${IMG(PIECES[i].front)})`)); return; }
    const from = front.current, to = 1 - from;
    front.current = to;
    const url = `url(${IMG(PIECES[i].front)})`;
    const slices = stage.current!.querySelectorAll<HTMLElement>(".ls-slice");
    slices.forEach((s, k) => {
      const A = s.children[from] as HTMLElement, B = s.children[to] as HTMLElement;
      B.style.backgroundImage = url;
      gsap.killTweensOf([A, B]);
      gsap.set(B, { zIndex: 2 }); gsap.set(A, { zIndex: 1 });
      gsap.fromTo(A, { clipPath: "inset(0% 0 0% 0)" }, { clipPath: "inset(0% 0 100% 0)", duration: 0.5, ease: "power3.in", delay: k * 0.045 });
      gsap.fromTo(B, { clipPath: "inset(100% 0 0% 0)" }, { clipPath: "inset(0% 0 0% 0)", duration: 0.6, ease: "power3.out", delay: 0.28 + k * 0.045 });
    });
  };

  usePinProgress(outer, (p) => {
    gsap.set(ghost.current, { x: -p * 420 });
    const i = Math.min(PIECES.length - 1, Math.floor(p * PIECES.length));
    if (i !== lastScroll.current.idx) { lastScroll.current = { idx: i, at: performance.now() }; show(i); }
  }, 0);

  useEffect(() => {
    if (isStatic()) return;
    const io = new IntersectionObserver(([e]) => (vis.current = e.isIntersecting), { threshold: 0.3 });
    io.observe(outer.current!);
    const iv = setInterval(() => {
      if (!vis.current || performance.now() - lastScroll.current.at < 3000) return;
      lastScroll.current.at = performance.now() - 0; // keep spacing between auto steps
      show((cur.current + 1) % PIECES.length);
    }, 3200);
    return () => { io.disconnect(); clearInterval(iv); };
  }, []);

  const p = PIECES[idx];
  return (
    <section ref={outer} id="lineup" data-nav="light" className="pin lineup" style={{ ["--pin" as string]: "480vh" }}>
      <div className="pin-in">
        <div ref={ghost} className="ls-ghost" aria-hidden>LINE-UP · DROP 07 · LINE-UP</div>
        <ol className="ls-list" data-reveal="stagger">
          {PIECES.map((x, i) => (
            <li key={x.id} className={i === idx ? "on" : ""} {...(i === 3 ? { "data-hover-demo": true } : {})}
              onMouseEnter={() => { lastScroll.current.at = performance.now(); show(i); }}>
              <span>{pad2(i + 1)}</span><b>{x.name}</b><em>{inrNote(x.price)}</em>
            </li>
          ))}
        </ol>
        <div ref={stage} className="ls-stage" role="img" aria-label={`${p.name}, front`}>
          {Array.from({ length: SL }).map((_, k) => (
            <div key={k} className="ls-slice" style={{ left: (SW / SL) * k, width: SW / SL + 0.6 }}>
              {[0, 1].map((l) => (
                <div key={l} className={l === 0 ? "ls-a" : "ls-b"} style={{ backgroundImage: l === 0 ? `url(${IMG(PIECES[0].front)})` : undefined, backgroundSize: `${SW}px ${SH}px`, backgroundPosition: `${-(SW / SL) * k}px 0`, clipPath: l === 0 ? undefined : "inset(100% 0 0 0)" }} />
              ))}
            </div>
          ))}
        </div>
        <div className="ls-info">
          <i className="ls-tag">ORIGINAL</i>
          <div key={p.id} className="ls-word">{p.word}</div>
          <p>{p.note}</p>
          <a href="#shop" className="ls-more" data-cursor="Shop"><span>View more</span><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
        </div>
        <p className="ls-count">{pad2(idx + 1)} / {pad2(PIECES.length)}</p>
      </div>
    </section>
  );
}

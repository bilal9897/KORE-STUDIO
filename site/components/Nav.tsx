"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Magnetic from "@/components/ui/Magnetic";
import { NAV } from "../content";
import { onKerbLift } from "../lib/kerb";
import { isStatic } from "../lib/motion";

/** NV25 pill/tab: a black tab that expands into a panel of page links with a sliding highlight. Its fill flips
 *  ink ↔ white depending on the section under it (data-nav="light|dark" on each section). */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [tone, setTone] = useState<"ink" | "white">("ink");
  const [bag, setBag] = useState(0);
  const [hl, setHl] = useState({ y: 0, h: 0, on: false });
  const root = useRef<HTMLElement>(null);
  const bagEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0, last = "";
    const loop = () => {
      const y = 44;
      let t = "light";
      document.querySelectorAll<HTMLElement>("[data-nav]").forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) t = s.dataset.nav!;
      });
      if (t !== last) { last = t; setTone(t === "dark" ? "white" : "ink"); }
      raf = requestAnimationFrame(loop);
    };
    loop();
    const onBag = () => {
      setBag((b) => b + 1);
      if (bagEl.current && !isStatic()) gsap.fromTo(bagEl.current, { scale: 1.6 }, { scale: 1, duration: 0.6, ease: "elastic.out(1,0.5)" });
    };
    window.addEventListener("kerb:bag", onBag);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("kerb:bag", onBag); };
  }, []);

  useEffect(() => {
    if (isStatic()) return;
    return onKerbLift(() => gsap.fromTo(root.current, { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.4 }));
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) (window.__lenis ? window.__lenis.scrollTo(el as HTMLElement, { duration: 1.6 }) : el.scrollIntoView());
  };
  return (
    <nav ref={root} className={`k-nav ${tone === "white" ? "is-white" : ""} ${open ? "is-open" : ""}`} aria-label="Main">
      <div className="k-nav-glass">
        <a href="#hero" className="k-logo" onClick={(e) => go(e, "#hero")}>
          <span className="k-logo-badge" aria-hidden>
            <img src="/images/kerbcode/hoodie-front-cut.webp" alt="KORE Logo" className="k-logo-img" />
          </span>
          <span className="k-logo-text">
            <b>KORE</b>
            <i>STUDIO</i>
          </span>
        </a>

        <div className="k-nav-links" role="menubar">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="k-nav-link" onClick={(e) => go(e, n.href)}>
              {n.label}
            </a>
          ))}
        </div>

        <div className="k-tab" onMouseEnter={() => setOpen(true)} onMouseLeave={() => { setOpen(false); setHl((h) => ({ ...h, on: false })); }}>
          <Magnetic strength={0.2}>
            <button type="button" className="k-tab-btn" aria-expanded={open} onClick={() => setOpen((o) => !o)} onFocus={() => setOpen(true)}>
              <span className="k-tab-dots" aria-hidden><i /><i /><i /></span>
              <span className="k-tab-text">Menu</span>
              <span ref={bagEl} data-bag className="k-bag">Bag {bag}</span>
            </button>
          </Magnetic>
          <div className="k-panel" role="menu">
            <span className="k-hl" style={{ transform: `translateY(${hl.y}px)`, height: hl.h, opacity: hl.on ? 1 : 0 }} />
            {NAV.map((n) => (
              <a key={n.href} href={n.href} role="menuitem" onClick={(e) => go(e, n.href)}
                onMouseEnter={(e) => setHl({ y: e.currentTarget.offsetTop, h: e.currentTarget.offsetHeight, on: true })}>{n.label}<em>→</em></a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

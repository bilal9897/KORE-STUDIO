"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { NAV } from "../content";
import { isStatic } from "../lib/motion";

/** FO10 oversize word footer, M12 split-letter stagger on a giant KERBCODE (letters rise on enter, word nudges with scroll). */
export default function Footer() {
  const root = useRef<HTMLElement>(null);
  const word = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isStatic()) return;
    const letters = word.current!.querySelectorAll<HTMLElement>("span");
    gsap.set(letters, { yPercent: 110 });
    const st1 = ScrollTrigger.create({
      trigger: root.current, start: "top 85%", end: "bottom bottom",
      onEnter: () => gsap.to(letters, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.06, overwrite: true }),
      onEnterBack: () => gsap.to(letters, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.06, overwrite: true }),
      onLeaveBack: () => gsap.to(letters, { yPercent: 110, duration: 0.4, overwrite: true }),
    });
    const st2 = ScrollTrigger.create({ trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true, onUpdate: (s) => gsap.set(word.current, { x: (1 - s.progress) * -120 }) });
    return () => { st1.kill(); st2.kill(); };
  }, []);
  return (
    <footer ref={root} id="footer" data-nav="dark" className="k-footer">
      <div className="container-x kf-top">
        <div className="kf-col"><h4>Drop 07</h4><p>Six pieces. No restocks. Opens 05 Dec, 8 pm IST (sample date).</p></div>
        <div className="kf-col"><h4>Go to</h4>{NAV.map((n) => <a key={n.href} href={n.href} className="kf-link">{n.label}</a>)}</div>
        <div className="kf-col"><h4>Follow</h4><a className="kf-link" href="#footer">Instagram</a><a className="kf-link" href="#footer">YouTube</a><a className="kf-link" href="#footer">Newsletter</a></div>
      </div>
      <div ref={word} className="kf-word" aria-hidden>{"KORE".split("").map((c, i) => <span key={i}>{c}</span>)}</div>
      <p className="kf-note container-x">Concept website by bilalsalmani.in · KORE Studio is a concept streetwear brand · All pieces and prices are limited edition samples</p>
    </footer>
  );
}

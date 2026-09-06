"use client";

import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedElysana } from "@/app/components/animated-elysana";
import { KeslerSealMark } from "@/app/components/kesler-seal-mark";

const INTRO_EXIT_MS = 5200;

export function IntroGate() {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("intro-locked");
    return () => document.documentElement.classList.remove("intro-locked");
  }, []);

  function enter() {
    if (leaving) return;

    setLeaving(true);
    window.setTimeout(() => {
      document.documentElement.classList.remove("intro-locked");
      setVisible(false);
    }, INTRO_EXIT_MS);
  }

  if (!visible) return null;

  return (
    <section className={leaving ? "intro-gate is-leaving" : "intro-gate"} aria-label="Introdução de A Bela Dama">
      <div className="intro-scene">
        <div className="intro-grain" />
        <div className="fabric fabric-one" />
        <div className="fabric fabric-two" />
        <div className="fabric fabric-three" />


        <div className="intro-copy">
          <div className="intro-kicker"><span /> Arquivos da Família Kesler</div>
          <p className="intro-script">Elysana Kesler</p>
          <h1><span>A Bela</span><strong>Dama</strong></h1>
          <blockquote>“Um brinde a todos que vieram antes de nós.”</blockquote>
          <button type="button" className="enter-button" onClick={enter}>
            <span>Abrir os arquivos</span>
            <ArrowDownRight size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="kesler-seal-animation" aria-hidden="true">
          <div className="wax-cast-shadow" />
          <div className="wax-seal">
            <span className="wax-edge wax-edge-one" />
            <span className="wax-edge wax-edge-two" />
            <span className="wax-edge wax-edge-three" />
            <KeslerSealMark className="wax-impression" />
          </div>
          <div className="wax-fleck wax-fleck-one" />
          <div className="wax-fleck wax-fleck-two" />
          <div className="wax-fleck wax-fleck-three" />
          <div className="seal-press">
            <div className="seal-handle"><span /></div>
            <div className="seal-matrix">
              <KeslerSealMark className="seal-matrix-mark" />
            </div>
          </div>
        </div>
      </div>

      <div className="intro-portrait-wrap intro-persistent-portrait" aria-hidden="true">
        <div className="portrait-collage">
          <span className="collage-paper collage-paper-one" />
          <span className="collage-paper collage-paper-two" />
          <span className="collage-paper collage-paper-three" />
        </div>
        <div className="portrait-halo" />
        <AnimatedElysana />
      </div>

      <div className="intro-water" aria-hidden="true">
        <div className="intro-water-shape">
          <svg viewBox="0 0 1600 1500" preserveAspectRatio="none">
            <defs>
              <linearGradient id="liquid-wine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#6f1c32" />
                <stop offset="0.18" stopColor="#46101f" />
                <stop offset="1" stopColor="#120409" />
              </linearGradient>
            </defs>
            <path
              className="liquid-depth"
              d="M0 126C132 71 244 174 392 119C536 65 638 48 794 112C947 175 1057 65 1201 100C1340 134 1465 178 1600 104V1500H0Z"
            />
            <path
              className="liquid-body"
              d="M0 108C144 53 250 153 397 101C542 50 645 30 800 94C954 158 1060 45 1207 82C1349 117 1461 157 1600 86V1500H0Z"
            />
            <path
              className="liquid-glint"
              d="M0 108C144 53 250 153 397 101C542 50 645 30 800 94C954 158 1060 45 1207 82C1349 117 1461 157 1600 86"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

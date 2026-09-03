"use client";

import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

export function IntroGate() {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("intro-locked");
    return () => document.documentElement.classList.remove("intro-locked");
  }, []);

  function enter() {
    setLeaving(true);
    document.documentElement.classList.remove("intro-locked");
    window.setTimeout(() => setVisible(false), 2100);
  }

  if (!visible) return null;

  return (
    <section className={leaving ? "intro-gate is-leaving" : "intro-gate"} aria-label="Introdução de A Bela Dama">
      <div className="intro-grain" />
      <div className="fabric fabric-one" />
      <div className="fabric fabric-two" />
      <div className="fabric fabric-three" />

      <div className="intro-liquid-edge" aria-hidden="true">
        <svg viewBox="0 0 1600 230" preserveAspectRatio="none">
          <defs>
            <linearGradient id="liquid-wine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#19050b" />
              <stop offset="0.52" stopColor="#3f0d1b" />
              <stop offset="1" stopColor="#64182d" />
            </linearGradient>
          </defs>
          <path
            className="liquid-shadow"
            d="M0 0H1600V66C1455 104 1376 27 1240 70C1107 112 1030 189 872 128C717 69 654 37 515 88C366 143 248 179 0 104Z"
          />
          <path
            className="liquid-body"
            d="M0 0H1600V49C1464 82 1372 18 1237 58C1089 102 1028 164 866 111C703 57 640 26 496 75C342 127 211 153 0 87Z"
          />
          <path
            className="liquid-glint"
            d="M1600 49C1464 82 1372 18 1237 58C1089 102 1028 164 866 111C703 57 640 26 496 75C342 127 211 153 0 87"
          />
        </svg>
      </div>

      <div className="intro-portrait-wrap" aria-hidden="true">
        <div className="portrait-halo" />
        <img className="intro-portrait" src="/assets/skins/elysana-busto-v2.png" alt="" />
      </div>

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

      <div className="intro-index" aria-hidden="true">
        <span>Arquivo</span>
        <strong>06</strong>
      </div>
    </section>
  );
}

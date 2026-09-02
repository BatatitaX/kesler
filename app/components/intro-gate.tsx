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
    window.setTimeout(() => setVisible(false), 1100);
  }

  if (!visible) return null;

  return (
    <section className={leaving ? "intro-gate is-leaving" : "intro-gate"} aria-label="Introdução de A Bela Dama">
      <div className="intro-grain" />
      <div className="fabric fabric-one" />
      <div className="fabric fabric-two" />
      <div className="fabric fabric-three" />

      <div className="intro-portrait-wrap" aria-hidden="true">
        <div className="portrait-halo" />
        <img className="intro-portrait" src="/assets/skins/padrao.jpg" alt="" />
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

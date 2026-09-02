"use client";

import { Heart, PawPrint, Search, UserRound } from "lucide-react";
import { useState } from "react";
import { PageHeading } from "@/app/components/page-heading";

const familyMembers = {
  biologicalMother: { name: "Mãe biológica", status: "Paradeiro desconhecido", description: "Nenhum registro confirmado. Elysana conhece apenas o vazio deixado por sua origem." },
  biologicalFather: { name: "Pai biológico", status: "Paradeiro desconhecido", description: "Nome, rosto e destino permanecem fora dos arquivos da Família Kesler." },
  rin: { name: "Rin Kesler", status: "Pai adotivo · Desaparecido", description: "O homem que deu a Elysana um nome, uma casa e perguntas que ainda não foram respondidas." },
  tiana: { name: "Tiana Kesler", status: "Mãe adotiva · Falecida", description: "Parte essencial da família que escolheu Elysana ainda bebê. Sua morte permanece ligada aos segredos do Sexto Distrito." },
  elysana: { name: "Elysana Kesler", status: "Filha adotiva · A Bela Dama", description: "Adotada aos seis meses, Elysana escolheu carregar o nome Kesler mesmo quando ele se tornou pesado demais." },
};

type MemberKey = keyof typeof familyMembers;

export default function FamiliaPage() {
  const [selected, setSelected] = useState<MemberKey>("elysana");
  const member = familyMembers[selected];

  return (
    <main className="site-main inner-page family-page">
      <PageHeading
        eyebrow="Linhagem, escolha e memória"
        title="Família Kesler"
        description="Nem todo laço começa no sangue. Alguns começam quando alguém decide lhe dar um nome — e permanecer."
        aside={<div className="family-seal">K<small>Família Kesler</small></div>}
      />

      <section className="family-tree-section">
        <div className="family-tree" aria-label="Árvore genealógica da Família Kesler">
          <div className="tree-label biological">Origem biológica</div>
          <button className={selected === "biologicalMother" ? "tree-card unknown active" : "tree-card unknown"} onClick={() => setSelected("biologicalMother")}>
            <UserRound /><span>Mãe biológica</span><small>Sem registro</small>
          </button>
          <button className={selected === "biologicalFather" ? "tree-card unknown active" : "tree-card unknown"} onClick={() => setSelected("biologicalFather")}>
            <UserRound /><span>Pai biológico</span><small>Sem registro</small>
          </button>

          <div className="tree-line biological-line" />
          <div className="tree-label adoptive">Família adotiva</div>
          <button className={selected === "tiana" ? "tree-card active" : "tree-card"} onClick={() => setSelected("tiana")}>
            <span className="tree-initial">T</span><span>Tiana Kesler</span><small>Falecida</small>
          </button>
          <button className={selected === "rin" ? "tree-card active" : "tree-card"} onClick={() => setSelected("rin")}>
            <span className="tree-initial">R</span><span>Rin Kesler</span><small>Desaparecido</small>
          </button>
          <div className="tree-line adoptive-line" />

          <button className={selected === "elysana" ? "tree-card elysana active" : "tree-card elysana"} onClick={() => setSelected("elysana")}>
            <img src="/assets/skins/padrao.jpg" alt="Elysana Kesler" />
            <span>Elysana Kesler</span><small>A Bela Dama</small>
          </button>
        </div>

        <aside className="member-file">
          <p>Registro selecionado</p>
          <span className="member-index">K-06</span>
          <h2>{member.name}</h2>
          <strong>{member.status}</strong>
          <div className="ornament-line"><span>✦</span></div>
          <p>{member.description}</p>
        </aside>
      </section>

      <section className="chosen-bonds">
        <div className="section-heading-row">
          <div><p className="eyebrow"><span />Laços escolhidos</p><h2>A família que permaneceu</h2></div>
        </div>
        <div className="bond-grid">
          <article><Heart /><span>Amada</span><h3>Diana Chevoren</h3><p>Uma presença que continua existindo entre amor, memória e terror.</p></article>
          <article><PawPrint /><span>Guardião</span><h3>Yuan Kesler</h3><p>O leão branco. O último dos sete. A ordem de Diana que nunca deixou de ser cumprida.</p></article>
          <article><Search /><span>Companheiro</span><h3>Carim</h3><p>Desaparecido na Base. Provavelmente morto, mas ainda sem destino confirmado.</p></article>
        </div>
      </section>
    </main>
  );
}

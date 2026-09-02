"use client";

import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { PageHeading } from "@/app/components/page-heading";
import { chapters } from "@/app/data";

export default function HistoriaPage() {
  const [selected, setSelected] = useState(0);
  const chapter = chapters[selected];

  return (
    <main className="site-main inner-page story-page">
      <PageHeading
        eyebrow="As Crônicas de Elysana Kesler"
        title="História"
        description="Doze memórias preservadas. Algumas pertencem à mulher. Outras, ao nome que o Sexto Distrito aprendeu a invocar."
        aside={<div className="reading-progress"><span>Leitura</span><strong>{String(selected + 1).padStart(2, "0")} / 12</strong></div>}
      />

      <section className="featured-chapter">
        <div className="chapter-art">
          <img src={selected > 9 ? "/assets/skins/porcelana-vermelha.jpg" : "/assets/skins/padrao.jpg"} alt="Elysana Kesler" />
          <span>Capítulo {chapter.number}</span>
        </div>
        <article className="chapter-reading-card">
          <p className="chapter-label">Capítulo {chapter.number}</p>
          <h2>{chapter.title}</h2>
          <p>{chapter.excerpt}</p>
          <blockquote>“{chapter.quote.replace(/[“”]/g, "")}”</blockquote>
          <div className="chapter-controls">
            <button type="button" onClick={() => setSelected((selected - 1 + chapters.length) % chapters.length)}><ArrowLeft size={16} /> Anterior</button>
            <a href="/assets/library/as-cronicas-de-elysana.pdf" target="_blank" rel="noreferrer"><BookOpen size={16} /> Ler capítulo completo</a>
            <button type="button" onClick={() => setSelected((selected + 1) % chapters.length)}>Próximo <ArrowRight size={16} /></button>
          </div>
        </article>
      </section>

      <section className="chapter-index" aria-label="Lista de capítulos">
        {chapters.map((item, index) => (
          <button type="button" className={index === selected ? "chapter-row selected" : "chapter-row"} key={item.number} onClick={() => setSelected(index)}>
            <span>{item.number}</span><strong>{item.title}</strong><span className="chapter-row-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </section>
    </main>
  );
}

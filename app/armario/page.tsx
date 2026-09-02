"use client";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PageHeading } from "@/app/components/page-heading";
import { skins } from "@/app/data";

export default function ArmarioPage() {
  const [selected, setSelected] = useState(0);
  const skin = skins[selected];

  function move(direction: number) {
    setSelected((selected + direction + skins.length) % skins.length);
  }

  return (
    <main className="site-main inner-page wardrobe-page">
      <PageHeading
        eyebrow="Coleção particular"
        title="Armário"
        description="Todas as formas já vestidas pela Bela Dama. A escolha fica registrada até que outra ocupe seu lugar."
        aside={<div className="skin-counter"><span>Skin</span><strong>{String(selected + 1).padStart(2, "0")} / {String(skins.length).padStart(2, "0")}</strong></div>}
      />

      <section className="selected-skin-stage">
        <div className="skin-backdrop" style={{ backgroundImage: `url(${skin.image})` }} />
        <img className="selected-skin-image" src={skin.image} alt={skin.name} />
        <div className="selected-skin-copy">
          <span>Selecionada <Check size={14} /></span>
          <p>{skin.subtitle}</p>
          <h2>{skin.name}</h2>
          <div className="skin-stage-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Skin anterior"><ChevronLeft /></button>
            <button type="button" onClick={() => move(1)} aria-label="Próxima skin"><ChevronRight /></button>
          </div>
        </div>
      </section>

      <section className="skin-grid" aria-label="Skins de Elysana">
        {skins.map((item, index) => (
          <button type="button" className={index === selected ? "skin-card selected" : "skin-card"} key={item.id} onClick={() => setSelected(index)}>
            <div className="skin-card-image"><img src={item.image} alt="" /></div>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.name}</strong>
            {index === selected ? <small><Check size={12} /> Selecionada</small> : <small>Selecionar</small>}
          </button>
        ))}
      </section>
    </main>
  );
}

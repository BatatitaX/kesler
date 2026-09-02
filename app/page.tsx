import Link from "next/link";
import { ArrowUpRight, BookOpenText, LibraryBig, Shirt } from "lucide-react";
import { IntroGate } from "@/app/components/intro-gate";

const quickLinks = [
  { href: "/historia", icon: BookOpenText, index: "01", title: "As Crônicas", text: "Doze capítulos sobre a mulher por trás do nome." },
  { href: "/armario", icon: Shirt, index: "02", title: "Armário", text: "Seis formas de vestir a mesma memória." },
  { href: "/biblioteca", icon: LibraryBig, index: "03", title: "Biblioteca", text: "Documentos, relatos e fragmentos catalogados." },
];

export default function Home() {
  return (
    <>
      <IntroGate />
      <main className="site-main home-page">
        <section className="home-hero">
          <div className="home-copy">
            <p className="eyebrow"><span />Registro principal · Sexto Distrito</p>
            <p className="home-script">Elysana Kesler</p>
            <h1>A calma nunca foi ausência de medo.</h1>
            <p className="home-lead">
              Médica, combatente e última herdeira do nome que escolheu carregá-la. Elysana transformou
              ansiedade em disciplina — e disciplina em esperança.
            </p>
            <div className="home-actions">
              <Link href="/historia" className="primary-link">Conhecer sua história <ArrowUpRight size={17} /></Link>
              <Link href="/familia" className="text-link">Ver a Família Kesler</Link>
            </div>
          </div>

          <div className="home-portrait-stage" aria-label="Retrato de Elysana Kesler">
            <div className="portrait-arch" />
            <img src="/assets/skins/padrao.jpg" alt="Elysana Kesler em um campo ao entardecer" />
            <div className="portrait-caption"><span>Forma selecionada</span><strong>A Bela Dama</strong></div>
          </div>

          <aside className="home-record">
            <span className="record-number">№ 006</span>
            <div><small>Conhecida como</small><strong>A Bela Dama</strong></div>
            <div><small>Origem</small><strong>Sexto Distrito</strong></div>
            <div><small>Estado do arquivo</small><strong>Em reconstrução</strong></div>
          </aside>
        </section>

        <section className="home-quote">
          <span>✦</span>
          <blockquote>“Por fora: silêncio absoluto. Por dentro: colapso.”</blockquote>
          <p>As Crônicas de Elysana Kesler, Capítulo I</p>
        </section>

        <section className="quick-links-section">
          <div className="section-heading-row">
            <div><p className="eyebrow"><span />Coleção particular</p><h2>Os arquivos da Bela Dama</h2></div>
            <p>Explore os relatos preservados pela Família Kesler.</p>
          </div>
          <div className="quick-links-grid">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link href={item.href} className="quick-link-card" key={item.href}>
                  <span className="quick-index">{item.index}</span><Icon size={25} strokeWidth={1.3} />
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <ArrowUpRight className="quick-arrow" size={18} />
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

"use client";

import { BookOpen, Download, Expand } from "lucide-react";
import { PageHeading } from "@/app/components/page-heading";
import { libraryBooks } from "@/app/data";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function BibliotecaPage() {
  return (
    <main className="site-main inner-page library-page">
      <PageHeading
        eyebrow="Documentos preservados"
        title="Biblioteca"
        description="Relatos, registros e formas mantidos nos arquivos da Família Kesler. Seu progresso de leitura será lembrado."
        aside={<div className="library-count"><strong>02</strong><span>volumes</span></div>}
      />

      <section className="library-shelves">
        {libraryBooks.map((book, index) => (
          <article className="book-card" id={book.id} key={book.id}>
            <div className="book-cover">
              <img src={book.cover} alt="" />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><small>Família Kesler</small><strong>{book.title}</strong></div>
            </div>
            <div className="book-info">
              <p className="eyebrow"><span />{book.eyebrow}</p>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <div className="book-progress"><span><i style={{ width: "0%" }} /></span><small>Leitura não iniciada</small></div>
              <div className="book-actions">
                <Dialog>
                  <DialogTrigger asChild><button type="button" className="primary-link"><BookOpen size={17} /> Ler agora</button></DialogTrigger>
                  <DialogContent className="library-dialog">
                    <DialogHeader className="library-dialog-header">
                      <DialogTitle>{book.title}</DialogTitle>
                      <DialogDescription>{book.eyebrow}</DialogDescription>
                    </DialogHeader>
                    <iframe src={`${book.file}#view=FitH`} title={`Leitor de ${book.title}`} />
                  </DialogContent>
                </Dialog>
                <a className="book-icon-link" href={book.file} target="_blank" rel="noreferrer" aria-label="Abrir em tela cheia"><Expand size={18} /></a>
                <a className="book-icon-link" href={book.file} download aria-label="Baixar PDF"><Download size={18} /></a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

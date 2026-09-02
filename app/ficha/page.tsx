import { EmptyRecord } from "@/app/components/empty-record";
import { PageHeading } from "@/app/components/page-heading";

export default function FichaPage() {
  return (
    <main className="site-main inner-page quiet-page">
      <PageHeading eyebrow="Registro de campo" title="Ficha" description="A estrutura aguarda a conclusão do sistema próprio da campanha." />
      <EmptyRecord label="Ficha de Elysana Kesler" />
    </main>
  );
}

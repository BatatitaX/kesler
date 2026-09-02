import { EmptyRecord } from "@/app/components/empty-record";
import { PageHeading } from "@/app/components/page-heading";

export default function HabilidadesPage() {
  return (
    <main className="site-main inner-page quiet-page">
      <PageHeading eyebrow="Fragmentos de Memória" title="Habilidades" description="Custos, rolagens e efeitos serão catalogados quando o sistema estiver concluído." />
      <EmptyRecord label="Habilidades de Elysana Kesler" />
    </main>
  );
}

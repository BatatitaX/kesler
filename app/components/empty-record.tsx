import { Feather } from "lucide-react";

export function EmptyRecord({ label }: { label: string }) {
  return (
    <div className="empty-record">
      <div className="empty-record-mark"><Feather size={26} strokeWidth={1.2} /></div>
      <p>{label}</p>
      <h2>Registros não catalogados</h2>
      <div className="ornament-line"><span>✦</span></div>
    </div>
  );
}

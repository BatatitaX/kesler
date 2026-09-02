import type { ReactNode } from "react";

export function PageHeading({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: ReactNode;
}) {
  return (
    <header className="page-heading">
      <div>
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <p className="page-description">{description}</p> : null}
      </div>
      {aside ? <div className="page-heading-aside">{aside}</div> : null}
    </header>
  );
}

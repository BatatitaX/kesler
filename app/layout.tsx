import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/app/components/site-header";

export const metadata: Metadata = {
  title: "A Bela Dama — Arquivos da Família Kesler",
  description: "As histórias, formas e memórias de Elysana Kesler.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { SiteFooter } from "./SiteFooter";
import { LEGAL_LAST_UPDATED } from "@/lib/site";

export type LegalSection = { heading: string; body: ReactNode };

export function LegalLayout({
  title,
  sections,
}: {
  title: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="legal-hero">
        <div className="container">
          <nav className="nav" aria-label="Main">
            <Logo />
            <div className="nav__links">
              <Link href="/">Home</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/terms">Terms &amp; Condition</Link>
            </div>
          </nav>
          <h1 className="legal-hero__title">{title}</h1>
          <p className="legal-hero__meta">Last updated: {LEGAL_LAST_UPDATED}</p>
        </div>
      </header>
      <main className="legal-body">
        {sections.map((s) => (
          <section key={s.heading} className="legal-section">
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}

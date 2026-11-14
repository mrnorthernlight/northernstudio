import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { LegalIdentity } from "@/components/legal-identity";
import { PageIntro, ProseSections } from "@/components/page-intro";

type Namespace = "privacy" | "terms" | "cookiesPage" | "accessibility";

export async function LegalPage({ namespace, children }: { namespace: Namespace; children?: ReactNode }) {
  const t = await getTranslations(namespace);
  const sections = t.raw("sections") as { title: string; paragraphs: string[] }[];

  return (
    <article className="wrap">
      <PageIntro eyebrow={t("eyebrow")} title={t("title")} lede={t("lede")} />
      <p className="-mt-6 text-sm text-muted">{t("updated")}</p>
      <div className="mt-10">
        <ProseSections sections={sections} />
      </div>
      {children}
      <div className="border-t border-line py-12">
        <LegalIdentity />
      </div>
    </article>
  );
}

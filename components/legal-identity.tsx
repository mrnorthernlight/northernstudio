import { getTranslations } from "next-intl/server";
import { legalEntity } from "@/lib/site";

const published = [
  ["legalName", legalEntity.legalName],
  ["kbo", legalEntity.kbo],
  ["address", legalEntity.address],
  ["email", legalEntity.email],
] as const;

export async function LegalIdentity() {
  const t = await getTranslations("legalIdentity");
  const rows = published.filter((entry): entry is [(typeof published)[number][0], string] => Boolean(entry[1]?.trim()));

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold tracking-tight">{t("title")}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted">{t("status")}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{t("operator")}</p>
      {rows.length > 0 ? (
        <dl className="mt-4 space-y-3 text-sm">
          {rows.map(([key, value]) => (
            <div key={key}>
              <dt className="text-muted">{t(key)}</dt>
              <dd className="mt-0.5 text-paper">{value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <p className="mt-4 text-sm leading-relaxed text-muted">{t("contact")}</p>
    </div>
  );
}

import { getTranslations } from "next-intl/server";

export async function LegalIdentity({ tone = "light" }: { tone?: "light" | "dark" }) {
  const t = await getTranslations("legalIdentity");
  const muted = tone === "dark" ? "text-[#d4d0c6]" : "text-muted";

  const rows = [
    [t("legalName"), t("legalNameValue")],
    [t("kbo"), t("kboValue")],
    [t("address"), t("addressValue")],
    [t("email"), t("emailValue")],
  ];

  return (
    <div>
      <h2 className="font-serif text-2xl font-normal">{t("title")}</h2>
      <dl className="mt-4 space-y-3 text-sm">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className={muted}>{label}</dt>
            <dd className="todo mt-0.5">{value}</dd>
          </div>
        ))}
      </dl>
      <p className={`mt-4 text-sm leading-relaxed ${muted}`}>{t("note")}</p>
    </div>
  );
}

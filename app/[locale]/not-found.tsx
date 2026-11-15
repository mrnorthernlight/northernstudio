import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="wrap py-24 md:py-36">
      <title>{t("metaTitle")}</title>
      <p className="kicker">{t("kicker")}</p>
      <h1 className="h1-page mt-5 max-w-[14ch]">{t("title")}</h1>
      <p className="lede mt-6">{t("text")}</p>
      <p className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <Link href="/" className="text-link">
          {t("home")}
        </Link>
        <Link href="/contact" className="text-link">
          {t("contact")}
        </Link>
      </p>
    </div>
  );
}

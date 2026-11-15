"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations("error");

  return (
    <div className="wrap py-24 md:py-36">
      <h1 className="h1-page max-w-[14ch]">{t("title")}</h1>
      <p className="lede mt-6">{t("text")}</p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button type="button" className="button" onClick={() => reset()}>
          {t("retry")}
        </button>
        <Link href="/" className="text-link">
          {t("home")}
        </Link>
      </div>
    </div>
  );
}

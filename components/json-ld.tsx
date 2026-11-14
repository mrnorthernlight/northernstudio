import { BRAND_LINE, SITE_NAME, SITE_URL } from "@/lib/site";

export function OrganizationJsonLd({ description }: { description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    slogan: BRAND_LINE,
    description,
    logo: `${SITE_URL}/mark.svg`,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}

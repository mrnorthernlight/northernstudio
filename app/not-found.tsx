import Link from "next/link";
import { fontClassName } from "@/lib/fonts";

export default function RootNotFound() {
  return (
    <html lang="nl-BE" className={fontClassName}>
      <body>
        <main className="wrap py-24">
          <p className="kicker">404</p>
          <h1 className="h1-page mt-4 max-w-[14ch]">Deze pagina bestaat niet.</h1>
          <p className="lede mt-6">This page does not exist.</p>
          <p className="mt-10 flex gap-8">
            <Link className="text-link" href="/">
              Nederlands
            </Link>
            <Link className="text-link" href="/en">
              English
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}

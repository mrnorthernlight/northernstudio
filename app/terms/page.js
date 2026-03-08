export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
        >
          ← Back to home
        </a>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm leading-7 text-white/70">
            These Terms &amp; Conditions govern your use of northernstudio.be and your
            interaction with Northern Studio.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">1. Business information</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                <strong>Business name:</strong> Northern Studio
                <br />
                <strong>Website:</strong> https://northernstudio.be
                <br />
                <strong>Email:</strong> info@northernstudio.be
                <br />
                <strong>Phone:</strong> +32 479 10 42 89
                <br />
                <strong>Location:</strong> Belgium
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">2. Use of website</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                By using this website, you agree to use it lawfully and not to
                interfere with its operation, security, or availability.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">3. Services</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Northern Studio offers website-related services, including web design,
                redesign work, and digital presence services.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">4. Contact</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Northern Studio
                <br />
                Email: info@northernstudio.be
                <br />
                Phone: +32 479 10 42 89
                <br />
                Location: Belgium
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
export default function PrivacyPolicyPage() {
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
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-sm leading-7 text-white/70">
            This Privacy Policy explains how Northern Studio handles data in
            connection with northernstudio.be.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">1. Who we are</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>Northern Studio operates this website.</p>
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
            <h2 className="text-2xl font-semibold">2. Data collection</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Northern Studio does not intentionally collect personal data
                through account registration, newsletters, or analytics tools
                operated directly by Northern Studio on this website.
              </p>
              <p>
                If you contact Northern Studio directly by email or phone, any
                information you provide in that communication is used only to
                respond to your enquiry or discuss services.
              </p>
              <p>
                This website also uses third-party services, including Google
                Translate, which may process technical or usage-related data when
                the feature loads or is used.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">3. Google Translate</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                This website uses Google Translate to offer automatic page
                translation. When this feature loads or is used, your browser may
                connect to Google services and Google may process technical
                information such as browser, device, IP address, and usage-related
                data according to Google’s own policies.
              </p>
              <p>
                Google acts as a third-party service provider for this
                functionality. Northern Studio does not control how Google handles
                data once that service is loaded.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">4. Technical data</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Like most websites, basic technical information such as server
                logs or IP-related request data may be processed by the hosting
                environment as necessary for security, performance, and delivery
                of the website.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">5. Cookies and similar technologies</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Northern Studio does not intend to use non-essential analytics or
                advertising cookies directly on this website.
              </p>
              <p>
                However, third-party services or the hosting environment may use
                technical storage, scripts, or similar technologies that are
                necessary for functionality, security, or service delivery.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">6. How information is used</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Any information sent directly by email or phone is used only to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>respond to enquiries;</li>
                <li>communicate about services or projects;</li>
                <li>protect against spam, abuse, or security issues;</li>
                <li>comply with legal obligations where applicable.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">7. Third-party services</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                This website may use third-party services or scripts to provide
                certain functionality. Northern Studio is not responsible for the
                separate privacy practices or data handling policies of third-party
                providers.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">8. Contact</h2>
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
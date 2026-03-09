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
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm leading-7 text-white/70">
            These Terms &amp; Conditions govern your use of northernstudio.be and
            your interaction with Northern Studio.
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
                Northern Studio offers website-related services, including web
                design, redesign work, and digital presence services.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">4. Third-party services</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                This website may use third-party services, scripts, or tools to
                provide certain functionality, including Google Translate.
              </p>
              <p>
                Northern Studio is not responsible for the independent privacy
                practices, availability, content, or policies of third-party
                providers once their services are loaded or used.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">5. Intellectual property</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Unless otherwise stated, the content, branding, design, layout,
                text, graphics, and other materials on this website are owned by
                or used with permission by Northern Studio.
              </p>
              <p>
                You may not reproduce, republish, distribute, copy, or exploit
                this material without prior written permission, except where
                permitted by law.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">6. Links to other websites</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                This website may contain links to third-party websites or
                services. Northern Studio is not responsible for the content,
                availability, or practices of those third-party websites.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">7. Disclaimer</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                This website is provided on an “as is” and “as available” basis.
                While reasonable care is taken, Northern Studio does not
                guarantee uninterrupted operation, complete accuracy, or that the
                website will always be free from bugs, downtime, or weird digital
                nonsense.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">8. Limitation of liability</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                To the fullest extent permitted by law, Northern Studio shall not
                be liable for indirect, incidental, or consequential loss arising
                from use of this website or reliance on its content.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">9. Privacy</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Information about data handling is set out in the Privacy Policy.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">10. Changes to these terms</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                These Terms &amp; Conditions may be updated from time to time. The
                latest version will always be published on this page.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">11. Contact</h2>
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
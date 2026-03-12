"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl">
      <p className="text-sm text-white/80">
        This website uses cookies to improve functionality and understand
        visitor usage. You can accept or reject analytics cookies.
      </p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={acceptCookies}
          className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-300"
        >
          Accept
        </button>

        <button
          onClick={rejectCookies}
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
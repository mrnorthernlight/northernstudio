type Bucket = { count: number; reset: number };

const buckets = new Map<string, Bucket>();

export const RATE_LIMIT = 8;
export const RATE_WINDOW_MS = 10 * 60 * 1000;

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 80);
  }
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real.slice(0, 80);
  return "local";
}

export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host = request.headers.get("host");
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export function rateLimit(key: string, limit = RATE_LIMIT, windowMs = RATE_WINDOW_MS) {
  const now = Date.now();
  if (buckets.size > 5000) {
    for (const [id, bucket] of buckets) {
      if (now > bucket.reset) buckets.delete(id);
    }
  }

  const current = buckets.get(key);
  if (!current || now > current.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { ok: true as const, remaining: limit - 1, retryAfter: 0 };
  }

  if (current.count >= limit) {
    return {
      ok: false as const,
      remaining: 0,
      retryAfter: Math.max(1, Math.ceil((current.reset - now) / 1000)),
    };
  }

  current.count += 1;
  return { ok: true as const, remaining: limit - current.count, retryAfter: 0 };
}

const hits = new Map<string, number[]>();

/**
 * Simple in-memory rate limiter per IP per route.
 * Returns true if the request is allowed, false if rate-limited.
 */
export function rateLimit(ip: string, route: string, maxRequests = 5, windowMs = 60_000): boolean {
  const key = `${ip}:${route}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length <= maxRequests;
}

/**
 * Get the client IP from request headers.
 */
export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "local"
  );
}
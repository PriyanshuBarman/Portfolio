import { Redis } from "@upstash/redis";

import "server-only";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const UNIQUE_VISITORS_KEY = "visitors:unique";

export function generateVisitorId(
  ip: string | null,
  userAgent: string | null,
  fingerprint?: string,
) {
  if (fingerprint) return `fp:${fingerprint}`;

  const ipPart = ip || "unknown";
  const uaPart = userAgent || "unknown";
  return Buffer.from(`${ipPart}-${uaPart}`).toString("base64").slice(0, 32);
}

export async function getVisitorCount() {
  return await redis.scard(UNIQUE_VISITORS_KEY);
}

export async function trackVisit(visitorId: string) {
  await redis.sadd(UNIQUE_VISITORS_KEY, visitorId);
}

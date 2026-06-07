import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

import { generateVisitorId, getVisitorCount, trackVisit } from "@/lib/visitors";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const fingerprint = body.fingerprint as string | undefined;

    const header = await headers();
    const userAgent = header.get("user-agent");
    const ip = getClientIP(request);

    const visitorId = generateVisitorId(ip, userAgent, fingerprint);
    await trackVisit(visitorId);
    const uniqueVisitorCount = await getVisitorCount();

    return NextResponse.json({
      success: true,
      uniqueVisitorCount,
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);

    try {
      const uniqueVisitorCount = await getVisitorCount();
      return NextResponse.json({
        success: true,
        uniqueVisitorCount,
      });
    } catch {
      return NextResponse.json(
        {
          success: false,
          uniqueVisitorCount: 0,
          error: "Failed to track visitor",
        },
        { status: 500 },
      );
    }
  }
}

function getClientIP(request: NextRequest) {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) return xForwardedFor.split(",")[0].trim();

  const xRealIP = request.headers.get("x-real-ip");
  if (xRealIP) return xRealIP.trim();

  return null;
}

export async function generateBrowserFingerprint() {
  if (typeof window === "undefined") {
    return "";
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.textBaseline = "top";
    ctx.font = "14px Arial";
    ctx.fillText("Browser fingerprint", 2, 2);
  }

  const deviceMemory =
    "deviceMemory" in navigator
      ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 0
      : 0;

  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    navigator.platform,
    navigator.hardwareConcurrency || 0,
    `${screen.width}x${screen.height}`,
    new Date().getTimezoneOffset(),
    canvas.toDataURL(),
    deviceMemory,
  ].join("|");

  const encoded = new TextEncoder().encode(fingerprint);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  const hash = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hash;
}

export async function getOrCreateVisitorId() {
  if (typeof window === "undefined") {
    return "";
  }

  const STORAGE_KEY = "visitor_id";
  let visitorId = localStorage.getItem(STORAGE_KEY);

  if (!visitorId) {
    visitorId = await generateBrowserFingerprint();
    localStorage.setItem(STORAGE_KEY, visitorId);
  }

  return visitorId;
}

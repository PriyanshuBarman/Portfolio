"use client";

import { useEffect, useState } from "react";

import { getOrCreateVisitorId } from "@/lib/fingerprint";
import { cn } from "@/lib/utils";

export function VisitorCount({ className }: { className?: string }) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function trackAndFetchStats() {
      try {
        const fingerprint = await getOrCreateVisitorId();

        const response = await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fingerprint }),
        });

        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.uniqueVisitorCount || 0);
        }
      } catch (error) {
        console.error("Failed to fetch visitor stats:", error);
      } finally {
        setIsLoading(false);
      }
    }

    trackAndFetchStats();
  }, []);

  if (isLoading || !visitorCount) {
    return null;
  }

  return (
    <div className={cn("tabular-nums", className)}>
      <span className="font-medium">{visitorCount?.toLocaleString()}</span>{" "}
      visitors
    </div>
  );
}

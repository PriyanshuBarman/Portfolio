import type { Metadata } from "next";
import { ArrowLeftIcon, Home09Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { LinkButton } from "@/components/ui/link-button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Empty>
        <EmptyHeader>
          <EmptyTitle className="mask-b-from-20% mask-b-to-80% text-9xl font-extrabold">
            404
          </EmptyTitle>
          <EmptyDescription className="text-foreground/80 -mt-4 text-nowrap">
            The page you&apos;re looking for might have been <br />
            moved or doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="mt-2">
          <div className="flex gap-2">
            <LinkButton href="/" size="lg">
              <HugeiconsIcon strokeWidth={2} icon={Home09Icon} />
              Go Home
            </LinkButton>

            <LinkButton href="/" size="lg" variant="outline">
              <HugeiconsIcon strokeWidth={2} icon={ArrowLeftIcon} /> Go Back
            </LinkButton>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}

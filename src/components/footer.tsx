import { Suspense } from "react";

import { CopyrightYear } from "./copyright-year";
import { VisitorCount } from "./visitor-count";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-2 border-t px-4 pt-6 pb-18 sm:flex-row sm:justify-between">
      <span className="text-muted-foreground text-sm">
        <Suspense>
          <CopyrightYear />
        </Suspense>{" "}
        Priyanshu Barman.
      </span>
      <VisitorCount className="sm:text-md text-muted-foreground text-sm" />
    </footer>
  );
}

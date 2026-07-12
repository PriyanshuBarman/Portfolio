"use client";

import type { MouseEvent } from "react";

import { SECTIONS } from "@/lib/constants/sections";

/**
 * This component showcases how simple it is to build a scroll-spy / quick navigation component using
 * the experimental CSS features `scroll-target-group: auto` and the `:target-current` selector.
 *
 * To use or adapt this component:
 * 1. Add matching `id` attributes to your section tags (e.g., `<section id="about">`).
 * 2. Add those IDs to your SECTIONS constant, structured as an array of objects:
 *    `const SECTIONS = [{ name: "About", id: "about" }, ...]`
 * 3. To customize active colors/styles, modify the arbitrary selector values already present
 *    on the anchor tags (e.g., `[&:target-current]:bg-foreground`).
 */

export default function QuickNavigation() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="quick-navigation"
      aria-hidden="true"
      className="group fixed top-1/2 right-8 -translate-y-1/2 [scroll-target-group:auto] max-lg:hidden"
    >
      {/* Indicators */}
      <div className="flex flex-col gap-3">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            tabIndex={-1}
            href={`#${section.id}`}
            className="bg-ring/50 [&:target-current]:bg-foreground h-1 w-10 rounded-full transition-all duration-200 ease-in-out"
          />
        ))}
      </div>

      {/* Popover */}
      <div className="bg-accent absolute top-1/2 -right-4 hidden max-h-[50vh] w-3xs -translate-y-1/2 flex-col gap-2 overflow-y-auto rounded-2xl border p-3 transition-all duration-300 group-hover:flex">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            tabIndex={-1}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className="hover:bg-background [&:target-current]:bg-foreground [&:target-current]:text-background rounded-lg px-3 py-2 text-sm font-medium"
          >
            {section.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

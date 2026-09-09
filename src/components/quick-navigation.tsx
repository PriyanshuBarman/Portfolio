"use client";

import type { MouseEvent } from "react";

import { SECTIONS } from "@/config/sections";

/**
 * This component showcases how simple it is to build a scroll-spy / quick navigation component using
 * the experimental CSS features `scroll-target-group: auto` and the `:target-current` selector.
 *
 * To use or adapt this component:
 * 1. Add matching `id` attributes to your section tags (e.g., `<section id="about">`).
 * 2. Add those IDs to your SECTIONS constant, structured as an array of objects:
 *    `const SECTIONS = [
 *      { name: "About", id: "about", icon: UserIcon },
 *      { name: "Work Experience", id: "work-experience", icon: CodeFolderIcon },
 *      ...
 *    ]`
 * 3. To customize active colors/styles, modify the arbitrary selector values already present
 *    on the anchor tags (e.g., `[&:target-current]:bg-blue-600`).
 */

export default function QuickNavigation() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-hidden="true"
      className="group/nav fixed top-1/2 right-8 -translate-y-1/2 [scroll-target-group:auto] max-lg:hidden"
    >
      {/* Indicators */}
      <div className="flex flex-col gap-6">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            tabIndex={-1}
            href={`#${section.id}`}
            className="bg-ring/50 h-1 w-4 rounded-full transition-all duration-200 ease-in-out [&:target-current]:bg-blue-600"
          />
        ))}
      </div>

      {/* Popover */}
      <div className="bg-popover animate-in fade-in-50 shadow-accent absolute top-1/2 -right-6.25 hidden max-h-[50vh] w-68 -translate-y-1/2 flex-col overflow-y-auto rounded-2xl border p-3 shadow-2xl group-hover/nav:flex dark:shadow-none">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            tabIndex={-1}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className="group/item hover:text-foreground text-muted-foreground flex items-center gap-3 rounded-lg px-3 py-1 text-sm font-medium transition-all duration-200 ease-in-out [&:target-current]:text-blue-600"
          >
            {section.name}
            <span className="bg-ring/50 ml-auto h-1 w-4 rounded-2xl group-hover/item:bg-current group-[&:target-current]/item:bg-blue-600" />
          </a>
        ))}
      </div>
    </nav>
  );
}

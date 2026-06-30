"use client";

import type { MouseEvent } from "react";

import { SECTIONS } from "@/lib/constants/sections";

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
      className="group fixed top-1/2 right-8 -translate-y-1/2 max-lg:hidden"
    >
      {/* Indicator Bars */}
      <div className="flex flex-col gap-3">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            tabIndex={-1}
            href={`#${section.id}`}
            className="bg-ring/50 h-1 w-10 rounded-full transition-all duration-200 ease-in-out"
          />
        ))}
      </div>

      {/* Popover */}
      <div className="bg-accent absolute top-1/2 -right-4 hidden w-3xs -translate-y-1/2 flex-col gap-2 rounded-2xl border p-3 transition-all duration-300 group-hover:flex">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            tabIndex={-1}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className="hover:bg-background rounded-lg px-3 py-2 text-sm font-medium"
          >
            {section.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

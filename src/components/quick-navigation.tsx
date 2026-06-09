"use client";

import type { MouseEvent } from "react";

import { SECTIONS } from "@/lib/constants/sections";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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
      className="group fixed top-1/2 right-8 flex h-40 w-20 -translate-y-1/2 flex-col items-end justify-center gap-3 transition-all duration-300 ease-in-out hover:scale-140 hover:gap-2 max-lg:hidden"
    >
      {SECTIONS.map((section) => (
        <Tooltip key={section.id}>
          <TooltipTrigger
            render={
              <a
                tabIndex={-1}
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id)}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "inline-block h-1 w-10 group-hover:h-2 group-hover:opacity-75 hover:scale-120",
                )}
              />
            }
          />
          <TooltipContent side="left" sideOffset={14}>
            {section.name}
          </TooltipContent>
        </Tooltip>
      ))}
    </nav>
  );
}

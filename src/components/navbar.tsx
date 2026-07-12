"use client";

import { type MouseEvent } from "react";
import { CodeXmlIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import ThemeSwitcher from "@/components/theme-switcher";

export const SECTIONS = [
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Tech Stack",
    id: "tech-stack",
  },
  {
    name: "Socials",
    id: "socials",
  },
];

export default function Navbar() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-background/50 sticky top-0 z-50 backdrop-blur-xs">
      <div className="mx-auto flex max-w-3xl justify-between p-4">
        <LinkButton
          href="#"
          variant="ghost"
          className="px-0 text-lg italic sm:text-xl"
        >
          <HugeiconsIcon
            strokeWidth={2}
            icon={CodeXmlIcon}
            className="size-8"
          />
        </LinkButton>
        <div className="gap-3 max-sm:hidden">
          {SECTIONS.map((section) => (
            <Button
              variant="ghost"
              key={section.id}
              onClick={(e) => handleClick(e, section.id)}
            >
              {section.name}
            </Button>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

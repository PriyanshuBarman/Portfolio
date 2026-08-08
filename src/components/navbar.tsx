"use client";

import { type MouseEvent } from "react";

import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import PLogo from "./p-logo";

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
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
        <PLogo />
        <div className="gap-4 max-sm:hidden">
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

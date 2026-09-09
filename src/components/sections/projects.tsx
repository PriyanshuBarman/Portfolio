"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { PROJECTS } from "@/config/projects";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  const [isViewAll, setIsViewAll] = useState(false);

  const displayedProjects = isViewAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section
      id="projects"
      className="flex flex-col border-t border-dashed py-10"
    >
      <h2 className="text-xl font-semibold sm:text-2xl">Projects</h2>

      <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <Button
        onClick={() => setIsViewAll(!isViewAll)}
        size="lg"
        variant="secondary"
        className="border-border mx-auto mt-12 rounded-xl px-4 font-normal shadow-2xs"
      >
        {isViewAll ? "View less" : "View all"}
        <HugeiconsIcon
          icon={ChevronDownIcon}
          strokeWidth={2}
          className={cn("size-4.5", isViewAll && "rotate-180")}
        />
      </Button>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { projects } from "@/lib/constants/projects";
import { cn } from "@/lib/utils";
import ProjectCard from "../project-card";
import { Button } from "../ui/button";

export default function Projects() {
  const [isViewAll, setIsViewAll] = useState(false);

  const displayedProjects = isViewAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="flex flex-col border-t border-dashed px-4 py-12 sm:mt-6"
    >
      <h2 className="text-xl font-semibold sm:text-2xl">Proof of work</h2>

      <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <Button
        onClick={() => setIsViewAll(!isViewAll)}
        size="lg"
        variant="secondary"
        className="border-border hover:border-border/50 mx-auto mt-12 rounded-xl px-4 font-normal shadow-2xs hover:scale-99 hover:shadow-none"
      >
        {isViewAll ? "View less" : "View all"}{" "}
        <HugeiconsIcon
          icon={ChevronDownIcon}
          strokeWidth={2}
          className={cn("size-4.5", isViewAll && "rotate-180")}
        />
      </Button>
    </section>
  );
}

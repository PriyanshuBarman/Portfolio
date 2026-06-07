"use client";

import { useState } from "react";
import Image from "next/image";
import { LinkIcon } from "lucide-react";
import { FiGithub } from "react-icons/fi";

import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import ProjectDetailsModal from "./project-details-modal";
import { Badge } from "./ui/badge";
import { LinkButton } from "./ui/link-button";

export default function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-card cursor-pointer space-y-4 rounded-t-2xl rounded-b-3xl border p-2 pb-4 sm:space-y-6 sm:rounded-2xl"
      >
        <Image
          src={project.img}
          width={640}
          height={360}
          alt={project.name}
          className="aspect-video w-full rounded-xl sm:rounded-xl"
        />

        <div className="mt-2 px-3">
          {/* Card Heading */}
          <div>
            <h3 className="font-medium">{project.name}</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-normal">
              {project.description}
            </p>
          </div>

          {/* Card Footer */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              {project.techStack.slice(0, 5).map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger
                    render={
                      <Badge
                        variant="outline"
                        className={cn(
                          "bg-background -ml-3.5 size-7.5 cursor-pointer first:ml-0 [&_svg:not([class*='size-'])]:size-4.5!",
                        )}
                      >
                        <item.icon aria-hidden="true" />
                      </Badge>
                    }
                  />
                  <TooltipContent sideOffset={10}>{item.name}</TooltipContent>
                </Tooltip>
              ))}
              {project.techStack.length > 5 && (
                <Badge
                  variant="outline"
                  className={cn(
                    "bg-background -ml-4 size-7.5 cursor-pointer font-normal",
                  )}
                >
                  +{project.techStack.length - 5}
                </Badge>
              )}
            </div>

            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <LinkButton
                      href={project.githubLink}
                      size="icon"
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Github Repository"
                      className="border-border rounded-full text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub />
                    </LinkButton>
                  }
                />
                <TooltipContent sideOffset={10}>Github Repo</TooltipContent>
              </Tooltip>

              {project.siteLink && (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <LinkButton
                        href={project.siteLink}
                        size="icon"
                        variant="outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Website"
                        className="border-border rounded-full text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LinkIcon />
                      </LinkButton>
                    }
                  />
                  <TooltipContent sideOffset={10}>Visit Website</TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
      <ProjectDetailsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={project}
      />
    </>
  );
}

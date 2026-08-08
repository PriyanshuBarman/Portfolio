import { useState } from "react";
import {
  Link04Icon,
  UnfoldLessIcon,
  UnfoldMoreIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import { FiGithub } from "react-icons/fi";

import type { Project } from "@/types/project";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { LinkButton } from "@/components/ui/link-button";

type ProjectInfoDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project;
};

export default function ProjectDetailsModal({
  open,
  onOpenChange,
  project,
}: ProjectInfoDrawerProps) {
  const isMobile = useIsMobile("md");
  const [isTechStackHidden, setIsTechStackHidden] = useState(
    project.features.length > 4,
  ); // used only for drawer

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="pb-4 md:max-w-2xl md:rounded-3xl md:p-8!">
          <DrawerHeader className="mt-4 gap-4 text-start! md:mt-0">
            <div className="flex items-center justify-between">
              <DrawerTitle className="md:text-xl">{project.name}</DrawerTitle>
              <div className="flex items-center gap-2">
                <LinkButton
                  href={project.githubLink}
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Github Repository"
                  className="text-xs font-normal"
                >
                  <FiGithub />
                  Code
                </LinkButton>
                {project.siteLink && (
                  <LinkButton
                    href={project.siteLink}
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Website"
                    className="text-xs font-normal"
                  >
                    <HugeiconsIcon icon={Link04Icon} className="size-4.5" />
                    Visit Site
                  </LinkButton>
                )}
              </div>
            </div>
            <DrawerDescription className="sr-only">
              {project.description}
            </DrawerDescription>
          </DrawerHeader>
          <Content
            project={project}
            isTechStackHidden={isTechStackHidden}
            setIsTechStackHidden={setIsTechStackHidden}
            isMobile={isMobile}
          />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="pb-4 md:max-w-2xl md:rounded-3xl md:p-8!">
        <DialogHeader className="mt-4 gap-4 text-start! md:mt-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="md:text-xl">{project.name}</DialogTitle>
            <div className="flex items-center gap-2">
              <LinkButton
                href={project.githubLink}
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Github Repository"
                className="text-xs font-normal"
              >
                <FiGithub />
                Code
              </LinkButton>
              {project.siteLink && (
                <LinkButton
                  href={project.siteLink}
                  size="sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Website"
                  className="text-xs font-normal"
                >
                  <HugeiconsIcon icon={Link04Icon} className="size-4.5" />
                  Visit Site
                </LinkButton>
              )}
            </div>
          </div>
          <DialogDescription className="sr-only">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <Content
          project={project}
          isTechStackHidden={isTechStackHidden}
          setIsTechStackHidden={setIsTechStackHidden}
          isMobile={isMobile}
        />
      </DialogContent>
    </Dialog>
  );
}

type ContentProps = {
  project: Project;
  isTechStackHidden: boolean;
  setIsTechStackHidden: (hidden: boolean) => void;
  isMobile: boolean;
};

function Content({
  project,
  isTechStackHidden,
  setIsTechStackHidden,
  isMobile,
}: ContentProps) {
  return (
    <div className="mt-2 overflow-y-auto">
      <div className="space-y-4 px-4">
        <h3 className="font-medium">Features :</h3>
        <ul className="ml-4 list-inside list-decimal space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 space-y-4 px-4">
        <div
          onClick={() => setIsTechStackHidden(!isTechStackHidden)}
          className="flex items-center justify-between"
        >
          <h3 className="font-medium">Tech Stack :</h3>
          <Button
            size="icon"
            variant="outline"
            className="md:hidden"
            aria-label={
              isTechStackHidden ? "Show tech stack" : "Hide tech stack"
            }
          >
            {isTechStackHidden ? (
              <HugeiconsIcon strokeWidth={2} icon={UnfoldMoreIcon} />
            ) : (
              <HugeiconsIcon strokeWidth={2} icon={UnfoldLessIcon} />
            )}
          </Button>
        </div>

        {/* On Desktop always show tech stack */}
        <AnimatePresence initial={false}>
          {(!isTechStackHidden || !isMobile) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-2 flex flex-wrap gap-2"
            >
              {project.techStack.map((item) => (
                <Badge
                  key={item.name}
                  variant="outline"
                  className="h-7 cursor-pointer gap-1.5 font-normal"
                >
                  <item.icon aria-hidden="true" />
                  <span>{item.name}</span>
                </Badge>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  ChevronsLeftRightIcon,
  ChevronsRightLeftIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";

import { TECH_STACK } from "@/lib/constants/tech-stack";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function TechStack() {
  const isMobile = useIsMobile();
  const [showAllNames, setShowAllNames] = useState(false); // Whether to show names of all items or not
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleToggle = () => {
    setShowAllNames((prev) => !prev);
    setExpandedItem(null);
  };

  return (
    <section id="tech-stack" className="border-t border-dashed px-4 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl">Tech stack</h2>
        <Button
          onClick={handleToggle}
          size="xs"
          variant="secondary"
          className="font-normal"
        >
          {showAllNames ? (
            <HugeiconsIcon strokeWidth={2} icon={ChevronsRightLeftIcon} />
          ) : (
            <HugeiconsIcon strokeWidth={2} icon={ChevronsLeftRightIcon} />
          )}
          {showAllNames ? "Hide names" : "Show names"}
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 overflow-hidden">
        {TECH_STACK.map((item) => {
          const isExpanded = expandedItem === item.name || showAllNames;
          return (
            <motion.div
              key={item.name}
              layout={isMobile ? !showAllNames : true}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Badge
                onClick={() =>
                  setExpandedItem(expandedItem === item.name ? null : item.name)
                }
                variant="secondary"
                className={cn(
                  "cursor-pointer gap-2 [&_svg:not([class*='size-'])]:size-4!",
                  isExpanded
                    ? "h-10 px-3 sm:h-11 sm:px-4"
                    : "size-10 rounded-full sm:size-11",
                )}
              >
                <item.icon aria-hidden="true" />
                <span className={isExpanded ? "not-sr-only" : "sr-only"}>
                  {item.name}
                </span>
              </Badge>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

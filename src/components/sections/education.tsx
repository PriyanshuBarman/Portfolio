"use client";

import { useState } from "react";
import { UnfoldLessIcon, UnfoldMoreIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";

import { EDUCATION } from "@/lib/constants/education";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Education() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section id="education" className="border-t border-dashed px-4 py-10">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl">Education</h2>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                onClick={() => setIsCollapsed(!isCollapsed)}
                size="icon"
                variant="outline"
                aria-label={
                  isCollapsed
                    ? "Show education details"
                    : "Hide education details"
                }
              >
                {isCollapsed ? (
                  <HugeiconsIcon strokeWidth={2} icon={UnfoldMoreIcon} />
                ) : (
                  <HugeiconsIcon strokeWidth={2} icon={UnfoldLessIcon} />
                )}
              </Button>
            }
          />
          <TooltipContent sideOffset={10}>
            {isCollapsed ? "Show Education Details" : "Hide Education Details"}
          </TooltipContent>
        </Tooltip>
      </div>

      <AnimatePresence initial={false}>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ItemGroup className="pt-6">
              {EDUCATION.map((item) => (
                <Item key={item.course}>
                  <ItemMedia
                    role="listitem"
                    variant="icon"
                    className="ring-accent size-10 rounded-full ring-2 sm:size-11"
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      className="size-4.5 sm:size-5"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="line-clamp-2! font-[450] sm:text-lg">
                      {item.board}
                    </ItemTitle>
                    <ItemDescription>{item.course}</ItemDescription>
                  </ItemContent>
                  <ItemContent>
                    <ItemDescription>{item.year}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

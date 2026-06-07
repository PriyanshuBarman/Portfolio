"use client";

import { useState } from "react";
import {
  BuildingIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { EDUCATION } from "@/lib/constants/education";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
                variant="ghost"
                className="sm:border-border"
                aria-label={
                  isCollapsed
                    ? "Show education details"
                    : "Hide education details"
                }
              >
                {isCollapsed ? <ChevronsUpDownIcon /> : <ChevronsDownUpIcon />}
              </Button>
            }
          />
          <TooltipContent sideOffset={10}>
            {isCollapsed ? "View Education Details" : "Hide Education Details"}
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
                    className="ring-accent size-10 rounded-full ring-2"
                  >
                    <BuildingIcon className="size5" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle className="line-clamp-2! font-normal sm:text-lg">
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

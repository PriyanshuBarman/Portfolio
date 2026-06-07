"use client";

import { useEffect } from "react";
import type { VariantProps } from "class-variance-authority";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useHotkeys } from "react-hotkeys-hook";

import { useMetaColor } from "@/hooks/use-meata-color";
import { Button, type buttonVariants } from "@/components/ui/button";

import { Kbd } from "./ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type ThemeToggleProps = {
  className?: string;
  disableTooltip?: boolean;
  enableHotKey?: boolean;
  showThemeIcon?: boolean;
} & VariantProps<typeof buttonVariants>;

export default function ThemeToggle({
  className,
  variant = "outline",
  size = "icon",
  disableTooltip = false,
  enableHotKey = false,
  showThemeIcon = false,
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { setMetaColor, metaColor } = useMetaColor();

  useEffect(() => {
    setMetaColor(metaColor);
  }, [metaColor, setMetaColor]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useHotkeys("d", toggleTheme, {
    enabled: enableHotKey,
  });

  if (disableTooltip) {
    return (
      <Button
        onClick={toggleTheme}
        variant={variant}
        size={size}
        className={className}
      >
        {showThemeIcon ? (
          <ThemeIcon />
        ) : (
          <>
            <SunIcon className="h-[1.2rem] w-[1.2rem] scale-0 -rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
          </>
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            onClick={toggleTheme}
            variant={variant}
            size={size}
            className={className}
          >
            {showThemeIcon ? (
              <ThemeIcon />
            ) : (
              <>
                <SunIcon className="h-[1.2rem] w-[1.2rem] scale-0 -rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
              </>
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        }
      />
      <TooltipContent sideOffset={10}>
        {resolvedTheme === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"}
        <Kbd>D</Kbd>
      </TooltipContent>
    </Tooltip>
  );
}

function ThemeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4.5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 3l0 18" />
      <path d="M12 9l4.65 -4.65" />
      <path d="M12 14.3l7.37 -7.37" />
      <path d="M12 19.6l8.85 -8.85" />
    </svg>
  );
}

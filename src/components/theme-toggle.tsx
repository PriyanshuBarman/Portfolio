"use client";

import { useEffect } from "react";
import type { VariantProps } from "class-variance-authority";
import { useTheme } from "next-themes";
import { useHotkeys } from "react-hotkeys-hook";

import { cn } from "@/lib/utils";
import { useMetaColor } from "@/hooks/use-meata-color";
import { Button, type buttonVariants } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

// =============== Icons ===============

function MoonIcon({ className }: { className?: string }) {
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
      className={className}
    >
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
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
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function ThemeIcon({ className }: { className?: string }) {
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
      className={cn("size-4.5", className)}
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

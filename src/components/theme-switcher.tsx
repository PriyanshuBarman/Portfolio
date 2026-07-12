"use client";

import { useSyncExternalStore, type JSX } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { LuMonitor, LuMoon, LuSun } from "react-icons/lu";

const THEME_OPTIONS = [
  {
    icon: <LuMonitor className="z-10" />,
    value: "system",
  },
  {
    icon: <LuSun className="z-10" />,
    value: "light",
  },
  {
    icon: <LuMoon className="z-10" />,
    value: "dark",
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!isMounted) {
    return <div className="flex h-8.5 w-25.5" />;
  }

  return (
    <motion.div
      key={String(isMounted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-background ring-border inline-flex h-fit items-center gap-1 overflow-clip rounded-full p-0.5 ring-1"
      role="radiogroup"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </motion.div>
  );
}

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}) {
  return (
    <button
      data-active={isActive}
      className="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground relative flex size-7.5 items-center justify-center rounded-full transition-[color] [&_svg]:size-4"
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}
      {isActive && (
        <motion.span
          layoutId="theme-option"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="bg-accent absolute inset-0 rounded-full border"
        />
      )}
    </button>
  );
}

import ThemeSwitcher from "@/components/theme-switcher";
import PLogo from "./p-logo";

export default function SiteHeader() {
  return (
    <header className="bg-background/50 sticky top-0 z-50 backdrop-blur-xs">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
        <PLogo />
        <ThemeSwitcher />
      </div>
    </header>
  );
}

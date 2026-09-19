import { LinkButton } from "@/components/ui/link-button";

export default function PLogo() {
  return (
    <LinkButton
      href="/"
      variant="ghost"
      className="size-11 overflow-hidden rounded-full sm:size-12"
    >
      <img
        alt="p logo"
        src="/p-logo.png"
        className="size-full scale-150 object-cover dark:hidden"
      />

      <img
        alt="p logo"
        src="/p-logo-dark.png"
        className="hidden size-full scale-150 object-cover dark:block"
      />
    </LinkButton>
  );
}

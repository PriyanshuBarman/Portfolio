import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkButton } from "@/components/ui/link-button";

export default function PLogo() {
  return (
    <LinkButton
      href="#"
      size="icon-lg"
      variant="ghost"
      className="size-12 overflow-hidden rounded-full"
    >
      <Avatar className="size-full after:border-transparent dark:hidden">
        <AvatarImage alt="p logo" src="/p-logo.png" className="scale-150" />
        <AvatarFallback />
      </Avatar>
      <Avatar className="hidden size-full after:border-transparent dark:block">
        <AvatarImage
          alt="p logo"
          src="/p-logo-dark.png"
          className="scale-150"
        />
        <AvatarFallback />
      </Avatar>
    </LinkButton>
  );
}

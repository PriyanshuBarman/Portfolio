import React from "react";
import Link from "next/link";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants> &
  Omit<React.ComponentProps<"a">, "href" | "className" | "children">;

function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/i.test(href);
}

function LinkButton({
  href,
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: LinkButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (isExternalHref(href)) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export { LinkButton };

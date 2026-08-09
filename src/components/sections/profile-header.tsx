import Image from "next/image";
import { File02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RESUME_LINK } from "@/constants/site";
import { SOCIALS } from "@/constants/socials";
import { LinkButton } from "../ui/link-button";

export default function ProfileHeader() {
  return (
    <section id="profile-header" className="scroll-mt-34!">
      <div className="relative mt-14 pb-8 sm:mt-18 sm:flex sm:gap-12">
        <Image
          src="/avatar.jpeg"
          width={1546}
          height={1450}
          alt="avatar"
          className="bg-accent size-32 rounded-full object-cover sm:size-43"
        />

        <div>
          {/* Title & Description */}
          <div>
            <div className="mt-4 flex items-center gap-2 sm:gap-4">
              <h1 className="text-[1.625rem] font-semibold tracking-tight sm:text-4xl sm:tracking-normal">
                Priyanshu Barman
              </h1>
              <TbRosetteDiscountCheckFilled className="size-5 text-blue-500 sm:size-7" />
            </div>
            <p className="text-muted-foreground mt-1 ml-0.5 tracking-tight sm:mt-3 sm:text-lg">
              Full-Stack Developer • India
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-3 flex items-center gap-3 sm:mt-5">
            <LinkButton
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8.5 rounded-xl px-3 text-xs font-normal sm:h-9"
            >
              <HugeiconsIcon icon={File02Icon} />
              Resume
            </LinkButton>

            {SOCIALS.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger
                  render={
                    <LinkButton
                      href={social.link}
                      size="icon-lg"
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        social.name === "Gmail"
                          ? "Send me an email"
                          : `Visit ${social.name} profile`
                      }
                      className="rounded-full shadow-xs"
                    >
                      <social.icon aria-hidden="true" />
                    </LinkButton>
                  }
                />
                <TooltipContent sideOffset={10}>{social.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

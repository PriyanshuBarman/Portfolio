import Image from "next/image";
import { LicenseIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { RESUME_LINK } from "@/lib/constants/site";
import { SOCIALS } from "@/lib/constants/socials";
import { LinkButton } from "@/components/ui/link-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function NewProfileHeader() {
  return (
    <section id="profile-header" className="scroll-mt-36!">
      <div className="relative mt-14 px-4 pb-10 sm:mt-18 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between sm:gap-8">
        {/* Group 1  */}
        <Image
          src="/avatar.png"
          width={1024}
          height={1024}
          alt="avatar"
          className="bg-accent size-32 rounded-full sm:size-44"
        />

        {/* Group 2 - Title,Description & Buttons */}
        <div>
          <h1 className="mt-6 text-2xl font-semibold sm:mt-8 sm:text-4xl">
            Hey, I&apos;m Priyanshu
          </h1>

          <div className="mt-3 space-y-4 sm:mt-6 sm:space-y-8">
            <p className="text-muted-foreground sm:text-lg">
              I build Full-Stack applications end-to-end, from database schema
              to deployed UI. Passionate about writing clean, maintainable code.
            </p>

            {/* Buttons */}
            <div className="space-x-2 sm:space-x-3">
              <LinkButton
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8.5 rounded-xl px-3 text-xs font-normal hover:scale-99 sm:h-9"
              >
                <HugeiconsIcon icon={LicenseIcon} />
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
                          social.name === "Email"
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
      </div>
    </section>
  );
}

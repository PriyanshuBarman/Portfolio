import Image from "next/image";
import { PaperclipIcon } from "lucide-react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

import { RESUME_LINK } from "@/lib/constants/site";
import { SOCIALS } from "@/lib/constants/socials";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import ProfileCover from "../profile-cover";
import ThemeToggle from "../theme-toggle";
import { Badge } from "../ui/badge";
import { BorderBeam } from "../ui/border-beam";
import { LinkButton } from "../ui/link-button";

export default function ProfileHeader() {
  return (
    <section id="profile-header">
      <ProfileCover />

      <div className="relative -mt-14 px-4 pb-8 sm:-mt-18">
        <Image
          src="/avatar.png"
          width={1024}
          height={1024}
          alt="avatar"
          className="ring-background bg-accent size-30 rounded-full ring-2 sm:size-38"
        />

        {/* Title & Description */}
        <div>
          <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">
              Priyanshu Barman
            </h1>
            <TbRosetteDiscountCheckFilled className="size-5 text-blue-500 sm:size-6" />
          </div>
          <p className="text-muted-foreground mt-1 ml-0.5 tracking-tight sm:mt-2">
            Full-Stack Developer • India
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-3 flex flex-col-reverse gap-4 sm:mt-4 sm:flex sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <LinkButton
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8.5 rounded-xl px-3 text-xs font-normal hover:scale-99 sm:h-9"
            >
              <PaperclipIcon />
              Resume
            </LinkButton>
            <Badge
              variant="outline"
              className="pointer-events-none relative h-8 gap-2 rounded-xl bg-[#009e4] px-3 text-xs sm:h-9"
            >
              <div className="size-1.75 rounded-full bg-green-600" />
              Available for work
              <BorderBeam colorFrom="#009e44" colorTo="#009e44" />
            </Badge>
          </div>

          <div className="space-x-2 sm:bottom-12 sm:ml-auto sm:space-x-3">
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
            <ThemeToggle
              enableHotKey
              size="icon-lg"
              variant="outline"
              className="rounded-full shadow-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

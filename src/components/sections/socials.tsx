import { SOCIALS } from "@/lib/constants/socials";
import { LinkButton } from "@/components/ui/link-button";

export default function Socials() {
  return (
    <section
      id="socials"
      className="flex flex-col items-center justify-center border-t border-dashed py-8 sm:pt-10 sm:pb-16"
    >
      <h2 className="text-lg font-semibold sm:text-2xl sm:tracking-tight">
        Let&apos;s Connect
      </h2>
      <p className="text-muted-foreground mt-2 tracking-tight sm:mt-3 sm:font-[450]">
        Find me on these platforms
      </p>

      <div className="mt-4 space-x-4 sm:mt-5">
        {SOCIALS.map((social) => (
          <LinkButton
            key={social.name}
            href={social.link}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={
              social.name === "Gmail"
                ? "Send me an email"
                : `Visit ${social.name} profile`
            }
            className="border-border size-10 rounded-full sm:h-11 sm:w-auto sm:rounded-xl sm:px-4"
          >
            <social.icon aria-hidden="true" />
            <span className="max-sm:sr-only">{social.name}</span>
          </LinkButton>
        ))}
      </div>
    </section>
  );
}

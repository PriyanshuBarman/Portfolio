import { EXPERIENCE } from "@/config/experience";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-dashed py-10">
      <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>

      <ItemGroup className="pt-6">
        {EXPERIENCE.map(({ company, role, location, period, isCurrent }) => (
          <Item key={`${company.name}-${role}`} className="px-0 sm:gap-4">
            <ItemMedia>
              <Avatar className="size-9 after:border-none sm:size-10">
                <AvatarImage src={company.logo} alt={company.name} />
                <AvatarFallback />
              </Avatar>
            </ItemMedia>

            <ItemContent>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <ItemTitle className="sm:text-lg">{company.name}</ItemTitle>
                </a>

                {isCurrent && (
                  <div>
                    <span className="sr-only">Current</span>
                    <span className="relative flex size-2.5 items-center justify-center">
                      <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-blue-600 opacity-50" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-blue-600" />
                    </span>
                  </div>
                )}
              </div>
              <ItemDescription className="text-xs sm:text-sm">
                {role}
              </ItemDescription>
            </ItemContent>
            <ItemContent className="items-end">
              <ItemDescription className="text-xs sm:text-sm">
                {location}
              </ItemDescription>
              <ItemDescription className="text-xs sm:text-sm">
                {period}
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </section>
  );
}

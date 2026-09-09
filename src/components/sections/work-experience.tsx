import { WORK_EXPERIENCE } from "@/config/work-experience";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="border-t border-dashed py-10">
      <h2 className="text-xl font-semibold sm:text-2xl">Work Experience</h2>

      <ItemGroup className="pt-6">
        {WORK_EXPERIENCE.map(({ company, role, location, period }) => (
          <Item key={`${company.name}-${role}`} className="px-0 sm:gap-4">
            <ItemMedia>
              <Avatar className="size-8 after:border-none sm:size-10">
                <AvatarImage src={company.logo} alt={company.name} />
                <AvatarFallback />
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ItemTitle className="font-[450] sm:text-lg">
                  {company.name}
                </ItemTitle>
              </a>
              <ItemDescription className="text-xs sm:text-sm">
                {role}
              </ItemDescription>
            </ItemContent>
            <ItemContent>
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

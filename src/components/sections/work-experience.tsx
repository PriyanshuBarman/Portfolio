import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { WORK_EXPERIENCE } from "@/constants/work-experience";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="border-t border-dashed py-10">
      <h2 className="text-xl font-semibold sm:text-2xl">Work Experience</h2>

      <ItemGroup className="pt-6">
        {WORK_EXPERIENCE.map((experience) => (
          <Item
            key={`${experience.company}-${experience.role}`}
            className="px-0"
          >
            <ItemMedia>
              <Avatar className="size-8 after:border-none sm:size-10">
                <AvatarImage src={experience.logo} alt={experience.company} />
                <AvatarFallback />
              </Avatar>
            </ItemMedia>
            <ItemContent>
              {experience.link ? (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ItemTitle className="font-[450] sm:text-lg">
                    {experience.company}
                  </ItemTitle>
                </a>
              ) : (
                <ItemTitle className="font-[450] sm:text-lg">
                  {experience.company}
                </ItemTitle>
              )}
              <ItemDescription className="text-xs sm:text-sm">
                {experience.role}
              </ItemDescription>
            </ItemContent>
            <ItemContent>
              <ItemDescription className="text-xs sm:text-sm">
                {experience.location}
              </ItemDescription>
              <ItemDescription className="text-xs sm:text-sm">
                {experience.period}
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </section>
  );
}

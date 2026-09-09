import {
  AtIcon,
  CodeFolderIcon,
  CodeXmlIcon,
  GitPullRequestIcon,
  GraduationCapIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

interface Section {
  id: string;
  name: string;
  icon: IconSvgElement;
}

export const SECTIONS = [
  {
    id: "profile-header",
    name: "About",
    icon: UserIcon,
  },
  {
    id: "projects",
    name: "Projects",
    icon: CodeFolderIcon,
  },
  {
    id: "tech-stack",
    name: "Tech Stack",
    icon: CodeXmlIcon,
  },
  {
    id: "github-contributions",
    name: "GitHub Contributions",
    icon: GitPullRequestIcon,
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCapIcon,
  },
  {
    id: "socials",
    name: "Socials",
    icon: AtIcon,
  },
] as const satisfies readonly Section[];

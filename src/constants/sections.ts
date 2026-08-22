import {
  AtIcon,
  CodeFolderIcon,
  CodeXmlIcon,
  GitPullRequestIcon,
  GraduationCapIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";

export const SECTIONS = [
  {
    name: "About",
    id: "profile-header",
    icon: UserIcon,
  },
  {
    name: "Projects",
    id: "projects",
    icon: CodeFolderIcon,
  },
  {
    name: "Tech Stack",
    id: "tech-stack",
    icon: CodeXmlIcon,
  },
  {
    name: "GitHub Contributions",
    id: "github-contributions",
    icon: GitPullRequestIcon,
  },
  {
    name: "Education",
    id: "education",
    icon: GraduationCapIcon,
  },
  {
    name: "Socials",
    id: "socials",
    icon: AtIcon,
  },
] as const;

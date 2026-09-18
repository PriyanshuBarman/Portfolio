interface Section {
  id: string;
  name: string;
}

export const SECTIONS = [
  {
    id: "profile-header",
    name: "About",
  },
  {
    id: "experience",
    name: "Experience",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "tech-stack",
    name: "Tech Stack",
  },
  {
    id: "github-contributions",
    name: "GitHub Contributions",
  },
  {
    id: "education",
    name: "Education",
  },
] as const satisfies readonly Section[];

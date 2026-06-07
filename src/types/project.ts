import type { IconType } from "react-icons";

export interface Project {
  name: string;
  description: string;
  img: string;
  githubLink: string;
  siteLink?: string;
  techStack: {
    name: string;
    icon: IconType;
    iconColor?: string;
  }[];
  features: string[];
}

export type Projects = Project[];

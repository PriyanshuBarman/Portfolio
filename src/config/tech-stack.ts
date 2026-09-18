import { SKILLS, type SkillItem } from "./skills";

export type TechStack = SkillItem;

export const TECH_STACK = [
  SKILLS.TypeScript,
  SKILLS.JavaScript,
  SKILLS["Next.js"],
  SKILLS.React,

  SKILLS["Node.js"],
  SKILLS["Express.js"],
  SKILLS["Socket.IO"],

  SKILLS.Redis,
  SKILLS.MySQL,
  SKILLS.PostgreSQL,
  SKILLS.MongoDB,
  SKILLS.Prisma,
  SKILLS.Drizzle,
  SKILLS.Mongoose,

  SKILLS["TanStack Query"],
  SKILLS.Zustand,
  SKILLS["Redux Toolkit"],

  SKILLS.ShadcnUI,
  SKILLS["Base UI"],
  SKILLS["Radix UI"],
  SKILLS["Tailwind CSS"],
  SKILLS["Framer Motion"],
  SKILLS.Zod,
  SKILLS.JWT,

  SKILLS.Git,
  SKILLS.GitHub,
  SKILLS["GitHub Actions"],
  SKILLS.Postman,

  SKILLS.Vercel,
  SKILLS.Netlify,
  SKILLS.Render,
  SKILLS["Cleaver Cloud"],
] as const satisfies readonly TechStack[];

import type { IconType } from "react-icons";
import {
  SiBaseui,
  SiClevercloud,
  SiDrizzle,
  SiExpress,
  SiFoodpanda,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiRender,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";

export type Skill =
  // Languages & Core
  | "TypeScript"
  | "JavaScript"

  // Frontend
  | "Next.js"
  | "React"
  | "React.js"
  | "React Router"

  // Backend & Runtime
  | "Node.js"
  | "Express.js"
  | "Socket.IO"
  | "Socket.io"

  // Databases & ORMs
  | "Redis"
  | "MySQL"
  | "PostgreSQL"
  | "MongoDB"
  | "Mongodb"
  | "Prisma"
  | "Drizzle"
  | "Mongoose"

  // State Management & Data Fetching
  | "TanStack Query"
  | "Tanstack Query"
  | "Zustand"
  | "Redux Toolkit"

  // UI & Styling
  | "ShadcnUI"
  | "Base UI"
  | "Radix UI"
  | "Tailwind CSS"
  | "Tailwind"
  | "Framer Motion"

  // Validation & Auth
  | "Zod"
  | "JWT"

  // Tools & DevOps
  | "Git"
  | "GitHub"
  | "GitHub Actions"
  | "Github Actions"
  | "Postman"

  // Deployment & Cloud
  | "Vercel"
  | "Netlify"
  | "Render"
  | "Cleaver Cloud";

export interface SkillItem {
  name: Skill;
  icon: IconType;
  iconColor: string;
}

export const SKILLS = {
  // Languages & Core
  TypeScript: { name: "TypeScript", icon: SiTypescript, iconColor: "#3178C6" },
  JavaScript: { name: "JavaScript", icon: SiJavascript, iconColor: "#F7DF1E" },

  // Frontend
  "Next.js": { name: "Next.js", icon: SiNextdotjs, iconColor: "#000000" },
  React: { name: "React", icon: SiReact, iconColor: "#61DAFB" },
  "React.js": { name: "React.js", icon: SiReact, iconColor: "#61DAFB" },
  "React Router": {
    name: "React Router",
    icon: SiReactrouter,
    iconColor: "#CA4245",
  },

  // Backend & Runtime
  "Node.js": { name: "Node.js", icon: SiNodedotjs, iconColor: "#5FA04E" },
  "Express.js": { name: "Express.js", icon: SiExpress, iconColor: "#000000" },
  "Socket.IO": { name: "Socket.IO", icon: SiSocketdotio, iconColor: "#010101" },
  "Socket.io": { name: "Socket.io", icon: SiSocketdotio, iconColor: "#010101" },

  // Databases & ORMs
  Redis: { name: "Redis", icon: SiRedis, iconColor: "#FF4438" },
  MySQL: { name: "MySQL", icon: SiMysql, iconColor: "#4479A1" },
  PostgreSQL: { name: "PostgreSQL", icon: SiPostgresql, iconColor: "#4169E1" },
  MongoDB: { name: "MongoDB", icon: SiMongodb, iconColor: "#47A248" },
  Mongodb: { name: "Mongodb", icon: SiMongodb, iconColor: "#47A248" },
  Prisma: { name: "Prisma", icon: SiPrisma, iconColor: "#2D3748" },
  Drizzle: { name: "Drizzle", icon: SiDrizzle, iconColor: "#C5F74F" },
  Mongoose: { name: "Mongoose", icon: SiMongoose, iconColor: "#880000" },

  // State Management & Data Fetching
  "TanStack Query": {
    name: "TanStack Query",
    icon: SiReactquery,
    iconColor: "#000000",
  },
  "Tanstack Query": {
    name: "Tanstack Query",
    icon: SiReactquery,
    iconColor: "#000000",
  },
  Zustand: { name: "Zustand", icon: SiFoodpanda, iconColor: "#000000" },
  "Redux Toolkit": {
    name: "Redux Toolkit",
    icon: SiRedux,
    iconColor: "#764ABC",
  },

  // UI & Styling
  ShadcnUI: { name: "ShadcnUI", icon: SiShadcnui, iconColor: "#000000" },
  "Base UI": { name: "Base UI", icon: SiBaseui, iconColor: "#EDEDED" },
  "Radix UI": { name: "Radix UI", icon: SiRadixui, iconColor: "#000000" },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    iconColor: "#06B6D4",
  },
  Tailwind: { name: "Tailwind", icon: SiTailwindcss, iconColor: "#06B6D4" },
  "Framer Motion": {
    name: "Framer Motion",
    icon: SiFramer,
    iconColor: "#0055FF",
  },

  // Validation & Auth
  Zod: { name: "Zod", icon: SiZod, iconColor: "#408AFF" },
  JWT: { name: "JWT", icon: SiJsonwebtokens, iconColor: "#000000" },

  // Tools & DevOps
  Git: { name: "Git", icon: SiGit, iconColor: "#F03C2E" },
  GitHub: { name: "GitHub", icon: SiGithub, iconColor: "#181717" },
  "GitHub Actions": {
    name: "GitHub Actions",
    icon: SiGithubactions,
    iconColor: "#2088FF",
  },
  "Github Actions": {
    name: "Github Actions",
    icon: SiGithubactions,
    iconColor: "#2088FF",
  },
  Postman: { name: "Postman", icon: SiPostman, iconColor: "#FF6C37" },

  // Deployment & Cloud
  Vercel: { name: "Vercel", icon: SiVercel, iconColor: "#000000" },
  Netlify: { name: "Netlify", icon: SiNetlify, iconColor: "#00C7B7" },
  Render: { name: "Render", icon: SiRender, iconColor: "#000000" },
  "Cleaver Cloud": {
    name: "Cleaver Cloud",
    icon: SiClevercloud,
    iconColor: "#171C36",
  },
} as const satisfies Record<Skill, SkillItem>;

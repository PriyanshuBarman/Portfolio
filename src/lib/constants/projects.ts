import {
  SiExpress,
  SiFoodpanda,
  SiGithubactions,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

import type { Projects } from "@/types/project";
import { GITHUB_LINK } from "./site";

export const PROJECTS: Projects = [
  {
    name: "Vestify / 135+ users",
    img: "/vestify.webp",
    siteLink: "https://vestify.priyanshux.me?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/vestify`,
    description:
      "A virtual investment platform that simulates real-world mutual fund investing. Featuring a Groww-inspired app UI.",
    techStack: [
      { name: "React.js", icon: SiReact, iconColor: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, iconColor: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, iconColor: "#000000" },
      { name: "Prisma", icon: SiPrisma, iconColor: "#2D3748" },
      { name: "MySQL", icon: SiMysql, iconColor: "#4479A1" },
      {
        name: "Github Actions",
        icon: SiGithubactions,
        iconColor: "#2088FF",
      },
      { name: "Tanstack Query", icon: SiReactquery, iconColor: "#000000" },
      { name: "Redux toolkit", icon: SiRedux, iconColor: "#764ABC" },
      { name: "ShadcnUI", icon: SiShadcnui, iconColor: "#000000" },
      { name: "Zod", icon: SiZod, iconColor: "#408AFF" },
    ],
    features: [
      "Invest in mutual funds using virtual money with zero financial risk.",
      "Start virtual SIPs in mutual funds and learn how systematic investing works.",
      "Step-Up SIPs with automatic fixed amount or percentage based SIP increases.",
      "Track portfolio growth, returns, and performance across market conditions.",
      "See how other investors are performing, their investment activity & portfolio allocation.",
      "Send, receive, Scan & Pay your virtual money with others instantly—just like UPI.",
      "Groww app inspired UI that feels like a real investing app.",
    ],
  },
  {
    name: "Progoti",
    img: "/progoti.webp",
    siteLink: "https://progoti.in?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/progoti`,
    description:
      "An educational platform for West Bengal board exams (Previous year questions, Mock tests, MCQ tests, Suggestions etc.)",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, iconColor: "#000000" },
      { name: "TypeScript", icon: SiTypescript, iconColor: "#3178C6" },
      { name: "Mongodb", icon: SiMongodb, iconColor: "#47A248" },
      { name: "Zustand", icon: SiFoodpanda, iconColor: "#000000" },
      { name: "ShadcnUI", icon: SiShadcnui, iconColor: "#000000" },
    ],
    features: [
      "Chapter-wise MCQ practice.",
      "Mock tests with scoring and performance tracking.",
      "Previous year question papers.",
      "Subject-wise suggestions and exam-focused study resources.",
    ],
  },
  {
    name: "Mutual Fund Api",
    img: "/mutual-fund-api.webp",
    githubLink: `${GITHUB_LINK}/Mutual-Fund-Api`,
    description:
      "A unified mutual fund API that aggregates data from MfApi.in and unofficial Kuvera API into a single structured source, powering Vestify.",
    techStack: [
      { name: "Node.js", icon: SiNodedotjs, iconColor: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, iconColor: "#000000" },
      { name: "MySQL", icon: SiMysql, iconColor: "#4479A1" },
      { name: "Github Actions", icon: SiGithubactions, iconColor: "#2088FF" },
      { name: "Prisma", icon: SiPrisma, iconColor: "#2D3748" },
    ],
    features: [
      "Search API : Search funds by name, AMC, or category.",
      "Fund data API : Get detailed fund information by ISIN, code, or scheme code.",
      "Filter & Browse API : Filter and sort funds with advanced options and pagination.",
      "AMCs API : Get all fund houses with their rank, total funds managed by the AMC, and total AUM of the AMC.",
      "Categories API : Get all fund categories & subcategories, and get fund's rank in category with fund returns vs category average returns (1Y, 3Y, 5Y).",
      "Fund Managers API : Get all funds managed by specific fund managers.",
    ],
  },
  {
    name: "Prime Weather",
    img: "/primeweather.webp",
    siteLink: "https://weather.priyanshux.me?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/primeweather`,
    description:
      "A modern weather app with a sleek design and customizable widgets, geolocation, city search, etc.",
    techStack: [
      { name: "React.js", icon: SiReact, iconColor: "#61DAFB" },
      { name: "React Router", icon: SiReactrouter, iconColor: "#CA4245" },
      { name: "Tailwind", icon: SiTailwindcss, iconColor: "#06B6D4" },
    ],
    features: [
      "Clean and minimalist UI",
      "Get weather by your location or by searching for a city",
      "Hide or unhide widgets, and customize the dashboard according to your preference",
    ],
  },
  {
    name: "Qr Code Scanner",
    img: "/qr-code-scanner.webp",
    siteLink: "https://scan.priyanshux.me?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/QrCodeScanner`,
    description:
      "A QR code scanner built using qr-scanner package for Vestify. Later integrated into the main Vestify platform.",
    techStack: [
      { name: "React.js", icon: SiReact, iconColor: "#61DAFB" },
      { name: "ShadcnUI", icon: SiShadcnui, iconColor: "#000000" },
      { name: "Tailwind", icon: SiTailwindcss, iconColor: "#06B6D4" },
    ],
    features: [
      "Scan any QR code and get its content.",
      "Integrated into Vestify platform",
    ],
  },
];

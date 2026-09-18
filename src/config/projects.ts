import { GITHUB_LINK } from "./site";
import { SKILLS, type SkillItem } from "./skills";

export interface Project {
  name: string;
  img: string;
  siteLink: string;
  githubLink: string;
  description: string;
  features: string[];
  techStack: readonly SkillItem[];
}

export const PROJECTS = [
  {
    name: "Vestify / 170+ signups",
    img: "/projects/vestify.webp",
    siteLink: "https://vestify.priyanshux.me?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/vestify`,
    description:
      "A virtual investment platform that simulates real-world stocks & mutual fund investing. Featuring a Groww app inspired UI.",
    features: [
      "Invest in stocks & mutual funds using virtual money with zero financial risk.",
      "Start virtual SIPs and learn how systematic investing works.",
      "Step-Up SIPs with automatic fixed amount or percentage based SIP increases.",
      "Track portfolio growth, returns, and performance across market conditions.",
      "See how other investors are performing, their investment activity & portfolio allocation.",
      "Send, receive, Scan & Pay your virtual money with others instantly—just like UPI.",
      "Groww app inspired UI that feels like a real investing app.",
    ],
    techStack: [
      SKILLS["React.js"],
      SKILLS.TypeScript,
      SKILLS["Socket.io"],
      SKILLS["Node.js"],
      SKILLS["Express.js"],
      SKILLS.Prisma,
      SKILLS.MySQL,
      SKILLS["Github Actions"],
      SKILLS["Tanstack Query"],
      SKILLS["Redux Toolkit"],
      SKILLS.ShadcnUI,
      SKILLS.Zod,
    ],
  },
  {
    name: "ResizePedia",
    img: "/projects/resizepedia.webp",
    siteLink: "https://resizepedia.priyanshux.me?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/resizepedia`,
    description:
      "A privacy-first document & image toolkit for preparing files according to the requirements of different online applications and portals.",
    features: [
      "Fully client-side processing with no server uploads, files never leave the user's device.",
      "Automatic resizing, compression, and format conversion based on the specific requirements of each application portal.",
      "Additional tools including image cropper, resizer, rotator, compressor, image-to-PDF converter, and PDF compressor.",
      "Supports popular application presets such as PAN Card / SSC Exam Photo & Signature Resizer.",
    ],
    techStack: [
      SKILLS["Next.js"],
      SKILLS.TypeScript,
      SKILLS.PostgreSQL,
      SKILLS.Drizzle,
      SKILLS.ShadcnUI,
    ],
  },
  {
    name: "Progoti",
    img: "/projects/progoti.webp",
    siteLink: "https://progoti.in?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/progoti`,
    description:
      "An educational platform for West Bengal board exams (Previous year questions, Mock tests, MCQ tests, Suggestions etc.)",
    features: [
      "Chapter-wise MCQ practice.",
      "Mock tests with scoring and performance tracking.",
      "Previous year question papers.",
      "Subject-wise suggestions and exam-focused study resources.",
    ],
    techStack: [
      SKILLS["Next.js"],
      SKILLS.TypeScript,
      SKILLS.Mongodb,
      SKILLS.Zustand,
      SKILLS.ShadcnUI,
    ],
  },
  {
    name: "Mutual Fund Api",
    img: "/projects/mutual-fund-api.webp",
    githubLink: `${GITHUB_LINK}/Mutual-Fund-Api`,
    siteLink: "https://api.mf.priyanshux.me/api/v1/mutual-funds",
    description:
      "A unified mutual fund API that aggregates data from MfApi.in and unofficial Kuvera API into a single structured source, powering Vestify.",
    features: [
      "Search API : Search funds by name, AMC, or category.",
      "Fund data API : Get detailed fund information by ISIN, code, or scheme code.",
      "Filter & Browse API : Filter and sort funds with advanced options and pagination.",
      "AMCs API : Get all fund houses with their rank, total funds managed by the AMC, and total AUM of the AMC.",
      "Categories API : Get all fund categories & subcategories, and get fund's rank in category with fund returns vs category average returns (1Y, 3Y, 5Y).",
      "Fund Managers API : Get all funds managed by specific fund managers.",
    ],
    techStack: [
      SKILLS["Node.js"],
      SKILLS["Express.js"],
      SKILLS.MySQL,
      SKILLS["Github Actions"],
      SKILLS.Prisma,
    ],
  },
  {
    name: "Prime Weather",
    img: "/projects/primeweather.webp",
    siteLink: "https://weather.priyanshux.me?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/primeweather`,
    description:
      "A modern weather app with a sleek design and customizable widgets, geolocation, city search, etc.",
    features: [
      "Clean and minimalist UI",
      "Get weather by your location or by searching for a city",
      "Hide or unhide widgets, and customize the dashboard according to your preference",
    ],
    techStack: [SKILLS["React.js"], SKILLS["React Router"], SKILLS.Tailwind],
  },
  {
    name: "Qr Code Scanner",
    img: "/projects/qr-code-scanner.webp",
    siteLink: "https://scan.priyanshux.me?utm_source=portfolio",
    githubLink: `${GITHUB_LINK}/QrCodeScanner`,
    description:
      "A QR code scanner built using qr-scanner package for Vestify. Later integrated into the main Vestify platform.",
    features: [
      "Scan any QR code and get its content.",
      "Integrated into Vestify platform",
    ],
    techStack: [SKILLS["React.js"], SKILLS.ShadcnUI, SKILLS.Tailwind],
  },
] as const satisfies readonly Project[];

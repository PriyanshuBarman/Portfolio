interface WorkExperience {
  company: {
    name: string;
    logo: string;
    website: string;
  };
  role: string;
  location: string;
  period: string;
}

export const WORK_EXPERIENCE = [
  {
    company: {
      name: "CareerCafe",
      logo: "/companies/careercafe.webp",
      website: "https://www.careercafe.in",
    },
    role: "Full-Stack Developer Intern",
    location: "Remote",
    period: "Aug 2026 - Present",
  },
] as const satisfies readonly WorkExperience[];

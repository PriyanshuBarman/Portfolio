interface Experience {
  company: {
    name: string;
    logo: string;
    website: string;
  };
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
}

export const EXPERIENCE = [
  {
    company: {
      name: "CareerCafe",
      logo: "/companies/careercafe.png",
      website: "https://careercafe.in",
    },
    role: "Full-Stack Developer Intern",
    location: "Remote",
    period: "Aug 2026 - Present",
    isCurrent: true,
  },
] as const satisfies readonly Experience[];

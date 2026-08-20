type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type SnapshotItem = {
  label: string;
  value: string;
};

export type PortfolioProject = {
  label: string;
  slug: string;
  href: string;
  externalUrl?: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    label: "Kristian Taylor Photography",
    slug: "kristian-taylor-photography",
    href: "/portfolio/kristian-taylor-photography",
    externalUrl: "https://kristiantaylorphoto.com",
    tagline: "Brand-forward portfolio site for a photographer",
    description:
      "A custom website focused on gallery performance, visual storytelling, and conversion-oriented inquiry flow.",
    challenge:
      "The business needed a modern online presence that showcased high-resolution work and made booking straightforward across devices.",
    solution:
      "We designed and built a responsive portfolio experience with a streamlined structure, focused service messaging, and clear contact pathways.",
    impact:
      "The result is a cleaner client journey and a stronger first impression that supports lead generation.",
  },
];

export function getPortfolioProjectBySlug(slug: string) {
  const normalizedSlug = slug.toLowerCase();
  const slugAliases: Record<string, string> = {
    "kristian-taylor-photo": "kristian-taylor-photo",
  };
  const resolvedSlug = slugAliases[normalizedSlug] ?? normalizedSlug;

  return portfolioProjects.find((project) => project.slug === resolvedSlug);
}

export const portfolioHero = {
  badge: "Portfolio",
  title: "Our Work",
  description:
    "We build custom software and websites that help businesses grow. Here are some of the projects we've worked on.",
  actions: [
    { label: "Start a Project", href: "/contact" },
    { label: "View Services", href: "/services", variant: "secondary" },
  ] as Cta[],
  snapshotLabel: "Snapshot",
  snapshotItems: [
    { label: "Projects Highlighted", value: `${portfolioProjects.length}` },
    { label: "Case Studies", value: `${portfolioProjects.length}` },
  ] as SnapshotItem[],
};

export const portfolioProjectsSection = {
  eyebrow: "Projects",
  title: "Selected Work",
  description:
    "Each engagement is custom-scoped and delivered around real business constraints, users, and growth goals.",
};

export const portfolioTestimonialsSection = {
  eyebrow: "Testimonials",
  title: "What Our Clients Say",
  description:
    "We value our clients' feedback and strive to exceed their expectations. Here are some testimonials from our satisfied clients.",
};

export const portfolioCtaSection = {
  eyebrow: "Ready to Build?",
  title: "Let's Create Something Great Together",
  description:
    "Have a project in mind? We would love to help you design, build, and launch a solution tailored to your goals.",
};

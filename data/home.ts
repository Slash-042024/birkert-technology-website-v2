type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type SnapshotItem = {
  label: string;
  value: string;
};

type ServiceHighlight = {
  title: string;
  description: string;
};

export const homeHero = {
  badge: "Digital Product Engineering",
  title: "Technology that feels sharp, reliable, and built for growth.",
  description:
    "Birkert Technology builds modern software products and web experiences designed for clarity, speed, and long-term maintainability.",
  actions: [
    { label: "Explore Services", href: "/services" },
    { label: "View Portfolio", href: "/portfolio", variant: "secondary" },
  ] as Cta[],
  snapshotLabel: "Foundation Snapshot",
  snapshotItems: [
    {
      label: "Backend architecture",
      value: "FastAPI + Python + PostgreSQL + AWS",
    },
    {
      label: "Frontend framework",
      value: "Next.js App Router + React Server Components",
    },
    { label: "Design direction", value: " clean, and product-focused" },
  ] as SnapshotItem[],
};

export const homeServicesSection = {
  eyebrow: "Services",
  title: "A practical engineering partner for modern software work",
  description:
    "We don't believe in one-size-fits-all solutions. We learn how your business operates, identify where technology can make a difference, and build custom websites and software around the problems you actually need to solve.",
};

export const homeServiceHighlights: ServiceHighlight[] = [
  {
    title: "Custom Product Development",
    description:
      "From concept to launch, we build focused digital products with clean architecture and measurable outcomes.",
  },
  {
    title: "Modern Website Engineering",
    description:
      "Fast, accessible frontends that communicate technical credibility while supporting marketing and growth goals.",
  },
  {
    title: "Workflow & Automation Strategy",
    description:
      "Operational systems designed to reduce manual effort and increase confidence in day-to-day execution.",
  },
];

export const homeProductsSection = {
  eyebrow: "Products",
  title: "Current Product Portfolio",
  description:
    "TowControl and HomeBalance are currently in research and development. We are designing and validating each product carefully before release so the foundation is practical, stable, and useful.",
};

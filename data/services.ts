type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type ServiceItem = {
  title: string;
  description: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

export const servicesHero = {
  badge: "Services",
  title: "A practical engineering partner for modern software work",
  description:
    "We don't believe in one-size-fits-all solutions. We learn how your business operates, identify where technology can make a difference, and build custom websites and software around the problems you actually need to solve.",
  actions: [
    { label: "Start a Project", href: "/contact" },
    { label: "View Portfolio", href: "/portfolio", variant: "secondary" },
  ] as Cta[],
};

export const servicesOfferingsSection = {
  eyebrow: "Services",
  title: "What We Offer",
  description:
    "Our services are tailored to meet the unique needs of your business.",
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Custom Product Development",
    description:
      "We design and build software around the specific problems, workflows, and goals of your business. Every product is developed with your users and operational needs in mind.",
  },
  {
    title: "Modern Website Engineering",
    description:
      "We create custom websites designed around your brand, customers, and business objectives-not generic templates. Every site is built to be responsive, maintainable, and ready to grow.",
  },
  {
    title: "Workflow Automation",
    description:
      "We identify repetitive and inefficient processes within your business and develop technology that reduces manual work, improves consistency, and helps your team work more efficiently.",
  },
];

export const servicesProcessSection = {
  eyebrow: "Process",
  title: "How We Work",
  description:
    "A clear, collaborative process keeps projects aligned from strategy through delivery.",
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We start by understanding your business, users, and workflow bottlenecks so we can scope work around real outcomes.",
  },
  {
    title: "Build",
    description:
      "We design and implement focused solutions with a clear architecture, responsive frontend experience, and practical maintainability.",
  },
  {
    title: "Iterate",
    description:
      "We refine based on feedback and real usage, helping your systems and website evolve with your business over time.",
  },
];

export const servicesCtaSection = {
  eyebrow: "Next Step",
  title: "Need a tailored solution for your business?",
  description:
    "Let's talk through your goals and map a practical path to a custom website or software product.",
  actions: [
    { label: "Contact Birkert Technology", href: "/contact" },
    { label: "Explore Past Work", href: "/portfolio", variant: "secondary" },
  ] as Cta[],
};

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type SnapshotItem = {
  label: string;
  value: string;
};

type Principle = {
  title: string;
  description: string;
};

type StoryMilestone = {
  label: string;
  detail: string;
};

export const aboutHero = {
  badge: "About",
  title: "Building reliable technology with a practical, long-term mindset.",
  description:
    "Birkert Technology combines modern frontend engineering with business-first thinking to deliver software and websites that are useful, maintainable, and built to last.",
  actions: [
    { label: "Explore Services", href: "/services" },
    { label: "Contact Us", href: "/contact", variant: "secondary" },
  ] as Cta[],
  snapshotLabel: "Company Snapshot",
  snapshotItems: [
    { label: "Primary focus", value: "Custom web and software solutions" },
    {
      label: "Build philosophy",
      value: "Practical, maintainable, and outcome-driven",
    },
    { label: "Partnership style", value: "Collaborative and transparent" },
  ] as SnapshotItem[],
};

export const aboutMissionSection = {
  eyebrow: "Mission",
  title: "Technology should reduce friction, not add to it",
  description:
    "The mission is to help businesses operate with more clarity and confidence through intentional engineering and clean digital experiences.",
};

export const aboutPrinciplesSection = {
  eyebrow: "Principles",
  title: "How Birkert Technology approaches every project",
  description:
    "These principles guide product decisions, architecture choices, and how projects are delivered.",
};

export const principles: Principle[] = [
  {
    title: "Practical Engineering",
    description:
      "We focus on real business outcomes, not unnecessary complexity. Every solution is built to solve a concrete problem.",
  },
  {
    title: "Long-Term Maintainability",
    description:
      "Clean architecture, clear code structure, and reusable components make future updates faster and more reliable.",
  },
  {
    title: "Clear Collaboration",
    description:
      "We keep communication direct and transparent so decisions are aligned with your goals from day one.",
  },
];

export const aboutStorySection = {
  eyebrow: "Story",
  title: "Where we are and where we are headed",
  description:
    "A focused roadmap centered on solving real problems and delivering dependable software experiences.",
};

export const storyMilestones: StoryMilestone[] = [
  {
    label: "Foundation",
    detail:
      "Birkert Technology was built around the idea that software should make operations easier, not more complicated.",
  },
  {
    label: "Current Focus",
    detail:
      "Today, the focus is custom websites, practical software solutions, and the development of future products.",
  },
  {
    label: "Future Direction",
    detail:
      "As products mature, the mission remains the same: deliver reliable technology that supports sustainable growth.",
  },
];

export const aboutCtaSection = {
  eyebrow: "Let's Connect",
  title: "Interested in building something with us?",
  description:
    "If you have a project in mind, we can map out the right approach and build a solution around your goals.",
  actions: [
    { label: "Start the Conversation", href: "/contact" },
    { label: "View Portfolio", href: "/portfolio", variant: "secondary" },
  ] as Cta[],
};

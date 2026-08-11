type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type ProcessStep = {
  title: string;
  description: string;
};

export const contactHero = {
  badge: "Get in Touch",
  title: "Contact Us",
  description:
    "Have a question or ready to get started? We'd love to hear from you.",
  actions: [
    {
      label: "Send an Email",
      href: "mailto:Birkerttechnology@outlook.com",
      variant: "primary",
    },
  ] as Cta[],
};

export const contactFormSection = {
  eyebrow: "Let's Connect",
  title: "Get in touch with us",
  description:
    "Fill out the form below and our team will respond as quickly as possible.",
};

export const contactProcessSection = {
  eyebrow: "What to Expect",
  title: "Our Contact Process",
  description:
    "After you reach out, we keep communication straightforward and focused on outcomes.",
  processSteps: [
    {
      title: "Initial Response",
      description:
        "We review your message and respond with clarifying questions or a suggested next step.",
    },
    {
      title: "Discovery Call",
      description:
        "We discuss your goals, timeline, and technical needs so we can scope practical options.",
    },
    {
      title: "Plan & Proposal",
      description:
        "You receive a clear plan with recommended approach, estimated effort, and next actions.",
    },
  ] as ProcessStep[],
};

export const contactCtaSection = {
  eyebrow: "Ready to Start?",
  title: "Let's build something useful",
  description:
    "Choose the option that works best for you and we'll take it from there.",
  actions: [
    { label: "Email Us", href: "mailto:Birkerttechnology@outlook.com" },
    { label: "View Services", href: "/services", variant: "secondary" },
  ] as Cta[],
};

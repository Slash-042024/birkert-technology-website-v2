import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Custom Product Development",
    description:
      "We design and build software around the specific problems, workflows, and goals of your business. Every product is developed with your users and operational needs in mind.",
  },
  {
    title: "Modern Website Engineering",
    description:
      "We create custom websites designed around your brand, customers, and business objectives—not generic templates. Every site is built to be responsive, maintainable, and ready to grow.",
  },
  {
    title: "Workflow Automation",
    description:
      "We identify repetitive and inefficient processes within your business and develop technology that reduces manual work, improves consistency, and helps your team work more efficiently.",
  },
];

const processSteps = [
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

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge="Services"
        title="A practical engineering partner for modern software work"
        description="We don't believe in one-size-fits-all solutions. We learn how your business operates, identify where technology can make a difference, and build custom websites and software around the problems you actually need to solve."
        actions={
          <>
            <Button as="link" href="/contact">
              Start a Project
            </Button>
            <Button as="link" href="/portfolio" variant="secondary">
              View Portfolio
            </Button>
          </>
        }
      />
      <section className="pb-20">
        <SectionHeading
          eyebrow="Services"
          title="What We Offer"
          description="Our services are tailored to meet the unique needs of your business."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="transition duration-300 hover:border-brand-400/40"
            >
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading
          eyebrow="Process"
          title="How We Work"
          description="A clear, collaborative process keeps projects aligned from strategy through delivery."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Card
              key={step.title}
              className="transition duration-300 hover:border-brand-400/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-12">
        <Card className="border-brand-400/30 bg-brand-500/[0.08]">
          <SectionHeading
            eyebrow="Next Step"
            title="Need a tailored solution for your business?"
            description="Let's talk through your goals and map a practical path to a custom website or software product."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="link" href="/contact">
              Contact Birkert Technology
            </Button>
            <Button as="link" href="/portfolio" variant="secondary">
              Explore Past Work
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}

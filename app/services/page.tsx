import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  processSteps,
  serviceItems,
  servicesCtaSection,
  servicesHero,
  servicesOfferingsSection,
  servicesProcessSection,
} from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge={servicesHero.badge}
        title={servicesHero.title}
        description={servicesHero.description}
        actions={
          <>
            {servicesHero.actions.map((action) => (
              <Button
                key={action.href}
                as="link"
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </Button>
            ))}
          </>
        }
      />
      <section className="pb-20">
        <SectionHeading
          eyebrow={servicesOfferingsSection.eyebrow}
          title={servicesOfferingsSection.title}
          description={servicesOfferingsSection.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {serviceItems.map((service) => (
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
          eyebrow={servicesProcessSection.eyebrow}
          title={servicesProcessSection.title}
          description={servicesProcessSection.description}
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
            eyebrow={servicesCtaSection.eyebrow}
            title={servicesCtaSection.title}
            description={servicesCtaSection.description}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {servicesCtaSection.actions.map((action) => (
              <Button
                key={action.href}
                as="link"
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}

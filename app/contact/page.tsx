import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  contactHero,
  contactProcessSection,
  contactCtaSection,
} from "@/data/contact";

export default function ContactPage() {
  return (
    <>
      <Hero
        badge={contactHero.badge}
        title={contactHero.title}
        description={contactHero.description}
        actions={
          <>
            {contactHero.actions.map((action) => (
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
          eyebrow={contactProcessSection.eyebrow}
          title={contactProcessSection.title}
          description={contactProcessSection.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {contactProcessSection.processSteps.map(
            (step: { title: string; description: string }) => (
              <Card
                key={step.title}
                className="transition duration-300 hover:border-brand-400/40"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {step.description}
                </p>
              </Card>
            ),
          )}
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading
          eyebrow={contactCtaSection.eyebrow}
          title={contactCtaSection.title}
          description={contactCtaSection.description}
        />
        <div className="mt-10 flex flex-col items-center gap-5 md:flex-row md:justify-center">
          {contactCtaSection.actions.map((action) => (
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
      </section>
    </>
  );
}

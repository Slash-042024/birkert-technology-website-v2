import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutCtaSection,
  aboutHero,
  aboutMissionSection,
  aboutPrinciplesSection,
  aboutStorySection,
  principles,
  storyMilestones,
} from "@/data/about";

export default function AboutPage() {
  return (
    <>
      <Hero
        badge={aboutHero.badge}
        title={aboutHero.title}
        description={aboutHero.description}
        actions={
          <>
            {aboutHero.actions.map((action) => (
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
        aside={
          <Card className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-transparent" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              {aboutHero.snapshotLabel}
            </p>
            <dl className="relative mt-5 grid gap-5">
              {aboutHero.snapshotItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm text-zinc-400">{item.label}</dt>
                  <dd className="mt-1 text-xl font-medium text-zinc-100">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        }
      />

      <section className="pb-20">
        <SectionHeading
          eyebrow={aboutMissionSection.eyebrow}
          title={aboutMissionSection.title}
          description={aboutMissionSection.description}
        />
      </section>

      <section className="pb-20">
        <SectionHeading
          eyebrow={aboutPrinciplesSection.eyebrow}
          title={aboutPrinciplesSection.title}
          description={aboutPrinciplesSection.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <Card
              key={principle.title}
              className="transition duration-300 hover:border-brand-400/40"
            >
              <h3 className="text-xl font-semibold tracking-tight text-white">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {principle.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading
          eyebrow={aboutStorySection.eyebrow}
          title={aboutStorySection.title}
          description={aboutStorySection.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {storyMilestones.map((milestone) => (
            <Card
              key={milestone.label}
              className="transition duration-300 hover:border-brand-400/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                {milestone.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {milestone.detail}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-12">
        <Card className="border-brand-400/30 bg-brand-500/[0.08]">
          <SectionHeading
            eyebrow={aboutCtaSection.eyebrow}
            title={aboutCtaSection.title}
            description={aboutCtaSection.description}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {aboutCtaSection.actions.map((action) => (
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

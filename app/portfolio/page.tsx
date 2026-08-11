import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/data/seo";
import {
  portfolioProjects,
  portfolioCtaSection,
  portfolioHero,
  portfolioProjectsSection,
  portfolioTestimonialsSection,
} from "@/data/portfolio";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description: portfolioHero.description,
  path: "/portfolio",
  keywords: ["software portfolio", "website case studies"],
});

export default function PortfolioPage() {
  return (
    <>
      <Hero
        badge={portfolioHero.badge}
        title={portfolioHero.title}
        description={portfolioHero.description}
        actions={
          <>
            {portfolioHero.actions.map((action) => (
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
              {portfolioHero.snapshotLabel}
            </p>
            <dl className="relative mt-5 grid gap-5">
              {portfolioHero.snapshotItems.map(
                (item: { label: string; value: string }) => (
                  <div key={item.label}>
                    <dt className="text-sm text-zinc-400">{item.label}</dt>
                    <dd className="mt-1 text-xl font-medium text-zinc-100">
                      {item.value}
                    </dd>
                  </div>
                ),
              )}
            </dl>
          </Card>
        }
      />

      <section className="pb-20">
        <SectionHeading
          eyebrow={portfolioProjectsSection.eyebrow}
          title={portfolioProjectsSection.title}
          description={portfolioProjectsSection.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <Card
              key={project.slug}
              className="transition duration-300 hover:border-brand-400/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                {project.tagline}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                {project.label}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button as="link" href={project.href} variant="secondary">
                  View case study
                </Button>
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold tracking-wide text-zinc-200 transition duration-300 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    Visit project
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <SectionHeading
          eyebrow={portfolioTestimonialsSection.eyebrow}
          title={portfolioTestimonialsSection.title}
          description={portfolioTestimonialsSection.description}
        />
      </section>

      <section className="pb-20">
        <SectionHeading
          eyebrow={portfolioCtaSection.eyebrow}
          title={portfolioCtaSection.title}
          description={portfolioCtaSection.description}
        />
      </section>
    </>
  );
}

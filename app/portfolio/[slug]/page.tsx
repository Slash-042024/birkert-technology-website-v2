import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getPortfolioProjectBySlug,
  portfolioCtaSection,
  portfolioProjects,
} from "@/data/portfolio";
import { notFound } from "next/navigation";

type PortfolioProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="pb-16 pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
          Portfolio Project
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {project.label}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
          {project.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button as="link" href="/portfolio" variant="secondary">
            Back to Portfolio
          </Button>
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold tracking-wide text-zinc-200 transition duration-300 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Visit Live Project
            </a>
          ) : null}
        </div>
      </section>

      <section className="pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="transition duration-300 hover:border-brand-400/40">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Challenge
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              {project.challenge}
            </p>
          </Card>
          <Card className="transition duration-300 hover:border-brand-400/40">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Solution
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              {project.solution}
            </p>
          </Card>
          <Card className="transition duration-300 hover:border-brand-400/40">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Impact
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              {project.impact}
            </p>
          </Card>
        </div>
      </section>

      <section className="pb-12">
        <Card className="border-brand-400/30 bg-brand-500/[0.08]">
          <SectionHeading
            eyebrow={portfolioCtaSection.eyebrow}
            title={portfolioCtaSection.title}
            description={portfolioCtaSection.description}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="link" href="/contact">
              Start a Project
            </Button>
            <Button as="link" href="/services" variant="secondary">
              View Services
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}

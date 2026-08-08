import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/site";

const serviceHighlights = [
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

export default function Home() {
  return (
    <>
      <Hero
        badge="Digital Product Engineering"
        title="Technology that feels sharp, reliable, and built for growth."
        description="Birkert Technology builds modern software products and web experiences designed for clarity, speed, and long-term maintainability."
        actions={
          <>
            <Button as="link" href="/services">
              Explore Services
            </Button>
            <Button as="link" href="/portfolio" variant="secondary">
              View Portfolio
            </Button>
          </>
        }
        aside={
          <Card className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-transparent" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Foundation Snapshot
            </p>
            <dl className="relative mt-5 grid gap-5">
              <div>
                <dt className="text-sm text-zinc-400">Current products</dt>
                <dd className="mt-1 text-3xl font-semibold text-white">2</dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-400">Frontend architecture</dt>
                <dd className="mt-1 text-xl font-medium text-zinc-100">
                  Next.js App Router + reusable components
                </dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-400">Design direction</dt>
                <dd className="mt-1 text-xl font-medium text-zinc-100">
                  Dark, clean, and product-focused
                </dd>
              </div>
            </dl>
          </Card>
        }
      />

      <section className="pb-20">
        <SectionHeading
          eyebrow="Services"
          title="A practical engineering partner for modern software work"
          description="We don't believe in one-size-fits-all solutions. We learn how your business operates, identify where technology can make a difference, and build custom websites and software around the problems you actually need to solve."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {serviceHighlights.map((service) => (
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

      <section className="pb-12">
        <SectionHeading
          eyebrow="Products"
          title="Current Product Portfolio"
          description="TowControl and HomeBalance are currently in research and development. We are taking the time to design, build, and test each product carefully before release. Explore their early-stage features to see the problems we're working to solve and where these products are headed."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

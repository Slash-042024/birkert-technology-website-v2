import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  homeHero,
  homeProductsSection,
  homeServiceHighlights,
  homeServicesSection,
} from "@/data/home";
import { products } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero
        badge={homeHero.badge}
        title={homeHero.title}
        description={homeHero.description}
        actions={
          <>
            {homeHero.actions.map((action) => (
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
              {homeHero.snapshotLabel}
            </p>
            <dl className="relative mt-5 grid gap-5">
              {homeHero.snapshotItems.map((item, index) => (
                <div key={item.label}>
                  <dt className="text-sm text-zinc-400">{item.label}</dt>
                  <dd
                    className={`mt-1 text-zinc-100 ${
                      index === 0
                        ? "text-3xl font-semibold"
                        : "text-xl font-medium"
                    }`}
                  >
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
          eyebrow={homeServicesSection.eyebrow}
          title={homeServicesSection.title}
          description={homeServicesSection.description}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homeServiceHighlights.map((service) => (
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
          eyebrow={homeProductsSection.eyebrow}
          title={homeProductsSection.title}
          description={homeProductsSection.description}
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
